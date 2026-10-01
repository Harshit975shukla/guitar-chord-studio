# Guitar Studio - Trained detector trial

An experimental, standalone live guitar detector for trying the trained chord layer on different guitars, microphones, browsers and computers.

**Test site:** https://harshit975shukla.github.io/guitar-chord-studio/

**Main studio (unchanged):** https://harshit975shukla.github.io/guitar-chord-studio-v2/

## Try it

1. Choose **Trained layer**, **Current ML decoder** or **Standard detector**.
2. Press **Start listening**, grant microphone permission, and stay quiet during the room check.
3. Play slowly and let each chord ring. Current and trained outputs use the same audio window and one shared microphone.
4. Mark **Correct / Wrong / Missed / Slow / Not sure**, then export feedback before closing the tab.

The trained layer covers major, minor, dominant seventh, major seventh and minor seventh. Current-decoder results outside those families fall back visibly to Current ML. Single notes and tuner feedback keep the Standard estimator. Use standard guitar tuning without a capo for this first trial.

This is the **raw trained candidate**, not the overly selective 0.9 filter. It can make mistakes or return no answer. Silence, clipping, suspect calibration and stale model output do not become current suggestions. A missing or slow model has an explicit fallback and retry. The trial does not score practice or certify that a chord was played correctly.

## Optional recordings and feedback

Microphone listening alone does not record a take. The optional 12-second recorder requires separate recording and local training-review permissions, including appropriate adult/guardian consent. Keep quiet for the first two seconds and avoid speech or personal information.

Completed takes can be played back after microphone listening stops. Export is one ZIP containing mono WAV, checksum, input/model settings, predictions and feedback linked to that take. The reported chord and detector predictions remain **unverified**; neither is ground truth. A teacher should verify actual notes/chords before training.

Feedback-only export contains JSON and no audio. At most 100 entries and one take remain in this tab's memory. Delete, permission withdrawal or page exit removes the page's take, not files already downloaded. No automatic recording, upload, analytics or model training occurs. Users decide whom to share their downloaded files with.

## Model and limitations

- Frozen note model: Spotify Basic Pitch 1.0.1 with TensorFlow.js/WASM 3.21.0, running locally in a worker.
- Learned layer: 32-unit dense chord classifier, trained on 46 GuitarSet recordings / 664 selected windows, with separate players for validation and testing.
- Weight SHA256: `576f9339ea202e352d2e70071f60f2fd02fcb54e3e66d1dd04dfeca1a0cbcb63`.
- Trial version: `2026-10-01-r1`. See `trial-build.json` for bundle and provenance.

On 598 source-labelled windows from 67 external recordings, the raw trained layer returned 429 correct chords versus 389 for the current ML decoder, and 44 wrong chords versus 53. However, 13 previously correct windows regressed. No external Am7 examples were available. These are limited recorded-window results, **not** a comparison against the full hybrid, not real-room accuracy, and not a claim that Am/Am7 confusion is fixed. Agreement between outputs is not 100% certainty.

Basic Pitch has itself used GuitarSet. The held-out players are held out from the new chord layer, not proven unseen by the pretrained note model.

## Privacy, hosting and source

All runtime/model files are self-hosted under this repository's Pages path. The trial does not read or write localStorage, sessionStorage or IndexedDB. Its worker handles only this site's paths and deletes only `guitar-trained-trial-*` caches, not the main studio's cache. Updates request manual refresh instead of discarding in-memory feedback/takes. Online detection still works when optional cache storage fails.

This repository publishes compiled static files from `main`. Use HTTPS or localhost; opening `index.html` as a `file:` URL is not a supported microphone test. The full source snapshot and exact website archive are attached to the [trial release](https://github.com/Harshit975shukla/guitar-chord-studio/releases/tag/trained-detector-trial-2026-10-01). Source is based on `guitar-chord-studio-v2` commit `25dc62772f67cd9f57a9aa7dc7aa1446be95db90` with the separate `experiments/detector-trial` entry point; the production v2 entry point was not changed.

Before publishing, TypeScript, eight focused model/feedback/cache checks and nine production-subpath browser checks passed, including actual WASM/learned inference, notes, recording/export, fallback, 320px layout and preservation of other sites' storage. Physical device/room feedback is still required.

Legacy static files are retained for already-open older tabs; the current entry is `assets/index-DPcbnI7G.js`. The dated [pre-trial restore point](https://github.com/Harshit975shukla/guitar-chord-studio/releases/tag/restore-before-trained-trial-2026-10-01) contains the exact previous website and SHA256 manifest. Restore its tracked content in a new commit rather than force-rewriting history. Browser-local user data is not included in the backup.

## Attribution

Basic Pitch and TensorFlow.js are Apache-2.0; their notices and licence text are in `ml/basic-pitch-1.0.1-tfjs-3.21.0/`.

The new layer was trained using **GuitarSet 1.1.0 (CC BY 4.0)** by Qingyang Xi, Rachel M. Bittner, Johan Pauwels, Xuzhou Ye and Juan P. Bello. Citation: *GuitarSet: A Dataset for Guitar Transcription*, ISMIR 2018. Source: https://zenodo.org/records/3371780. Licence: https://creativecommons.org/licenses/by/4.0/. The raw recordings are not bundled here. See `ml/chord-head-2026-10-01/NOTICE.txt` for details.
