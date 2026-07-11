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
