<div align="center">

<br/>

```
██████╗ ██╗   ██╗██████╗ ██╗   ██╗███╗   ██╗███╗   ██╗███████╗██████╗
██╔══██╗╚██╗ ██╔╝██╔══██╗██║   ██║████╗  ██║████╗  ██║██╔════╝██╔══██╗
██████╔╝ ╚████╔╝ ██████╔╝██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██████╔╝
██╔═══╝   ╚██╔╝  ██╔══██╗██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══██╗
██║        ██║   ██║  ██║╚██████╔╝██║ ╚████║██║ ╚████║███████╗██║  ██║
╚═╝        ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
                                                              A P E X
```

### **The Python IDE that lives in your browser — and remembers you.**
*No account. No install. No lost work. Ever.*

<br/>

[![Live Demo](https://img.shields.io/badge/▶%20Try%20It%20Now-pyrunner--apex.pages.dev-00d4ff?style=for-the-badge&logo=python&logoColor=white)](https://pyrunner-apex.pages.dev)

<br/>

[![Python 3.12](https://img.shields.io/badge/Python-3.12_via_WASM-3776AB?style=flat-square&logo=python&logoColor=white)](https://pyodide.org)
[![Zero Backend](https://img.shields.io/badge/Backend-None-00e676?style=flat-square)](https://pyrunner-apex.pages.dev)
[![Monaco Editor](https://img.shields.io/badge/Editor-Monaco_(VS_Code)-007ACC?style=flat-square&logo=visualstudiocode)](https://microsoft.github.io/monaco-editor/)
[![WebAssembly](https://img.shields.io/badge/Powered_by-WebAssembly-654ff0?style=flat-square&logo=webassembly)](https://webassembly.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Deploy on Cloudflare](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare)](DEPLOY_GUIDE.md)

</div>

---

## Why PyRunner Apex beats every other online compiler

| | PyRunner Apex | Programmiz | Replit | OnlineGDB |
|---|:---:|:---:|:---:|:---:|
| Your code survives a shutdown | ✅ Always | ❌ Gone | ⚠️ Account needed | ❌ Gone |
| No account required | ✅ | ✅ | ❌ | ✅ |
| Real `input()` that actually works | ✅ | ❌ Faked | ✅ | ✅ |
| VS Code–grade editor | ✅ Monaco | ❌ Basic | ⚠️ Partial | ❌ Basic |
| Multiple `.py` files in one project | ✅ | ❌ | ✅ | ❌ |
| Share code without uploading to a server | ✅ URL-encoded | ❌ | ❌ | ❌ |
| Auto-installs numpy, pandas, etc. | ✅ | ❌ | ⚠️ Slow | ❌ |
| Runs 100% in your browser | ✅ | ❌ Server | ❌ Server | ❌ Server |
| Works offline after first load | ✅ | ❌ | ❌ | ❌ |

---

## The feature that changes everything

> **Close your laptop. Unplug it. Come back tomorrow.**
> Open PyRunner Apex. Your code is exactly where you left it.
> No account. No cloud sync. No "session expired." Just your work.

PyRunner Apex saves everything to your browser's local storage on every single keystroke. It's the only online Python tool that treats your code like VS Code does — as something that *belongs to you*, not to a server.

---

## Features

### 🧠 Real Python. Not a trick.

Most "online Python compilers" run your code on their servers, fake `input()`, or use a stripped-down interpreter. PyRunner Apex runs **real CPython 3.12** compiled to WebAssembly — the exact same Python you'd install on your machine.

```python
import numpy as np          # ✅ auto-installs
import pandas as pd         # ✅ auto-installs

name = input("Your name: ") # ✅ actually pauses and waits
print(f"Hello {name}!")     # ✅ real output
```

- **`input()` works** — prompts pause execution and wait for you to type, exactly like a real terminal
- **Packages auto-install** — just `import numpy` and it happens. No pip commands.
- **Infinite loop protection** — 3-second kill switch using `sys.settrace` so a `while True` doesn't hang your tab forever
- **Nothing leaves your machine** — your code never touches a server

---

### ✏️ An editor you actually want to use

PyRunner Apex uses **Monaco Editor** — the same engine that powers VS Code.

- Python syntax highlighting with bracket pair colorization
- Smooth cursor animation and line highlight
- Error line marked in red the moment your code fails — jump straight to the problem
- Find & Replace (`Ctrl+H`), comment toggle (`Ctrl+/`), indent with `Tab`
- Font size control: A− / A / A+
- Dark and light theme, both persisted across sessions
- Resizable split pane between editor and output

On mobile, it switches to **CodeMirror** — a lightweight, touch-friendly editor that actually works on a phone screen.

---

### 📂 Multiple files. One real project.

Click `+` to create a new `.py` file. Give it a name. Switch between files with tabs. Import one from another.

```
your-project/
├── main.py       ← active tab
├── utils.py      ← importable
└── models.py     ← importable
```

All files are saved to local storage automatically. Delete and rename anytime. This is how Python projects actually work — not one lonely box of code.

---

### 🔗 Share without a server

Click **Share** and you get a URL. That URL *is* your code — compressed using LZ-String and encoded directly into the link. No upload. No database. No expiry date. No one can take it down.

Anyone who opens the link gets your full multi-file project, ready to run instantly.

---

### 🖥️ Output that tells you what went wrong

Errors don't just dump a traceback. They render as **rich error cards**:

```
🔴 TypeError                              Line 7
─────────────────────────────────────────────────
unsupported operand type(s) for +: 'int' and 'str'

💡 You're mixing a string and a number.
   Wrap the number in str() or convert with int().

▶ Show full traceback
```

15+ error types each get their own plain-English explanation — written for humans, not compilers.

---

### ⚡ Keyboard shortcuts that feel right

| Shortcut | Action |
|---|---|
| `Ctrl + Enter` | Run code |
| `Ctrl + S` | Save `.py` to disk |
| `Ctrl + Shift + C` | Copy code |
| `Ctrl + H` | Find & Replace |
| `Ctrl + /` | Toggle comment |
| `?` | Open shortcuts panel |

---

### 📚 Built-in examples & daily challenges

**12 ready-to-run examples** — Hello World to OOP — load with one click. No copy-pasting from a tutorial page.

**A daily coding challenge** rotates every day (30 challenges, cycling from Jan 1). Open it, hit "Try it", and a starter template is already in your editor.

---

### 🚀 Instant. No setup.

```
1. Open https://pyrunner-apex.pages.dev
2. Write Python
3. Press Ctrl+Enter
```

That's it. No account. No install. No waiting room. No "free tier expired."

---

## Tech Stack

| Layer | Technology |
|---|---|
| Python runtime | [Pyodide v0.27.2](https://pyodide.org) — CPython 3.12 → WebAssembly |
| Desktop editor | [Monaco Editor v0.43.0](https://microsoft.github.io/monaco-editor/) |
| Mobile editor | [CodeMirror 5](https://codemirror.net/) |
| URL compression | [LZ-String](https://pieroxy.net/blog/pages/lz-string/index.html) |
| Split pane | [Split.js](https://split.js.org/) |
| Framework | [TanStack Start](https://tanstack.com/start) + React |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |
| CI/CD | GitHub Actions |

---

## Deploy Your Own

Full instructions → **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)**

```bash
bun install
bun run build
# Deploy .output/public to Cloudflare Pages
```

Push to `main` → GitHub Actions deploys automatically.

---

## Project Structure

```
pyrunner-apex/
├── .github/
│   └── workflows/
│       └── quality.yml      # CI on every push
├── public/
│   ├── pyrunner.html        # the entire IDE — one self-contained file
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

## Contributing

Found a bug? Have a feature idea? Open an issue first so we can discuss it before you build. PRs are welcome.

---

<div align="center">

**[▶ Open PyRunner Apex](https://pyrunner-apex.pages.dev)**

*Built by Ashtid D · MIT License*

*If this saved you from Programmiz, leave a ⭐*

</div>
