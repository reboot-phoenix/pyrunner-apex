# 🚀 Full Deployment Guide — PyRunner Apex

Complete step-by-step: GitHub → Cloudflare → Custom Domain → Google Search

---

## STEP 1 — Create a GitHub Account (if you don't have one)

1. Go to **https://github.com**
2. Click **Sign up** → enter email, password, username
3. Verify your email
4. Done — you're in

---

## STEP 2 — Create the Repository

1. Click the **+** icon (top right) → **New repository**
2. Fill in:
   - **Repository name:** `pyrunner-apex`
   - **Description:** `Free online Python 3 editor — runs in your browser`
   - **Visibility:** ✅ Public
   - **DO NOT** tick "Add README" (we have our own)
3. Click **Create repository**

---

## STEP 3 — Upload Your Files

1. On the empty repo page, click **"uploading an existing file"** (the link in the middle)
2. **Unzip** the `pyrunner-apex-github.zip` file on your computer
3. Open the unzipped folder — you'll see files like `package.json`, `README.md`, `public/`, `src/`, etc.
4. Select **ALL** of those files and folders and drag them into the GitHub upload box
5. At the bottom under "Commit changes" write: `Initial commit — PyRunner Apex`
6. Click **Commit changes**

> ⚠️ Upload the FILES INSIDE the folder, not the folder itself.

---

## STEP 4 — Create a Cloudflare Account (free)

1. Go to **https://cloudflare.com**
2. Click **Sign up** → enter email + password
3. Verify your email
4. Skip all the "add a site" prompts for now — just get to the dashboard

---

## STEP 5 — Deploy on Cloudflare Pages

1. In Cloudflare dashboard → left sidebar → **Workers & Pages**
2. Click **Create** → click **Pages** tab → **Connect to Git**
3. Click **Connect GitHub** → authorize Cloudflare to access your GitHub
4. Select your `pyrunner-apex` repo → click **Begin setup**
5. Fill in build settings:
   - **Framework preset:** None
   - **Build command:** `bun run build`
   - **Build output directory:** `.output/public`
   - **Root directory:** `/` (leave blank)
6. Click **Save and Deploy**
7. Wait ~2 minutes. Cloudflare builds and gives you a live URL like:
   `https://pyrunner-apex.pages.dev` ✅

> Test it — open the URL in your browser. Your Python editor should be live.

---

## STEP 6 — Set Up Auto-Deploy (so GitHub push = live update)

This is already configured in `.github/workflows/deploy.yml`.
You just need to give GitHub your Cloudflare credentials:

### Get your Cloudflare API Token:
1. Cloudflare dashboard → top right avatar → **My Profile**
2. **API Tokens** tab → **Create Token**
3. Use template: **Edit Cloudflare Workers** → click **Use template**
4. Scroll down → **Create Token** → **Copy** the token (save it — shown once!)

### Get your Cloudflare Account ID:
1. Cloudflare dashboard → any page → right sidebar
2. Copy the **Account ID** (32-character string)

### Add secrets to GitHub:
1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** → add:
   - Name: `CLOUDFLARE_API_TOKEN` → paste your token
   - Name: `CLOUDFLARE_ACCOUNT_ID` → paste your account ID
3. Now every time you push to `main`, it auto-deploys 🎉

---

## STEP 7 — Custom Domain

### Option A: Buy from Cloudflare (easiest — everything is automatic)
1. Cloudflare dashboard → **Domain Registration** → **Register Domains**
2. Search for your domain (e.g. `pyrunner.dev`, `pyrunner.app`, `pyrunner.io`)
3. Buy it (~$10–15/year)
4. Go to **Workers & Pages** → `pyrunner-apex` → **Custom Domains**
5. Click **Set up a custom domain** → type your domain → **Continue**
6. Cloudflare connects it automatically. Done ✅

### Option B: Buy elsewhere (Namecheap, Porkbun, etc.) and point to Cloudflare
1. Buy domain on e.g. **porkbun.com** (often cheapest)
2. In your domain registrar, change **Nameservers** to Cloudflare's:
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`
3. Back in Cloudflare → **Add a Site** → enter your domain → Free plan
4. Follow the steps — Cloudflare will verify the nameservers (takes up to 24h)
5. Then: **Workers & Pages** → `pyrunner-apex` → **Custom Domains** → add domain

### After you have your domain — update these files:
Replace `pyrunner.yourdomain.com` with your actual domain in:
- `public/sitemap.xml`
- `public/robots.txt`
- `public/pyrunner.html` (the og:url and canonical meta tags at the top)

---

## STEP 8 — Get Listed on Google Search

### 8a. Submit to Google Search Console
1. Go to **https://search.google.com/search-console**
2. Sign in with your Google account
3. Click **Add Property** → choose **Domain** → enter your domain
4. Verify ownership:
   - Cloudflare method: Copy the TXT record Google gives you
   - In Cloudflare DNS → **Add record** → Type: `TXT`, Name: `@`, Content: paste the value
   - Click **Verify** in Search Console
5. In Search Console → **Sitemaps** → paste: `https://yourdomain.com/sitemap.xml` → **Submit**

### 8b. Request Indexing
1. In Search Console → **URL Inspection**
2. Enter your homepage URL → **Request Indexing**
3. Google typically indexes within **3–7 days** for new sites

### 8c. What's already done for you (in this project):
- ✅ Full SEO meta tags in `pyrunner.html` and `__root.tsx`
- ✅ Open Graph tags (WhatsApp/Discord previews)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Google rich results eligible)
- ✅ `sitemap.xml` — tells Google all your pages
- ✅ `robots.txt` — tells Google it's allowed to crawl

---

## STEP 9 — Keep Improving Your Google Ranking

- **Share the link** on Reddit (r/Python, r/learnpython), Twitter/X, dev.to, Hacker News
- Every backlink (other site linking to yours) boosts ranking
- Google rewards sites that get real traffic — so share it!
- Consider writing a short blog post on dev.to: *"I built a free Python IDE that runs in the browser"*

---

## Quick Reference

| Thing | Where |
|---|---|
| Your live site | `https://pyrunner-apex.pages.dev` (then your domain) |
| Cloudflare dashboard | https://dash.cloudflare.com |
| GitHub repo | https://github.com/YOUR_USERNAME/pyrunner-apex |
| Google Search Console | https://search.google.com/search-console |
| Update & redeploy | Just push to GitHub `main` branch |

---

*Built by Ashtid D · powered by Gemini · ChatGPT · Claude*
