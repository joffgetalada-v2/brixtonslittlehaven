// ============================================================
// BRIXTON'S LITTLE HAVEN — Central Content & Data File
// Edit this file to update any text, programs, or business info.
// ============================================================

export const business = {
  name: "Brixton's Little Haven",
  tagline: "Learn • Play • Grow • Shine",
  logo: '/logo.jpg',         // Circular colorful logo — replace with '/logo.png' if you re-export as PNG
  logoAlt: "Brixton's Little Haven logo",

  // ── Contact ─────────────────────────────────────────────
  phone: '0999 807 4755',
  phoneTel: 'tel:+639998074755',
  email: 'brixtonslittlehaven26@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61580366842564',
  messengerUrl: 'https://m.me/61580366842564',

  // ── Location ─────────────────────────────────────────────
  address: 'Beside Gaisano Grand Mall, Basak, Lapu-Lapu City (Mactan), Philippines 6015',
  addressShort: 'Basak, Lapu-Lapu City, Philippines',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=Gaisano+Grand+Mall+Basak+Lapu-Lapu+City+Philippines&output=embed',
  googleMapsLink:
    'https://maps.google.com/?q=Gaisano+Grand+Mall+Basak+Lapu-Lapu+City+Philippines',

  // ── Hours ────────────────────────────────────────────────
  hours: 'Monday – Saturday, 8:00 AM – 7:00 PM',

  // ── SEO defaults ─────────────────────────────────────────
  siteUrl: 'https://brixtonslittlehaven.com',
  seoDescription:
    "Safe indoor playgroup, flexible childcare, and academic tutorials for ages 12 months to 15 years — right beside Gaisano Grand Mall in Lapu-Lapu City.",
};

// ── Value Pillars ─────────────────────────────────────────
export const pillars = [
  {
    id: 'safe',
    icon: '🛡️',
    title: 'Safe Environment',
    description: 'Clean, secure, and fully child-focused — so you can leave with total peace of mind.',
    color: 'sky',
  },
  {
    id: 'structured',
    icon: '📅',
    title: 'Structured Routine',
    description: "Not just babysitting. Every day is purposefully designed to support your child's growth.",
    color: 'coral',
  },
  {
    id: 'growth',
    icon: '🌱',
    title: 'Focused on Growth',
    description: 'Social, emotional, and cognitive development woven into every activity.',
    color: 'green',
  },
];

// ── Programs ─────────────────────────────────────────────
// Each program has an accent color used for its card border and icon.
// accent: one of 'coral' | 'orange' | 'amber' | 'green' | 'sky' | 'purple' | 'pink'
export const programs = [
  // ── CARE ───────────────────────────────────────────────
  {
    id: 'playgroup',
    category: 'Care',
    accent: 'coral',
    icon: '🎨',
    title: 'Playgroup',
    ageRange: '12 months – 6 years',
    duration: 'Up to 4 hours per session',
    summary:
      'A structured, play-based program that builds social skills, independence, and early-learning foundations.',
    includes: [
      'Sensory Play',
      'Arts & Crafts',
      'Music & Movement',
      'Language Development / Circle Time',
      'Gross Motor Play',
      'Monthly Outdoor Exploration',
    ],
    featured: true,
  },
  {
    id: 'integrated-care',
    category: 'Care',
    accent: 'orange',
    icon: '🏠',
    title: 'Integrated Care',
    ageRange: '12 months – 12 years',
    duration: 'Up to 12 hours per day',
    summary:
      'Full-day care combining babysitting and the playgroup program, with rest and learning tailored to your child\'s growth.',
    includes: [
      'Structured routines + play-based learning',
      'Interactive Games',
      'Storytelling',
      'Monthly Outdoor Adventures',
    ],
    featured: true,
  },
  {
    id: 'drop-in',
    category: 'Care',
    accent: 'amber',
    icon: '⏱️',
    title: 'Drop-In Care',
    ageRange: 'All ages',
    duration: 'Flexible hourly care',
    summary:
      'Flexible hourly care based on your schedule. Perfect for errands, appointments, or sudden needs.',
    includes: [],
    featured: false,
  },

  // ── LEARNING & ENRICHMENT ────────────────────────────────
  {
    id: 'academic-tutorials',
    category: 'Learning & Enrichment',
    accent: 'green',
    icon: '📚',
    title: 'Academic Tutorials',
    ageRange: '3 – 15 years',
    duration: 'Flexible sessions',
    summary:
      'Focused support in early literacy, numeracy, and school readiness to build confidence and strengthen skills.',
    includes: [
      'Reading & Writing',
      'Math Games',
      'Science Experiments',
      'Monthly Outdoor Learning Trips',
    ],
    featured: true,
  },
  {
    id: 'play-learn',
    category: 'Learning & Enrichment',
    accent: 'sky',
    icon: '⭐',
    title: 'Play + Learn Program',
    subtitle: 'School Readiness Track',
    ageRange: '3 years and up',
    duration: '2 hrs play-based + 2 hrs guided learning',
    summary:
      'Our most recommended program for children preparing for big school. Builds focus, confidence, and early academic skills.',
    includes: [
      'Focus & Attention Building',
      'Confidence in a Classroom Setting',
      'Early Reading & Communication Skills',
      'Writing Readiness',
      'Monthly Outdoor Exploration',
    ],
    featured: true,
    badge: 'Most Recommended',
  },
  {
    id: 'combo',
    category: 'Learning & Enrichment',
    accent: 'purple',
    icon: '🎯',
    title: 'Playgroup + Academic Tutorial Combo',
    ageRange: 'Varies',
    duration: 'Combined session',
    summary:
      'A balanced blend of structured play and guided learning that supports developmental milestones and academic readiness.',
    includes: [],
    featured: false,
  },
  {
    id: 'esl',
    category: 'Learning & Enrichment',
    accent: 'pink',
    icon: '🗣️',
    title: 'ESL Classes',
    ageRange: '3 years – Adults',
    duration: 'Flexible sessions',
    summary:
      'English language learning through storytelling, vocabulary games, speaking activities, and environment-based outdoor practice.',
    includes: [
      'English Storytelling',
      'Vocabulary Games',
      'Speaking & Listening Activities',
      'Outdoor Language Practice',
    ],
    featured: false,
  },
];

