# Guitar Chord Studio — backup app

**Live site:** https://harshit975shukla.github.io/guitar-chord-studio/

This repository publishes the verified full studio build from `main` at `/`, using its existing GitHub Pages workflow. The main `guitar-chord-studio-v2` deployment was not changed.

## Build chords, then play

- Separate **Build chords** and **Chord player** workspaces share one progression, selection and voicing choices.
- The builder exposes root, quality, length, shape, audition, duplicate, ordering and one-step undo; library browsing and the chord game remain available.
- **Major**, **Natural minor**, **Harmonic minor**, **Dorian** and **Mixolydian** offer all twelve tonic pitch classes, correct scale tones and harmonized suggestions. Manual/out-of-key chords are preserved, not rejected.
- **21 named progressions** cover major, minor, leading-tone and modal practice. The Andalusian major V and blues sevenths are explicitly identified as borrowed/outside-scale harmony.
- **18 distinct rhythms** cover strumming and fingerpicking, all in straight-eighth 4/4. Recorded audio, beat grid and animated hands share one schedule.
- Existing browser-local saves still work. New saves also remember key/scale, tempo and rhythm.
- The original steel-string guitar, short-wrist MIT WebXR hands, four primary cameras and skin/left-handed settings are retained.

## Revision and verification

Source revision: `8258c65756b63517cb8117fde5555de3aaa83fa6`.
Published entry: `assets/main-Cr3j7aK_.js`.
See [deployment.json](deployment.json) for build provenance and validation counts.

Passed: 23 chord-player checks, 12 hand checks, 8 strumming checks, 10 chord-game checks, 5 manifest checks, 4 service-worker isolation checks, TypeScript/Vite builds, and 25 desktop/mobile browser checks against the exact production subpath. The browser checks include actual sampled audio and synchronized hand/grid events. Physical-device review remains useful; the hands are stylised guidance, not a fingering measurement.

[Release archives](https://github.com/Harshit975shukla/guitar-chord-studio/releases) preserve the source snapshot, exact website and checksums. Source build instructions and full documentation are in the source archive's README.

## Isolation and rollback

This deployment uses `/guitar-chord-studio/`, not the v2 base path. Its service worker only handles/cache-cleans its own path; unrelated studio, detector-trial and other-app caches are preserved. No experiments, APK assets, recordings, credentials, browser profiles or dependencies were added to the release.

The previous trained-detector trial remains in Git history at `0df9c9098242b81d3026b2daba9a8672b8b4b8ee` and in its existing release. Existing static assets are retained for already-open tabs. To roll back, restore the prior tree with a **new commit**; never force-rewrite shared history. Browser-local user data is not included in release archives.

## Attribution

The app uses the existing recorded-guitar banks and their included licences. The two stage hand models come from MIT-licensed WebXR Input Profiles; see [models/hands/LICENSE.md](models/hands/LICENSE.md). Basic Pitch and TensorFlow.js licence/notice files accompany the self-hosted model assets.
