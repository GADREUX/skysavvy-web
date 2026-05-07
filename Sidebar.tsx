/* ============================================================
   SkySavvy design tokens — production version
   ============================================================ */

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap");

@font-face { font-family: "Marcellus"; src: url("/fonts/Marcellus-Regular.ttf") format("truetype"); font-weight: 400; font-display: swap; }
@font-face { font-family: "Old Standard TT"; src: url("/fonts/OldStandardTT-Regular.ttf") format("truetype"); font-weight: 400; font-display: swap; }
@font-face { font-family: "Old Standard TT"; src: url("/fonts/OldStandardTT-Italic.ttf") format("truetype"); font-weight: 400; font-style: italic; font-display: swap; }
@font-face { font-family: "Old Standard TT"; src: url("/fonts/OldStandardTT-Bold.ttf") format("truetype"); font-weight: 700; font-display: swap; }

:root {
  color-scheme: light;

  /* Surfaces */
  --paper: #fbfaf6;
  --panel: #ffffff;
  --field: #f3f5ef;
  --field-warm: #f7f2e7;
  --line: #d9e1d8;
  --line-strong: #c2cdbf;

  /* Ink */
  --ink: #17211b;
  --ink-2: #344139;
  --muted: #657067;
  --muted-2: #8a948a;

  /* Brand */
  --accent: #0f766e;
  --accent-strong: #115e59;
  --accent-soft: #d6ebe7;
  --accent-tint: #ecf6f3;

  /* Semantic */
  --good: #1f7a3a;
  --good-soft: #ecf8ef;
  --warn: #a54821;
  --warn-soft: #fff0e8;
  --warn-cream: #f7f2e7;
  --warn-cream-ink: #4b4232;
  --info: #1e5a8c;
  --info-soft: #e6eff7;

  /* Island pattern */
  --ocean-deep: #0b3a57;
  --ocean: #0f4e72;
  --shallow: #3ec7cf;
  --foam: rgba(255,255,255,0.8);
  --sand: #f6e7b4;
  --dune: #ecd899;
  --land: #93c66b;
  --land-dark: #79ab4f;

  /* Type */
  --font-display: "Marcellus", "Cormorant Garamond", Georgia, serif;
  --font-serif: "Old Standard TT", "Times New Roman", Georgia, serif;
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;

  --t-display: clamp(2rem, 5vw, 4.5rem);
  --t-h1: 2rem;
  --t-h2: 1.35rem;
  --t-h3: 1.15rem;
  --t-body: 1rem;
  --t-small: 0.92rem;
  --t-label: 0.83rem;
  --t-mono: 0.92rem;

  --lh-tight: 1.05;
  --lh-snug: 1.2;
  --lh-body: 1.5;

  /* Spacing */
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 14px;
  --s-5: 18px; --s-6: 22px; --s-7: 32px; --s-8: 44px;

  /* Radius */
  --r-sm: 6px;
  --r-md: 8px;
  --r-pill: 999px;

  /* Shadow */
  --shadow: 0 22px 70px rgba(26,39,30,0.14);
  --shadow-sm: 0 4px 16px rgba(26,39,30,0.06);

  /* Motion */
  --ease: cubic-bezier(0.2,0.7,0.3,1);
  --t-fast: 140ms;
  --t-mid: 220ms;
  --t-slow: 420ms;
}

/* ── Base ── */

*, *::before, *::after { box-sizing: border-box; margin: 0; }

html, body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-serif);
  font-size: var(--t-body);
  line-height: var(--lh-body);
  -webkit-font-smoothing: antialiased;
}

/* App background — paper + dual brand wash */
body {
  background:
    linear-gradient(135deg, rgba(15,118,110,0.11), transparent 34%),
    linear-gradient(315deg, rgba(165,72,33,0.12), transparent 38%),
    var(--paper);
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--ink);
  letter-spacing: 0;
}
h1 { font-size: var(--t-h1); line-height: var(--lh-tight); }
h2 { font-size: var(--t-h2); line-height: var(--lh-snug); }
h3 { font-size: var(--t-h3); line-height: var(--lh-snug); }

p { color: var(--muted); }

a { color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color var(--t-fast) var(--ease); }
a:hover { border-bottom-color: var(--accent); }

/* ── Primitives ── */

.label {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: var(--t-label);
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--ink-2);
  text-transform: uppercase;
}

.panel {
  background: rgba(255,255,255,0.86);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  box-shadow: var(--shadow);
  padding: var(--s-5);
}

.card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  padding: var(--s-4);
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--line);
  border-radius: var(--r-pill);
  padding: 5px 10px;
  background: #f8faf5;
  font-family: var(--font-sans);
  font-size: var(--t-small);
  font-weight: 700;
  color: var(--muted);
  white-space: nowrap;
}
.chip--good { background: var(--good-soft); color: var(--good); border-color: transparent; }
.chip--warn { background: var(--warn-soft); color: var(--warn); border-color: transparent; }
.chip--accent { background: var(--accent-tint); color: var(--accent-strong); border-color: var(--accent-soft); }

.dot { width: 10px; height: 10px; border-radius: 50%; background: var(--warn); display: inline-block; }
.dot.ok { background: var(--good); }
.dot.accent { background: var(--accent); }

.status-pill {
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid var(--line); background: rgba(255,255,255,0.8);
  padding: 8px 12px; border-radius: var(--r-pill);
  font-family: var(--font-sans); font-weight: 700; font-size: var(--t-small);
  color: var(--ink); white-space: nowrap;
}

button, .btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 40px; border: 0; border-radius: var(--r-md);
  background: var(--accent); color: #fff;
  font-family: var(--font-sans); font-size: var(--t-small); font-weight: 700;
  letter-spacing: 0.04em; padding: 8px 16px; cursor: pointer;
  transition: background var(--t-fast) var(--ease), transform var(--t-fast) var(--ease);
}
button:hover, .btn:hover { background: var(--accent-strong); }
button:active, .btn:active { transform: translateY(1px); }
.btn--secondary { background: #26332b; }
.btn--secondary:hover { background: #16201a; }
.btn--ghost { background: transparent; color: var(--ink); border: 1px solid var(--line); }
.btn--ghost:hover { background: #f8faf5; border-color: var(--line-strong); }
.btn--warn { background: var(--warn); }
.btn--warn:hover { background: #7d3618; }

input, select, textarea {
  width: 100%; min-height: 42px;
  border: 1px solid var(--line); border-radius: var(--r-md);
  background: var(--field); color: var(--ink);
  font-family: var(--font-serif); font-size: var(--t-body); padding: 8px 12px;
  transition: border-color var(--t-fast) var(--ease), background var(--t-fast) var(--ease);
}
input:focus, select:focus, textarea:focus { outline: 0; border-color: var(--accent); background: #fff; }

.notice { border-radius: var(--r-md); border: 1px solid var(--line); background: var(--field-warm); color: var(--warn-cream-ink); padding: 10px 12px; font-weight: 600; font-size: var(--t-small); }
.notice--ok { background: var(--good-soft); color: var(--good); border-color: transparent; }
.notice--error { background: var(--warn-soft); color: #8b3214; border-color: transparent; }
