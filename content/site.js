// ============================================================
// BRIXTON'S LITTLE HAVEN — Central Content & Data File
// Edit this file to update any text, programs, or business info.
// Icons are semantic names rendered by components/Icon.jsx.
// ============================================================

export const business = {
  name: "Brixton's Little Haven",
  tagline: "Learn • Play • Grow • Shine",
  logo: '/logo.png',         // Transparent circular logo (derived from logo.jpg)
  logoAlt: "Brixton's Little Haven logo",

  // ── Contact ─────────────────────────────────────────────
  phone: '0999 807 4755',
  phoneTel: 'tel:+639998074755',
  phoneApps: 'Also on Viber and WhatsApp',
  email: 'brixtonslittlehaven26@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61580366842564',
  messengerUrl: 'https://m.me/61580366842564',
  instagram: 'https://www.instagram.com/brixtons_little_haven',

  // ── Location ─────────────────────────────────────────────
  address: 'AGC Building, beside Gaisano Grand Mall, Basak, Lapu-Lapu City (Mactan), Philippines 6015',
  addressShort: 'Basak, Lapu-Lapu City, Philippines',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=Gaisano+Grand+Mall+Basak+Lapu-Lapu+City+Philippines&output=embed',
  googleMapsLink:
    'https://maps.google.com/?q=Gaisano+Grand+Mall+Basak+Lapu-Lapu+City+Philippines',

  // ── Hours ────────────────────────────────────────────────
  hours: 'Monday to Saturday, 7:00 AM to 7:00 PM',

  // ── SEO defaults ─────────────────────────────────────────
  siteUrl: 'https://brixtonslittlehaven.com',
  seoDescription:
    "Safe indoor playgroup and childcare for ages 1 to 5, plus pre-kindergarten, academic tutorials, and ESL classes from age 3 and up, right beside Gaisano Grand Mall in Lapu-Lapu City.",
};

// ── Value Pillars ─────────────────────────────────────────
export const pillars = [
  {
    id: 'safe',
    icon: 'shield',
    title: 'Safe Environment',
    description: 'Clean, secure, and fully child-focused, so you can leave with total peace of mind.',
    color: 'sky',
  },
  {
    id: 'structured',
    icon: 'calendar',
    title: 'Structured Routine',
    description: "Not just babysitting. Every day is purposefully designed to support your child's growth.",
    color: 'coral',
  },
  {
    id: 'growth',
    icon: 'sprout',
    title: 'Focused on Growth',
    description: 'Social, emotional, and cognitive development woven into every activity.',
    color: 'green',
  },
];

