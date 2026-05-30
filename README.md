# Brixton's Little Haven — Website

Marketing website for **Brixton's Little Haven**, an indoor childcare, playgroup, and tutorial center in Lapu-Lapu City, Philippines.

Built with Next.js 16 (App Router, JavaScript), Tailwind CSS v4, and Framer Motion.

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (must pass with no errors)
```

---

## How to Edit Content

**All text, programs, contact details, and business info live in one file:**

```
content/site.js
```

Open that file and edit any of these exports:

| Export | What it controls |
|---|---|
| `business` | Name, tagline, logo path, phone, email, Facebook, address, hours, SEO description |
| `pillars` | The 3 value-proposition cards (Safe / Structured / Growth) |
| `programs` | All 7 programs — title, age range, description, includes list, accent color |
| `faqs` | FAQ accordion questions and answers |
| `galleryImages` | Gallery photo list — set `src` to add real photos |
| `navLinks` | Header and footer navigation links |

**No other file needs to be touched for routine content updates.**

---

## How to Add the Real Logo

1. Save the circular colorful logo as **`public/logo.png`** (PNG, at least 400×400 px recommended).
2. Open `content/site.js` and change:
   ```js
   logo: '/logo.svg',   // ← placeholder
   ```
   to:
   ```js
   logo: '/logo.png',   // ← real logo
   ```
3. Run `npm run build` and redeploy.

The logo is used in the header, footer, hero, favicon, and Open Graph image — all from that single reference.

---

## How to Add Real Gallery Photos

1. Create the folder `public/gallery/` and drop your photos in (e.g. `kids-playing.jpg`).
2. In `content/site.js`, find the `galleryImages` array.
3. Update each entry's `src` from `null` to the file path:
   ```js
   { id: 'g1', src: '/gallery/kids-playing.jpg', alt: 'Children doing arts and crafts', label: 'Arts & Crafts' },
   ```
4. Repeat for each photo slot. Leaving `src: null` shows a branded placeholder tile.

---

## How to Connect Formspree (Contact Form)

The contact form works in **demo mode** by default (shows a success message but doesn't send email).

To connect it to real email delivery:

1. Sign up at [formspree.io](https://formspree.io) (free plan allows 50 submissions/month).
2. Create a new form — copy the **Form ID** (looks like `xpzgkwya`).
3. On Vercel (or locally in `.env.local`), add the environment variable:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xpzgkwya
   ```
4. Redeploy — the form will now send email to your Formspree-linked address.

Alternatively, replace Formspree with [Web3Forms](https://web3forms.com) or any `fetch`-compatible form API by editing `components/ContactForm.jsx`.

---

## Deploy to Vercel (Recommended)

### Step-by-step

1. **Push to GitHub**
   ```bash
   git init          # if not already a git repo
   git add .
   git commit -m "Initial site build"
   git remote add origin https://github.com/YOUR_USERNAME/brixtonslittlehaven.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click **"Import Git Repository"** and select your repo
   - Framework: Next.js (auto-detected)
   - Click **Deploy** — first deploy takes ~2 minutes

3. **Add environment variable** (for the contact form)
   - In Vercel dashboard → Project → Settings → Environment Variables
   - Add `NEXT_PUBLIC_FORMSPREE_ID` = your Formspree form ID

4. **Add a custom domain**
   - Vercel dashboard → Project → Settings → Domains
   - Add your domain (e.g. `brixtonslittlehaven.com`)
   - Follow the DNS instructions for your registrar

### Subsequent deploys

Every `git push` to `main` automatically triggers a new Vercel deploy.

### Vercel plan note

> Vercel's free **Hobby plan** is for personal/non-commercial use only. For a business website, consider:
> - **Vercel Pro** (~$20/month) — supports commercial use
> - **Cloudflare Pages** — free, supports commercial use, deploy with `npm run build`
> - **Netlify** — free tier supports commercial use with reasonable limits

---

## Deploy to Cloudflare Pages / Netlify (Alternative, Free)

Both platforms support this Next.js project with zero configuration:

**Cloudflare Pages:**
1. Push to GitHub
2. Cloudflare dashboard → Pages → Create project → Connect to GitHub
3. Build command: `npm run build`
4. Output directory: `.next`
5. Add `NEXT_PUBLIC_FORMSPREE_ID` in environment variables

**Netlify:**
1. Push to GitHub
2. netlify.com → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variable in Site settings → Environment variables

---

## Project Structure

```
brixtonslittlehaven/
├── content/
│   └── site.js           ← ALL business content lives here
├── app/
│   ├── layout.jsx         ← Root layout: fonts, header, footer, JSON-LD
│   ├── page.jsx           ← Home page
│   ├── programs/page.jsx  ← Programs page
│   ├── about/page.jsx     ← Our Space page
│   ├── gallery/page.jsx   ← Gallery page
│   ├── faq/page.jsx       ← FAQ page
│   ├── contact/page.jsx   ← Contact page
│   ├── sitemap.js         ← Auto-generates /sitemap.xml
│   ├── robots.js          ← Auto-generates /robots.txt
│   └── globals.css        ← Brand colors and base styles (Tailwind v4)
├── components/
│   ├── Header.jsx         ← Sticky nav with mobile menu
│   ├── Footer.jsx         ← Footer
│   ├── LogoImage.jsx      ← Client wrapper for logo (handles onError)
│   ├── ProgramCard.jsx    ← Reusable program card
│   ├── PlaceholderImage.jsx ← Gallery tile (real photo or gradient placeholder)
│   ├── ContactForm.jsx    ← Formspree contact form (client component)
│   ├── FaqAccordion.jsx   ← Accessible accordion (client component)
│   ├── MessengerButton.jsx ← Sticky mobile Messenger button
│   └── motion.jsx         ← Framer Motion animation primitives
└── public/
    └── logo.svg           ← Placeholder logo (replace with logo.png)
```

---

## Animations (Framer Motion)

- **FadeUp** — fades and slides individual sections into view on scroll
- **StaggerGrid / StaggerItem** — staggers child card reveals with a delay
- **HeroBlobs** — subtle parallax on hero background shapes
- **HoverButton** — scale/lift on hover

All animations respect `prefers-reduced-motion` — users with that preference see instant transitions instead.

---

## SEO Features

- Per-page `<title>` and `<meta description>` via Next.js `metadata` exports
- Open Graph tags using the logo
- **LocalBusiness JSON-LD** structured data in the root layout
- Auto-generated `/sitemap.xml` and `/robots.txt`
- Semantic HTML with ARIA roles and `alt` text on all images
