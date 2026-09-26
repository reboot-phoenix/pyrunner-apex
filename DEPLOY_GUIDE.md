# Deployment Guide — PyRunner Apex

> **From zero to a live Python IDE with your own domain, auto-deploys, and Google indexing.**
> Estimated time: ~20 minutes. No prior experience needed.

---

## What you'll set up

```
You write code
     ↓
GitHub (stores it)
     ↓
Cloudflare Pages (hosts it, free)
     ↓
Your domain → pyrunner-apex.pages.dev
     ↓
Google Search Console (gets you indexed)
```

---

## Step 1 — GitHub Account

If you already have one, skip this.

1. Go to [github.com](https://github.com) → **Sign up**
2. Verify your email

---

## Step 2 — Create the Repository

1. Click **+** (top right) → **New repository**
2. Fill in:

   | Field | Value |
   |---|---|
   | Repository name | `pyrunner-apex` |
   | Description | `Free online Python 3 editor — runs in your browser` |
   | Visibility | **Public** |
   | Add a README | **Leave unchecked** — the project has its own |

3. Click **Create repository**

---

## Step 3 — Upload Your Files

1. On the empty repo page, click **"uploading an existing file"**
2. Unzip `pyrunner-apex-main.zip` on your computer
3. Open the unzipped folder, select **everything inside it**
4. Drag it all into the GitHub upload area
5. Set the commit message to `Initial commit` → **Commit changes**

> ⚠️ Upload the **contents** of the folder, not the folder itself.
> GitHub should show `public/`, `src/`, `package.json`, etc. at the root — not a single `pyrunner-apex-main/` folder.

---

## Step 4 — Cloudflare Account

1. Go to [cloudflare.com](https://cloudflare.com) → **Sign up** → verify your email
2. Skip any "add a site" prompts and go straight to the dashboard

---

## Step 5 — Deploy to Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Authorize GitHub and select `pyrunner-apex`
3. Click **Begin setup** and use these exact build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | `None` |
   | Build command | `bun run build` |
   | Build output directory | `.output/public` |
   | Root directory | *(leave blank)* |

4. Click **Save and Deploy**

After ~2 minutes you'll get a live URL like `https://pyrunner-apex.pages.dev`.
Open it — you should see the IDE load and Python become ready.

---

## Step 6 — Enable Auto-Deploy (Push to deploy)

Every time you push to `main`, Cloudflare should redeploy automatically. The workflow file is already in the repo at `.github/workflows/quality.yml`. You just need to give it your Cloudflare credentials.

### Get your Cloudflare API Token
1. Cloudflare dashboard → click your avatar (top right) → **My Profile** → **API Tokens**
2. **Create Token** → use the **Edit Cloudflare Workers** template
3. **Create Token** → copy it immediately — it's only shown once

### Get your Cloudflare Account ID
1. Any page in the Cloudflare dashboard
2. Look in the right sidebar — copy the **Account ID** (32-character string)

### Add both to GitHub
1. Your repo → **Settings** → **Secrets and variables** → **Actions**
2. Add these two secrets:

   | Name | Value |
   |---|---|
   | `CLOUDFLARE_API_TOKEN` | your API token |
   | `CLOUDFLARE_ACCOUNT_ID` | your account ID |

✅ Done. Every push to `main` now triggers a live deployment.

---

## Step 7 — Custom Domain *(optional but recommended)*

### Option A — Buy through Cloudflare (easiest, one dashboard)

1. Cloudflare dashboard → **Domain Registration** → **Register Domains**
2. Search and purchase a domain (~$10–15/year)
3. **Workers & Pages** → `pyrunner-apex` → **Custom Domains** → **Set up a custom domain**
4. Enter your domain — Cloudflare wires everything automatically

### Option B — Buy elsewhere (Porkbun, Namecheap, etc.)

1. Purchase a domain from your registrar
2. In your registrar's DNS settings, change the nameservers to:
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```
3. In Cloudflare → **Add a Site** → enter your domain → follow the steps
4. Nameserver propagation can take up to 24 hours
5. Once verified: **Workers & Pages** → `pyrunner-apex` → **Custom Domains** → add your domain

### After your domain is live — update these 3 files

Replace any placeholder URLs with your actual domain:

| File | What to change |
|---|---|
| `public/sitemap.xml` | The `<loc>` URL |
| `public/robots.txt` | The `Sitemap:` URL |
| `public/pyrunner.html` | `og:url` and `<link rel="canonical">` near the top |

---

## Step 8 — Google Search Indexing

### Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. **Add Property** → **Domain** → enter your domain
3. Verify ownership via Cloudflare DNS:
   - Copy the TXT record Google gives you
   - In Cloudflare → **DNS** → **Add record**: Type `TXT`, Name `@`, Content: paste the value
   - Back in Search Console → **Verify**
4. Go to **Sitemaps** → submit `https://yourdomain.com/sitemap.xml`

### Request indexing immediately

1. Search Console → **URL Inspection**
2. Enter your homepage URL → **Request Indexing**

Google typically indexes new sites within 3–7 days.

### What's already built in

You don't need to touch any of this — it's all in the project:

- ✅ Meta description, keywords
- ✅ Open Graph tags (WhatsApp, Discord, Slack previews)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Google rich results)
- ✅ `sitemap.xml`
- ✅ `robots.txt`
- ✅ Canonical URL tag

---

## Step 9 — Get Your First Users

The fastest ways to get traffic after indexing:

| Platform | What to post |
|---|---|
| [r/learnpython](https://reddit.com/r/learnpython) | "Built a browser Python IDE that remembers your code without an account" |
| [r/Python](https://reddit.com/r/Python) | Share the GitHub repo |
| [Hacker News](https://news.ycombinator.com/submit) | Submit as "Show HN: PyRunner Apex — browser Python IDE, no account, code persists" |
| [dev.to](https://dev.to) | Write a short post on building it — dev.to ranks well on Google |
| Twitter/X | Tag `#Python #WebDev #100DaysOfCode` |

> Backlinks from other sites are the single most effective way to improve Google ranking. One HN front-page post can get you thousands of users in a day.

---

## Quick Reference

| | |
|---|---|
| 🌐 Live site | https://pyrunner-apex.pages.dev |
| ☁️ Cloudflare dashboard | https://dash.cloudflare.com |
| 🐙 GitHub repo | https://github.com/reboot-phoenix/pyrunner-apex |
| 🔍 Search Console | https://search.google.com/search-console |
| 🚀 Redeploy | Push anything to `main` |

---

## Troubleshooting

**Build fails on Cloudflare Pages**
Make sure the build command is exactly `bun run build` and output directory is `.output/public`. Cloudflare supports Bun natively — no extra config needed.

**Site loads but Python says "Engine failed"**
This is usually a network issue on the viewer's end — Pyodide loads from a CDN. Try a different browser or disable extensions.

**Custom domain shows "DNS not propagated"**
Wait up to 24 hours after changing nameservers. You can check propagation status at [whatsmydns.net](https://whatsmydns.net).

**Google hasn't indexed the site after 7 days**
Go back to Search Console → URL Inspection → Request Indexing again. Also make sure `robots.txt` isn't blocking Googlebot.

---

*by Ashtid D · MIT License*
