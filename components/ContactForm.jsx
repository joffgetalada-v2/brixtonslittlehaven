'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import { business } from '@/content/site';

// text-base (16px) on fields: anything smaller makes iOS Safari zoom the page on focus.
// w-full + min-w-0 lets the select shrink below its longest option on narrow phones.
const FIELD_CLASSES =
  'w-full min-w-0 rounded-xl border-2 border-navy/15 bg-white px-4 py-2.5 text-base text-navy transition focus:border-coral-deep';

// `enabled` is decided on the server by app/contact/page.jsx, which checks for
// RESEND_API_KEY. The key itself must stay server-side, so the page hands down a
// boolean rather than this component reading any env var of its own.
export default function ContactForm({ enabled = false }) {
  // Every hook runs before the early return below. React requires the same hooks
  // in the same order on every render, and the direct-contact branch returns
  // before the form is built - declaring these after it would be a violation that
  // bites as soon as `enabled` can differ between renders.
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', contact: '', program: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sendError, setSendError] = useState('');

  // With no mail backend configured there is nothing to receive the message.
  // Never show a form that silently drops inquiries: offer the direct channels
  // instead. (Set RESEND_API_KEY in Vercel env vars to activate the real form.)
  if (!enabled) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-navy-soft">
          The quickest way to reach us is a message or a call. We reply fast during open hours,
          Monday to Saturday, 7:00 AM to 7:00 PM.
        </p>
        <a
          href={business.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-deep px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-coral-ink active:scale-[0.98]"
        >
          <Icon name="messenger" size={20} />
          Message us on Messenger
        </a>
        <a
          href={business.phoneTel}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white"
        >
          <Icon name="phone" size={20} />
          Call {business.phone}
        </a>
        <a
          href={`mailto:${business.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white"
        >
          <Icon name="mail" size={20} />
          {business.email}
        </a>
      </div>
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    const contact = form.contact.trim();
    if (!contact) {
      next.contact = 'Please add a phone number or email so we can reach you.';
    } else {
      const looksLikeEmail = /\S+@\S+\.\S+/.test(contact);
      const looksLikePhone = contact.replace(/[\s()+-]/g, '').length >= 7 && /\d{7,}/.test(contact.replace(/[\s()+-]/g, ''));
      if (!looksLikeEmail && !looksLikePhone) {
        next.contact = 'That does not look like a phone number or email yet.';
      }
    }
    if (!form.message.trim()) next.message = 'A short message helps us prepare for your visit.';
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setStatus('sending');
    setSendError('');

    try {
      // The honeypot is uncontrolled, so read it off the form rather than state.
      const company = new FormData(e.target).get('company') || '';
      // Posts to our own route handler, which sends the mail through Resend. The
      // API key never leaves the server.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, company }),
      });
      if (res.ok) {
        setStatus('success');
        return;
      }
      const data = await res.json().catch(() => ({}));
      setSendError(data.error || '');
      setStatus('error');
    } catch {
      setSendError('');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-leaf-tint p-10 text-center [box-shadow:var(--shadow-soft)]">
        <span className="text-leaf-ink"><Icon name="sparkle" size={48} /></span>
        <h3 className="font-heading text-xl font-bold text-navy">Message sent.</h3>
        <p className="text-navy-soft">
          Thank you. We&apos;ll reach out shortly to schedule your assessment and free trial.
        </p>
        <button
          onClick={() => { setStatus('idle'); setSendError(''); setForm({ name: '', contact: '', program: '', message: '' }); }}
          className="mt-2 rounded-full bg-coral-deep px-6 py-2 font-semibold text-white transition hover:bg-coral-ink active:scale-[0.98]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Your Name <span className="text-coral-ink" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Maria Santos"
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={FIELD_CLASSES}
          />
          {errors.name && (
            <p id="name-error" className="text-xs font-semibold text-coral-ink">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact" className="text-sm font-semibold text-navy">
            Phone or Email <span className="text-coral-ink" aria-hidden="true">*</span>
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            autoComplete="tel"
            value={form.contact}
            onChange={handleChange}
            placeholder="0917 123 4567"
            aria-invalid={errors.contact ? 'true' : undefined}
            aria-describedby={errors.contact ? 'contact-error' : undefined}
            className={FIELD_CLASSES}
          />
          {errors.contact && (
            <p id="contact-error" className="text-xs font-semibold text-coral-ink">{errors.contact}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="program" className="text-sm font-semibold text-navy">
          Interested Program
        </label>
        <select
          id="program"
          name="program"
          value={form.program}
          onChange={handleChange}
          className={FIELD_CLASSES}
        >
          <option value="">Select a program (optional)</option>
          <option>Playgroup (Ages 1-5)</option>
          <option>Pre-Kindergarten (Ages 3-5)</option>
          <option>Integrated Care + Play (12 hrs)</option>
          <option>Drop-In Care (hourly)</option>
          <option>Academic Tutorials (Ages 3+)</option>
          <option>After-School Care</option>
          <option>ESL Classes</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message <span className="text-coral-ink" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your child's age, your schedule, or any questions you have…"
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${FIELD_CLASSES} resize-none`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs font-semibold text-coral-ink">{errors.message}</p>
        )}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. The route handler
          silently accepts and discards anything that fills it in. */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0 -z-10">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-coral-tint px-4 py-2 text-sm font-semibold text-coral-ink">
          {sendError || 'Something went wrong. Please try again, or message us on Facebook instead.'}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-coral-deep px-8 py-3.5 font-bold text-white shadow-md transition hover:bg-coral-ink active:scale-[0.98] disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
