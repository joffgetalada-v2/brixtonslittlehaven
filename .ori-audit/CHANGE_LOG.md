# Brixton's Little Haven — Redesign + Scroll-World Audit Trail

Branch: `feature/scroll-world-redesign`. Git is the canonical revert layer; this log is the human-readable narrative.

---

## Phase 0 — Environment setup & one-scene dry-run (2026-07-12)

- Verified repo: Next.js 16.2.6 (App Router, JSX), Tailwind v4, `motion`; homepage entry `app/page.jsx`; routes: home, programs, about, faq, contact, gallery, blog, blog/[slug], privacy-policy.
- Verified skills installed: `scroll-world`, `design-taste-frontend`, `redesign-existing-projects`, `brandkit`.
- Installed Higgsfield CLI v1.1.13. Note: the npm postinstall is broken on this machine (GNU tar from Git Bash misparses `C:\` paths as remote hosts, and this is a Windows-on-ARM box → `hf_1.1.13_windows_arm64.tar.gz`). Workaround: `npm i -g @higgsfield/cli --ignore-scripts`, then downloaded the vendored binary from GitHub releases and extracted with Windows native `tar.exe`.
- Installed ffmpeg/ffprobe 8.1.2 via `winget install Gyan.FFmpeg`. New shells need a PATH refresh from registry (winget updated the user PATH after the session started).
- Created branch `feature/scroll-world-redesign` off `master` (b4c89b2).
- Higgsfield auth: `higgsfield auth login` (browser OAuth) run by the user.
- Dry-run (Checkpoint 0 gate): one Playgroup diorama still (gpt_image_2, 1k) → one Seedance 2.0 image-to-video clip (~5s) → ffmpeg first/last frame extraction + ffprobe → scrub check in the skill's standalone template. Results and measured credit costs recorded below before any multi-scene generation.

### Dry-run results (all PASS — 17 credits total, 1,810 → 1,793)

- Workspace: "Private", plan **max**, 1,810 credits at start. Models confirmed: `gpt_image_2`, `seedance_2_0` (+ `seedance_2_0_mini`, `kling3_0` fallbacks). Gotcha: after OAuth login the CLI has **no workspace selected** — must run `higgsfield workspace set 608fcb2e-e5e3-4f8d-8254-8c87a17f182c` once or every generate fails with "No workspace selected".
- **Still** (gpt_image_2, 3:2, 1k, medium): **2 credits**. Warm clay-diorama playgroup room, brand-approximate palette (cream/coral/sky/yellow/green/purple), stylised clay figures only, no text. Very on-brief even at draft quality.
- **Clip** (seedance_2_0, std, 480p, 16:9, 5s, `--start-image` = still): **15 credits**. Clean continuous dive from wide establishing shot into the drawing table; h264 864×496, 24fps, 121 frames.
- **ffmpeg/ffprobe**: first+last frame extraction OK (the seam-rule operation); scrub encode OK (`-g 8 -crf 20 -an unsharp faststart` → 1.78 MB).
- **Scrub check** (headless Chrome via playwright-core, static server deliberately WITHOUT byte-range support): PASS — blob src, `seekable.end(0)`=5.04 (full clip), currentTime tracked scroll linearly at 0/20/40/60/80% scroll (0→4.02s), monotonic, zero console errors.
- Dry-run artifacts live in the session scratchpad (`scratchpad/dryrun/`), not the repo.

**Measured estimate for the full 6-scene flight** (6 stills + 6 dives + 5 connectors): stills ≈ 24–36 cr; one clean video pass ≈ 280–365 cr (1080p estimated from the 480p measurement + Max plan's ~22 cr/video anchor); with the 3× iteration buffer ≈ **~950–1,200 credits** — fits the 1,793 remaining. A 5× buffer could exceed the balance; mitigation: previz on `seedance_2_0_mini`, or measure the first production still+dive before batching.

→ **Checkpoint 0: awaiting user approval before any multi-scene generation.**

---

## Phase 1 — Audit & design system (2026-07-12) — Checkpoint 0 approved by user

- Loaded skills: `redesign-existing-projects`, `design-taste-frontend`, `brandkit` (strategy framework only — no image generation, zero credits spent this phase).
- Ran a 6-agent parallel audit workflow over the whole site (homepage, inner pages ×2 slices, components+css, content voice, a11y/motion lens): **140 findings**, distilled into 11 systemic themes in `PHASE1_DESIGN_PROPOSAL.md`.
- Key systemic findings: white-on-coral CTAs fail AA (3.19:1); ~17 accent hue families vs 3 tokens; cold navy hero slab on all inner pages; Tailwind v4 removed `bg-opacity-*` → all primary buttons lost hover states; ~18 emoji as the icon system; banned scroll listener in Header; FAQ accordion clips long answers; fonts not on next/font; 3 live `[PLACEHOLDER]` FAQ answers; stale events section showing a closure notice.
- Synthesized brand kit + full token palette with **mathematically validated WCAG AA pairs** (contrast computed in node, all pass): coral-deep #C6402E button fill (5.0:1), navy-soft #44506A muted ink (7.7:1), sun/sky/leaf/berry tint+ink accent system derived from the logo rainbow.
- Wrote `PHASE1_DESIGN_PROPOSAL.md` (design read, dials 6/5/3, tokens, component direction, preservation list, 6 owner decisions on content).
→ **Checkpoint A: awaiting user approval of design direction + brand kit before any page is restyled.**

---

## Phase 2 — Scroll-world intake & pre-flight (2026-07-12) — Checkpoint A approved (all 4 recommendations)

- Checkpoint A decisions: design direction approved; FAQ placeholders to be hidden until real answers; events get date-based auto-expiry; full copy-polish pass approved (em-dashes, CTA unification to "Book a Free Trial", caps/spelling).
- Invoked `/scroll-world`; wrote `PHASE2_SCROLLWORLD_PLAN.md`: 6 scenes, architecture B, seedance_2_0 chain, byte-identical style preamble with Checkpoint A palette, all still/dive/connector prompts finalized, engine copy per section (em-dash-free), execution order with measured-first batching.
- Checkpoint B decisions: generation approved (pause ceiling ~1,400 cr); **desktop + mobile beta**; 6 scenes confirmed; **HTML-overlay** for logo/tagline (no baked text in scenes).

## Phase 3 — Asset generation (2026-07-12) — Checkpoint B approved

- **Spend: 699 credits** (6 stills @7 = 42; 6 dives @72 = 432; 5 connectors @45 = 225). Failed NSFW jobs cost 0. Balance: 1,810 → **1,094** (716 total incl. Phase 0 dry run).
- All 6 stills passed cohesion review on the first roll (one clay world, same angle/palette/light, blank sign + chalkboard, stylised figures only).
- Dives: measured-first (dive 1 = 72 cr) then batched. Dives 3 & 5 hit Seedance's NSFW false-positive on innocuous interiors; 5 passed on plain re-roll, 3 passed with reworded safety-affirming prompt ("wholesome, tasteful, family-friendly children's classroom"). Playbook worked as planned.
- Connectors: all 5 frame-locked (start = dive N's actual last frame, end = dive N+1's actual first frame). Pipelined 1/4/5 during dive 3's re-roll.
- Encodes: 22 files — 11 desktop masters (1080p, `-g 8 -crf 20 -an` unsharp faststart, 4.5–10.5 MB each) + 11 mobile-beta siblings (720p, `-g 4 -crf 23`, ~half size). Total asset weight ≈ **101 MB** (61 MB desktop / 40 MB mobile) + 6 poster stills.
- **Seam QA (headless Chrome, range-less server):** all 11 clips blob-loaded; at every one of the 10 seams the outgoing clip sits at its final frames and the incoming starts at ~0 — currentTime tracks scroll exactly; zero console errors. Reduced-motion falls back to stills (0 videos, 11 stills). Mobile emulation serves the `-m.mp4` variants. Seam screenshots SSIM 0.62–0.95; the low scores are copy-overlay fades + connector convergence inside the crossfade band, no structural pops (eyeballed s4 and s10).
- Preview: `scratchpad/scrollworld/preview/` (index.html + serve.js). Assets move to `/public` in Phase 4 after Checkpoint C.
→ **Checkpoint C: awaiting user review of the raw flight before wiring into the site.**

---

## Phase 4 — Hero wired into the homepage (2026-07-12) — Checkpoint C approved

- Assets: 22 clips + 6 WebP posters (122-158 KB each) → `public/scrollworld/` (~103 MB, commit `3d1aec3`). Engine vendored to `components/scrollworld/scrub-engine.js`.
- **Two local engine patches** (documented inline): (1) *track-offset anchoring* — engine assumed the world starts at scrollY 0, but the sticky site header puts it at ~68px, so all segment math now anchors to the track's document offset; (2) *exit-fade* — engine UI is position:fixed and (standalone) never yields; now the whole overlay dissolves over 0.7vh as the visitor scrolls past the last segment, handing the page below over cleanly.
- `ScrollWorldHero.jsx` ('use client'): approved engine config; SSR fallback = priority poster + first-scene copy inside an exactly-reserved 13.9×100vh container (zero CLS — measured hero height 11,120px == reserved); engine replaces fallback on mount; React 19 dev double-effect guard. Engine topbar suppressed (site Header stays); route rail, per-scene copy, finale CTA remain.
- `layout.jsx`: next/font migration (Fredoka + Nunito self-hosted, variables wired to @theme); Google Fonts <link>/preconnects removed. Verified: zero fonts.g* requests.
- `globals.css`: Checkpoint A token palette + radius/shadow system + `.sw-root` hero theme.
- `page.jsx`: old hero (logo-in-rings) replaced by `<ScrollWorldHero />` + "No Yaya? We've got you." intro band (original copy preserved verbatim, single h1, CTAs unified to "Book a Free Trial" / "See All Programs" on coral-deep AA fill); meta description em-dash/caps polished. Rest of the homepage untouched.
- **Verification (production build, headless Chrome):** build clean (16 routes); scrub frame-accurate across seam 1 with header offset (dive1 t=8.03 → conn1 t=0.55); single h1; reduced-motion = stills only; mobile serves `-m.mp4`; exit fade measured 1 → 0.5 → 0/hidden; only console error is Vercel Analytics' expected localhost 404.
→ **Checkpoint D: user reviews the homepage with the live hero.**

---

## Phase 5 — Design system rolled out site-wide (2026-07-12) — Checkpoint D approved

**Foundations:**
- Phosphor icon registry (`components/Icon.jsx`, duotone, SSR entry, ~23 semantic names) replaces all ~18 UI emoji; content files reference icons by name.
- Transparent circular `public/logo.png` derived from logo.jpg via ffmpeg alpha mask; `LogoImage` is now a plain server component (onError hack deleted); `MessengerButton` de-clientized.
- `globals.css`: focus ring switched to `currentColor` (adapts to every surface, no radius override), smooth-scroll gated behind motion-safe, blanket reduced-motion kill, dead blob CSS removed.
- Shared components rebuilt: **Header** (IntersectionObserver stuck-detection replaces the banned scroll listener; `aria-current` + visual active nav state; mobile menu via grid-rows animation + `inert`; live hover on CTA), **Footer** (warm-white/navy-muted AA text, icons, sun hover), **ProgramCard** (accent tints + AA inks, real icons, includes-crash guard), **FaqAccordion** (grid-rows animation, no clipping), **ContactForm** (real inline validation with per-field errors, token states, fixed dead hover), **PageHero** (new warm tinted inner-page hero). `HeroBlobs` and `PlaceholderImage` deleted (unused).
- Content: FAQ drafts hidden via `published: false` + `publishedFaqs` export (5 live questions); events get `expires` dates + `activeEvents()` helper (all 4 current entries are stale → homepage shows a friendly follow-us-on-Facebook fallback); full copy polish (zero visible em/en-dashes site-wide incl. metadata, shouting FREE→free, US spelling); `lib/format.js` dedupes formatDate.
**Pages:** all 9 routes restyled. Warm PageHero replaces the navy slab everywhere (sun=Programs, sky=About, berry=Gallery, leaf=Blog, coral=FAQ/Contact); category pills → real h2s; blog index gets a featured-post layout; blog article body 18px/68ch with real h2s from a robust parser + labeled breadcrumb; privacy dead `prose` classes removed + unintended `follow:false` fixed; homepage lower sections: pillars (sr-only h2, icons, AA), events scroll-snap shelf + empty state, community masonry, coral-deep CTA band ("Slots fill up quickly."), unified CTA labels.
**Note:** the 4-agent rollout workflow died mid-flight on a session limit (2.5 of 8 files done: programs/gallery/blog-index complete, homepage partial); the remainder was completed inline to the same spec.
**Acceptance QA (production build, headless):** all 9 routes 200 with single h1, ZERO visible em/en-dashes, aria-current on every nav page, zero dead links; FAQ shows exactly 5 questions; events fallback renders; article renders 6 real h2s; focus ring 2px solid; reduced-motion = stills only; mobile encodes served; hero still CLS-exact (11,120px) and scrub-accurate. Only console error = Vercel Analytics' expected localhost 404.
→ **Checkpoint E: final review before merge. Asset weight: ~103 MB scroll-world clips (lazy blob-loaded) + ~1 MB logo + self-hosted fonts.**

---

## Phase 6 — Content refresh from 2026 enrollment materials (2026-07-12)

Source: 16 official flyers/infographics supplied by the user (Pre-K curriculum 2026-2027, enrollment promo, program packages & rates, policies, parent handbook, Term 2 playgroup calendar). User pre-approved all placements ("no need for permission and everything is approved").

**Data layer (`content/site.js`):**
- Business facts corrected from flyers: hours 8AM→**7:00 AM**-7:00 PM (updated in FAQ, homepage find-us, hero tag, contact metadata, LocalBusiness JSON-LD), address now names **AGC Building**, added Instagram + Viber/WhatsApp.
- New exports: `packageGroups` (full rate card: Curious Fox ₱9,000/4,800/4,800/3,800 · Bumblebee Buddies ₱6,000/3,500/3,500/2,500 · Busy Butterflies ₱250/hr · School Readiness Track ₱12,500/6,800/6,800/5,500 · Clever Squirrels ₱9,000/4,800/4,800 · Wise Owls ₱15,999/8,999 · Little Foxes ₱13,999/7,999), `flexiblePass` (₱250/hr · ₱899 half-day · ₱1,299 daily), `prek` (mission, 8 pillars, 4 curriculum domains with full area lists, 8-block daily routine, freebies, no-fees, 5%/15% savings), `enrollmentSteps` (₱1,000 assessment → schedule → free 2-hr trial → choose program), `enrollmentRequirements`, `handbookSections` (8 condensed policy sections incl. late-pickup fee scale ₱100/₱50/₱250-hr).
- FAQ: the 3 hidden drafts now published with **recommended answers** (bring list + sick-child policy sourced from the policy flyers; group sizes phrased safely pending client confirmation) + 5 new FAQs (costs, assessment fee, documents, no make-ups/refunds, parent updates). 13 questions live.
- Events: stale entries removed; real entries added — Pre-K founding batch (links to /pre-kindergarten, no expiry), Nutrition Prince & Princess 2026 (expires 2026-07-31), Parada ng Munting Bayani (expires 2026-08-31).
- Program card "Play + Learn" renamed to **Pre-Kindergarten** (ages 3-5, 4 hrs) with link to the new page.

**New pages:**
- **/pre-kindergarten** — founding-batch intro + no-fees checklist, 8 pillars, curriculum domain cards (Language & Literacy, Math & Logic, Science & Discovery, Writing & Fine Motor), numbered daily routine, tuition + savings + freebies (#tuition anchor), 4-step enrollment + requirements, CTA band. Service JSON-LD. Added to nav ("Pre-K"), sitemap (0.9).
- **/parent-handbook** — 8 policy sections with anchor chips (arrival/separation, pick-up + late fees, attendance/reserved-slot, health, uniforms/belongings/ID, Kriyo communication, CCTV/privacy/child protection, payments). Linked from footer bottom bar + FAQ. Sitemap 0.6. Payment account numbers deliberately NOT published on the site.

**Higgsfield artwork (10 stills, gpt_image_2, locked clay style preamble, stylised figures only, zero in-image text; 70 cr spent, ~1,024 remaining):**
- Page heroes: `prek-hero.webp` (classroom island), `handbook-hero.webp` (drop-off scene) → `public/images/illustrations/`.
- 6 package mascots (fox, bee, butterfly, star, squirrel, owl) → rate cards.
- 2 event cards: `nutrition-prince-princess.webp`, `parada-ng-munting-bayani.webp` → `public/images/events/`.
- All ≤116 KB. Gotchas hit: plan caps at 8 concurrent jobs (extras rejected instantly, 0 cr); one transient generation failure re-rolled clean.

**Other wiring:** Programs page gains "Packages & monthly rates" (#rates) + Flexible Care Pass + updated metadata; `PackageCard` component; ProgramCard optional href; homepage event cards support date + link; contact page lists Viber/WhatsApp + Instagram; footer Instagram + Parent Handbook link; `sameAs` includes Instagram.

**QA (production build, headless):** 18 routes build clean; all 10 public routes 200 with single h1, zero dashes, zero dead links, zero broken images; 13 FAQs render; events shelf shows 3 linked/labeled cards; rates verified on-page (₱12,500 etc., 7 mascot images); every whileInView section verified VISIBLE on scroll (blank areas in full-page screenshots are an IntersectionObserver capture artifact only); sole console error remains Vercel Analytics' localhost 404. Adversarial review workflow run over the diff before committing: 6 confirmed findings, all fixed — 5 legacy "free assessment" claims (contact metadata ×2, gallery CTA, programs CTA, blog post) corrected to paid ₱1,000 assessment + free 2-hr trial, and the free-ID-vs-parent-expense contradiction reconciled in the handbook wording.

**Flagged for user:** hours changed to 7 AM on flyer authority; "AGC Building" used (one flyer says ACE — majority wins); TikTok mentioned on flyers but no URL known, so not linked; group-sizes FAQ is a recommendation pending client's real numbers.

---

## Phase 7 — Full flyer-fidelity audit + responsive/cross-browser/SEO hardening (2026-07-18)

User directive: flyers are the ONLY source of truth (client has no prior website); audit everything, then commit and push to main (explicit user authorization for the production push).

**Canonical fact sheet:** `.ori-audit/FLYER_FACTS.md` now holds the full transcription of all 16 flyers — every rate, age, time, policy, and promo. All future copy changes check against it.

**Flyer-consistency fixes (workflow-confirmed + inline audit, 16 items):**
- Killed every remaining invented/legacy claim: "The first assessment is free" and "book a free visit" (blog posts), "ages 12 months to 15 years" / "3 - 15 years" / "Ages 1-15" / "3 years - Adults" (site.js, homepage metadata + CTA band, hero engine copy + SSR frame, ContactForm options, posts). Ages now flyer-true: playgroup/care 1-5, Pre-K 3-5, tutorials/ESL "3 and up".
- Drop-In Care age range aligned to its own rate card (1-5). Integrated Care now "1 - 5 years, up to 12 hrs per session".
- Replaced the non-flyer "Playgroup + Academic Tutorial Combo" card with the flyer-backed **After-School Care** program card; ContactForm program options updated to the real lineup.
- Pre-K daily routine now all 10 flyer blocks (added "Introducing self" and "Independence & responsibility skills").
- Parent handbook: early pick-up fee policy added (matching flyer), attendance section stamped "effective June 8, 2026" + travel-no-refund + full no-transfers wording.
- Pre-K page: full learning-materials + hygiene-kit checklist (from the Step-by-Step flyer) and the "Preparing confident learners for Kindergarten, Grade 1, and beyond" line.

**SEO foundation:** JSON-LD geo corrected (longitude 124.0 → 123.9494 city-level; street now AGC Building), priceRange added, keywords expanded (pre-kindergarten/preschool/daycare + geo variants), og:image upgraded from square logo to a 1200x630 card (clay exterior + logo) installed as file-based `app/opengraph-image.jpg` so every route inherits it (page-level openGraph objects had silently dropped the config image), twitter card → summary_large_image. All 11 routes have unique title/description/canonical; robots + sitemap verified.

**Responsive & cross-browser (8 fixes):** form fields 16px + min-w-0 (kills iOS focus-zoom AND a real 24-33px horizontal overflow on /contact found in all three engines — the select's longest option set the min width); hero SSR frame h-screen → h-svh; hero vh reservation handed to the engine after mount (fixes phone URL-bar gap); route-rail dots 28→40px touch targets; Best Value badge and event dates 10-11px → 12px; handbook chips ≥40px tall. **Verified: Chromium + Firefox + WebKit (real engines) × desktop + 390px mobile × 10 routes = all clean** (status, single h1, no horizontal overflow, no broken images, no page errors).

**Final QA:** build green (19 static outputs), 13 FAQs, 3 event cards, 7 mascots, 10 Pre-K routine blocks, zero dashes/dead links. → Pushed to master per user instruction.

---

## Phase 8 — Production "static hero" fix (2026-07-18)

User report: the live site's hero read as static images, unlike the demo. Root cause was NOT a code break (local scrub QA passed): Vercel serves the mp4s to this region at only 78-266 KB/s even on CDN HIT (sin1 edge), so the 8.4 MB first dive kept real visitors on poster stills for 30-100+ seconds. Localhost QA was instant, masking it.

**Fix (commit d0bd825):**
- All 22 clips re-encoded from the retained Phase 3 raw sources: desktop 1080p CRF 25 `-g 12`, mobile 720p CRF 26 `-g 8`. Chain 101 MB → **48.7 MB**; first clip 8.4 → 3.7 MB (desktop), 4.7 → 2.2 MB (mobile). SSIM vs old masters 0.986; frame-locked seams unaffected (same sources, same filters).
- First clip preloaded from SSR HTML. GOTCHA: `<link rel="preload" as="fetch">` WITHOUT `crossorigin` does NOT match the engine's `fetch()` and double-downloads (verified: 2 requests); `crossorigin="anonymous"` fixes the match (verified: 1 request). Media queries mirror the engine's `isMobile()` (max-width 860px / coarse pointer).
- Engine LOCAL PATCH #3: `.sw-loading` "Loading the flight" chip — arms after 500ms, dismisses on first `loadedmetadata`, suppressed under reduced motion, dropped past the exit fade.

**Still true / recommended to the user:** Vercel is not a video CDN; for instant loads in PH, move `/scrollworld/vid/*` to a real media host (e.g. Cloudflare R2 behind its Manila edge) and point the CONFIG urls there. Custom domain brixtonslittlehaven.com is NOT connected (DNS dead); production runs on brixtonslittlehaven.vercel.app.

---

## Phase 9 — Production-readiness + AdSense-readiness (2026-07-18)

- **Contact form silent-loss bug fixed:** with no NEXT_PUBLIC_FORMSPREE_ID (prod's current state) the form showed a dev "Demo mode" banner and FAKED a success message while inquiries went nowhere. Now it renders a direct-contact panel (Messenger / call / email) instead; the real form activates the moment the env var is set in Vercel.
- **Branded 404** (app/not-found.jsx, fox mascot, home/programs/contact links).
- **Favicons:** metadata.icons pointed at the 1 MB logo.png; replaced with file-based app/icon.png (192, 75 KB) + app/apple-icon.png (180, 67 KB) alongside the existing favicon.ico.
- **AdSense scaffolding (one-line activation):** `adsense.publisherId` in content/site.js gates (a) the sitewide adsbygoogle script in layout, (b) /ads.txt via app/ads.txt/route.js (returns a real 404 while blank; route kept dynamic because force-static strips the 404 status; deleted a stale placeholder public/ads.txt that shadowed the route).
- **Cookie notice** (components/CookieNotice.jsx): dismissible, localStorage, PH DPA-appropriate notice (not a consent gate — analytics is cookieless and ads are off). EEA/UK targeting would need a Google-certified CMP (AdSense Privacy & messaging).
- **Privacy policy:** "may display" AdSense wording (accurate pre-approval), third-party-vendors sentence, Data Privacy Act of 2012 (RA 10173) + NPC in Your Rights, date bumped.
- **QA:** internal-link crawl (14 unique links, 0 broken), branded 404 verified, cookie notice shows/dismisses/persists, no adsbygoogle script while blank, icon links point at sized files, contact fallback verified. Build green.
- **AdSense to-dos that are the CLIENT's (documented for the user):** connect the custom domain first (AdSense does not accept *.vercel.app subdomains), then apply, then paste the ca-pub ID into content/site.js.
