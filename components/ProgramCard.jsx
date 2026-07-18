import Link from 'next/link';
import Icon from '@/components/Icon';

// Content accents (7 keys, stable contract in content/site.js) map onto the
// 5 token families from the approved palette: tint surface + AA ink text.
const accentClasses = {
  coral:  { bg: 'bg-coral-tint', chip: 'bg-white/70', text: 'text-coral-ink' },
  orange: { bg: 'bg-sun-tint',   chip: 'bg-white/70', text: 'text-sun-ink' },
  amber:  { bg: 'bg-sun-tint',   chip: 'bg-white/70', text: 'text-sun-ink' },
  green:  { bg: 'bg-leaf-tint',  chip: 'bg-white/70', text: 'text-leaf-ink' },
  sky:    { bg: 'bg-sky-tint',   chip: 'bg-white/70', text: 'text-sky-ink' },
  purple: { bg: 'bg-berry-tint', chip: 'bg-white/70', text: 'text-berry-ink' },
  pink:   { bg: 'bg-berry-tint', chip: 'bg-white/70', text: 'text-berry-ink' },
};

export default function ProgramCard({ program, compact }) {
  const c = accentClasses[program.accent] ?? accentClasses.coral;
  const includes = program.includes ?? [];

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl ${c.bg} p-6 transition [box-shadow:var(--shadow-soft)] hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-lift)]`}
    >
      {program.badge && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-navy px-3 py-0.5 text-xs font-bold text-warm-white shadow">
          <Icon name="star" size={12} weight="fill" />
          {program.badge}
        </span>
      )}

      {/* Icon */}
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${c.chip} ${c.text}`}>
        <Icon name={program.icon} size={28} />
      </div>

      {/* Title & meta */}
      <h3 className="mb-1 font-heading text-lg font-bold leading-snug text-navy [text-wrap:balance]">
        {program.title}
      </h3>
      {program.subtitle && (
        <p className={`mb-1 text-xs font-semibold uppercase tracking-wide ${c.text}`}>{program.subtitle}</p>
      )}

      <div className="mb-3 flex flex-wrap gap-2 text-xs">
        <span className={`rounded-full px-2.5 py-0.5 font-semibold ${c.chip} ${c.text}`}>
          {program.ageRange}
        </span>
        {program.duration && (
          <span className={`rounded-full px-2.5 py-0.5 font-semibold ${c.chip} ${c.text}`}>
            {program.duration}
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-navy-soft">{program.summary}</p>

      {!compact && includes.length > 0 && (
        <ul className="mt-auto space-y-1.5">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-xs text-navy-soft">
              <span className={`mt-px shrink-0 ${c.text}`}>
                <Icon name="check" size={14} weight="bold" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {program.href && (
        <Link
          href={program.href}
          className={`mt-4 inline-flex items-center gap-1 text-sm font-bold ${c.text} underline-offset-2 hover:underline`}
        >
          Explore the full program
          <Icon name="sparkle" size={14} weight="fill" />
        </Link>
      )}
    </div>
  );
}
