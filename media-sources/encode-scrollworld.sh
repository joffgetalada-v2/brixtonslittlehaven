#!/usr/bin/env bash
# Rebuild the 22 hero-flight clips in public/scrollworld/vid/ from the masters in
# media-sources/scrollworld/. See README.md for why the masters cannot be served directly.
#
# Usage:  bash media-sources/encode-scrollworld.sh --yes
#
# This OVERWRITES tracked files that are currently live on the site, and a different
# x264 build yields different bytes even from identical flags. It is a recovery path,
# not a routine step. Commit or stash first, and review `git diff --stat` afterwards.
set -euo pipefail

if [ "${1:-}" != "--yes" ]; then
  echo "This overwrites the 22 live clips in public/scrollworld/vid/." >&2
  echo "Re-run with --yes if that is what you want." >&2
  exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/media-sources/scrollworld"
OUT="$ROOT/public/scrollworld/vid"

# The scrub engine seeks on every scroll frame, so keyframes must stay dense: -g 12
# desktop / -g 8 mobile. Audio is stripped; faststart puts moov ahead of mdat so the
# fetch can start decoding before the file finishes.
DESKTOP_OPTS=(-vf "scale=1920:1080:flags=lanczos,unsharp=5:5:0.6:5:5:0.0"
              -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 25 -g 12 -keyint_min 12
              -sc_threshold 0 -an -movflags +faststart)
MOBILE_OPTS=(-vf "scale=1280:720:flags=lanczos,unsharp=5:5:0.6:5:5:0.0"
             -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 26 -g 8 -keyint_min 8
             -sc_threshold 0 -an -movflags +faststart)

# master basename -> shipped basename. Order is the flight order; do not reshuffle,
# the connectors are frame-locked to the dives on either side.
PAIRS=(
  "dive1-welcome:dive1"
  "conn1-welcome-playgroup:conn1"
  "dive2-playgroup:dive2"
  "conn2-playgroup-arts:conn2"
  "dive3-arts:dive3"
  "conn3-arts-chefs:conn3"
  "dive4-chefs:dive4"
  "conn4-chefs-tutorials:conn4"
  "dive5-tutorials:dive5"
  "conn5-tutorials-finale:conn5"
  "dive6-finale:dive6"
)

mkdir -p "$OUT"
for pair in "${PAIRS[@]}"; do
  master="${pair%%:*}"
  target="${pair##*:}"
  in="$SRC/$master.mp4"
  [ -f "$in" ] || { echo "missing master: $in" >&2; exit 1; }

  echo "encoding $target from $master"
  ffmpeg -v error -y -i "$in" "${DESKTOP_OPTS[@]}" "$OUT/$target.mp4"
  ffmpeg -v error -y -i "$in" "${MOBILE_OPTS[@]}"  "$OUT/$target-m.mp4"
done

echo
echo "done. verify before committing:"
echo "  keyframes (want ~17 desktop / ~25 mobile for an 8s dive):"
echo "    ffprobe -v error -select_streams v:0 -show_entries frame=key_frame \\"
echo "      -of csv=p=0 $OUT/dive1.mp4 | grep -c '^1'"
echo "  similarity against the master (want SSIM All: > 0.98):"
echo "    ffmpeg -v info -i $OUT/dive1.mp4 -i $SRC/dive1-welcome.mp4 \\"
echo "      -lavfi '[0:v]setpts=PTS-STARTPTS[a];[1:v]setpts=PTS-STARTPTS[b];[a][b]ssim' -f null -"
