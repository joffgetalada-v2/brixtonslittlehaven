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
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-navy transition-colors hover:text-coral-ink"
      >
        <span>{faq.question}</span>
        <span
          className={`shrink-0 text-coral-ink transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* grid-rows animation: any answer length expands fully (no max-height clipping) */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed text-navy-soft">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ faqs }) {
  return (
    <div>
      {faqs.map((faq, i) => (
        <FaqItem key={i} faq={faq} index={i} />
      ))}
    </div>
  );
}
