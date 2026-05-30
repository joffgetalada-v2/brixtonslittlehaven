'use client';
// Sticky Messenger / call button visible on mobile
import { business } from '@/content/site';

export default function MessengerButton() {
  return (
    <a
      href={business.messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on Facebook Messenger"
      className="fixed bottom-6 right-4 z-50 flex items-center gap-2 rounded-full bg-[#0866FF] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#0052CC] sm:bottom-8 sm:right-6 md:hidden"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.898 1.414 5.49 3.636 7.2V22l3.309-1.815A10.77 10.77 0 0 0 12 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.03 12.454-2.547-2.72-4.973 2.72 5.473-5.813 2.607 2.72 4.913-2.72-5.473 5.813z"/>
      </svg>
      Message Us
    </a>
  );
}
