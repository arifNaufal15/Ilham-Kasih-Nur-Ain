// Home page only: picks random bouquets from the full catalog
// (6 on desktop/tablet, 4 on mobile) and reveals the "see full
// catalog" button if there are more to see.

function pickRandom(arr, count) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

function getFeaturedCount() {
  return window.innerWidth <= 768 ? 4 : 6;
}

function renderFeatured() {
  const grid = document.getElementById("product-grid");
  const showMoreWrap = document.getElementById("show-more-wrap");
  const featured = pickRandom(PRODUCTS, getFeaturedCount());

  const frag = document.createDocumentFragment();
  featured.forEach((product, i) => frag.appendChild(createProductCard(product, i)));
  grid.appendChild(frag);

  if (showMoreWrap && PRODUCTS.length > featured.length) {
    showMoreWrap.hidden = false;
  }
}

document.addEventListener("DOMContentLoaded", renderFeatured);