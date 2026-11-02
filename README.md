<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/brand/logo-lockup-dark.svg">
  <img src="public/brand/logo-lockup-light.svg" alt="PyRunner Apex" width="380">
</picture>

<br/>

**A full Python 3 IDE that runs in your browser, and never loses your work.**

*No install. No account. No lost code. Ever.*

<br/>

[![Try It Now](https://img.shields.io/badge/▶%20Try%20It%20Live-pyrunner--apex.pages.dev-ff5a1f?style=for-the-badge&logo=python&logoColor=white)](https://pyrunner-apex.pages.dev)

<br/>

[![Python 3.12](https://img.shields.io/badge/Python-3.12_·_WebAssembly-3776AB?style=flat-square&logo=python&logoColor=white)](https://pyodide.org)
[![Zero Backend](https://img.shields.io/badge/Backend-None_·_100%25_Browser-5fd68a?style=flat-square)](#how-it-works)
[![Editor](https://img.shields.io/badge/Editor-Monaco_(VS_Code_Engine)-007ACC?style=flat-square&logo=visualstudiocode)](https://microsoft.github.io/monaco-editor/)
[![License](https://img.shields.io/badge/License-MIT-ff7a45?style=flat-square)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare)](DEPLOY_GUIDE.md)

<br/>

[**Why**](#why-i-built-this) · [**Features**](#features) · [**Step mode**](#-step-through-your-code) · [**Shortcuts**](#keyboard-shortcuts) · [**How it works**](#how-it-works) · [**Run locally**](#run-it-locally) · [**Deploy**](#deploy-your-own)

</div>

---

## Why I built this

If you've ever used an online Python compiler, you already know the pain.

You're in a computer lab. You've been working on something for 20 minutes. Your friend makes a joke and closes your tab, or worse, turns off the computer entirely. Everything is gone. You start over. It's happened to all of us.

Or you're on mobile, deep into solving a problem, and you accidentally press the back button. One tap. All your work, gone. No warning. No recovery.

I got tired of it. Every online compiler I tried had the same flaw: the moment you leave, your code leaves with you. So I built PyRunner Apex to fix exactly that.

**Close the tab. Shut down the computer. Press back on mobile by mistake. Come back whenever.**
Your code is exactly where you left it.

It saves to your browser's local storage on every single keystroke. No account, no cloud sync, no "please log in to save your work." It just saves. Always.

Once that was solved, I kept going, and it grew from a safe place to run code into a proper learning tool: you can watch your program run one line at a time, see every variable change, plot charts, and get plain-English help when something breaks.

---

## Features

### 🛡️ Your work never disappears
Every keystroke is saved to your browser. Close the tab, restart the PC, hit back on your phone. It's all still there when you return.

### 🐍 Real Python, not a fake
PyRunner Apex runs **real CPython 3.12 via WebAssembly**, directly in your browser tab. Nothing is sent to a server.

```python
import numpy as np       # works: installs automatically, no pip needed
import pandas as pd      # works: same
import heapq             # works: stdlib, no setup at all

name = input("Name: ")   # actually pauses and waits for you to type
print(f"Hello {name}")   # real output, just like your terminal
```

### ⌨️ `input()` that works everywhere
Execution pauses, you type, you press Enter, the code continues, exactly like a real terminal. That includes `input()` **inside your own functions, methods and recursive calls**, not just at the top of the file:

```python
def ask_age():
    return int(input("Age: "))      # works

def greet():
    name = input("Name: ")
    return f"Hi {name}, next year you'll be {ask_age() + 1}"

print(greet())
```

> The only places `input()` can't go are `__init__`, other `__dunder__` methods and `lambda`s. If you try, the error card explains it and shows what to do instead.

### 👣 Step through your code
Press **Step** and PyRunner Apex records your program, then lets you walk through it **one line at a time**, forwards *and backwards*. See [Step through your code](#-step-through-your-code) below. This is the headline feature for learners.

### 🔎 Variables panel
After every run, a panel under the output lists every variable with its type and value, so you can see what your program actually did.

### 📈 Plots right in the output
`matplotlib` charts appear inline in the output panel when you call `plt.show()`. No pop-up windows, no extra setup.

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.title("Squares")
plt.show()
```

### 💡 Smart autocomplete
Suggestions as you type: Python keywords, built-ins with short descriptions, ready-made snippets (`def`, `for`, `fori`, `while`, `class`, `try`, `with`, `main`…), **your own functions and variables**, and members after `math.`, `random.`, `np.`, `plt.` and more.

### ⏹️ Stop button and adjustable time limit
A **Stop** button appears while your program runs. It works even when the program is waiting on `input()`. Choose a **time limit from 1 to 60 seconds** (the clock menu above the editor) to catch infinite loops. Your choice is remembered.

### ▶️ Run just the selected lines
Highlight some lines and click **Run selection** (or press `Ctrl + Shift + Enter`) to test a small piece. It reuses the variables from your last full run, and errors still point to the real line number in your file.

### 🧯 Errors that explain themselves
Every error is a card with the error type, the **exact line**, a plain-English explanation, and a suggestion. For some mistakes, like a missing `)`, there's a one-click **Apply fix** button. The line is highlighted in the editor, and the popup is dismissible with ✕ or `Esc`.

### 📁 Multiple files in one project
Click `+` in the sidebar to create a new `.py` file and import it from your main file. Everything is saved automatically.

```
your-project/
├── main.py       ← runs when you hit Ctrl+Enter
├── utils.py      ← importable
└── models.py     ← importable
```

### 📦 Download everything as a `.zip`
One click on **Zip** (toolbar or Files panel) downloads every file in your project as a single `.zip`.

### 🔗 Share in one click
Hit **Share**, copy the URL, send it to anyone. The entire project, all files, is compressed into the URL itself. No upload, no account, no expiry. Whoever opens it gets your exact code, ready to run.

### 🖥️ The VS Code editor
**Monaco**, the engine behind VS Code, with Python highlighting, bracket pair colorization, error line marking, Find & Replace and comment toggling. On mobile it switches to **CodeMirror**, which is lighter and works well on a phone screen.

### 📚 Learning extras
- **12 built-in examples** (Hello World, loops, functions, OOP, list comprehensions, a calculator, a guessing game…), loaded with one click
- **Daily coding challenge**: 30 problems on a daily rotation, each loading a starter template with a hint
- **Syntax / common-errors / built-ins** quick reference in the sidebar
- **Dark and light themes** and three font sizes, all remembered

---

## 👣 Step through your code

This is a tiny version of what Python Tutor does, built into the editor.

1. Write your program.
2. Click **Step** (next to Run).
3. PyRunner Apex runs it once, recording every line. If your program asks for `input()`, answer as normal.
4. Walk through the recording:

| Control | What it does |
|---|---|
| **Next** / `→` | Go to the next step |
| **Back** / `←` | Go back one step (the output rewinds too) |
| **⏮ / ⏭** | Jump to the first / last step |
| **▶ Play** | Auto-play through the steps |
| **Slider** | Scrub to any step |
| **Exit** | Leave step mode and edit again |

At each step you see:
- the **current line**, highlighted in the editor
- the **output printed so far**, and nothing from later lines
- the **call stack** (which function you're inside)
- **local and global variables**, with anything that just changed **highlighted**
- the **returned value** when a function returns
- the **error** on the final step, if your program crashed

Try it on a function with a loop or recursion, and you can watch `total` grow or the call stack deepen.

> Long programs are recorded up to about 1,500 steps, and you're told when that cap is hit. Step mode and Run selection are desktop-only (they need the Monaco editor).

---

## Who it's for

- **Students** who use computer labs and can't install Python, or who share machines
- **Beginners** who want to *see* how code runs, not just what it prints
- **Anyone on mobile** who's lost code to the back button one too many times
- **Teachers** who want to send students a link that opens a ready-to-run Python environment
- **Anyone who just wants to try something quickly** without opening an IDE

---

## vs. the alternatives

| | **PyRunner Apex** | Programiz | Replit | OnlineGDB |
|---|:---:|:---:|:---:|:---:|
| Code survives closing the tab | ✅ Always | ❌ Gone | ⚠️ Need account | ❌ Gone |
| Code survives shutting down the PC | ✅ Always | ❌ | ❌ | ❌ |
| No account needed | ✅ | ✅ | ❌ | ✅ |
| `input()` actually works | ✅ Real, even inside functions | ❌ Faked | ✅ | ✅ |
| VS Code–grade editor | ✅ Monaco | ❌ Basic | ⚠️ Partial | ❌ Basic |
| Multiple `.py` files | ✅ | ❌ | ✅ | ❌ |
| Share without uploading anywhere | ✅ URL-encoded | ❌ | ❌ | ❌ |
| Auto-installs packages | ✅ | ❌ | ⚠️ Slow | ❌ |
| Runs 100% in the browser | ✅ | ❌ Server | ❌ Server | ❌ Server |

*Comparison reflects my own testing at the time of writing. These products change, so check for yourself.*

---

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Enter` | Run code |
| `Ctrl + Shift + Enter` | Run selected lines |
| `Ctrl + S` | Save `.py` to disk |
| `Ctrl + Shift + C` | Copy code |
| `Ctrl + H` | Find & Replace |
| `Ctrl + /` | Toggle comment |
| `→` / `←` | Next / previous step (in step mode) |
| `Esc` | Close popups |
| `?` | Open shortcuts panel |

(On Mac, use `Cmd` instead of `Ctrl`.)

---

## How it works

Everything runs in your browser. There is no backend.

| Piece | How it's done |
|---|---|
| **Running Python** | [Pyodide](https://pyodide.org) (CPython compiled to WebAssembly) runs on the page. Output streams straight into the terminal. |
| **Saving** | Your files are written to `localStorage` on every keystroke. |
| **Sharing** | The project is compressed with LZ-String and stored in the URL's `?code=` parameter. |
| **`input()` everywhere** | The browser can't block while waiting for you to type. Before running, your code is parsed, and any function that calls `input()` (directly or through other functions) is turned into an `async` function, with its calls awaited. Line numbers are preserved because the original source is never re-printed. |
| **Time limit & Stop** | A trace function checks a flag and a timer as your code runs, and raises an error when the limit is hit or Stop is pressed. |
| **Step mode** | The run is recorded with Python's tracing hook (line, variables, call stack, output position at each step), then replayed in the UI. Going backwards is free because it's a recording. |
| **Plots** | `matplotlib` is switched to a non-interactive backend and `plt.show()` is redirected to render each figure as an image in the output. |
| **Errors** | Exceptions are caught inside Python, trimmed to your own frames, and rendered as a card with a friendly explanation. |

### Good to know
- **Stop** can interrupt a program that's waiting for input, but a tight CPU loop like `while True: pass` blocks the browser until the **time limit** ends it. That's a limit of running Python on the page, so the time limit is your safety net.
- The first load downloads the Python engine (and the editor) from a CDN, so you need an internet connection once per visit (browsers cache them after that).
- Packages come from the Pyodide distribution. Pure-Python packages beyond it may not be available.
- Step mode and Run selection need the desktop editor.

---

## Tech stack

| Layer | Technology |
|---|---|
| Python runtime | [Pyodide v0.27.2](https://pyodide.org), CPython 3.12 → WebAssembly |
| Desktop editor | [Monaco Editor v0.43.0](https://microsoft.github.io/monaco-editor/) |
| Mobile editor | [CodeMirror 5](https://codemirror.net/) |
| URL compression | [LZ-String](https://pieroxy.net/blog/pages/lz-string/index.html) |
| Resizable panes | [Split.js](https://split.js.org/) |
| Framework | [TanStack Start](https://tanstack.com/start) + React (hosts the IDE page) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |
| CI/CD | GitHub Actions (lint + build on every push) |

---

## Run it locally

```bash
git clone https://github.com/reboot-phoenix/pyrunner-apex.git
cd pyrunner-apex
bun install
bun run dev
```

Then open the URL it prints. The whole IDE lives in **`public/pyrunner.html`**, a single self-contained file, so most changes happen there. Edit it, refresh, done.

> ⚠️ Edit `public/pyrunner.html`, not a copy at the top level of the repo. Only the file inside `public/` is served.

---

## Deploy your own

Full walkthrough → **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)**

```bash
bun install
bun run build
# Deploy the build output to Cloudflare Pages
```

Push to `main` and it auto-deploys in about 2 minutes.

---

## Project structure

```
pyrunner-apex/
├── .github/
│   └── workflows/
│       └── quality.yml       # lint + build on every push
├── public/
│   ├── pyrunner.html         # the entire IDE, one self-contained file
│   ├── brand/                # logo mark + light/dark lockups (SVG + PNG)
│   ├── favicon.ico / .svg    # favicons (+ 16/32/48 png, apple-touch-icon)
│   ├── site.webmanifest      # app name + 192/512 icons
│   ├── og-image.png          # social share preview (1200x630)
│   ├── _headers              # security headers (CSP etc.)
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

## Brand assets

Everything lives in `public/brand/` and `public/`:

| File | Use |
|---|---|
| `brand/logo-mark.svg` / `.png` | The icon on its own |
| `brand/logo-lockup-dark.svg` / `.png` | Mark + wordmark for dark backgrounds |
| `brand/logo-lockup-light.svg` / `.png` | Mark + wordmark for light backgrounds |
| `favicon.ico`, `favicon.svg`, `favicon-16/32/48.png` | Browser tab icons |
| `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Home-screen / PWA icons |
| `og-image.png` | Link preview card (Discord, Twitter, LinkedIn…) |

Palette: charcoal `#14110F`, orange `#FF7A45` / `#FF5A1F`, cream `#FFF6EC`, sand `#E7B98A`.

---

## Contributing

Found a bug or have an idea? Open an issue first so we can talk about it. PRs are welcome.

Ideas that would be great to see:
- Screenshots / a short demo GIF for this README
- Running Python in a Web Worker, so Stop can interrupt CPU-heavy loops instantly
- Step mode and Run selection on mobile
- More daily challenges and examples

---

## Changelog

**Latest**
- 🎨 **New brand**: new logo, favicon set and social preview, plus a warm charcoal / cream / orange theme across the whole IDE (dark and light), with matching editor colours
- ✨ `input()` now works inside functions, methods and recursion
- ✨ **Step mode**: replay your program line by line, forwards and backwards, with variables, call stack and output at each step
- ✨ **Variables panel** after every run
- ✨ **Stop** button and an adjustable **time limit** (1–60 s)
- ✨ **Run selection** (`Ctrl + Shift + Enter`)
- ✨ **Autocomplete** for keywords, built-ins, snippets, your own code and common modules
- ✨ **Plots**: `matplotlib` charts render in the output panel
- ✨ **Download all files** as a `.zip`
- ⚡ First `matplotlib` use is friendlier: clear progress messages instead of a scary red warning, and its font cache is now remembered between visits, so only your very first plot is slow
- 🐛 Pressing Enter with the autocomplete popup open always inserts a new line now (`Tab` accepts a suggestion)
- 🐛 Error cards now show the real error type, message and **correct line number** (they used to show a blank "PythonError" on the wrong line)
- 🐛 The error popup's ✕ button now works, and the popup no longer covers your code
- 🐛 Top-level code now runs in a real module scope, so `global` and variable sharing between functions behave like normal Python

---

<div align="center">

<br/>

**[▶ Open PyRunner Apex](https://pyrunner-apex.pages.dev)**

<br/>

*Built by Ashtid D · MIT License*

*If this saved your work when someone turned off your PC, you know what to do. ⭐*

<br/>

</div>
