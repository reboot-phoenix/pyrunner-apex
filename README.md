<div align="center">

# 🐍 PyRunner Apex

**Free online Python 3 editor — runs entirely in your browser**

[![Deploy](https://img.shields.io/badge/Deploy-Cloudflare_Pages-orange?logo=cloudflare)](https://pages.cloudflare.com)
[![Python](https://img.shields.io/badge/Python-3.11_via_Pyodide-blue?logo=python)](https://pyodide.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[**→ Live Demo**](https://pyrunner-apex.pages.dev) · [**Deploy Guide**](DEPLOY_GUIDE.md)

</div>

---

## ✨ What it does

Run Python 3 **instantly** in your browser — no install, no account, no server.

| Feature | Details |
|---|---|
| 🐍 Python 3.11 | via Pyodide (WebAssembly) — full CPython in the browser |
| ✏️ Monaco Editor | VS Code's editor engine — syntax highlighting, autocomplete |
| ⌨️ `input()` | Actually works — interactive terminal input |
| 📦 Auto packages | `import numpy`, `import pandas`, etc. just work |
| 🤖 AI assistant | Ask Gemini, ChatGPT, or Claude about your code |
| 🗂️ Multi-file | Create and switch between multiple `.py` files |
| 💾 Save / Open | Download `.py`, open files from your device |
| 🎨 Themes | Dark & light mode, adjustable font size |
| 🔴 Error highlighting | Errors highlighted inline in the editor |

## 🤖 Built with AI assistance from

| | AI | Role |
|---|---|---|
| <img src="https://www.google.com/favicon.ico" width="14"> | **Google Gemini** | Feature ideation, Python/JS logic |
| <img src="https://openai.com/favicon.ico" width="14"> | **OpenAI ChatGPT** | Debugging, UI structure |
| <img src="https://anthropic.com/favicon.ico" width="14"> | **Anthropic Claude** | `input()` fix, AST transformer, architecture |

## 🚀 Deploy your own

See the full step-by-step → **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)**

Quick version:
```bash
bun install
bun run build
# deploy .output/public to Cloudflare Pages
```

## 📁 Structure

```
pyrunner-apex/
├── .github/workflows/deploy.yml   ← auto-deploy on git push
├── public/
│   ├── pyrunner.html              ← the entire Python IDE (self-contained)
│   ├── sitemap.xml                ← for Google indexing
│   └── robots.txt
├── src/
│   ├── routes/
│   │   ├── __root.tsx             ← HTML shell + SEO meta tags
│   │   └── index.tsx              ← embeds pyrunner.html
│   └── styles.css
├── DEPLOY_GUIDE.md                ← full setup instructions
└── package.json
```

## 🔑 AI Keys

The AI panel uses your own API key — it goes directly to the AI provider, never stored on any server.

- **Gemini (free tier):** https://aistudio.google.com/apikey
- **OpenAI:** https://platform.openai.com/api-keys
- **Claude:** https://console.anthropic.com/settings/keys

---

<div align="center">

*by Ashtid D · built with Gemini · ChatGPT · Claude · MIT License*

</div>
