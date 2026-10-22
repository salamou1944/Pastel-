# PASTEL avatar asset provenance

## `mpfb.glb` (root, Standard, and Premium routes)
- Source: [TalkingHead MPFB example](https://github.com/met4citizen/TalkingHead/blob/6318ff8c798e4a661fcd70c9373c4ab789c822bb/avatars/mpfb.glb)
- Upstream TalkingHead documentation identifies this example avatar as CC0.
- Source is pinned to commit `6318ff8c798e4a661fcd70c9373c4ab789c822bb` in the Pages workflow.
- The root route uses the three.ws avatar runtime, while Standard and Premium have their own Three.js-based fallback/render paths. A valid skeleton supports rendering but does not prove a particular visual gender presentation, natural facial animation, or Arabic phoneme-level lip-sync.
- The avatar's actual appearance and real-device performance remain a release gate. Do not describe unverified capabilities as implemented.

## Removed legacy asset
The previous `pastel-host.glb` candidate from `nirholas/three.ws` had no established commercial redistribution rights in this repository. The active routes have been moved to the documented CC0 MPFB example, and the Pages workflow should no longer download or publish the legacy candidate.
