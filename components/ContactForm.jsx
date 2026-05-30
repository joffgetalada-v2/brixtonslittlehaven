'use client';

import { useState } from 'react';

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const demoMode = !formId;

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', contact: '', program: '', message: '' });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    if (demoMode) {
      // Demo mode — simulate a brief delay then succeed
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
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-green-50 border-2 border-green-200 p-10 text-center">
        <span className="text-5xl">🎉</span>
        <h3 className="text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
          Message sent!
        </h3>
        <p className="text-navy/70">
          Thank you! We'll reach out shortly to schedule your assessment and free trial.
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name: '', contact: '', program: '', message: '' }); }}
          className="mt-2 rounded-full bg-coral px-6 py-2 font-semibold text-white hover:bg-opacity-90 transition"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {demoMode && (
        <div className="rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
          <strong>Demo mode</strong> — set <code className="bg-amber-100 px-1 rounded">NEXT_PUBLIC_FORMSPREE_ID</code> to send real emails.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Your Name <span className="text-coral" aria-hidden="true">*</span>
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
            className="rounded-xl border-2 border-navy/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-coral"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact" className="text-sm font-semibold text-navy">
            Phone or Email <span className="text-coral" aria-hidden="true">*</span>
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            autoComplete="email"
            value={form.contact}
            onChange={handleChange}
            placeholder="0917 123 4567"
            className="rounded-xl border-2 border-navy/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-coral"
          />
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
          className="rounded-xl border-2 border-navy/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-coral"
        >
          <option value="">— Select a program (optional) —</option>
          <option>Playgroup (Ages 12 mo – 6 yrs)</option>
          <option>Integrated Care (up to 12 hrs/day)</option>
          <option>Drop-In Care (hourly)</option>
          <option>Academic Tutorials (Ages 3–15)</option>
          <option>Play + Learn Program (School Readiness)</option>
          <option>Playgroup + Academic Tutorial Combo</option>
          <option>ESL Classes</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message <span className="text-coral" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your child's age, your schedule, or any questions you have…"
          className="rounded-xl border-2 border-navy/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-coral resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-coral px-8 py-3.5 font-bold text-white shadow-md transition hover:bg-opacity-90 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message & Book a Free Trial'}
      </button>
    </form>
  );
}
