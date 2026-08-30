'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'blh-cookie-notice-v1';

// Read the stored acknowledgement through useSyncExternalStore rather than an
// effect: localStorage is an external system, and this way the first client
// render already knows the answer instead of flashing the notice and retracting
// it. The server snapshot says "acknowledged" so the notice never appears in SSR
// HTML, where localStorage cannot be consulted.
function subscribe(onChange) {
  window.addEventListener('storage', onChange);
  return () => window.removeEventListener('storage', onChange);
}
function hasAcknowledged() {
  try {
    return !!localStorage.getItem(STORAGE_KEY);
  } catch {
    // Storage unavailable (private mode): stay quiet rather than nag every view.
    return true;
  }
}
const acknowledgedOnServer = () => true;

// Cookie/privacy notice (Philippine Data Privacy Act friendly). This is a notice
// with acknowledgement, not a consent gate: analytics is cookieless and the
// AdSense script is controlled separately via content/site.js. If the site ever
// targets EEA/UK visitors with ads, replace this with a Google-certified CMP
// (AdSense "Privacy & messaging" provides one).
export default function CookieNotice() {
  const acknowledged = useSyncExternalStore(subscribe, hasAcknowledged, acknowledgedOnServer);
  // Dismissing in this tab does not fire a storage event, so the click is tracked
  // separately to hide the notice immediately.
  const [dismissedHere, setDismissedHere] = useState(false);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
    setDismissedHere(true);
  }

  if (acknowledged || dismissedHere) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-3 rounded-2xl bg-navy p-4 text-warm-white [box-shadow:var(--shadow-lift)] sm:flex-row sm:items-center sm:p-5">
        <p className="flex-1 text-sm leading-relaxed">
          We use cookies for basic site functions and anonymous analytics, and, once ads go
          live, for advertising. See our{' '}
          <Link href="/privacy-policy" className="font-bold text-sun underline-offset-2 hover:underline">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 rounded-full bg-warm-white px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-cream active:scale-[0.98]"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
