# Artha — deploy & build APK

This folder is a complete, self-contained web app (no build step needed to run it).
It saves your data locally on the device using IndexedDB — works fully offline once loaded.

## Deploying updates

Upload every file from this folder to your GitHub Pages repo root, overwriting the old
ones. Give it a minute to redeploy, then check in Incognito first (your regular tab may
show a cached version until you clear its site data once).

## Backup & export (new)

Drawer (☰) → Backup & export:
- **Full backup (.json)** — everything, both books, restorable. Do this regularly; there's
  no cloud sync, so this file is the only real insurance against a lost or reset phone.
- **Restore from a backup file** — replaces all current data with the file's contents.
  Asks for confirmation first since it can't be undone.
- **Transactions CSV** — every logged income/expense entry, for opening in Excel or Sheets.
  One-way export only.
