# Phase 1 — Audit & Design System Proposal
**Brixton's Little Haven · feature/scroll-world-redesign · 2026-07-12**
Status: awaiting Checkpoint A approval. No page has been restyled yet.

---

## 1. Design read

Reading this as: a **local-business marketing site for Filipino parents** (trust-first childcare audience), with a **warm, soft, playful-but-reassuring** language, evolving the existing cream/navy/coral brand on Tailwind v4 tokens + Fredoka/Nunito + motion. Redesign mode: **preserve** (brand, IA, routes, copy voice all stay; visuals mature).

Dials: `DESIGN_VARIANCE 6 · MOTION_INTENSITY 5 · VISUAL_DENSITY 3` — playful but never chaotic; a childcare brand must read calm and safe to a parent scanning on a phone.

## 2. What the audit found (140 findings across 6 parallel auditors)

**Keep (strengths):** the cream/navy/coral token foundation; the "No Yaya? We've got you." hero hook; content-file architecture (`content/site.js`); next/image usage with sizes/priority; motion components honoring reduced-motion; real local content and an honest conversion funnel; zero dead links; solid SEO/schema.

**Systemic problems (distilled):**

| # | Theme | Evidence |
|---|---|---|
| 1 | **Contrast failures on every primary CTA** | White on coral #EF6351 = 3.19:1 (AA needs 4.5). Also text-navy/40–60 combos at 2.4–4.1:1, coral small text on cream at ~3:1, footer white/40 at 3.6:1. |
| 2 | **Accent sprawl** | 3 tokens defined, ~17 Tailwind hue families actually used + raw hex (#0866FF). ProgramCard ships 7 colourways; PlaceholderImage a 9-stop rainbow. |
| 3 | **Cold navy hero slab on all 5 inner pages** | `from-navy to-navy/90` (gradient imperceptible) breaks the warm page and contradicts the brief; every page opens identically. |
| 4 | **Tailwind v4 regressions** | `hover:bg-opacity-90` is a removed utility → every primary button has NO hover state. `prose prose-navy` classes are dead (plugin not installed). |
| 5 | **Layout monotony** | 5 of 9 homepage sections are "centered header + uniform equal grid"; all inner pages share one hero + CTA-banner template; three-equal-cards feature rows. |
| 6 | **Emoji as icon system** | ~18 distinct emoji as functional icons; OS-inconsistent rendering, screen readers announce them, low-fidelity for a trust brand. |
| 7 | **Motion/a11y gaps** | Banned `window.addEventListener('scroll')` in Header; infinite spinner rings not covered by reduced-motion; mobile menu links tabbable while hidden; no `aria-current` nav state; FAQ accordion clips answers >384px; smooth-scroll unconditional. |
| 8 | **Typography debt** | Fonts via render-blocking Google Fonts `<link>` (no next/font, CLS on swap); `style={{fontFamily}}` inlined on ~30 headings; blog body 14px at 90+ chars/line; no text-wrap balance. |
| 9 | **Form is decorative** | `noValidate` + no JS validation = empty form submits and shows success. State colours (green/red/amber) bypass tokens. |
| 10 | **Copy discipline** | Same conversion action has 7+ labels ("Schedule FREE Assessment ✨" / "Book a Free Trial" / "Book a Visit" / "Get a Free Assessment"...); ~60 em-dashes in visible strings incl. SEO descriptions; shouting FREE caps; mixed UK/US spelling. |
| 11 | **Content liabilities** (user decision needed) | 3 live FAQ answers are literal `[PLACEHOLDER]` strings (sick-child policy, group size — the questions parents care most about); events section currently shows "closed until June 6" after reopening; blog claims "backed by research" with no citations. |

## 3. Brand kit (extracted & calibrated)

- **Name/voice:** Brixton's Little Haven — warm, direct, locally fluent ("No Yaya?"), parent-first. Tagline: *Learn • Play • Grow • Shine*.
- **Logo:** circular rainbow toys-and-book emblem. ⚠️ Current file is a JPG with black corners (masked by `rounded-full` everywhere, causes the LogoImage onError hack). Recommend re-export as transparent PNG/WebP.
- **Type:** keep **Fredoka** (display — rounded, friendly, already the brand) + **Nunito** (body). Migrate to `next/font` with proper fallback metrics.
- **Colour: "crayon-box, but disciplined."** Navy is the voice, cream is the room, coral is the hand you shake; the logo's rainbow lives on as *tints* for program/category colour-coding — never as competing accents.

### Validated token palette (all pairs pass WCAG AA — measured, not eyeballed)

```css
@theme {
  /* Base (unchanged) */
  --color-cream:      #FEF9F0;  /* page background */
  --color-navy:       #1A2744;  /* ink; 14.1:1 on cream */
  --color-navy-soft:  #44506A;  /* muted ink, replaces text-navy/50-70; 7.7:1 on cream */

  /* Brand accent — coral, now accessible */
  --color-coral:      #EF6351;  /* display/graphics/large text only (3.2:1) */
  --color-coral-deep: #C6402E;  /* button fills — white text = 5.0:1 AA */
  --color-coral-ink:  #B93A28;  /* small coral text on cream/white = 5.4:1; hover/active fills */
  --color-coral-tint: #FDEAE6;  /* soft surface; navy on it = 12.8:1 */

  /* Program/category accents (from the logo rainbow) — tint = surface, ink = AA text */
  --color-sun:        #F7C948;  --color-sun-tint:   #FCF3D9;  --color-sun-ink:   #8A6116;
  --color-sky:        #4A90D9;  --color-sky-tint:   #E3F0FA;  --color-sky-ink:   #2B6CB0;
  --color-leaf:       #7BB661;  --color-leaf-tint:  #E9F4E2;  --color-leaf-ink:  #3E7A2E;
  --color-berry:      #C86FA6;  --color-berry-tint: #F7E9F2;  --color-berry-ink: #9C4A7F;

  /* On-navy (footer/dark band) */
  --color-warm-white: #F5EFE4;  /* 12.9:1 on navy */
  --color-navy-muted: #B9C0D4;  /* 8.2:1 on navy — replaces white/40 */

  /* Typography (via next/font variables) */
  --font-heading: var(--font-fredoka), 'Comic Sans MS', cursive;
  --font-sans:    var(--font-nunito), 'Segoe UI', sans-serif;

  /* Radius system: buttons pill · cards 24px · inner cards/inputs 12px · images 16px */
  --radius-card: 1.5rem;  --radius-field: 0.75rem;  --radius-media: 1rem;

  /* Warm-tinted shadows (replace generic gray) */
  --shadow-soft: 0 2px 8px rgb(26 39 68 / 0.06), 0 8px 24px rgb(199 108 74 / 0.07);
  --shadow-lift: 0 4px 12px rgb(26 39 68 / 0.08), 0 16px 40px rgb(199 108 74 / 0.10);
}
```

Mapping: content accents `orange`/`amber`→`sun`, `purple`/`pink`→`berry`, `green`→`leaf`; `sky`,`coral` unchanged (content file keys stay; the component maps them — content contract untouched).

## 4. Component & section direction

- **Buttons:** primary = coral-deep fill, white text, pill, gentle lift on hover + `scale(0.98)` press, visible focus ring (navy ring on coral surfaces). Secondary = navy outline. One label per intent: **"Book a Free Trial"** everywhere for /contact; "See All Programs" for /programs.
- **Inner-page heroes:** retire the navy slab. Warm cream heroes with a soft tinted arch/scallop motif per page (sun for Programs, sky for Our Space, berry for Gallery...), left-aligned text, small friendly illustration of depth. Navy stays where it's strong: footer + one deliberate homepage band.
- **Cards:** warm-tinted shadows, tint surfaces instead of pure white where suitable, bottom-aligned CTAs, radius system applied. ProgramCard: accent-tint header band + accent-ink text, real icons.
- **Icons:** Phosphor (duotone/fill, rounded weight — fits the brand's softness) replacing all UI emoji, `aria-hidden`, mapped per pillar/program. Emoji stay only in genuinely expressive copy moments, not as icons.
- **Header:** scroll state via IntersectionObserver sentinel (kills the banned scroll listener), `aria-current="page"` + visual active state, mobile menu with `inert`/conditional render + grid-rows animation, real hover on CTA.
- **Footer:** navy anchor kept, text moves to warm-white/navy-muted (AA), simplified columns.
- **FAQ accordion:** replace max-height hack with grid-template-rows (no clipping, reduced-motion aware).
- **ContactForm:** real inline validation, token-mapped states (leaf = success, coral-ink = error), fixed dead hover, focus rings.
- **Section rhythm:** homepage's five "centered header + grid" sections diversify — photo strip becomes an overlapping polaroid cluster, pillars become an asymmetric 1+2, events a horizontal scroll-snap shelf, community a masonry wall. At least 4 layout families per page.
- **Motion:** keep FadeUp/Stagger language, cover ALL animation under reduced-motion (spinners, zooms, smooth-scroll), soften the 0.5s hero delay ladder. The scroll-world hero (Phase 4) replaces the logo-in-rings visual.
- **Typography:** next/font migration; `font-heading` utility replaces ~30 inline styles; blog body → 17–18px at 65ch with real h2 headings (fix the brittle parser); `text-wrap: balance` on headings.

## 5. Explicitly preserved
Routes/slugs/IA, nav labels, all SEO metadata & JSON-LD (em-dash cleanup optional, below), all photos & their consent posture, content-file architecture, brand fonts, "No Yaya?" hero copy, conversion funnel, blog prose (except structural rendering).

## 6. Open decisions for the owner (content, not design — none block Phase 2)
1. **FAQ placeholders** (bring-list, sick-child policy, group size): provide real answers, or hide those three until ready? (Recommend hide — placeholders damage trust.)
2. **Stale events**: the homepage currently shows "closed until June 6". Refresh content, or add date-based auto-expiry so old events drop off? (Recommend auto-expiry.)
3. **Em-dash / caps-FREE / spelling cleanup** in visible copy & meta descriptions: approve a light copy-polish pass? (Recommended; zero meaning changes.)
4. **CTA unification** to "Book a Free Trial": approve the single label?
5. **Logo re-export** as transparent PNG (kills black-corner hack): can you provide, or should I derive one from logo.jpg?
6. **Blog "backed by research" claims**: add citations, soften wording, or leave as-is?

## 7. Phase mapping
Phase 2 (scroll-world intake, no credits) → Phase 3 (asset generation, Checkpoint B/C) → Phase 4 (hero wiring, Checkpoint D) → **Phase 5 applies everything in §4 site-wide** (Checkpoint E). Token file + next/font land at the start of Phase 4 (hero needs them) or Phase 5, whichever comes first.
