# Host Standard

Reusable 3D hospitality host foundation.

## Customer customization boundary

For a new customer, the intended customer-specific surface is **host-standard/config.js**.

Change only the configuration values for:
- brand identity and copy
- colors
- approved GLB avatar
- host mood/view/camera
- UI/speech language
- verified knowledge
- contact channels
- optional TTS endpoint

The runtime, UI shell, verified-answer flow, voice fallback, and contact actions remain shared.

## Quality rules

1. The Host must present as a modern, premium hospitality representative.
2. No cartoon/game-like presentation is acceptable for the commercial baseline.
3. Customer facts must come from verified configuration/knowledge.
4. Unknown facts must not be invented.
5. Avatar assets must have commercial/public-web-app rights checked before customer deployment.
6. A source-level pass is not a browser-production pass. Live browser verification is required before calling a customer build ready.
7. Arabic browser speech is a fallback only. TalkingHead's built-in lip-sync languages do not include Arabic; true Arabic lip-sync requires a compatible audio/viseme/timestamp path.

## Current baseline avatar

The branch uses the TalkingHead MPFB reference avatar as a license-safe baseline. TalkingHead documents this reference avatar as CC0. Replace it with a customer-approved commercial GLB when a more realistic/premium character is selected.

## Architecture

```
QR / URL
  -> Host Standard UI
  -> 3D avatar runtime
  -> verified customer knowledge
  -> voice / answer
  -> WhatsApp / call / email / directions
```

The standard is designed so that PASTEL is a configuration/case study, not a separate codebase.

## Evidence status

Current branch has source/read-back verification. Browser runtime verification is still required before merge/release.
