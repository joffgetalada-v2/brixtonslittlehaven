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
