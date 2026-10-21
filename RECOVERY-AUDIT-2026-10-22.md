# PASTEL Recovery Audit — 2026-10-22

## Purpose

Recover the original PASTEL product direction instead of treating a green deployment as proof that the intended product exists.

## Target product

PASTEL is intended to be a customer-facing QR concierge for PASTEL PASTRY&COFFEE in Oran: a premium, realistic female 3D host; Arabic-first conversation and speech; natural-looking idle/head/eye movement and gestures; speech-linked mouth motion; verified business knowledge; and working WhatsApp, phone, email, and map actions. The page must be useful on a real phone and must not invent prices, opening hours, reservations, delivery, or availability.

## Evidence checked on 2026-10-22

- Repository: `salamou1944/Pastel-`, public, default branch `main`; connected GitHub integration has admin/push permission.
- Latest inspected commit: `827b7f3b985201394d4e15097b469a72608cb06a` (2026-10-09).
- GitHub Pages workflow run `37979717444` completed successfully. All listed deployment steps passed, including GLB structure validation, anonymous order-read security check, and Playwright production smoke for the root Host route.
- That successful workflow explicitly downloads `assets/pastel-host.glb` from a third-party URL whose filename is `realistic-male.glb`; the root `host-standard/config.js` also declares `body: "M"`. This does not satisfy the original female-host direction.
- `host-premium/config.js` and `host-premium/host-manifest.json` reference `../assets/brunette.glb`. The root repository listing has no tracked `assets/` directory; the Pages workflow creates only `assets/pastel-host.glb`. Therefore the premium route's configured avatar path is not supplied by the inspected deployment workflow. The Premium route is not proven operational by the root-route Playwright smoke.
- `host-standard/config.js` references `./assets/pastel-host.glb` relative to `/host-standard/`, while the workflow downloads the file to root `/assets/pastel-host.glb`. This path also requires a route-specific asset or an explicit corrected relative path and a browser test of the Standard route.
- The current root `app.js` contains deterministic Arabic/French answer routing and browser speech, but `animateArabicMouth(active){ return; }` is a no-op in that file. The separate Premium page has a different Three.js renderer and its own animation logic. These are separate implementations, not one verified shared runtime.
- Premium configuration currently declares `voiceInput: false`, `ordering: false`, `booking: false`, and `analytics: false`; these must not be marketed as implemented capabilities.
- `CUSTOMER-QUICKSTART.md` correctly states that a real-phone test is required before changing/printing a customer QR destination.
- No open GitHub issues were returned by the repository issues endpoint during this audit.

## Current status (evidence-based)

- Root Pages deployment / root Host automated smoke: **PASS** for the checks in run `37979717444`.
- Intended female Premium avatar at its configured route: **NOT VERIFIED; likely blocked by missing asset path**.
- Standard Host route asset path: **NOT VERIFIED; path mismatch identified**.
- Female avatar rights/provenance: **NOT VERIFIED**.
- Premium-grade visual quality on a real mobile device: **NOT VERIFIED**.
- Arabic phoneme-level lip-sync: **NOT PROVEN**. A separate test for observed viseme events is not by itself proof of realistic phoneme-timed lip-sync in the Premium route.
- End-to-end customer QR flow on a real phone: **NOT VERIFIED**.
- First paid customer readiness: **NOT READY** until the target route, avatar, voice, contact actions, and QR flow are independently tested.

## Recovery order

1. Keep the existing QR destination unchanged. Do not replace or print a new QR based only on CI.
2. Pick one canonical production route (the Premium route is the intended candidate); make its assets and dependencies explicit and version-pinned.
3. Resolve the female avatar asset first: confirm file exists, successful browser load, skeleton/head presence, commercial redistribution rights, and acceptable visual quality. Do not silently substitute a male avatar.
4. Fix route-relative assets for both Standard and Premium, or clearly mark one route as the only supported deployment target.
5. Add route-specific Playwright smoke tests that open `/host-standard/` and `/host-premium/` directly, assert avatar loaded and rendered, verify no console/page errors, test Arabic answer + voice, and test all contact links.
6. Validate animation separately: idle/head/eye movement, gestures, and speech-linked mouth motion. Report simple playback-state mouth movement separately from phoneme-timed lip-sync.
7. Test the chosen route on a real phone, then test the QR destination from camera scan.
8. Only after these checks, offer the customer package. The baseline may use deterministic verified answers and browser speech; a paid LLM is not a prerequisite.

## Explicit exclusions

- No new paid subscriptions or API spend.
- No change to the existing QR destination until the replacement is live and real-phone verified.
- No claims of working Premium/Standard routes based on root-route CI alone.
- No claim of true Arabic lip-sync without route-specific evidence.
