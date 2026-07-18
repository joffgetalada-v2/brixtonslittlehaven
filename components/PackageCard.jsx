import Image from 'next/image';

// Rate card for one named package (Curious Fox, Wise Owls, ...).
// Mascot art is clay-style Higgsfield work in public/images/illustrations/.
const ACCENTS = {
  coral: { chip: 'bg-coral-tint', ink: 'text-coral-ink' },
  sun:   { chip: 'bg-sun-tint',   ink: 'text-sun-ink' },
  leaf:  { chip: 'bg-leaf-tint',  ink: 'text-leaf-ink' },
  sky:   { chip: 'bg-sky-tint',   ink: 'text-sky-ink' },
  berry: { chip: 'bg-berry-tint', ink: 'text-berry-ink' },
};

export default function PackageCard({ pkg, accent = 'coral' }) {
  const a = ACCENTS[accent] ?? ACCENTS.coral;

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-6 [box-shadow:var(--shadow-soft)]">
      <div className="flex items-start gap-4">
        {pkg.mascot && (
          <div className={`relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl ${a.chip}`}>
            <Image
              src={pkg.mascot}
              alt={pkg.mascotAlt ?? ''}
              width={72}
              height={72}
              sizes="72px"
              className="h-18 w-18 object-cover"
            />
          </div>
        )}
        <div className="min-w-0">
          <p className={`text-xs font-bold uppercase tracking-wide ${a.ink}`}>{pkg.tag}</p>
          <h4 className="font-heading text-lg font-bold leading-snug text-navy">{pkg.name}</h4>
          <p className="mt-0.5 text-xs text-navy-soft">{pkg.duration}</p>
        </div>
      </div>

      <ul className="mt-5 flex-1 divide-y divide-navy/10">
        {pkg.rates.map((r) => (
          <li key={r.schedule} className="flex items-baseline justify-between gap-3 py-2.5">
            <span className="text-sm font-semibold text-navy">{r.schedule}</span>
            <span className="flex-1 text-right text-xs text-navy-soft">{r.sessions}</span>
            <span className="w-24 text-right font-heading text-base font-bold text-navy">{r.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
