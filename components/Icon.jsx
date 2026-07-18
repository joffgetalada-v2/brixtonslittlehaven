// Brand icon registry — Phosphor duotone, the soft rounded family that fits the
// childcare voice. Content files reference icons by semantic name (content/site.js),
// so swapping a glyph is a one-line change here. SSR entry = usable in server components.
import {
  ShieldCheck,
  CalendarCheck,
  Plant,
  Palette,
  House,
  Clock,
  BookOpen,
  Star,
  Target,
  ChatCircleDots,
  Phone,
  EnvelopeSimple,
  MapPin,
  CheckCircle,
  MessengerLogo,
  FacebookLogo,
  GraduationCap,
  Heart,
  Sparkle,
  MusicNotes,
  MoonStars,
  Baby,
  PaintBrush,
  PencilSimple,
  Flask,
  Wallet,
  LockSimple,
  Backpack,
  UsersThree,
  HandWaving,
  DeviceMobile,
  InstagramLogo,
} from '@phosphor-icons/react/dist/ssr';

const MAP = {
  shield: ShieldCheck,
  calendar: CalendarCheck,
  sprout: Plant,
  palette: Palette,
  house: House,
  clock: Clock,
  books: BookOpen,
  star: Star,
  target: Target,
  chat: ChatCircleDots,
  phone: Phone,
  mail: EnvelopeSimple,
  pin: MapPin,
  check: CheckCircle,
  messenger: MessengerLogo,
  facebook: FacebookLogo,
  graduation: GraduationCap,
  heart: Heart,
  sparkle: Sparkle,
  music: MusicNotes,
  moon: MoonStars,
  baby: Baby,
  paint: PaintBrush,
  pencil: PencilSimple,
  flask: Flask,
  wallet: Wallet,
  lock: LockSimple,
  bag: Backpack,
  users: UsersThree,
  wave: HandWaving,
  device: DeviceMobile,
  instagram: InstagramLogo,
};

export default function Icon({ name, size = 24, weight = 'duotone', className = '', label }) {
  const Glyph = MAP[name];
  if (!Glyph) return null;
  return (
    <Glyph
      size={size}
      weight={weight}
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    />
  );
}
