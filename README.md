<div align="center">

<img src="https://img.shields.io/badge/-%3E__-0d0f18?style=for-the-badge&labelColor=0d0f18&color=00d4ff&logoColor=00d4ff" alt="" />

# PyRunner Apex

**The Python IDE that lives in your browser — and never forgets your work.**

*No account. No install. No server. No lost code. Ever.*

<br/>

[![Try It Now](https://img.shields.io/badge/▶%20Try%20It%20Live-pyrunner--apex.pages.dev-00d4ff?style=for-the-badge&logo=python&logoColor=white)](https://pyrunner-apex.pages.dev)

<br/>

[![Python 3.12](https://img.shields.io/badge/Python-3.12_·_WebAssembly-3776AB?style=flat-square&logo=python&logoColor=white)](https://pyodide.org)
[![Zero Backend](https://img.shields.io/badge/Backend-None_·_100%25_Browser-00e676?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor-Monaco_(VS_Code_Engine)-007ACC?style=flat-square&logo=visualstudiocode)](https://microsoft.github.io/monaco-editor/)
[![License](https://img.shields.io/badge/License-MIT-b57bee?style=flat-square)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare)](DEPLOY_GUIDE.md)

</div>

---

<div align="center">

### Open the editor. Write Python. Close the tab.
### Come back a week later. It's all still there.

</div>

---

## Why not Programmiz, Replit, or OnlineGDB?

Because every single one of them has the same problem — **your code lives on their server, not yours.**

Close the tab on Programmiz → gone. Free tier on Replit expires → gone. OnlineGDB session times out → gone. And all of them run your code on a remote machine, which means latency, rate limits, and someone else's computer between you and your Python.

PyRunner Apex is different at the architecture level.

| | **PyRunner Apex** | Programmiz | Replit | OnlineGDB |
|---|:---:|:---:|:---:|:---:|
| Code survives closing the tab | ✅ **Always** | ❌ Gone | ⚠️ Need account | ❌ Gone |
| Code survives shutting down your machine | ✅ **Always** | ❌ | ❌ | ❌ |
| No account needed | ✅ | ✅ | ❌ | ✅ |
| `input()` actually works | ✅ **Real terminal** | ❌ Faked | ✅ | ✅ |
| VS Code–grade editor | ✅ **Monaco** | ❌ Basic | ⚠️ Partial | ❌ Basic |
| Multiple `.py` files, one project | ✅ | ❌ | ✅ | ❌ |
| Share code without uploading it anywhere | ✅ **URL-encoded** | ❌ | ❌ | ❌ |
| numpy, pandas auto-install | ✅ | ❌ | ⚠️ Slow | ❌ |
| Runs 100% in your browser | ✅ **WebAssembly** | ❌ Server | ❌ Server | ❌ Server |
| Works offline after first load | ✅ | ❌ | ❌ | ❌ |

---

## How it works

```
Your browser
    └── Pyodide (CPython 3.12 compiled to WebAssembly)
            └── runs real Python, locally, in the tab
                    └── output streams to Monaco editor terminal
                            └── everything auto-saves to localStorage
```

Your code **never leaves your machine.** No requests to a Python server. No rate limits. No accounts. The entire IDE — editor, runtime, terminal, file system — runs inside a single browser tab.

---

## Features

### 💾 Your work never disappears

PyRunner Apex auto-saves to `localStorage` on every keystroke. Not when you hit save. Not when you log in. Every. Single. Keystroke.

```
Monday:    write some code, close the laptop
Tuesday:   open the browser, keep going
Next week: still there
Power cut: still there
```

This is the one thing every other online compiler gets wrong. PyRunner Apex treats your code like VS Code does — as something that belongs to **you**, not to a server.

---

### 🧠 Real CPython 3.12 — not a fake

Most "online compilers" send your code to a server and return the output. PyRunner Apex runs **real CPython 3.12** compiled to WebAssembly — the exact same interpreter you'd install on your machine.

```python
import numpy as np          # ✅ installs automatically
import pandas as pd         # ✅ installs automatically
import matplotlib.pyplot    # ✅ installs automatically

name = input("Your name: ") # ✅ actually pauses and waits for you
print(f"Hello, {name}!")    # ✅ real stdout, unbuffered
```

- **`input()` blocks properly** — execution pauses, the terminal waits, you type, it continues. Exactly like a real terminal.
- **Packages auto-install** — just write `import numpy`. No pip, no requirements.txt, no setup.
- **Infinite loop protection** — a 3-second `sys.settrace` kill switch catches runaway loops before they freeze your tab.
- **Nothing touches a server** — zero network requests for your code.

---

### ✏️ The VS Code editor, in your browser

PyRunner Apex uses **Monaco Editor** — the exact engine that powers VS Code.

- Full Python syntax highlighting and bracket pair colorization
- Smooth cursor animation, line highlight, and glyph margin
- **Error line highlighting** — the failing line turns red the instant your code crashes
- Find & Replace, comment toggle, auto-indent
- Font size control (A− / A / A+)
- Dark and light themes — both remembered across sessions
- Resizable split pane between editor and output

On mobile, it switches automatically to **CodeMirror** with Monokai theme — a lightweight editor that's actually usable on a touchscreen.

---

### 📂 Multiple files. A real project.

Hit `+` in the sidebar. Name your file. Import it from `main.py`. All files live together, all saved automatically.

```
your-project/
├── main.py        ← active tab, runs when you hit Ctrl+Enter
├── utils.py       ← importable: from utils import helper
└── models.py      ← importable: from models import User
```

This is how Python projects actually work. Not one text box with 300 lines of code stuffed into it.

---

### 🔗 Share your code — no upload, no account, no expiry

Click **Share**. Copy the URL. Send it.

That URL *is* your code. The entire multi-file project is LZ-compressed and encoded directly into the link — no server, no database, no "link expired after 30 days." The link works forever because there's nothing to expire.

Anyone who opens it gets your exact project, ready to run in one click.

---

### 🖥️ Errors that actually help

Forget raw tracebacks. Every error renders as a rich card:

```
🔴 TypeError                                          Line 7
──────────────────────────────────────────────────────────────
unsupported operand type(s) for +: 'int' and 'str'

💡 You're mixing a string and a number.
   Wrap the number in str() or convert the string with int().

▶ Show full traceback
```

15+ error types — `NameError`, `IndexError`, `RecursionError`, `TimeoutError`, and more — each get a plain-English explanation written for humans, not compilers. The failing line is highlighted in the editor simultaneously.

---

### 📚 Examples & daily challenges, built in

**12 ready-to-run examples** — Hello World, OOP, Fibonacci, list comprehensions, a number guessing game — one click loads them straight into your editor. No copy-pasting from a tutorial tab.

**A daily coding challenge** rotates every day across 30 problems (loops, recursion, dictionaries, algorithms). Hit "Try it" and a starter template appears in your editor with the question and a hint already written.

---

### ⚡ Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Enter` | Run code |
| `Ctrl + S` | Save `.py` to disk |
| `Ctrl + Shift + C` | Copy code |
| `Ctrl + H` | Find & Replace |
| `Ctrl + /` | Toggle comment |
| `?` | Open shortcuts panel |
| `Esc` | Close any modal |

---

### 🚀 Zero friction. Open and code.

```
Step 1: Open https://pyrunner-apex.pages.dev
Step 2: Write Python
Step 3: Ctrl+Enter
```

No sign-up flow. No "choose a plan." No 30-second spin-up. No free tier that expires. Just Python, ready in under 3 seconds.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Python runtime | [Pyodide v0.27.2](https://pyodide.org) — CPython 3.12 compiled to WebAssembly |
| Desktop editor | [Monaco Editor v0.43.0](https://microsoft.github.io/monaco-editor/) |
| Mobile editor | [CodeMirror 5](https://codemirror.net/) |
| URL compression | [LZ-String](https://pieroxy.net/blog/pages/lz-string/index.html) |
| Split pane | [Split.js](https://split.js.org/) |
| Framework | [TanStack Start](https://tanstack.com/start) + React |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) — free, global CDN |
| CI/CD | GitHub Actions — auto-deploy on every push |

---

## Deploy Your Own Instance

Full walkthrough → **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)**

```bash
bun install
bun run build
# point Cloudflare Pages at .output/public
```

Push to `main` → live in ~2 minutes. The GitHub Actions workflow is already included.

---

## Project Structure

```
pyrunner-apex/
├── .github/
│   └── workflows/
│       └── quality.yml       # CI on every push to main
├── public/
│   ├── pyrunner.html         # ← the entire IDE, one self-contained file
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── routes/
│   │   ├── __root.tsx        # HTML shell + all SEO meta tags
│   │   └── index.tsx         # embeds pyrunner.html as the app
│   └── styles.css
├── DEPLOY_GUIDE.md
└── package.json
```

The IDE itself lives entirely in `public/pyrunner.html` — one self-contained file with zero build dependencies. You can open it directly in a browser and it works.

---

## Contributing

Found a bug or have a feature idea? Open an issue first so we can talk about it before you build. PRs are welcome.

---

<div align="center">

<br/>

**[▶ Open PyRunner Apex](https://pyrunner-apex.pages.dev)**

<br/>

*Built by [Ashtid D](https://github.com/reboot-phoenix) · MIT License*

*If this saved you from Programmiz — drop a ⭐. It actually helps.*

<br/>

</div>
