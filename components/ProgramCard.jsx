// accent → one of: coral | orange | amber | green | sky | purple | pink
const accentClasses = {
  coral:  { border: 'border-rose-200',   bg: 'bg-rose-50',   icon: 'bg-rose-100',   text: 'text-rose-600'   },
  orange: { border: 'border-orange-200', bg: 'bg-orange-50', icon: 'bg-orange-100', text: 'text-orange-600' },
  amber:  { border: 'border-amber-200',  bg: 'bg-amber-50',  icon: 'bg-amber-100',  text: 'text-amber-600'  },
  green:  { border: 'border-green-200',  bg: 'bg-green-50',  icon: 'bg-green-100',  text: 'text-green-700'  },
  sky:    { border: 'border-sky-200',    bg: 'bg-sky-50',    icon: 'bg-sky-100',    text: 'text-sky-600'    },
  purple: { border: 'border-purple-200', bg: 'bg-purple-50', icon: 'bg-purple-100', text: 'text-purple-700' },
  pink:   { border: 'border-pink-200',   bg: 'bg-pink-50',   icon: 'bg-pink-100',   text: 'text-pink-600'   },
};

export default function ProgramCard({ program, compact }) {
  const c = accentClasses[program.accent] ?? accentClasses.coral;

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border-2 ${c.border} ${c.bg} p-6 shadow-sm transition`}
    >
      {program.badge && (
        <span className={`absolute -top-3 left-6 rounded-full px-3 py-0.5 text-xs font-bold text-white bg-navy shadow`}>
          ⭐ {program.badge}
        </span>
      )}

      {/* Icon */}
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${c.icon} text-2xl`}>
        {program.icon}
      </div>

      {/* Title & meta */}
      <div className="mb-1 flex items-start gap-2">
        <h3 className={`text-lg font-bold text-navy leading-snug`} style={{ fontFamily: 'var(--font-heading)' }}>
          {program.title}
        </h3>
      </div>
      {program.subtitle && (
        <p className={`mb-1 text-xs font-semibold uppercase tracking-wide ${c.text}`}>{program.subtitle}</p>
      )}

      <div className="mb-3 flex flex-wrap gap-2 text-xs">
        <span className={`rounded-full px-2.5 py-0.5 font-medium ${c.icon} ${c.text}`}>
          👶 {program.ageRange}
        </span>
        {program.duration && (
          <span className={`rounded-full px-2.5 py-0.5 font-medium ${c.icon} ${c.text}`}>
            ⏱ {program.duration}
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-navy/80">{program.summary}</p>

      {!compact && program.includes.length > 0 && (
        <ul className="mt-auto space-y-1">
          {program.includes.map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-xs text-navy/70">
              <span className={`mt-0.5 shrink-0 ${c.text}`}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