// ── Programs ─────────────────────────────────────────────
// Each program has an accent color used for its card surface and icon.
// accent: one of 'coral' | 'orange' | 'amber' | 'green' | 'sky' | 'purple' | 'pink'
export const programs = [
  // ── CARE ───────────────────────────────────────────────
  {
    id: 'playgroup',
    category: 'Care',
    accent: 'coral',
    icon: 'palette',
    title: 'Playgroup',
    ageRange: '1 - 5 years',
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
    icon: 'house',
    title: 'Integrated Care',
    ageRange: '1 - 5 years',
    duration: 'Up to 12 hours per session',
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
    icon: 'clock',
    title: 'Drop-In Care',
    ageRange: '1 - 5 years',
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
    icon: 'books',
    title: 'Academic Tutorials',
    ageRange: '3 years and up',
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
    icon: 'star',
    title: 'Pre-Kindergarten',
    subtitle: 'School Readiness Program',
    ageRange: '3 - 5 years',
    duration: '4 hrs per session',
    summary:
      'Our full school readiness curriculum for children preparing for big school. Language, math, science, writing, and life skills in one balanced day.',
    includes: [
      'Reading, Writing & Mathematics Foundations',
      'Communication & Confidence Building',
      'Hands-On Science & Discovery',
      'Character & Social-Emotional Development',
      'Real-Life Skills & School Readiness',
    ],
    featured: true,
    badge: 'Now Enrolling',
    href: '/pre-kindergarten',
  },
  {
    id: 'after-school',
    category: 'Care',
    accent: 'purple',
    icon: 'graduation',
    title: 'After-School Care',
    ageRange: 'School-age kids',
    duration: 'Open year-round',
    summary:
      'A safe, supervised place for your child after school hours. Enroll anytime, and message us to build a schedule that fits your family.',
    includes: [],
    featured: false,
  },
  {
    id: 'esl',
    category: 'Learning & Enrichment',
    accent: 'pink',
    icon: 'chat',
    title: 'ESL Classes',
    ageRange: '3 years and up',
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
// Items with published: false stay hidden until real answers are supplied.
export const faqs = [
  {
    question: 'What ages do you accept?',
    answer:
      'Playgroup, drop-in, and integrated care programs welcome ages 1 to 5. Pre-Kindergarten serves ages 3 to 5, and academic tutorials and ESL classes are open from age 3 and up.',
  },
  {
    question: 'What are your hours?',
    answer: 'We are open Monday to Saturday, 7:00 AM to 7:00 PM.',
  },
  {
    question: 'Where are you located?',
    answer:
      'We are beside Gaisano Grand Mall, Basak, Lapu-Lapu City (Mactan Island). Easy to find, with parking nearby.',
  },
  {
    question: 'How do I enroll or book a free trial?',
    answer:
      'Message us on Facebook, send us an email, give us a call, or use the contact form on our website to schedule an assessment, which includes a free trial session.',
  },
  {
    question: 'Do you offer flexible or hourly care?',
    answer:
      'Yes. Our Drop-In Care program is available by the hour. Perfect for errands, appointments, or whenever you need a hand.',
  },
  {
    question: 'What should my child bring?',
    answer:
      'A labeled water bottle, a small healthy snack (please avoid nuts and other common allergens), and an extra set of clothes for spills, water play, or messy activities. A familiar comfort item, like a small stuffed toy, is welcome during the adjustment period with teacher approval. Please label all belongings with your child\'s name. Enrolled students also receive a full learning materials checklist at enrollment.',
  },
  {
    question: 'What is your sick-child policy?',
    answer:
      'Children who are not feeling well should rest at home. After a fever, vomiting, diarrhea, or a contagious illness, we ask for at least 24 hours of recovery before returning. Three or more consecutive days of absence due to illness require a medical certificate on return. If your child will be absent, please let us know at least 2 hours before class.',
  },
  {
    question: 'How many children are in each session?',
    answer:
      'We keep our groups small so every child gets real, individualized attention. Exact group sizes vary by program and age group, and slots are limited per session. Message us for current availability in your preferred schedule.',
  },
  {
    question: 'How much do your programs cost?',
    answer:
      'Playgroup packages start at ₱2,500 per month for a twice-a-week schedule, and flexible drop-in care is ₱250 per hour. Monthly rates depend on the program and how many sessions per week you choose. See the full rate card on our Programs page.',
  },
  {
    question: 'Is there an assessment fee?',
    answer:
      'Yes. Registration starts with a ₱1,000 assessment fee, which covers a 30-minute play-based evaluation of your child\'s readiness, skills, and learning needs. After the assessment, your child enjoys a free 2-hour trial session before you decide on enrollment. The assessment fee is non-refundable.',
  },
  {
    question: 'What documents do I need to enroll?',
    answer:
      'A completed registration form, a copy of the birth certificate, a copy of the baby book or immunization record, two recent 2x2 photos, and a parent or guardian\'s ID. Digital and physical copies both help make processing smooth, and some documents can be submitted after enrollment.',
  },
  {
    question: 'Do you offer make-up classes or refunds for missed sessions?',
    answer:
      'No. We operate on a reserved-slot system: your child\'s classroom space, teacher allocation, and learning materials are reserved whether or not they attend, so all absences count as consumed sessions. Documented absences are excused on record but do not convert to make-ups, refunds, credits, or extensions. Full details are in our Parent Handbook.',
  },
  {
    question: 'How do you keep parents updated?',
    answer:
      'Through the Kriyo parent app (real-time updates, attendance, photos, and messages), our official Facebook page, monthly progress reports, and scheduled parent-teacher meetings. For anything urgent, we send emergency announcements directly.',
  },
];

// Only FAQs ready for the public page.
export const publishedFaqs = faqs.filter((f) => f.published !== false);

// ── Events / Announcements ────────────────────────────────
// Shown in the "What's Happening" section on the homepage.
// Add `expires: 'YYYY-MM-DD'` and the entry drops off automatically after that date.
// To add more: drop the image in public/images/events/ and add an entry here.
export const events = [
  {
    id: 'prek-founding-batch',
    src: '/images/illustrations/prek-hero.webp',
    alt: 'Clay illustration of a miniature pre-kindergarten classroom with tiny desks and books',
    label: 'Pre-K founding batch: now enrolling',
    date: 'School year 2026 - 2027',
    href: '/pre-kindergarten',
  },
  {
    id: 'nutrition-royalty',
    src: '/images/events/nutrition-prince-princess.webp',
    alt: 'Clay illustration of children celebrating Nutrition Month beside a table of fruits and vegetables',
    label: 'Nutrition Prince & Princess 2026',
    date: 'July 2026, Nutrition Month',
    expires: '2026-07-31',
  },
  {
    id: 'parada-munting-bayani',
    src: '/images/events/parada-ng-munting-bayani.webp',
    alt: 'Clay illustration of a festive miniature Filipino parade with colorful bunting',
    label: 'Parada ng Munting Bayani',
    date: 'August 2026',
    expires: '2026-08-31',
  },
];

// Events still current (safe to call at render time; static builds evaluate at build time).
export const activeEvents = (today = new Date()) =>
  events.filter((e) => !e.expires || new Date(`${e.expires}T23:59:59`) >= today);

// ── Community Love ────────────────────────────────────────
// Shown in the "Families Who Brighten Our Day" section on the homepage.
// To add more: drop the image in public/images/community/ and add an entry here.
export const communityImages = [
  { id: 'ty-pizza',  src: '/images/community/thank-you-pizza.jpg',       alt: "Thank you from Tobi's parents: Greenwich pizza treat" },
  { id: 'ty-cake',   src: '/images/community/thank-you-cake.jpg',        alt: "Thank you from Zuriell's mom: Goldilocks egg pie" },
  { id: 'ty-sweets', src: '/images/community/thank-you-sweets.jpg',      alt: "Thank you from Hope's mom: sweet treats" },
  { id: 'ty-butter', src: '/images/community/thank-you-butter.jpg',      alt: "Thank you from JJ's mom: Goldilocks butter macaroons" },
  { id: 'ty-choc',   src: '/images/community/thank-you-chocolates.jpg',  alt: "Thank you gift: chocolates from a Brixton's family" },
  { id: 'ty-pizza2', src: '/images/community/thank-you-pizza1.jpg',      alt: "Thank you pizza treat from a Brixton's Little Haven family" },
];

// ── Gallery images ────────────────────────────────────────
// Grouped by category for the Gallery page.
// To add photos: drop the file in the matching public/images/kids/ subfolder
// and add one entry here. Leave src: null for placeholder tiles.
export const galleryImages = [
  // ── Playgroup & Play ───────────────────────────────────
  { id: 'pg-1', src: '/images/kids/playgroup/baby-girl3.jpg',    alt: 'Girl proudly showing her colorful bead necklace',        label: 'Playgroup' },
  { id: 'pg-2', src: '/images/kids/playgroup/babies.jpg',         alt: 'Kids doing a group fishing puzzle activity',              label: 'Playgroup' },
  { id: 'pg-3', src: '/images/kids/playgroup/baby-chefs.jpg',     alt: 'Toddlers in chef hats exploring vegetables',             label: 'Playgroup' },
  { id: 'pg-4', src: '/images/kids/playgroup/baby-girl4.jpg',     alt: 'Toddler girl doing sensory play with water beads',       label: 'Sensory Play' },
  { id: 'pg-5', src: '/images/kids/playgroup/baby-girl5.jpg',     alt: 'Two girls playing with colorful balls',                 label: 'Gross Motor' },
  { id: 'pg-6', src: '/images/kids/playgroup/baby-girl-boy1.jpg', alt: 'Boy and girl in uniform doing a movement floor activity', label: 'Playgroup' },

  // ── Arts & Crafts ─────────────────────────────────────
  { id: 'art-1', src: '/images/kids/arts/baby-painting1.jpg', alt: 'Boy painting on the play fence inside the classroom',  label: 'Arts & Crafts' },
  { id: 'art-2', src: '/images/kids/arts/baby-painting2.jpg', alt: 'Child showing purple paint-covered hands proudly',      label: 'Arts & Crafts' },
  { id: 'art-3', src: '/images/kids/arts/baby-painting3.jpg', alt: 'Girl with green hands after Easter painting session',   label: 'Arts & Crafts' },
  { id: 'art-4', src: '/images/kids/arts/baby-girl2.jpg',     alt: 'Girl doing crafts; group finger-painting session',      label: 'Arts & Crafts' },
  { id: 'art-5', src: '/images/kids/arts/baby-boy6.jpg',      alt: 'Kids coloring an Easter egg together with a teacher',  label: 'Arts & Crafts' },

  // ── Learning & Tutorials ───────────────────────────────
  { id: 'lrn-1', src: '/images/kids/learning/baby-girl1.jpg', alt: 'Girl pointing at the alphabet wall display',                label: 'Learning' },
  { id: 'lrn-2', src: '/images/kids/learning/baby-boy1.jpg',  alt: 'Boy focused on an alphabet matching worksheet',             label: 'Tutorials' },
  { id: 'lrn-3', src: '/images/kids/learning/baby-boy2.jpg',  alt: 'Older boy explaining a pictograph lesson at the board',    label: 'Tutorials' },
  { id: 'lrn-4', src: '/images/kids/learning/baby-boy3.jpg',  alt: 'Boy posing happily beside a science worksheet',            label: 'Tutorials' },
  { id: 'lrn-5', src: '/images/kids/learning/baby-boy4.jpg',  alt: 'Boy working on a Solid, Liquid & Gas worksheet',           label: 'Tutorials' },
  { id: 'lrn-6', src: '/images/kids/learning/baby-boy5.jpg',  alt: 'Little boy holding a "Little Helpers: Medicine Delivery" role-play sign', label: 'Role Play' },

  // ── Events ────────────────────────────────────────────
  { id: 'ev-1', src: '/images/events/little-chefs.jpg',      alt: 'Little Chefs Festival, Mommy & Me event poster', label: 'Events' },
  { id: 'ev-2', src: '/images/events/happy-mothers-day.jpg', alt: "Happy Mother's Day greeting from Brixton's",       label: 'Events' },
];

// ── Hero photo strip (homepage) ───────────────────────────
// 3 joyful kid photos shown between the hero and the pillars.
// Swap any src here to change which photos appear in that strip.
export const heroStrip = [
  { id: 'hs-1', src: '/images/kids/playgroup/baby-girl3.jpg',  alt: 'Child proudly showing her colorful bead necklace' },
  { id: 'hs-2', src: '/images/kids/arts/baby-painting2.jpg',   alt: 'Child showing paint-covered hands after a fun art session' },
  { id: 'hs-3', src: '/images/kids/playgroup/baby-chefs.jpg',  alt: 'Toddlers in chef hats exploring food in a cooking activity' },
];

// ── About-page space photos ───────────────────────────────
// 4 photos shown in the safety/space grid on the About page.
export const spacePhotos = [
  { id: 'sp-1', src: '/images/kids/playgroup/babies.jpg',        alt: 'Kids doing a group activity in the play area' },
  { id: 'sp-2', src: '/images/kids/arts/baby-painting1.jpg',     alt: 'Child painting on the play fence in the arts corner' },
  { id: 'sp-3', src: '/images/kids/playgroup/baby-girl4.jpg',    alt: 'Toddler enjoying sensory play' },
  { id: 'sp-4', src: '/images/kids/learning/baby-girl1.jpg',     alt: 'Girl learning the alphabet on the reading wall' },
];

// ── Nav links ─────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Pre-K', href: '/pre-kindergarten' },
  { label: 'Our Space', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

// ── Packages & monthly rates ──────────────────────────────
// Shown on the Programs page rate card. Mascot art lives in
// public/images/illustrations/ (clay style, matches the hero world).
export const rateNote =
  'Rates are per month unless marked hourly. Other schedules may be available upon request.';

export const packageGroups = [
  {
    id: 'playgroup-rates',
    title: 'Playgroup',
    ageRange: 'Ages 1 - 5',
    accent: 'coral',
    packages: [
      {
        id: 'curious-fox',
        name: 'Curious Fox',
        tag: 'Core Package',
        mascot: '/images/illustrations/mascot-fox.webp',
        mascotAlt: 'Clay figurine of a friendly orange fox',
        duration: '4 hrs per session',
        rates: [
          { schedule: 'Mon - Sat', sessions: '24 sessions', price: '₱9,000' },
          { schedule: 'MWF', sessions: '12 sessions', price: '₱4,800' },
          { schedule: 'TTHS', sessions: '12 sessions', price: '₱4,800' },
          { schedule: '2 days a week', sessions: '8 sessions', price: '₱3,800' },
        ],
      },
      {
        id: 'bumblebee-buddies',
        name: 'Bumblebee Buddies',
        tag: 'Most Popular',
        mascot: '/images/illustrations/mascot-bee.webp',
        mascotAlt: 'Clay figurine of a cheerful bumblebee',
        duration: '2 hrs per session',
        rates: [
          { schedule: 'Mon - Sat', sessions: '24 sessions', price: '₱6,000' },
          { schedule: 'MWF', sessions: '12 sessions', price: '₱3,500' },
          { schedule: 'TTHS', sessions: '12 sessions', price: '₱3,500' },
          { schedule: '2 days a week', sessions: '8 sessions', price: '₱2,500' },
        ],
      },
      {
        id: 'busy-butterflies',
        name: 'Busy Butterflies',
        tag: 'Drop-In Care',
        mascot: '/images/illustrations/mascot-butterfly.webp',
        mascotAlt: 'Clay figurine of a playful butterfly',
        duration: 'Flexible hours, 7:00 AM - 7:00 PM',
        rates: [{ schedule: 'Any day', sessions: 'Pay as you go', price: '₱250 per hour' }],
      },
    ],
  },
  {
    id: 'prek-rates',
    title: 'Pre-Kindergarten School Readiness',
    ageRange: 'Ages 3 - 5',
    accent: 'leaf',
    href: '/pre-kindergarten',
    packages: [
      {
        id: 'school-readiness-track',
        name: 'School Readiness Track',
        tag: 'Best Value',
        mascot: '/images/illustrations/mascot-star.webp',
        mascotAlt: 'Clay figurine of a happy golden star',
        duration: '4 hrs per session, 8:00 AM - 12:00 NN or 1:00 - 5:00 PM',
        rates: [
          { schedule: 'Mon - Sat', sessions: '24 sessions', price: '₱12,500' },
          { schedule: 'MWF', sessions: '12 sessions', price: '₱6,800' },
          { schedule: 'TTHS', sessions: '12 sessions', price: '₱6,800' },
          { schedule: '2 days a week', sessions: '8 sessions', price: '₱5,500' },
        ],
      },
    ],
  },
  {
    id: 'academic-rates',
    title: 'Academic Enrichment & ESL',
    ageRange: 'Ages 3 and up',
    accent: 'sky',
    packages: [
      {
        id: 'clever-squirrels',
        name: 'Clever Squirrels',
        tag: 'Focused Learning',
        mascot: '/images/illustrations/mascot-squirrel.webp',
        mascotAlt: 'Clay figurine of a clever squirrel holding an acorn',
        duration: '2 hrs per session',
        rates: [
          { schedule: 'Mon - Sat', sessions: '24 sessions', price: '₱9,000' },
          { schedule: 'MWF', sessions: '12 sessions', price: '₱4,800' },
          { schedule: 'TTHS', sessions: '12 sessions', price: '₱4,800' },
        ],
      },
    ],
  },
  {
    id: 'care-play-rates',
    title: 'Integrated Care + Play',
    subtitle: 'Half-day babysitting plus half-day playgroup',
    ageRange: 'Ages 1 - 5',
    accent: 'berry',
    packages: [
      {
        id: 'wise-owls',
        name: 'Wise Owls',
        tag: 'Premium, 12 hrs',
        mascot: '/images/illustrations/mascot-owl.webp',
        mascotAlt: 'Clay figurine of a wise round owl',
        duration: '12 hrs per session, starts as early as 7:00 AM',
        rates: [
          { schedule: 'Mon - Sat', sessions: '24 sessions', price: '₱15,999' },
          { schedule: 'MWF', sessions: '12 sessions', price: '₱8,999' },
          { schedule: 'TTHS', sessions: '12 sessions', price: '₱8,999' },
        ],
      },
      {
        id: 'little-foxes',
        name: 'Little Foxes',
        tag: 'Popular, 10 hrs',
        mascot: '/images/illustrations/mascot-fox.webp',
        mascotAlt: 'Clay figurine of a friendly orange fox',
        duration: '10 hrs per session, starts as early as 7:00 AM',
        rates: [
          { schedule: 'Mon - Sat', sessions: '24 sessions', price: '₱13,999' },
          { schedule: 'MWF', sessions: '12 sessions', price: '₱7,999' },
          { schedule: 'TTHS', sessions: '12 sessions', price: '₱7,999' },
        ],
      },
    ],
  },
];

export const flexiblePass = {
  title: 'Flexible Care Pass',
  note: 'Flexible options for your busy days. Up to 10 hours of care, learning, and fun.',
  options: [
    { label: 'Hourly rate', price: '₱250 per hour' },
    { label: 'Half day (4 hours)', price: '₱899' },
    { label: 'Daily pass (up to 10 hours)', price: '₱1,299', badge: 'Best Value' },
    { label: 'Additional hours beyond 10', price: '₱250 per hour' },
  ],
};

// ── Pre-Kindergarten program (School Year 2026 - 2027) ───────
export const prek = {
  ages: 'Ages 3 - 5',
  startNote: 'SY 2026 - 2027 classes began July 6, 2026. Founding batch slots are limited, and enrollment stays open while they last.',
  mission:
    'We nurture confident communicators, independent learners, creative thinkers, and school-ready children through a balanced curriculum that develops academic excellence, life skills, character, and leadership.',
  pillars: [
    { icon: 'sprout', title: 'Nurturing, child-centered environment', description: 'A safe, loving, and supportive space that encourages curiosity and growth.' },
    { icon: 'palette', title: 'Montessori-inspired, play-based learning', description: 'Hands-on experiences that make learning meaningful and joyful.' },
    { icon: 'books', title: 'Strong reading, writing & math foundation', description: 'Essential early literacy and numeracy skills for lifelong learning.' },
    { icon: 'chat', title: 'Communication & confidence building', description: 'Expression, active listening, and self-confidence practiced every day.' },
    { icon: 'sparkle', title: 'Critical thinking & problem solving', description: 'Guiding children to explore, ask questions, and find solutions.' },
    { icon: 'heart', title: 'Character & social-emotional development', description: 'Kindness, empathy, responsibility, and respect.' },
    { icon: 'flask', title: 'Hands-on science & discovery', description: 'Exploring the world through observation and experimentation.' },
    { icon: 'graduation', title: 'Real-life skills & school readiness', description: 'Independence and responsibility, ready for Grade 1 and beyond.' },
  ],
  curriculum: [
    {
      id: 'language',
      icon: 'books',
      accent: 'leaf',
      title: 'Language & Literacy',
      areas: [
        { title: 'Letter recognition & phonics', items: ['Uppercase and lowercase letters', 'Letter-sound recognition', 'Beginning and ending sounds', 'Rhyming words', 'Vowels and consonants', 'CVC words (cat, dog, sun)'] },
        { title: 'Speaking & communication', items: ['Daily conversation practice', 'Show-and-tell', 'Story retelling', 'Expressing feelings and ideas', 'Public speaking confidence'] },
        { title: 'Vocabulary development', items: ['Theme-based vocabulary', 'Everyday conversation words', 'Action and describing words', 'Oral language development'] },
        { title: 'Reading readiness', items: ['Sight words', 'Picture reading', 'Story prediction and sequencing', 'Listening comprehension', 'Love for reading and books'] },
      ],
    },
    {
      id: 'math',
      icon: 'target',
      accent: 'sky',
      title: 'Mathematics & Logic',
      areas: [
        { title: 'Numbers & counting', items: ['Recognizing and naming numbers 1-50', 'Counting objects and one-to-one correspondence', 'Number sequencing, comparison, odd and even', 'Skip counting by 2s, 5s, and 10s (introduction)'] },
        { title: 'Number writing', items: ['Tracing and writing numbers 1-20', 'Correct number formation', 'Writing numbers from dictation'] },
        { title: 'Colors, shapes & measurement', items: ['Identifying and mixing colors', 'Recognizing and sorting shapes', 'Big and small, heavy and light, more and less'] },
        { title: 'Introduction to operations', items: ['Addition and subtraction using objects (1-10)', 'Number bonds', 'Simple word problems'] },
      ],
    },
    {
      id: 'science',
      icon: 'flask',
      accent: 'sun',
      title: 'Science, Discovery & General Knowledge',
      areas: [
        { title: 'The world around us', items: ['Plants, animals, weather, and seasons', 'Sun, moon, stars, and water', 'Caring for nature and the environment'] },
        { title: 'Self and people', items: ['Personal identity and parts of the body', 'Family, home, food, and clothing', 'Community helpers'] },
        { title: 'Health, safety & good habits', items: ['Personal hygiene and handwashing', 'Healthy food choices', 'Safety at home, school, and on the road'] },
        { title: 'Discovery & exploration', items: ['Simple science experiments', 'Sink and float, color mixing, growing plants', 'Observation and scientific thinking'] },
      ],
    },
    {
      id: 'writing',
      icon: 'pencil',
      accent: 'berry',
      title: 'Writing & Fine Motor Development',
      areas: [
        { title: 'Pre-writing skills', items: ['Standing, sleeping, slanting, and curved lines', 'Zigzag patterns and tracing activities'] },
        { title: 'Writing skills', items: ['Uppercase and lowercase letters', 'Number and name writing', 'Copying and imitating words'] },
        { title: 'Fine motor development', items: ['Cutting and pasting', 'Beading, lacing, and tweezing', 'Playdough manipulation'] },
      ],
    },
  ],
  routine: {
    title: 'A day in Pre-K',
    note: 'Each session runs 4 hours, morning or afternoon.',
    blocks: [
      { title: 'Welcome time & free choice learning', description: 'Children arrive, greet their classmates and teachers, and explore learning centers.' },
      { title: 'Morning circle time', description: 'Prayer, flag ceremony, calendar and weather, days of the week, and a "How do I feel today?" check-in.' },
      { title: 'Introducing self', description: 'Practicing name, age, and personal information, one small confident voice at a time.' },
      { title: 'Science, discovery & general knowledge', description: 'Topic discussion, hands-on exploration, worksheets, and learning center activity.' },
      { title: 'Wiggle time', description: 'Movement games, the reading corner, obstacle courses, and action songs to reset busy bodies.' },
      { title: 'Mathematics & logical thinking', description: 'Guided practice, worksheets, and hands-on learning activities.' },
      { title: 'Snack time & practical life skills', description: 'Handwashing routines, healthy eating habits, table manners, and independence.' },
      { title: 'Language, reading & writing', description: 'Phonics, reading activities, writing practice, and interactive learning.' },
      { title: 'Independence & responsibility skills', description: 'Packing away materials, classroom clean-up, and organizing personal belongings.' },
      { title: 'Reflection & dismissal', description: 'Goodbye song, putting on shoes independently, preparing bags, and a positive send-off.' },
    ],
  },
  freebies: [
    "Brixton's Little Haven school bag",
    'Official Pre-Kindergarten uniform shirt (term and annual enrollees)',
    'Complete learning materials: workbook set, worksheets, art and craft supplies',
    'School supplies kit: pencils, crayons, eraser, sharpener, writing notebook',
    'School ID and lanyard',
  ],
  noFees: ['No registration fee', 'No miscellaneous fee', 'No learning materials fee', 'No workbook fee'],
  savings: [
    {
      title: 'Term enrollment (3 months)',
      save: 'Save 5% on tuition',
      perks: [],
    },
    {
      title: 'Annual enrollment (SY 2026 - 2027)',
      save: 'Save 15% on tuition',
      perks: ['Lock in tuition rates for the entire school year', 'Priority slot reservation'],
    },
  ],
};

// ── Enrollment (all programs) ─────────────────────────────
export const enrollmentSteps = [
  {
    title: 'Register for an assessment',
    description:
      'Complete the registration form and settle the ₱1,000 assessment fee. It covers a 30-minute, play-based evaluation of your child\'s readiness, age-appropriate skills, and learning needs. The fee is non-refundable.',
  },
  {
    title: 'Schedule the assessment',
    description: 'After payment, choose and confirm your child\'s preferred date and time. The assessment takes about 30 minutes.',
  },
  {
    title: 'Enjoy a free trial session',
    description:
      'After the assessment, your child gets a free 2-hour trial session before official enrollment, so you can decide based on their comfort and experience.',
  },
  {
    title: 'Choose a program',
    description: 'Pick the program and schedule that best fit your child\'s needs, interests, and developmental goals.',
  },
];

export const enrollmentRequirements = [
  'Completed registration form',
  'Copy of birth certificate',
  'Copy of baby book or immunization record',
  'Two recent 2x2 photos',
  "Parent or guardian's ID",
];

// Learning materials, submitted on or before the first day of classes.
export const learningMaterials = {
  creative: [
    'Plastic envelope with handle (orange)',
    'A4 sticker paper (20 sheets)',
    'A4 photo paper, glossy or matte (20 sheets)',
    'Vellum paper (10 sheets, 180 gsm)',
    'Poster paint (12 colors)',
    'Stick glue (big)',
    'Crayola "So Big" crayons (8 or 12 colors)',
    'Original Play-Doh (3 pcs)',
    'Washable markers (thick, easy grip)',
    'Safety scissors (child-friendly)',
    'Paint brush set (large sizes for toddlers)',
  ],
  hygiene: ['Alcohol', 'Baby wipes', 'Liquid hand soap', 'Toilet tissue'],
  note: 'Academic Tutorial and Pre-Kindergarten students also bring four orange writing notebooks. Materials are submitted on or before the official start of classes.',
};

// ── Parent Handbook (condensed policies) ──────────────────
export const handbookIntro =
  'Everything families need to know about daily routines, safety, and policies at Brixton\'s Little Haven. These guidelines help us keep every child safe, settled, and thriving.';

export const handbookSections = [
  {
    id: 'arrival',
    icon: 'wave',
    accent: 'sky',
    title: 'Arrival & separation',
    points: [
      'A smooth, positive arrival helps children feel safe and ready to learn. We ask parents and guardians to say goodbye at the designated drop-off area rather than inside the play area or classroom. It builds independence and confidence.',
      'Children may need a few sessions to adjust, and that is completely normal. Our staff are trained to support transitions with comfort items, gentle routines, and engaging activities.',
      'Tips for a smooth goodbye: keep it short, calm, and positive; reassure your child that you will come back; a small comfort item helps; and trust our team to take good care of your little one.',
    ],
  },
  {
    id: 'pickup',
    icon: 'shield',
    accent: 'coral',
    title: 'Drop-off & pick-up',
    points: [
      'Children are released only to authorized adults listed on their record. Please notify us in advance if someone else will pick up your child. Staff may request a valid ID before releasing a child.',
      'Late pick-up: a 15-minute grace period applies after dismissal time. After that, a fee of ₱100 covers the first 15 minutes and ₱50 each succeeding 15-minute interval. Extended supervision may be charged at ₱250 per hour when applicable.',
      'Early pick-up: a matching 15-minute grace period applies before regular dismissal time, with the same ₱100 and ₱50 fee schedule beyond it.',
      'These fees cover the additional staffing and supervision needed beyond regular session hours.',
    ],
  },
  {
    id: 'attendance',
    icon: 'calendar',
    accent: 'sun',
    title: 'Attendance & absences',
    points: [
      'Effective June 8, 2026: please report absences at least 2 hours before class. Late notice means the absence is recorded as unexcused.',
      'Three or more consecutive days of absence due to illness require a medical certificate, submitted on or before your child\'s return. For travel, please inform us at least 48 hours in advance; travel does not qualify for a pause, extension, or refund.',
      'We operate on a reserved-slot system: your child\'s classroom space, teacher allocation, and materials are reserved regardless of attendance. All absences count as consumed sessions, and there are no make-up classes, refunds, credits, extensions, or transfers to another day, month, program, or child.',
      'Crying, clinginess, or difficulty adjusting are normal and are not grounds for pausing enrollment. Consistent attendance is the best way to help your child settle in.',
    ],
  },
  {
    id: 'health',
    icon: 'heart',
    accent: 'leaf',
    title: 'Health & safety',
    points: [
      'Children who are not feeling well should remain at home. Fever, vomiting, diarrhea, or contagious infections require at least 24 hours of recovery before returning, and medical clearance may be required after contagious or prolonged illness.',
      'Please inform staff of any allergies. Medication is administered only when medically necessary and pre-approved.',
      'Pack a small, healthy snack and a labeled water bottle. Please avoid nuts and other common allergens.',
      'In an emergency, first aid is given and parents are contacted immediately. Emergency drills are practiced regularly.',
    ],
  },
  {
    id: 'uniforms',
    icon: 'bag',
    accent: 'berry',
    title: 'Uniforms & belongings',
    points: [
      'Program students wear the official uniform: regular school uniform Monday to Wednesday, PE uniform Thursday to Saturday.',
      'Label all personal belongings (bags, bottles, jackets, shoes, lunch containers) with your child\'s name, and pack an extra set of clothes for spills, water play, or messy activities.',
      'Please leave valuable toys, gadgets, and jewelry at home. Comfort items are welcome during the adjustment period with teacher approval. Items that disrupt learning are stored safely and returned at dismissal.',
      'Each child receives a school ID with a QR code used for check-in and check-out, worn at all times. IDs are provided at the parent\'s expense unless included free in your enrollment promo, like the Pre-K founding batch package.',
    ],
  },
  {
    id: 'communication',
    icon: 'device',
    accent: 'sky',
    title: 'Staying connected',
    points: [
      'Families receive real-time updates, attendance records, photos, and messages through the Kriyo parent app, plus news and highlights on our official Facebook page.',
      'Monthly progress reports track your child\'s learning and development, and individual parent-teacher meetings can be scheduled to discuss growth and needs.',
      'For academic, behavioral, or sensitive concerns, please go through proper channels and schedule a discussion rather than approaching teachers during active class hours.',
    ],
  },
  {
    id: 'privacy',
    icon: 'lock',
    accent: 'coral',
    title: 'Privacy & child protection',
    points: [
      'CCTV keeps our little ones safe while respecting everyone\'s privacy. Parents may request a staff-supervised viewing of their own child\'s footage; recording, screenshots, or sharing are not permitted, and other children remain unseen.',
      'With your consent, photos or short videos may be used for newsletters, classroom documentation, and our official pages. You can opt out during registration, and we respect your choice.',
      'All personal information, records, and family details are kept confidential and never shared with unauthorized parties without consent, unless required by law or to protect a child\'s safety.',
      'We do not tolerate any form of abuse, neglect, bullying, harassment, or discrimination. Every staff member upholds child protection practices at all times.',
    ],
  },
  {
    id: 'payments',
    icon: 'wallet',
    accent: 'sun',
    title: 'Fees & payments',
    points: [
      'Tuition is due on or before the due date. Children with unpaid balances may not attend classes until fees are settled.',
      'To reserve your child\'s slot for the next cycle, settle tuition on or before their last 2 remaining sessions. With limited slots and an active waiting list, unconfirmed slots may be released.',
      'We accept GCash, bank transfer (BPI and Security Bank), debit and credit cards at the center, and cash at the school office, Monday to Saturday, 7:00 AM to 7:00 PM. Please send a screenshot of e-payment confirmations for verification.',
      'Assessment fees, enrollment fees, and advance-paid tuition are non-refundable. Withdrawal requires written notice and does not entitle refunds, credits, or transfers of fees already paid.',
    ],
  },
];
