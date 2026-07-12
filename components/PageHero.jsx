import Icon from '@/components/Icon';

// Warm tinted hero for inner pages — replaces the old navy gradient slab.
// Left-aligned, one accent per page, soft cream curve into the content below.
const ACCENTS = {
  coral: { tint: 'bg-coral-tint', ink: 'text-coral-ink' },
  sun:   { tint: 'bg-sun-tint',   ink: 'text-sun-ink' },
  sky:   { tint: 'bg-sky-tint',   ink: 'text-sky-ink' },
  leaf:  { tint: 'bg-leaf-tint',  ink: 'text-leaf-ink' },
  berry: { tint: 'bg-berry-tint', ink: 'text-berry-ink' },
};

export default function PageHero({ accent = 'coral', icon, title, intro, children }) {
  const a = ACCENTS[accent] ?? ACCENTS.coral;
  return (
    <section className={`relative overflow-hidden ${a.tint}`}>
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        {icon && (
          <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 ${a.ink}`}>
            <Icon name={icon} size={28} />
          </span>
        )}
        <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight text-navy [text-wrap:balance] sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-soft [text-wrap:pretty]">
            {intro}
          </p>
        )}
        {children}
        <div className="pb-14 sm:pb-16" />
      </div>
      {/* Soft curve into the cream page body */}
      <div aria-hidden="true" className="h-10 w-full rounded-t-[3rem] bg-cream" />
    </section>
  );
}
