# PASTEL Recovery Audit — 2026-10-22 (post-merge verification)

## Purpose
Recover the intended customer-facing PASTEL QR concierge without mistaking a green root-page deployment for proof that every route works.

## Target product
PASTEL is intended to be a customer-facing QR concierge for PASTEL PASTRY&COFFEE in Oran: a premium, realistic female 3D host; Arabic-first conversation and speech; natural-looking idle/head/eye movement and gestures; speech-linked mouth motion; verified business knowledge; and working WhatsApp, phone, email, and map actions. The experience must be usable on a real phone and must not invent prices, opening hours, reservations, delivery, or availability.

## Latest repository changes
- Recovery commit merged to `main`: `6b94d929025a317ab316ee45f21acbe950901532` (2026-10-22), via [PR #3](https://github.com/salamou1944/Pastel-/pull/3).
- The Pages workflow downloads a pinned TalkingHead MPFB GLB to `assets/mpfb.glb`, checks its GLB header/JSON/skeleton, and runs route-specific Premium browser tests.
- Premium uses `../assets/mpfb.glb`, exposes `window.__PASTEL_PREMIUM_VERIFY__` after the model loads, and has WhatsApp, call, email, and directions actions.
- Standard uses `../assets/pastel-host.glb`, fixing its prior relative-path mismatch for `/host-standard/`.
- Premium's manifest limits claims to the implemented Three.js route: GLB rendering, subtle idle body sway, browser speech, grounded knowledge answers, safe price fallback, contact actions, and responsive layout. It does not claim phoneme-level Arabic lip-sync, head/eye tracking, or discrete gestures.
- Asset provenance and the unresolved licensing gate for the legacy `pastel-host.glb` are recorded in `assets/README.md`.
- Additional production smoke coverage has now been added for Standard on a phone-sized viewport and Premium's phone-sized layout. The final run for this workflow change must pass before those new checks are considered proven.

## Verified evidence
- GitHub Pages workflow run [#238 / run ID 39709374094](https://github.com/salamou1944/Pastel-/actions/runs/39709374094) for merge commit `6b94d929025a317ab316ee45f21acbe950901532` completed with **success** on 2026-10-22.
- That run passed both avatar asset download/structure checks, deployed GitHub Pages, passed the anonymous order-read security check, and passed the root Host + staff security Playwright checks.
- Its live Premium Playwright check emitted `PREMIUM_ROUTE_SMOKE_OK` with `modelLoaded: true`, model URL `../assets/mpfb.glb`, a rendered 804×720 canvas, status `3D Host متصل`, all four populated contact links, and the grounded Arabic price response `الأسعار الكاملة غير مثبتة في قاعدة المعرفة الحالية، لذلك لن أخمّنها.`
- The same run reported the root Host, Arabic speech invocation, conversation safe-price fallback, editable order-draft flow, customer order UI, and staff pre-authentication gate passing.
- These automated checks ran in GitHub's hosted Chromium, not on a user's physical phone. The visual identity/gender match and real-device experience remain unverified.

## Current status
- Recovery code merged: **PASS**.
- Premium GLB fetched and structurally validated in deployment: **PASS**.
- Premium browser render, contact links, and grounded price fallback on deployed URL: **PASS** in run #238.
- Root Host and staff/security smoke: **PASS** in run #238.
- Standard route browser/mobile smoke: **PENDING** final workflow run after the new check was added.
- Premium mobile layout smoke: **PENDING** final workflow run after the new check was added.
- Intended female avatar visual quality: **NOT VERIFIED**.
- Arabic phoneme-level lip-sync in Premium: **NOT IMPLEMENTED/NOT CLAIMED**.
- Commercial redistribution rights for the legacy Standard/root GLB: **NOT VERIFIED**.
- Real-phone QR flow: **NOT VERIFIED**.
- First paid customer readiness: **NOT READY** until the remaining release gates below pass.

## Remaining release gates
1. Inspect the newest Pages run and require success for the newly added `STANDARD_MOBILE_ROUTE_SMOKE_OK` and `PREMIUM_MOBILE_ROUTE_SMOKE_OK` checks.
2. Verify the intended female avatar visually on a real mobile device; file existence and a skeleton do not prove the appearance matches the product brief.
3. Verify Arabic speech and movement honestly. Premium currently uses browser speech and subtle body sway; phoneme-timed Arabic mouth motion and head/eye/gesture animation are not established in this route.
4. Resolve commercial redistribution rights for the legacy `pastel-host.glb`, or replace it with a model whose rights are clear.
5. Run the customer QR flow on a real phone. Keep the existing QR destination unchanged until the target route and contact actions pass this check.
6. Only after these gates pass, prepare and send a bounded paid-pilot offer by email. Do not claim production readiness or revenue before evidence.

## Customer communication rule
Do not send a paid-pilot offer claiming the product is ready until the route, avatar, voice, contact actions, and real-phone QR flow are verified. The eventual offer must state a precise pilot scope, delivery conditions, and limitations around voice quality and live business data.
