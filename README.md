# Petal & Stem — Bouquet Catalog

A static catalog page for a flower bouquet business. No backend, no database, no auth — just HTML/CSS/JS.

## Before you deploy

1. **Add your WhatsApp number** — open `products.js` and edit this line near the top:
   ```js
   const WHATSAPP_NUMBER = "60123456789"; // your number, country code, no + or spaces
   ```

2. **Add your bouquets** — still in `products.js`, edit the `PRODUCTS` list. Each item needs a `name`, `price`, `image`, and `description`. Copy an existing entry to add a new one, or delete one to remove it.

3. **Add real photos** — drop your photos into the `images/` folder (e.g. `images/blush-peony.jpg`), then point to them from `products.js`:
   ```js
   image: "images/blush-peony.jpg",
   ```
   The placeholder SVGs are just there so the page isn't empty — swap them out.

## Preview it locally (optional)

Just open `index.html` in a browser — no build step needed.

## Deploy on Vercel

1. Push this folder to a GitHub repo:
   ```
   git init
   git add .
   git commit -m "Initial catalog site"
   git remote add origin https://github.com/arifNaufal15/YOUR-REPO-NAME.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New Project**, and select the repo.
3. Framework preset: choose **Other** (it's plain static HTML — no build command needed).
4. Click **Deploy**. You'll get a live URL like `your-repo.vercel.app`.
5. Every future `git push` redeploys automatically.

## File structure

```
index.html      — page structure
style.css       — all styling
products.js     — YOUR CATALOG DATA (edit this to update bouquets)
script.js       — renders the catalog from products.js, builds WhatsApp links
images/         — bouquet photos
```
