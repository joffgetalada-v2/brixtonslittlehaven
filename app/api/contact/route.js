import { Resend } from 'resend';
import { business } from '@/content/site';

// Contact form -> email, via Resend.
//
// This runs on the server ONLY. RESEND_API_KEY must never be prefixed with
// NEXT_PUBLIC_: anything so prefixed is inlined into the browser bundle, and a
// leaked key lets anyone send mail from this account.
//
// Env vars (set in Vercel, and in .env.local for local dev):
//   RESEND_API_KEY    required. Without it the form is not offered at all -
//                     app/contact/page.jsx checks the same variable.
//   CONTACT_TO_EMAIL  where enquiries land. Falls back to business.email.
//   CONTACT_FROM_EMAIL  sender. Defaults to Resend's shared onboarding address,
//                     which can only deliver to the address that owns the Resend
//                     account. Verify a domain in Resend and set this to
//                     something like "Brixton's Little Haven <hello@yourdomain>"
//                     to reach any recipient.
export const runtime = 'nodejs';

const FROM = process.env.CONTACT_FROM_EMAIL || "Brixton's Little Haven <onboarding@resend.dev>";
const MAX = { name: 120, contact: 160, program: 120, message: 4000 };

// Best-effort throttle. Serverless instances are not shared, so this slows a
// naive flood without pretending to be real rate limiting - if the form ever
// gets abused in earnest, move this to Vercel KV or a WAF rule.
const recent = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function throttled(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 500) {
    for (const [k, v] of recent) if (!v.some((t) => now - t < WINDOW_MS)) recent.delete(k);
  }
  return hits.length > MAX_PER_WINDOW;
}

// The submission is pasted into an HTML email, so every field is escaped.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function clean(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'The contact form is not configured yet.' }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'We could not read that submission.' }, { status: 400 });
  }

  // Hidden field no human fills in. Bots do. Answer 200 so they learn nothing.
  if (clean(body.company, 100)) return Response.json({ ok: true });

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (throttled(ip)) {
    return Response.json({ error: 'Too many messages just now. Please try again shortly.' }, { status: 429 });
  }

  const name = clean(body.name, MAX.name);
  const contact = clean(body.contact, MAX.contact);
  const program = clean(body.program, MAX.program);
  const message = clean(body.message, MAX.message);

  // Mirrors the client-side rules: never trust that the browser ran them.
  if (!name || !contact || !message) {
    return Response.json({ error: 'Please fill in your name, contact details, and message.' }, { status: 400 });
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const to = process.env.CONTACT_TO_EMAIL || business.email;

  const rows = [
    ['Name', name],
    ['Contact', contact],
    ['Program', program || 'Not specified'],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top">${label}</td>` +
        `<td style="padding:6px 0;color:#111827"><strong>${esc(value)}</strong></td></tr>`,
    )
    .join('');

  const html =
    `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:560px;color:#111827">` +
    `<h2 style="margin:0 0 4px;font-size:18px">New enquiry from the website</h2>` +
    `<p style="margin:0 0 18px;color:#6b7280;font-size:14px">Sent from the contact form at brixtonslittlehaven.vercel.app</p>` +
    `<table style="border-collapse:collapse;font-size:15px;margin-bottom:18px">${rows}</table>` +
    `<div style="border-left:3px solid #c6402e;padding:2px 0 2px 14px;white-space:pre-wrap;font-size:15px;line-height:1.6">${esc(message)}</div>` +
    (isEmail
      ? `<p style="margin:20px 0 0;color:#6b7280;font-size:13px">Reply to this email to answer ${esc(name)} directly.</p>`
      : `<p style="margin:20px 0 0;color:#6b7280;font-size:13px">${esc(name)} left a phone number rather than an email.</p>`) +
    `</div>`;

  const text =
    `New enquiry from the website\n\n` +
    `Name: ${name}\nContact: ${contact}\nProgram: ${program || 'Not specified'}\n\n${message}\n`;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: [to],
      subject: `New enquiry from ${name}`,
      html,
      text,
      // Lets you hit reply and reach the parent, when they gave an email.
      ...(isEmail ? { replyTo: contact } : {}),
    });

    if (error) {
      // Log the real reason for us; tell the visitor something useful and honest.
      console.error('Resend send failed:', error);
      return Response.json(
        { error: 'We could not send that just now. Please message us on Facebook or call instead.' },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Resend threw:', err);
    return Response.json(
      { error: 'We could not send that just now. Please message us on Facebook or call instead.' },
      { status: 502 },
    );
  }
}
