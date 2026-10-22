# PASTEL Recovery Audit — 2026-10-22 (post-merge update)

## Purpose
Recover the intended customer-facing PASTEL QR concierge without mistaking a green root-page deployment for proof that every route works.

## Target product
PASTEL is intended to be a customer-facing QR concierge for PASTEL PASTRY&COFFEE in Oran: a premium, realistic female 3D host; Arabic-first conversation and speech; natural-looking idle/head/eye movement and gestures; speech-linked mouth motion; verified business knowledge; and working WhatsApp, phone, email, and map actions. The experience must be usable on a real phone and must not invent prices, opening hours, reservations, delivery, or availability.

## Latest repository changes
- Latest recovery commit merged to `main`: `6b94d929025a317ab316ee45f21acbe950901532` (2026-10-22).
- Merged PR: [#3 — repair Pastel Premium avatar route](https://github.com/salamou1944/Pastel-/pull/3).
- The Pages workflow now fetches a pinned TalkingHead MPFB GLB asset to `assets/mpfb.glb`, checks its GLB header/JSON/skeleton, and runs a route-specific Premium Playwright smoke.
- Premium now uses the configured `../assets/mpfb.glb` URL, exposes `window.__PASTEL_PREMIUM_VERIFY__` when the model loads, and includes WhatsApp, call, email, and directions actions.
- Standard now references `../assets/pastel-host.glb`, resolving its prior relative-path mismatch for a page at `/host-standard/`.
- `host-premium/host-manifest.json` now describes the Three.js route honestly: 3D GLB rendering, subtle idle body sway, browser speech, grounded knowledge answers, safe price fallback, contact actions, and responsive layout. It explicitly does not claim phoneme-level Arabic lip-sync, head/eye tracking, or discrete gestures.
- Asset provenance and the unresolved licensing gate for the legacy `pastel-host.glb` are recorded in `assets/README.md`.

## Verification status after merge
- GitHub reports PR #3 merged and `main` points to merge commit `6b94d929025a317ab316ee45f21acbe950901532`.
- The connected GitHub tool did not expose a post-merge Pages workflow run or status for that commit at the time of this update. The source workflow contains the new checks, but they are **not yet marked PASS here**.
- The live GitHub Pages URLs could not be inspected through the available connected browser in this run. A successful merge alone does not establish that the deployed site contains the new assets or that the Premium page renders.
- Historical workflow `37979717444` passed root-route checks before these changes. That result is not evidence for the new Premium route or the new post-merge build.

## Remaining release gates
1. **Wait for and inspect the post-merge Pages workflow.** Require success for both GLB checks, the existing root/staff/security checks, and the new `PREMIUM_ROUTE_SMOKE_OK` output.
2. **Inspect the published Premium route** at `https://salamou1944.github.io/Pastel-/host-premium/` and Standard route at `https://salamou1944.github.io/Pastel-/host-standard/`. Verify the canvas, correct asset path, no browser errors, and all contact links.
3. **Verify the intended female avatar visually on a real mobile device.** The MPFB asset's existence and skeleton do not prove the visual presentation matches the product brief.
4. **Verify Arabic speech and movement honestly.** Premium currently uses browser speech and subtle body sway; phoneme-timed Arabic mouth motion and head/eye/gesture animation are not established in this route.
5. **Resolve rights for the legacy Standard/root model.** The pinned `three.ws` download's commercial redistribution rights have not been established. Do not bundle it into paid customer deployments until rights are verified or it is replaced.
6. **Run the customer QR flow on a real phone.** Keep the current QR destination unchanged until the target route and all contact actions pass this check.
7. **Only after these gates pass, prepare and send a paid-pilot offer.** Do not represent the project as production-ready or claim a customer conversion/revenue event before there is evidence.

## Current evidence-based status
- Recovery code changes merged: **PASS**.
- New post-merge Pages build and route smoke: **PENDING / not observed by connected tooling**.
- Premium route deployed and browser-rendered: **NOT VERIFIED**.
- Standard route deployed and browser-rendered: **NOT VERIFIED**.
- Intended female avatar visual quality: **NOT VERIFIED**.
- Arabic phoneme-level lip-sync in Premium: **NOT IMPLEMENTED/NOT CLAIMED**.
- Commercial redistribution rights for legacy Standard/root GLB: **NOT VERIFIED**.
- Real-phone QR flow: **NOT VERIFIED**.
- First paid customer readiness: **NOT READY until the release gates above pass**.

## Customer communication rule
Do not send a paid-pilot offer that claims the product is ready until the route, avatar, voice, contact actions, and real-phone QR flow are verified. When ready, offer a bounded paid pilot by email with a precise scope, delivery conditions, and no unsupported claims about voice quality or live business data.
