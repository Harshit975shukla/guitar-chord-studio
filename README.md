# 🎸 AI Guitar Chord Detective & Note Detection Studio

An advanced, real-time, browser-based guitar studio that listens to your guitar through the microphone to identify both **individual string notes** and **polyphonic chords** with sub-bin pitch precision. Built with an authentic **physical Karplus-Strong acoustic guitar sound engine**.

---

## ✨ Features

- **⚡ Dual-Mode Real-Time Detection**:
  - **Single Note Tuner**: Detects individual plucked strings, exact frequency (Hz), note name, octave, cents deviation needle (`🎯 In Tune`, `♭ Flat`, `♯ Sharp`), and displays the exact string and fret on the guitar diagram.
  - **Polyphonic Chord Detective**: Instant template correlation recognition for major, minor, 7th, maj7, m7, sus2, sus4, and power chords.
- **🛡️ Anti-Fluctuation Hysteresis Engine**:
  - 4-frame consensus voting buffer and a $+0.08$ incumbent score lock prevent the display from flickering back and forth between chords on decaying harmonics.
- **🎶 Authentic Acoustic Guitar Sound Engine**:
  - First-order allpass fractional delay filter ($\pm 0.05\text{ cents}$ pitch accuracy).
  - 5-stage wooden body biquad formant filter bank (Helmholtz $102\text{ Hz}$, Spruce $208\text{ Hz}$, Rosewood $400\text{ Hz}$, Phosphor Bronze $3100\text{ Hz}$).
  - Stereo wooden body impulse response convolution.
  - 3 guitar models: **Dreadnought Steel**, **Spanish Classical Nylon**, and **12-String Shimmer**.
  - 4 strumming styles: **Downstrum**, **Upstrum**, **Fingerpick**, and **Flamenco Roll**.
- **📱 Progressive Web App (PWA)**:
  - Installable directly to Android, iPhone, Windows, or Mac home screens.
  - 100% offline capable via Service Worker.
  - Zero external CDN dependencies — loads in under $50\text{ ms}$.

---

## 🚀 Live Demo

Hosted 100% free via GitHub Pages:
**[https://harshit975shukla.github.io/guitar-chord-studio/](https://harshit975shukla.github.io/guitar-chord-studio/)**

---

## 🛠️ Local Development

Simply clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/Harshit975shukla/guitar-chord-studio.git
cd guitar-chord-studio
# Open index.html in your browser
```

---

## 📄 License

MIT License