// ── FAQ ──────────────────────────────────────────────────
export const faqs = [
  {
    question: 'What ages do you accept?',
    answer:
      'From 12 months old. Programs run up to age 15, and ESL classes are open to adults of any age.',
  },
  {
    question: 'What are your hours?',
    answer: 'We are open Monday to Saturday, 8:00 AM – 7:00 PM.',
  },
  {
    question: 'Where are you located?',
    answer:
      'We are beside Gaisano Grand Mall, Basak, Lapu-Lapu City (Mactan Island). Easy to find, with parking nearby.',
  },
  {
    question: 'How do I enroll or book a free trial?',
    answer:
      'Message us on Facebook, send us an email, give us a call, or use the contact form on our website to schedule an assessment — which includes a FREE trial session.',
  },
  {
    question: 'Do you offer flexible or hourly care?',
    answer:
      'Yes! Our Drop-In Care program is available by the hour — perfect for errands, appointments, or whenever you need a hand.',
  },
  {
    question: 'What should my child bring?',
    answer: '[PLACEHOLDER — Please contact us for the full checklist.]',
  },
  {
    question: 'What is your sick-child policy?',
    answer:
      '[PLACEHOLDER — Please contact us for details on our health and wellness guidelines.]',
  },
  {
    question: 'How many children are in each session?',
    answer:
      '[PLACEHOLDER — Contact us for current group sizes and availability.]',
  },
];

// ── Events / Announcements ────────────────────────────────
// Shown in the "What's Happening" section on the homepage.
// To add more: drop the image in public/images/events/ and add an entry here.
export const events = [
  {
    id: 'summer-vacation',
    src: '/images/events/summer-vacation.jpg',
    alt: 'Summer Vacation Notice — Brixton\'s Little Haven closed until June 6',
    label: 'Summer Vacation Notice',
  },
  {
    id: 'little-chefs',
    src: '/images/events/little-chefs.jpg',
    alt: 'Little Chefs Festival — A Mommy & Me Event on May 9, 2026',
    label: 'Little Chefs Festival',
  },
  {
    id: 'mothers-day',
    src: '/images/events/happy-mothers-day.jpg',
    alt: "Happy Mother's Day from Brixton's Little Haven",
    label: "Mother's Day",
  },
  {
    id: 'holiday-closure',
    src: '/images/events/holiday-closure.jpg',
    alt: 'Holiday Closure Announcement — Labor Day long weekend',
    label: 'Holiday Closure',
  },
];

// ── Community Love ────────────────────────────────────────
// Shown in the "Families Who Brighten Our Day" section on the homepage.
// To add more: drop the image in public/images/community/ and add an entry here.
export const communityImages = [
  { id: 'ty-pizza',  src: '/images/community/thank-you-pizza.jpg',       alt: "Thank you from Tobi's parents — Greenwich pizza treat" },
  { id: 'ty-cake',   src: '/images/community/thank-you-cake.jpg',        alt: "Thank you from Zuriell's mom — Goldilocks egg pie" },
  { id: 'ty-sweets', src: '/images/community/thank-you-sweets.jpg',      alt: "Thank you from Hope's mom — sweet treats" },
  { id: 'ty-butter', src: '/images/community/thank-you-butter.jpg',      alt: "Thank you from JJ's mom — Goldilocks butter macaroons" },
  { id: 'ty-choc',   src: '/images/community/thank-you-chocolates.jpg',  alt: 'Thank you gift — chocolates from a Brixton\'s family' },
  { id: 'ty-pizza2', src: '/images/community/thank-you-pizza1.jpg',      alt: 'Thank you pizza treat from a Brixton\'s Little Haven family' },
];

