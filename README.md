<div align="center">

# PyRunner Apex

**A fully client-side Python 3 IDE that runs in your browser.**  
No server. No install. No account.

[![Deploy](https://img.shields.io/badge/Deploy-Cloudflare_Pages-orange?logo=cloudflare)](https://pages.cloudflare.com)
[![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)](https://pyodide.org)
[![WebAssembly](https://img.shields.io/badge/Powered_by-WebAssembly-654ff0?logo=webassembly)](https://webassembly.org)
[![Zero Backend](https://img.shields.io/badge/Backend-None-brightgreen)](#)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[**→ Open the Editor**](https://pyrunner-apex.pages.dev) · [**Deploy Guide**](DEPLOY_GUIDE.md)

</div>

---

## Why

Most browser-based Python editors either fake `input()`, silently break on packages, or send your code to a server.

PyRunner Apex runs real CPython 3.11 via WebAssembly — directly in the tab. `input()` works. `numpy` and `pandas` install automatically. Nothing leaves your machine.

---

## Features

### Editor
- Monaco editor (the engine behind VS Code) with Python syntax highlighting, autocomplete, and bracket pair colorization
- Multi-file support — create, rename, switch between, and delete `.py` files via a tab bar
- Word wrap, line numbers, and smooth cursor animation
- Font size control (A− / A / A+)
- Resizable editor/output split pane
- Mobile-responsive layout with a dedicated mobile editor view

### Running Code
- Python 3.11 via WebAssembly — executes entirely in the browser, no backend
- Interactive `input()` — prompts behave exactly as they do in a real terminal
- Automatic package installation — `import numpy`, `import pandas`, etc. work out of the box via Pyodide
- Execution timer shown after each run
- `Ctrl+Enter` to run

### Output & Errors
- Terminal-style output with colored text
- Rich error cards showing line number, traceback, and a plain-English explanation
- Inline error banner with one-click fix suggestions
- Copy output and Clear buttons

### File Management
- Save `.py` to disk
- Open/load `.py` from disk
- Copy code to clipboard
- Clear editor

### UI
- Dark and light theme toggle
- Collapsible sidebar with a Python syntax quick reference
- Toast notifications and a keyboard shortcuts modal
- Splash screen on load

### Extras
- 12 built-in code examples via an examples dropdown
- Daily coding challenge that rotates each day
- Share button — encodes your code into a URL so others can open it instantly

---

## Getting Started

No install needed. Just open the editor and start writing Python:

**[pyrunner-apex.pages.dev →](https://pyrunner-apex.pages.dev)**

To run it locally or deploy your own instance, see below.

---

## Deploy Your Own

Full instructions → **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)**

```bash
bun install
bun run build
# Deploy .output/public to Cloudflare Pages
```

Pushing to `main` triggers automatic deployment via the included GitHub Actions workflow.

---

## Project Structure

```
pyrunner-apex/
├── .github/
│   └── workflows/
│       └── deploy.yml       # auto-deploy on push
├── public/
│   ├── pyrunner.html        # the entire IDE (self-contained)
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── routes/
│   │   ├── __root.tsx       # HTML shell + SEO meta
│   │   └── index.tsx        # embeds pyrunner.html
│   └── styles.css
├── DEPLOY_GUIDE.md
└── package.json
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Python runtime | [Pyodide](https://pyodide.org) — CPython 3.11 compiled to WebAssembly |
| Editor | [Monaco Editor](https://microsoft.github.io/monaco-editor/) |
| Framework | [TanStack Start](https://tanstack.com/start) + React |
| Hosting | Cloudflare Pages |
| CI/CD | GitHub Actions |

---

## Contributing

Issues and pull requests are welcome. If you find a bug or have a feature idea, open an issue first so we can discuss it before you build.

---

<div align="center">

*by Ashtid D · MIT License*

</div>
