'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';

// text-base (16px) on fields: anything smaller makes iOS Safari zoom the page on focus.
// w-full + min-w-0 lets the select shrink below its longest option on narrow phones.
const FIELD_CLASSES =
  'w-full min-w-0 rounded-xl border-2 border-navy/15 bg-white px-4 py-2.5 text-base text-navy transition focus:border-coral-deep';

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const demoMode = !formId;

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', contact: '', program: '', message: '' });
  const [errors, setErrors] = useState({});

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

    if (demoMode) {
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-leaf-tint p-10 text-center [box-shadow:var(--shadow-soft)]">
        <span className="text-leaf-ink"><Icon name="sparkle" size={48} /></span>
        <h3 className="font-heading text-xl font-bold text-navy">Message sent.</h3>
        <p className="text-navy-soft">
          Thank you. We'll reach out shortly to schedule your assessment and free trial.
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name: '', contact: '', program: '', message: '' }); }}
          className="mt-2 rounded-full bg-coral-deep px-6 py-2 font-semibold text-white transition hover:bg-coral-ink active:scale-[0.98]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {demoMode && (
        <div className="rounded-2xl bg-sun-tint px-4 py-3 text-sm text-sun-ink">
          <strong>Demo mode:</strong> set <code className="rounded bg-white/70 px-1">NEXT_PUBLIC_FORMSPREE_ID</code> to send real emails.
        </div>
      )}

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

      {status === 'error' && (
        <p className="rounded-xl bg-coral-tint px-4 py-2 text-sm font-semibold text-coral-ink">
          Something went wrong. Please try again, or message us on Facebook instead.
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