// ── Gallery images ────────────────────────────────────────
// Grouped by category for the Gallery page.
// To add photos: drop the file in the matching public/images/kids/ subfolder
// and add one entry here. Leave src: null for placeholder tiles.
export const galleryImages = [
  // ── Playgroup & Play ───────────────────────────────────
  { id: 'pg-1', src: '/images/kids/playgroup/baby-girl3.jpg',    alt: 'Girl proudly showing her colourful bead necklace',        label: 'Playgroup' },
  { id: 'pg-2', src: '/images/kids/playgroup/babies.jpg',         alt: 'Kids doing a group fishing puzzle activity',              label: 'Playgroup' },
  { id: 'pg-3', src: '/images/kids/playgroup/baby-chefs.jpg',     alt: 'Toddlers in chef hats exploring vegetables',             label: 'Playgroup' },
  { id: 'pg-4', src: '/images/kids/playgroup/baby-girl4.jpg',     alt: 'Toddler girl doing sensory play with water beads',       label: 'Sensory Play' },
  { id: 'pg-5', src: '/images/kids/playgroup/baby-girl5.jpg',     alt: 'Two girls playing with colourful balls',                 label: 'Gross Motor' },
  { id: 'pg-6', src: '/images/kids/playgroup/baby-girl-boy1.jpg', alt: 'Boy and girl in uniform doing a movement floor activity', label: 'Playgroup' },

  // ── Arts & Crafts ─────────────────────────────────────
  { id: 'art-1', src: '/images/kids/arts/baby-painting1.jpg', alt: 'Boy painting on the play fence inside the classroom',  label: 'Arts & Crafts' },
  { id: 'art-2', src: '/images/kids/arts/baby-painting2.jpg', alt: 'Child showing purple paint-covered hands proudly',      label: 'Arts & Crafts' },
  { id: 'art-3', src: '/images/kids/arts/baby-painting3.jpg', alt: 'Girl with green hands after Easter painting session',   label: 'Arts & Crafts' },
  { id: 'art-4', src: '/images/kids/arts/baby-girl2.jpg',     alt: 'Girl doing crafts; group finger-painting session',      label: 'Arts & Crafts' },
  { id: 'art-5', src: '/images/kids/arts/baby-boy6.jpg',      alt: 'Kids colouring an Easter egg together with a teacher',  label: 'Arts & Crafts' },

  // ── Learning & Tutorials ───────────────────────────────
  { id: 'lrn-1', src: '/images/kids/learning/baby-girl1.jpg', alt: 'Girl pointing at the alphabet wall display',                label: 'Learning' },
  { id: 'lrn-2', src: '/images/kids/learning/baby-boy1.jpg',  alt: 'Boy focused on an alphabet matching worksheet',             label: 'Tutorials' },
  { id: 'lrn-3', src: '/images/kids/learning/baby-boy2.jpg',  alt: 'Older boy explaining a pictograph lesson at the board',    label: 'Tutorials' },
  { id: 'lrn-4', src: '/images/kids/learning/baby-boy3.jpg',  alt: 'Boy posing happily beside a science worksheet',            label: 'Tutorials' },
  { id: 'lrn-5', src: '/images/kids/learning/baby-boy4.jpg',  alt: 'Boy working on a Solid, Liquid & Gas worksheet',           label: 'Tutorials' },
  { id: 'lrn-6', src: '/images/kids/learning/baby-boy5.jpg',  alt: 'Little boy holding a "Little Helpers: Medicine Delivery" role-play sign', label: 'Role Play' },

  // ── Events ────────────────────────────────────────────
  { id: 'ev-1', src: '/images/events/little-chefs.jpg',      alt: 'Little Chefs Festival — Mommy & Me event poster', label: 'Events' },
  { id: 'ev-2', src: '/images/events/happy-mothers-day.jpg', alt: "Happy Mother's Day greeting from Brixton's",       label: 'Events' },
];

// ── Hero photo strip (homepage) ───────────────────────────
// 3 joyful kid photos shown between the hero and the pillars.
// Swap any src here to change which photos appear in that strip.
export const heroStrip = [
  { id: 'hs-1', src: '/images/kids/playgroup/baby-girl3.jpg',  alt: 'Child proudly showing her colourful bead necklace' },
  { id: 'hs-2', src: '/images/kids/arts/baby-painting2.jpg',   alt: 'Child showing paint-covered hands after a fun art session' },
  { id: 'hs-3', src: '/images/kids/playgroup/baby-chefs.jpg',  alt: 'Toddlers in chef hats exploring food in a cooking activity' },
];

// ── About-page space photos ───────────────────────────────
// 4 photos shown in the safety/space grid on the About page.
export const spacePhotos = [
  { id: 'sp-1', src: '/images/kids/playgroup/babies.jpg',        alt: 'Kids doing a group activity in the play area' },
  { id: 'sp-2', src: '/images/kids/arts/baby-painting1.jpg',     alt: 'Child painting on the play fence — arts corner' },
  { id: 'sp-3', src: '/images/kids/playgroup/baby-girl4.jpg',    alt: 'Toddler enjoying sensory play' },
  { id: 'sp-4', src: '/images/kids/learning/baby-girl1.jpg',     alt: 'Girl learning the alphabet on the reading wall' },
];

// ── Nav links ─────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Our Space', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
