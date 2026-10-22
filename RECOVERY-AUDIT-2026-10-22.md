# PASTEL Recovery Audit — 2026-10-22

## Product target
PASTEL is a QR concierge for PASTEL PASTRY&COFFEE in Oran. It must provide Arabic-first, grounded business answers, working WhatsApp/phone/email/maps actions, and a real 3D avatar on customer devices. It must not invent prices, hours, reservations, delivery, or availability. The intended experience is a realistic female host with natural facial and body motion; those visual and animation requirements are not assumed proven by a valid GLB or a green desktop test.

## Changes completed
- Recovery work merged to `main` through [PR #3](https://github.com/salamou1944/Pastel-/pull/3).
- Premium uses `assets/mpfb.glb`, pinned to TalkingHead commit `6318ff8c798e4a661fcd70c9373c4ab789c822bb`; upstream TalkingHead documentation identifies this example as CC0.
- Root QR route and Standard route have now also been switched to the same documented CC0 MPFB model. The Pages workflow no longer downloads/publishes the legacy `pastel-host.glb` candidate whose commercial redistribution rights were unclear.
- Standard is configured to use the MPFB model and can fall back to direct Three.js rendering if TalkingHead cannot animate the generic GLB.
- The workflow validates the shared MPFB GLB and tests root Host, Staff auth gate, Premium route, Standard phone viewport, and Premium phone viewport. Standard readiness failures now emit more useful diagnostics rather than silently timing out.
- Premium exposes `window.__PASTEL_PREMIUM_VERIFY__`; contact links and safe price fallback are checked on the deployed URL.

## Verified evidence
- [Run #238](https://github.com/salamou1944/Pastel-/actions/runs/39709374094) succeeded before the later Standard/mobile tests were introduced. It verified the deployed Premium avatar loaded, rendered an 804×720 canvas, showed status `3D Host متصل`, populated all four contact links, and returned a grounded Arabic response to a price question.
- The same run passed root Host conversation/speech invocation, editable order-draft UI, customer order UI, staff pre-authentication gate, and anonymous order-read security checks.
- [Run #241](https://github.com/salamou1944/Pastel-/actions/runs/39710553205) deployed the current pages but failed during Standard route readiness: the Standard route did not reach a ready/connected state within 45 seconds. Premium had passed in that run. This failure was not hidden or counted as a pass.
- After that failure, Standard was switched from the legacy GLB to the CC0 MPFB model, the root route was switched to the same CC0 asset, and the workflow was adjusted to report Standard runtime diagnostics. The latest combined workflow run must pass before these changes are considered verified.

## Current release status
- Earlier Premium deployment smoke: **PASS** in run #238.
- Latest combined workflow with shared CC0 avatar and Standard/mobile checks: **NOT YET VERIFIED**.
- Root QR route after switching to MPFB: **NOT YET VERIFIED**.
- Standard route after switching to MPFB: **NOT YET VERIFIED**.
- Premium mobile viewport: **NOT YET VERIFIED**.
- Intended female visual presentation on a real phone: **NOT VERIFIED**.
- Arabic phoneme-level lip-sync: **NOT IMPLEMENTED/NOT CLAIMED**; the current Premium route uses browser speech and subtle idle/body sway, not verified Arabic viseme animation.
- Real-phone QR scan, mobile browser behavior, and physical-device audio: **NOT VERIFIED**.
- Customer-specific operational facts (prices, opening hours, live availability, booking/order confirmation) must remain absent unless supported by a verified live source.

## Remaining release gates
1. Inspect the newest Pages workflow run; require success for root Host, Standard, Premium, mobile checks, and the anonymous-order security test.
2. Verify the avatar visually on a real phone and confirm the appearance matches the intended female host. The CC0 example's license does not prove that visual requirement.
3. Test the existing QR destination on a physical phone, including voice playback, contact actions, scroll/layout, and network fallback. Do not change the QR destination before this passes.
4. Be explicit with the business about current limitations: no verified price/hour/availability feed, no reservation flow, no order submission test unless explicitly run, and no claim of Arabic phoneme-timed lip-sync.
5. Only after these gates pass, prepare a narrowly scoped paid pilot offer by email. Do not claim production readiness or revenue before evidence.

## Customer communication rule
Do not present Pastel as fully ready for a paid pilot until the latest deployed workflow and real-phone checks pass. Do not describe any capability as complete based only on source code or a successful build.
