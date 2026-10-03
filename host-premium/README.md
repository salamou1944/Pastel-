# PASTEL Host Premium

Premium presentation layer for PASTEL PASTRY&COFFEE.

## Current implementation
- Real human female GLB avatar: assets/brunette.glb.
- TalkingHead + Three.js runtime instead of a static model-viewer scene.
- Idle head/eye movement and speaking head movement.
- Interactive hand gestures during responses.
- Faster Arabic browser speech with device Arabic voice selection.
- Lightweight mouth/jaw animation while speech is playing.
- Responsive premium PASTEL visual treatment.
- Direct WhatsApp, phone, email and map actions.
- No invented prices or customer facts.

## Runtime evidence
The previous live runtime successfully loaded the real GLB and displayed 3D Host متصل.

The current commit upgrades the renderer and interaction layer so the avatar is no longer intentionally static.

## Remaining boundary
Arabic browser speech quality remains dependent on the voice supplied by the device/browser. True phoneme-level Arabic lip-sync is not claimed yet; the current mouth animation is synchronized to the speech playback state rather than to Arabic phoneme timestamps.

Deployment is triggered by the GitHub Pages workflow on pushes to main.
