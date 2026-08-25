# Artha — deploy & build APK

This folder is a complete, self-contained web app (no build step needed to run it).
It saves your data locally on the device using IndexedDB — works fully offline once loaded.

## Step 1 — Host it on GitHub Pages

1. Go to your existing repo (or create one), upload every file from this folder
   (`index.html`, `bundle.js`, `manifest.json`, `service-worker.js`, `icon-192.png`,
   `icon-512.png`) to the repo root, overwriting the old ones.
2. Give GitHub Pages a minute to redeploy.
3. Open the site in Incognito/Private mode first to confirm the new version is live
   before checking your regular tab (which may still show a cached version until you
   clear its site data once).

## Notes

- Every person who installs this gets their own private data on their own device.
- The app starts completely blank for anyone new — no sample data baked in.
- Family's "Pranay" income item (if linked) auto-syncs to Personal's total income —
  no manual update needed there going forward.
