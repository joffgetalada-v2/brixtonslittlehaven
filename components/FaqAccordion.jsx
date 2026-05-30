'use client';

import { useState } from 'react';

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-navy/10 last:border-none">
      <button
        id={id}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-navy hover:text-coral transition-colors"
      >
        <span>{faq.question}</span>
        <span
          className={`shrink-0 text-coral transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-sm leading-relaxed text-navy/70">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ faqs }) {
  return (
    <div className="divide-y divide-navy/10">
      {faqs.map((faq, i) => (
        <FaqItem key={i} faq={faq} index={i} />
      ))}
    </div>
  );
}
