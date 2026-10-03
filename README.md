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
- The owner-supplied native acoustic guitar and textured hands now use all 118 original playing clips, with corrected G-chord contact/posture and native finger articulation.
- A version-2 pose catalogue adapts 3,798 offered shapes, plus the all-muted rest pose, to the original skeleton. Every entry has 32 values and is bound to the exact scene by SHA-256.
- Four primary cameras, skin/left-handed settings, reduced-motion support and the accessible 2D fallback remain available. Audio and percussion assets are unchanged.

## Revision and verification

Source base revision: `8258c65756b63517cb8117fde5555de3aaa83fa6`, including the owner's approved, locally verified hand corrections. Those corrections remain uncommitted in the source worktree; this is a static build publication, not a new source commit.
Published entry: `assets/main-D3pHlJod.js`.
See [deployment.json](deployment.json) for build provenance and validation counts.

The approved production build passed 103 focused checks and 62 desktop/mobile browser checks. Native coverage passed for all 118 clips, 18 rhythms and 56 pinch combinations, plus 3,798 offered shapes, 114,779 voicings, 47,424 chord/tuning/capo selections, 17,725 pressed contacts and 19,549 sounding spans, with zero contact, approach or triangle-intersection failures. The TypeScript/Vite build passed. Five manifest and four service-worker isolation checks were also rerun before publication. Physical-device review remains useful; the hands are guidance, not a fingering measurement.

[Previous release archives](https://github.com/Harshit975shukla/guitar-chord-studio/releases) remain available. This release publishes the exact approved production files without rebuilding or modifying the local preview; its native model and pose-catalogue hashes are recorded in the deployment metadata.

## Isolation and rollback

This deployment uses `/guitar-chord-studio/`, not the v2 base path. Relative asset URLs preserve the exact verified build at the backup subpath. Its service worker only handles/cache-cleans its own path; unrelated studio, detector-trial and other-app caches are preserved. Only the approved converted guitar/hand assets are included, not the APK archive, application binaries, experiments, recordings, credentials, browser profiles or dependencies. The v2 repository/site was not pushed, deployed or scheduled.

The previous backup release remains in Git history at `1165130c42dec8b6d0d268dbefdbb25cd4459bff`; the earlier trained-detector trial remains at `0df9c9098242b81d3026b2daba9a8672b8b4b8ee` and in its existing release. Existing static assets are retained for already-open tabs. To roll back, restore the prior tree with a **new commit**; never force-rewrite shared history. Browser-local user data is not included in release archives.

## Attribution

The app uses the unchanged recorded-guitar banks and their included licences. The original acoustic scene and hands were supplied by the owner as their own application, with explicit approval to publish these converted assets to this backup; see [models/apk/SOURCE.txt](models/apk/SOURCE.txt) and [models/hands/authored/SOURCE.txt](models/hands/authored/SOURCE.txt). No general redistribution licence is inferred from the archive. The retained WebXR reference models have their separate MIT licence in [models/hands/LICENSE.md](models/hands/LICENSE.md). Basic Pitch and TensorFlow.js licence/notice files accompany the self-hosted model assets.
