<div align="center">

# PyRunner Apex

**A full Python 3 IDE that runs in your browser — and never loses your work.**

*No install. No account. No lost code. Ever.*

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

## Why I built this

If you've ever used an online Python compiler, you already know the pain.

You're in a computer lab. You've been working on something for 20 minutes. Your friend makes a joke and closes your tab — or worse, turns off the computer entirely. Everything is gone. You start over. It's happened to all of us.

Or you're on mobile, deep into solving a problem, and you accidentally press the back button. One tap. All your work, gone. No warning. No recovery.

I got tired of it. Every online compiler I tried had the same flaw — the moment you leave, your code leaves with you. So I built PyRunner Apex to fix exactly that.

**Close the tab. Shut down the computer. Press back on mobile by mistake. Come back whenever.**
Your code is exactly where you left it.

It saves to your browser's local storage on every single keystroke — no account, no cloud sync, no "please log in to save your work." It just saves. Always. Even if someone turns off your PC in a computer lab, just turn it back on and open the browser. It's all there.

That's the one thing I needed from an online compiler that none of them gave me. So I built it myself.

---

## What else it does

Once the "your work never disappears" problem was solved, I kept going. Here's everything that's packed in:

### ✅ Real Python — not a fake

Most online compilers send your code to a server and return the output. PyRunner Apex runs **real CPython 3.12 via WebAssembly** — directly in your browser tab. Nothing goes to a server. Nothing.

```python
import numpy as np       # ✅ works — installs automatically, no pip needed
import pandas as pd      # ✅ works — same
import heapq             # ✅ works — stdlib, no setup at all

name = input("Name: ")   # ✅ actually pauses and waits for you to type
print(f"Hello {name}")   # ✅ real output, exactly like your terminal
```

You don't need to pip install anything. You don't need to configure anything. Just `import` whatever you need and it works.

### ✅ `input()` that actually works

This one surprises people. Most online compilers either fake `input()` (you type everything before the code runs) or just break entirely. In PyRunner Apex, `input()` behaves exactly like it does in a real terminal — execution pauses, you type, you press Enter, the code continues. On every prompt. Every time.

### ✅ Multiple files in one project

Click `+` in the sidebar to create a new `.py` file. Name it. Import it from your main file. All files are saved automatically and stay there across sessions.

```
your-project/
├── main.py       ← runs when you hit Ctrl+Enter
├── utils.py      ← importable
└── models.py     ← importable
```

### ✅ Share your code in one click

Hit **Share**, copy the URL, send it to anyone. The entire project — all your files — is compressed into the URL itself. No upload. No account. No "link expires in 7 days." The link works forever.

Whoever opens it gets your exact code, ready to run immediately.

### ✅ The VS Code editor

PyRunner Apex uses **Monaco Editor** — the same engine that powers VS Code — with full Python syntax highlighting, bracket pair colorization, error line marking, Find & Replace, comment toggle, and smooth cursor animation.

On mobile it switches to **CodeMirror** — lightweight and actually usable on a phone screen.

### ✅ Errors that tell you what went wrong

Every error renders as a card with the error type, the exact line number, a plain-English explanation of what happened, and a suggestion for how to fix it. No raw Python tracebacks dumped at you.

### ✅ 12 built-in examples

Hello World, for loops, while loops, functions, OOP, list comprehensions, a calculator, a number guessing game — all load with one click. No copy-pasting from a tutorial tab.

### ✅ Daily coding challenges

A new challenge every day — 30 problems covering loops, recursion, dictionaries, sorting, and more. Hit "Try it" and a starter template with the question and a hint loads straight into your editor.

### ✅ Dark and light theme

Both remembered across sessions. Font size control too.

---

## Who it's for

- **Students** who use computer labs and can't install Python, or who share machines
- **Beginners** who just want to write Python without setting anything up
- **Anyone on mobile** who's lost code to the back button one too many times
- **Teachers** who want to send students a link that opens a ready-to-run Python environment
- **Anyone who just wants to try something quickly** without opening an IDE

---

## vs. the alternatives

| | **PyRunner Apex** | Programmiz | Replit | OnlineGDB |
|---|:---:|:---:|:---:|:---:|
| Code survives closing the tab | ✅ Always | ❌ Gone | ⚠️ Need account | ❌ Gone |
| Code survives shutting down the PC | ✅ Always | ❌ | ❌ | ❌ |
| No account needed | ✅ | ✅ | ❌ | ✅ |
| `input()` actually works | ✅ Real | ❌ Faked | ✅ | ✅ |
| VS Code–grade editor | ✅ Monaco | ❌ Basic | ⚠️ Partial | ❌ Basic |
| Multiple `.py` files | ✅ | ❌ | ✅ | ❌ |
| Share without uploading anywhere | ✅ URL-encoded | ❌ | ❌ | ❌ |
| Auto-installs packages | ✅ | ❌ | ⚠️ Slow | ❌ |
| Runs 100% in the browser | ✅ | ❌ Server | ❌ Server | ❌ Server |

---

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Enter` | Run code |
| `Ctrl + S` | Save `.py` to disk |
| `Ctrl + Shift + C` | Copy code |
| `Ctrl + H` | Find & Replace |
| `Ctrl + /` | Toggle comment |
| `?` | Open shortcuts panel |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Python runtime | [Pyodide v0.27.2](https://pyodide.org) — CPython 3.12 → WebAssembly |
| Desktop editor | [Monaco Editor v0.43.0](https://microsoft.github.io/monaco-editor/) |
| Mobile editor | [CodeMirror 5](https://codemirror.net/) |
| URL compression | [LZ-String](https://pieroxy.net/blog/pages/lz-string/index.html) |
| Framework | [TanStack Start](https://tanstack.com/start) + React |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |
| CI/CD | GitHub Actions |

---

## Deploy Your Own

Full walkthrough → **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)**

```bash
bun install
bun run build
# Deploy .output/public to Cloudflare Pages
```

Push to `main` → auto-deploys in ~2 minutes.

---

## Project Structure

```
pyrunner-apex/
├── .github/
│   └── workflows/
│       └── quality.yml       # CI on every push
├── public/
│   ├── pyrunner.html         # the entire IDE — one self-contained file
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── routes/
│   │   ├── __root.tsx        # HTML shell + SEO meta
│   │   └── index.tsx         # embeds pyrunner.html
│   └── styles.css
├── DEPLOY_GUIDE.md
└── package.json
```

---

## Contributing

Found a bug or have a feature idea? Open an issue first so we can talk about it. PRs are welcome.

---

<div align="center">

<br/>

**[▶ Open PyRunner Apex](https://pyrunner-apex.pages.dev)**

<br/>

*Built by Ashtid D · MIT License*

*If this saved your work when someone turned off your PC — you know what to do. ⭐*

<br/>

</div>
