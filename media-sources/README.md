# Media sources (masters)

Original, un-recompressed renders kept **outside `public/`** so they are versioned and
recoverable but never shipped to visitors. Nothing in the app imports from this folder.

> The Higgsfield subscription that produced these clips has been cancelled, so these files
> are the only remaining copies of the hero-flight **video** renders. Do not delete them:
> every future re-encode of the flight has to start here. (The six poster stills are a
> separate case — see "Not archived here" below.)

## `scrollworld/` — hero flight masters

Twelve files downloaded from Higgsfield (originally named `hf_<date>_<time>_<uuid>.mp4`,
renamed here to say what they actually are). Eleven of them are the sources for the clips
the site already ships in `public/scrollworld/vid/`; the twelfth is a discarded test render.

| Master | Ships as | Scene |
| --- | --- | --- |
| `dive1-welcome.mp4` | `dive1.mp4` / `dive1-m.mp4` | Storefront exterior, pushes through the entrance |
| `conn1-welcome-playgroup.mp4` | `conn1.mp4` / `conn1-m.mp4` | Hallway → playgroup building |
| `dive2-playgroup.mp4` | `dive2.mp4` / `dive2-m.mp4` | Playgroup: ball pit, slide, toys |
| `conn2-playgroup-arts.mp4` | `conn2.mp4` / `conn2-m.mp4` | Playgroup → arts room |
| `dive3-arts.mp4` | `dive3.mp4` / `dive3-m.mp4` | Arts & crafts: easels, handprints |
| `conn3-arts-chefs.mp4` | `conn3.mp4` / `conn3-m.mp4` | Arts → little house |
| `dive4-chefs.mp4` | `dive4.mp4` / `dive4-m.mp4` | Little chefs: kitchen |
| `conn4-chefs-tutorials.mp4` | `conn4.mp4` / `conn4-m.mp4` | Kitchen → tutorial room |
| `dive5-tutorials.mp4` | `dive5.mp4` / `dive5-m.mp4` | Tutorials: reading corner, desks |
| `conn5-tutorials-finale.mp4` | `conn5.mp4` / `conn5-m.mp4` | Tutorial window → whole island |
| `dive6-finale.mp4` | `dive6.mp4` / `dive6-m.mp4` | Finale: whole connected island |
| `unused-playgroup-test-864x496.mp4` | — | Early 864x496 / 5s playgroup test, superseded |

The flight order above is load-bearing: each connector was generated from the frames of the
dives on either side of it, so reordering them breaks the transitions. Order was
re-derived from frame matching alone and is unambiguous — a clip matches its true
neighbour far more closely than any other candidate.

### Known seam imperfections

The chain is *nearly* frame-locked, not perfectly. Worth knowing so these are not mistaken
for a regression someone introduced:

- **Each dive overshoots its connector's seed by ~2 frames.** The connectors were seeded
  from about frame 190 of the preceding dive, but the dives run to frame 192 and the camera
  keeps drifting, so every dive→connector boundary carries a small camera jump. The engine's
  crossfade covers it.
- **`conn2` → `dive3` is not frame-locked at all.** `conn2` ends with the arts room sitting
  in a pastel patchwork countryside with sky and clouds; `dive3` opens on the same room
  floating in a blank cream void. It is a background swap, not a camera move, and no frame
  anywhere in `conn2` matches `dive3`'s opening. This ships today and reads as a dissolve.
  Regenerating `dive3` or `conn2` is the only real fix.

The other four connector→dive seams are genuinely frame-locked.

## Why the masters are not served directly

`components/scrollworld/scrub-engine.js` fetches each clip as a Blob and drives
`video.currentTime` from scroll position — it never calls `play()`. The browser therefore
seeks on nearly every animation frame, and an accurate seek has to decode forward from the
nearest preceding keyframe.

| | Master | Shipped encode |
| --- | --- | --- |
| Keyframes (8s dive) | 1 | 17 (`-g 12`) |
| Keyframes (8s dive, mobile) | 1 | 25 (`-g 8`) |
| Audio track | present | stripped (`-an`) |
| `dive1` size | 5.9 MB | 3.7 MB desktop / 2.2 MB mobile |

A master has a single keyframe at frame 0, so every seek decodes from the start of the
file. Deep into a clip that is over a hundred frames of decode work for one displayed
frame, repeated every scroll tick — the flight stutters, and some mobile decoders give up
and return frame 0 instead, freezing the scene. The shipped encodes also cut the chain to
~48.7 MB, which is what keeps the hero playable on slower Philippine connections.

Measured similarity between shipped encodes and these masters is SSIM 0.985–0.993, i.e.
the compression is visually equivalent; the difference is seekability and weight, not looks.

## Not archived here

`public/scrollworld/still1-6.webp` — the poster stills behind each scene, and the whole
hero under `prefers-reduced-motion` — were generated separately as 1920x1276 (3:2) images,
not captured from these 16:9 clips. No frame in any master matches them, so they cannot be
re-derived from this folder. The committed `.webp` files are the only copies that exist.

## Regenerating the shipped clips

`./encode-scrollworld.sh` rebuilds all 22 files in `public/scrollworld/vid/` from these
masters, using the settings the current files were built with (Phase 8 of
`.ori-audit/CHANGE_LOG.md`). Read the flags in the script rather than copying the summary
below — the scale and `unsharp` filters matter to the result.

- **Desktop** — 1920x1080, `-crf 25`, `-g 12`, `-an`, `+faststart`
- **Mobile** (`-m.mp4`) — 1280x720, `-crf 26`, `-g 8`, `-an`, `+faststart`

The script overwrites tracked, currently-shipped files in place, and a different x264 build
will produce slightly different bytes (a re-encode measured SSIM 0.994 against the shipped
file at +3.5% size). It is a recovery path, not a routine step — run it only when the
clips actually need rebuilding, and check `git diff --stat` afterwards.

Raising quality raises weight, which is the exact problem Phase 8 was fixing — change CRF
only alongside a load-time check from the target region.
