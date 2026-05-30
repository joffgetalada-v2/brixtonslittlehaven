#!/usr/bin/env python3
"""
Brixton's Little Haven — Facebook Page Photo Downloader
========================================================
Downloads every photo from the Facebook page into a local folder.

SETUP (run once):
  pip install playwright
  playwright install chromium

RUN:
  python scripts/download_fb_photos.py

HOW IT WORKS:
  1. Opens a visible Chrome window so you can log in to Facebook normally.
  2. Navigates to the page's Photos tab.
  3. Scrolls to collect all photo links, then visits each one and saves
     the full-resolution image.
  4. Saves everything to  fb_photos/  in this project folder.

FASTER ALTERNATIVE (no script needed):
  If you are the Page admin, Facebook can export everything for you:
  Facebook → Settings → Your Facebook information → Download your information
  → select "Posts" and "Photos and videos" → choose date range → Request a download
  Facebook will email you a ZIP with all original photos in full quality.
"""

import asyncio
import sys
from pathlib import Path

try:
    from playwright.async_api import async_playwright
except ImportError:
    print("Playwright not found. Run:  pip install playwright && playwright install chromium")
    sys.exit(1)

# ─── CONFIG ──────────────────────────────────────────────────────────────────
PAGE_ID   = "61580366842564"           # Brixton's Little Haven Facebook page ID
SAVE_DIR  = Path("fb_photos")          # folder where photos are saved
SCROLL_PAUSE_MS = 1800                 # ms to wait after each scroll
# ─────────────────────────────────────────────────────────────────────────────

PHOTOS_URL = f"https://www.facebook.com/profile.php?id={PAGE_ID}&sk=photos"


async def get_full_res_src(page):
    """Try several selectors to find the highest-resolution image on a photo page."""
    selectors = [
        'img[data-visualcompletion="media-vc-image"]',
        'div[data-pagelet="MediaViewerPhoto"] img',
        'img[class*="x5yr21d"]',   # FB internal class (may change)
    ]
    for sel in selectors:
        el = await page.query_selector(sel)
        if el:
            src = await el.get_attribute("src")
            if src and "fbcdn" in src:
                return src

    # Fallback: largest fbcdn image on the page
    imgs = await page.query_selector_all("img[src*='fbcdn']")
    best_src, best_w = None, 0
    for img in imgs:
        try:
            w = await img.evaluate("el => el.naturalWidth")
            if w > best_w:
                best_w, best_src = w, await img.get_attribute("src")
        except Exception:
            pass
    return best_src


async def main():
    SAVE_DIR.mkdir(exist_ok=True)
    downloaded = skipped = 0

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False, slow_mo=80)
        ctx  = await browser.new_context(viewport={"width": 1280, "height": 900})
        page = await ctx.new_page()

        # ── 1. Log in ────────────────────────────────────────────────────────
        print("\nOpening Facebook login page...")
        await page.goto("https://www.facebook.com/login", wait_until="domcontentloaded")
        print("\n" + "=" * 60)
        print("  ACTION REQUIRED")
        print("  Log in to Facebook in the browser window that just opened.")
        print("  Once you can see your News Feed, come back here")
        print("  and press ENTER to continue.")
        print("=" * 60 + "\n")
        input("  Press ENTER when logged in > ")

        # ── 2. Navigate to Photos tab ────────────────────────────────────────
        print("\nNavigating to the page Photos tab...")
        await page.goto(PHOTOS_URL, wait_until="domcontentloaded")
        await page.wait_for_timeout(2500)

        # ── 3. Scroll and collect individual photo links ─────────────────────
        print("Scrolling to collect all photo links (this may take a minute)...")
        photo_links: set[str] = set()
        no_new_count = 0

        while no_new_count < 3:
            anchors = await page.query_selector_all('a[href*="/photo/"]')
            before = len(photo_links)
            for a in anchors:
                href = await a.get_attribute("href") or ""
                if "/photo/" in href:
                    if href.startswith("/"):
                        href = "https://www.facebook.com" + href
                    photo_links.add(href.split("?")[0])

            if len(photo_links) == before:
                no_new_count += 1
            else:
                no_new_count = 0

            print(f"  {len(photo_links)} photo links collected...", end="\r")
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(SCROLL_PAUSE_MS)

        total = len(photo_links)
        print(f"\nFound {total} photos. Starting downloads...\n")

        # ── 4. Visit each photo and save it ─────────────────────────────────
        for i, link in enumerate(sorted(photo_links), 1):
            try:
                await page.goto(link, wait_until="domcontentloaded")
                await page.wait_for_timeout(900)

                src = await get_full_res_src(page)
                if not src:
                    print(f"  [{i:>4}/{total}]  SKIP — no image found")
                    skipped += 1
                    continue

                resp = await page.request.get(src)
                if not resp.ok:
                    print(f"  [{i:>4}/{total}]  SKIP — download failed ({resp.status})")
                    skipped += 1
                    continue

                ct  = resp.headers.get("content-type", "image/jpeg")
                ext = "png" if "png" in ct else "jpg"
                out = SAVE_DIR / f"photo_{i:04d}.{ext}"
                out.write_bytes(await resp.body())
                downloaded += 1
                print(f"  [{i:>4}/{total}]  ✓  {out.name}")

            except Exception as e:
                print(f"  [{i:>4}/{total}]  ERROR — {e}")
                skipped += 1

        await browser.close()

    print(f"\n{'=' * 60}")
    print(f"  Finished!  {downloaded} downloaded,  {skipped} skipped.")
    print(f"  Photos saved to: {SAVE_DIR.resolve()}")
    print(f"  Next step: copy the photos you want to")
    print(f"  public/images/kids/ (or events/ / community/)")
    print(f"  and add them to content/site.js")
    print(f"{'=' * 60}\n")


if __name__ == "__main__":
    asyncio.run(main())
