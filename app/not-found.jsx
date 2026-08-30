import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';

export const metadata = {
  title: "Page not found | Brixton's Little Haven",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6">
      <div className="relative h-40 w-40 overflow-hidden rounded-full bg-sun-tint [box-shadow:var(--shadow-soft)]">
        <Image
          src="/images/illustrations/mascot-fox.webp"
          alt=""
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
      <p className="mt-8 text-sm font-bold uppercase tracking-wide text-coral-ink">404</p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-navy [text-wrap:balance] sm:text-4xl">
        This little explorer wandered off the map
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-navy-soft [text-wrap:pretty]">
        The page you are looking for does not exist or has moved. Let&apos;s get you back to
        somewhere fun.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-block rounded-full bg-coral-deep px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-coral-ink active:scale-[0.98]"
        >
          Back to Home
        </Link>
        <Link
          href="/programs"
          className="inline-block rounded-full border-2 border-navy px-7 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white"
        >
          See All Programs
        </Link>
      </div>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-coral-ink underline-offset-2 hover:underline"
      >
        <Icon name="chat" size={16} />
        Or ask us anything
      </Link>
    </div>
  );
}
