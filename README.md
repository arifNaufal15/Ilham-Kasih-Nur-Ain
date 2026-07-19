# Ilham Kasih Nur Ain — Bouquet Catalog

A static two-page site for a flower bouquet business. No backend, no database, no auth — just HTML/CSS/JS.

## Pages

- **`index.html`** — home page. Shows 6 random bouquets each visit, with a "See the full catalog" button.
- **`catalog.html`** — the full catalog. Search, price filter, and sort by price.

Both pages read from the same `products.js`, so you only ever edit one file to add, remove, or change bouquets.

## Before you deploy

1. **Add your WhatsApp number** — open `products.js` and edit this line near the top:
   ```js
   const WHATSAPP_NUMBER = "60123456789"; // your number, country code, no + or spaces
   ```

2. **Add your bouquets** — still in `products.js`, edit the `PRODUCTS` list. Each item needs a `name`, `price`, `image`, and `description`. Copy an existing entry to add a new one, or delete one to remove it. Both pages update automatically.

3. **Add real photos** — drop your photos into the `images/` folder, then point to them from `products.js`:
   ```js
   image: "images/blush-peony.jpg",
   ```

## Catalog page search syntax

The search box on `catalog.html` matches against each bouquet's name and description:

- `rose` — only bouquets mentioning "rose"
- `no rose` or `-rose` — excludes bouquets mentioning "rose"
- `rose no chocolate` — bouquets mentioning "rose", excluding any mentioning "chocolate"

Combine with the price fields and the sort dropdown — all three work together live.

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
index.html      — home page (6 random bouquets + show-more button)
catalog.html    — full catalog page (search, filter, sort)
style.css       — all styling
products.js     — YOUR CATALOG DATA (edit this to update bouquets)
common.js       — shared: product card rendering, sprig motif, footer WhatsApp link
home.js         — home page logic (random 6 + show-more)
catalog.js      — catalog page logic (search, price filter, sort)
images/         — bouquet photos
```
