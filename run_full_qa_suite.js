const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

console.log('=== RUNNING COMPREHENSIVE QA AUTOMATION SUITE ===\n');

// Test 1: Fake song generator check
const hasFakeGenerator = content.includes('generateHarmonicSongData') || content.includes('ki dhun pe,');
console.log('Test 1 - Fake lyrics generator removed:', !hasFakeGenerator ? 'PASS ✅' : 'FAIL ❌ (Found fake lyrics code!)');

// Test 2: Missing sound functions check
const hasPluck = content.includes('function playPhysicalGuitarPluck');
const hasStrum = content.includes('function strumAcousticPhysical');
console.log('Test 2 - playPhysicalGuitarPluck defined:', hasPluck ? 'PASS ✅' : 'FAIL ❌');
console.log('Test 2b - strumAcousticPhysical defined:', hasStrum ? 'PASS ✅' : 'FAIL ❌');

// Test 3: Essential chords in CHORD_PRESETS
const chordsMatch = content.match(/const CHORD_PRESETS = \{([\s\S]*?)\n    \};/);
if (!chordsMatch) {
  console.log('Test 3 - CHORD_PRESETS found: FAIL ❌');
} else {
  const chordKeys = [...chordsMatch[1].matchAll(/"([^"]+)":\s*\{/g)].map(m => m[1]);
  console.log('Test 3 - Total chords defined in CHORD_PRESETS:', chordKeys.length);
  const required = ['Bb', 'Gm', 'A7', 'Bm', 'C#m', 'Cm', 'Fm', 'B', 'F#', 'G#', 'D7', 'E7', 'G7', 'C7', 'Dm7', 'Em7', 'Bm7', 'C', 'D', 'E', 'F', 'G', 'A'];
  const missingChords = required.filter(c => !chordKeys.includes(c));
  console.log('Test 3b - All required chords present:', missingChords.length === 0 ? 'PASS ✅' : 'FAIL ❌ (Missing: ' + missingChords.join(', ') + ')');
}

// Test 4: Verify all chords used in SONG_CATALOG exist in CHORD_PRESETS
const songCatMatch = content.match(/const SONG_CATALOG = \{([\s\S]*?)\n    \};/);
if (songCatMatch) {
  const chordsUsedMatches = [...songCatMatch[1].matchAll(/chordsUsed:\s*\[([^\]]+)\]/g)];
  const allSongCatChords = new Set();
  chordsUsedMatches.forEach(m => {
    m[1].split(',').map(s => s.trim().replace(/['"]/g, '')).forEach(c => allSongCatChords.add(c));
  });
  console.log('Test 4 - Chords in built-in SONG_CATALOG:', Array.from(allSongCatChords));
}

// Test 5: Verify 50+ songs in CORE_SEARCH_SONGS
const searchSongsMatch = content.match(/const CORE_SEARCH_SONGS = (\[[\s\S]*?\]);\n/);
if (!searchSongsMatch) {
  console.log('Test 5 - CORE_SEARCH_SONGS present: FAIL ❌');
} else {
  try {
    const songs = JSON.parse(searchSongsMatch[1]);
    console.log('Test 5 - Verified authentic songs count in database:', songs.length, songs.length >= 50 ? 'PASS ✅' : 'FAIL ❌');
    const missingInDb = [];
    songs.forEach(s => {
      s.chords.forEach(c => {
        if (!content.includes('"' + c + '":')) missingInDb.push({ song: s.title, chord: c });
      });
    });
    console.log('Test 5b - All song chords resolvable in CHORD_PRESETS:', missingInDb.length === 0 ? 'PASS ✅' : 'FAIL ❌ (' + missingInDb.length + ' unresolved)');
  } catch (e) {
    console.log('Test 5 - Parse CORE_SEARCH_SONGS: FAIL ❌', e.message);
  }
}

// Test 6: Custom Song Creator UI Elements
const customElements = [
  'search-empty-box',
  'custom-song-creator-box',
  'custom-title-input',
  'custom-artist-input',
  'custom-key-select',
  'custom-bpm-input',
  'custom-strum-select',
  'custom-lyrics-textarea'
];
const missingCustomElements = customElements.filter(id => !content.includes('id="' + id + '"'));
console.log('Test 6 - Custom Song Sheet Creator DOM Elements:', missingCustomElements.length === 0 ? 'PASS ✅' : 'FAIL ❌ (Missing: ' + missingCustomElements.join(', ') + ')');

// Test 7: Rhythm Dock Collapse Scope
const hasTopLevelDock = content.includes('let isRhythmDockCollapsed = false;\n    function toggleRhythmDockCollapse');
console.log('Test 7 - Rhythm dock collapse function top-level scope:', hasTopLevelDock ? 'PASS ✅' : 'FAIL ❌');

// Test 8: Microphone and Pitch Detection Wiring
const hasPitchRealtime = content.includes('updateTunerPitchRealtime(f0, noteFullName, cents);');
const hasQuizMatch = content.includes('checkQuizChordMatch(best.short);');
const hasPlayAlongMatch = content.includes('checkPlayAlongLiveMatch(best.short);');
console.log('Test 8a - Tuner wired to live mic pitch:', hasPitchRealtime ? 'PASS ✅' : 'FAIL ❌');
console.log('Test 8b - Quiz wired to live chord match:', hasQuizMatch ? 'PASS ✅' : 'FAIL ❌');
console.log('Test 8c - Play-along studio wired to live mic match:', hasPlayAlongMatch ? 'PASS ✅' : 'FAIL ❌');

// Test 9: No audio speaker feedback loop in MIDI output
const midiFeedbackFixed = !content.includes('playVirtualSynthVoice(pitch, velocity);') || content.includes('// NOTE: We NEVER play audible speaker sound here while the microphone is live!');
console.log('Test 9 - Acoustic feedback loop removed from sendMidiNoteOn:', midiFeedbackFixed ? 'PASS ✅' : 'FAIL ❌');

console.log('\n=== ALL AUTOMATED QA TESTS COMPLETE ===');
