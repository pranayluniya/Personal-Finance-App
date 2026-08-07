# Artha — deploy & build APK

This folder is a complete, self-contained web app (no build step needed to run it).
It saves your data locally on the device using IndexedDB — works fully offline once loaded.

## Step 1 — Host it on GitHub Pages

1. Go to github.com and create a **new repository** (e.g. `money-passbook`). Keep it Public.
2. On the repo page, click **Add file → Upload files**, and drag in every file from this
   folder (`index.html`, `bundle.js`, `manifest.json`, `service-worker.js`, `icon-192.png`,
   `icon-512.png`) — not the folder itself, just its contents. Commit the upload.
3. Go to **Settings → Pages** (left sidebar).
4. Under "Build and deployment", set **Source: Deploy from a branch**, **Branch: main**,
   folder **/ (root)**. Save.
5. Wait ~1 minute, then refresh — GitHub will show your live URL, something like:
   `https://<your-username>.github.io/money-passbook/`
6. Open that URL — you should see the dashboard. Try "Add to Home Screen" on your phone
   to confirm it installs and works offline.

## Step 2 — Turn it into an APK

1. Go to **pwabuilder.com**.
2. Paste your GitHub Pages URL from Step 1 and click "Start".
3. Once it scans the site, go to the **Android** package option.
4. Download the generated **.apk** (or **.aab**) — this is signed with a PWABuilder test
   key, good enough for sharing/sideloading with friends.
5. Share the `.apk` file directly (e.g. via WhatsApp, Drive). On install, Android will
   warn "installed from unknown sources" — that's expected outside the Play Store; friends
   just need to allow it once.

## Notes

- Every person who installs this gets their **own private data** on their own device —
  nothing is synced or shared between installs.
- The app starts completely blank — no sample data baked in. Each person's entries save
  to their own device the moment they add something.
- Updating files here (re-upload to the same GitHub repo) auto-updates the live site
  within a minute. Anyone with the app already open will get the new version next time
  they're online, thanks to the network-first service worker.
