// Gallery placeholder tile — shows a soft gradient + icon until real photos are added.
// When src is set, renders next/image instead.
import Image from 'next/image';

const gradients = [
  'from-rose-200 to-orange-100',
  'from-orange-200 to-amber-100',
  'from-amber-200 to-yellow-100',
  'from-green-200 to-emerald-100',
  'from-sky-200 to-blue-100',
  'from-purple-200 to-pink-100',
  'from-pink-200 to-rose-100',
  'from-teal-200 to-cyan-100',
  'from-indigo-200 to-violet-100',
];

const icons = ['🎨', '🌈', '🎵', '📖', '🌿', '✏️', '🏃', '🏠', '💬'];

export default function PlaceholderImage({ src, alt, label, index = 0, className = '' }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
      </div>
    );
  }

  const grad = gradients[index % gradients.length];
  const icon = icons[index % icons.length];

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br ${grad} ${className}`}
      aria-label={alt}
      role="img"
    >
      <span className="text-4xl" aria-hidden="true">{icon}</span>
      {label && (
        <span className="text-xs font-semibold text-navy/60">{label}</span>
      )}
    </div>
  );
}
