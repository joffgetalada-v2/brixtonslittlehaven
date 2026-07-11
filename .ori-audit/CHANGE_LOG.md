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

### Dry-run results

_(pending)_
