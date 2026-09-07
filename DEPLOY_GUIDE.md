# Deployment Guide — PyRunner Apex

End-to-end setup: GitHub repository → Cloudflare Pages → custom domain → Google Search indexing.

---

## 1. Create a GitHub Account

If you don't have one, go to [github.com](https://github.com), sign up, and verify your email.

---

## 2. Create the Repository

1. Click **+** (top right) → **New repository**
2. Set the following:
   - **Repository name:** `pyrunner-apex`
   - **Description:** `Free online Python 3 editor — runs in your browser`
   - **Visibility:** Public
   - Leave "Add a README" unchecked — the project includes its own
3. Click **Create repository**

---

## 3. Upload Your Files

1. On the empty repo page, click **"uploading an existing file"**
2. Unzip `pyrunner-apex-github.zip` on your computer
3. Open the unzipped folder and select all files and folders inside it
4. Drag them into the GitHub upload area
5. Set the commit message to `Initial commit` and click **Commit changes**

> Make sure you upload the files *inside* the folder, not the folder itself.

---

## 4. Create a Cloudflare Account

Go to [cloudflare.com](https://cloudflare.com), sign up, and verify your email. Skip any "add a site" prompts and proceed to the dashboard.

---

## 5. Deploy to Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Connect your GitHub account and select the `pyrunner-apex` repository
3. Click **Begin setup** and configure the build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | None |
   | Build command | `bun run build` |
   | Build output directory | `.output/public` |
   | Root directory | *(leave blank)* |

4. Click **Save and Deploy**

After about two minutes, Cloudflare will give you a live URL such as `https://pyrunner-apex.pages.dev`. Open it in your browser to confirm the editor is working.

---

## 6. Enable Auto-Deploy

The repository already includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. To activate it, you need to add your Cloudflare credentials as GitHub secrets.

**Get your Cloudflare API token:**
1. Cloudflare dashboard → avatar (top right) → **My Profile** → **API Tokens**
2. Click **Create Token** → use the **Edit Cloudflare Workers** template
3. Click **Create Token** and copy the value — it's only shown once

**Get your Cloudflare Account ID:**
1. Open any page in the Cloudflare dashboard
2. Copy the **Account ID** from the right sidebar (32-character string)

**Add secrets to GitHub:**
1. In your GitHub repo, go to **Settings** → **Secrets and variables** → **Actions**
2. Add two secrets:
   - `CLOUDFLARE_API_TOKEN` — your API token
   - `CLOUDFLARE_ACCOUNT_ID` — your account ID

Once added, every push to `main` will trigger an automatic deployment.

---

## 7. Custom Domain

### Option A — Buy through Cloudflare (simplest)

1. Cloudflare dashboard → **Domain Registration** → **Register Domains**
2. Search for and purchase a domain (typically $10–15/year)
3. Go to **Workers & Pages** → `pyrunner-apex` → **Custom Domains**
4. Click **Set up a custom domain**, enter your domain, and Cloudflare will connect it automatically

### Option B — Buy elsewhere and point to Cloudflare

1. Purchase a domain from a registrar such as [Porkbun](https://porkbun.com) or [Namecheap](https://namecheap.com)
2. In your registrar's settings, update the nameservers to:
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`
3. In Cloudflare, go to **Add a Site**, enter your domain, and follow the steps (nameserver propagation can take up to 24 hours)
4. Once verified, go to **Workers & Pages** → `pyrunner-apex` → **Custom Domains** and add your domain

### After setting up your domain

Update your actual domain in the following files, replacing any placeholder values:
- `public/sitemap.xml`
- `public/robots.txt`
- `public/pyrunner.html` — the `og:url` and `canonical` meta tags near the top

---

## 8. Google Search Indexing

### Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add Property** → **Domain** → enter your domain
3. Verify ownership via Cloudflare DNS:
   - Copy the TXT record Google provides
   - In Cloudflare DNS, add a record: Type `TXT`, Name `@`, Content: paste the value
   - Return to Search Console and click **Verify**
4. Go to **Sitemaps** and submit `https://yourdomain.com/sitemap.xml`

### Request indexing

1. In Search Console, open **URL Inspection**
2. Enter your homepage URL and click **Request Indexing**

Google typically indexes new sites within 3–7 days.

### What's already included

The following SEO infrastructure is built into the project:

- Meta tags in `pyrunner.html` and `__root.tsx`
- Open Graph tags for link previews (WhatsApp, Discord, etc.)
- Twitter Card tags
- JSON-LD structured data for Google rich results
- `sitemap.xml`
- `robots.txt`

---

## 9. Improving Search Ranking

- Share the link on Reddit (r/Python, r/learnpython), Hacker News, dev.to, and Twitter/X
- Backlinks from other sites are the most effective way to improve ranking
- Consider writing a short post on dev.to about building a browser-based Python IDE — it consistently gets good traffic from developers

---

## Quick Reference

| | |
|---|---|
| Live site | https://pyrunner-apex.pages.dev |
| Cloudflare dashboard | https://dash.cloudflare.com |
| GitHub repo | https://github.com/YOUR_USERNAME/pyrunner-apex |
| Google Search Console | https://search.google.com/search-console |
| Redeploy | Push to `main` |

---

*by Ashtid D · MIT License*
