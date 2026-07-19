// Catalog page only: renders every bouquet, then filters/sorts live
// as the visitor types or changes the controls.
//
// Search syntax: plain words must appear in the name or description.
// Write "no <word>" or "-<word>" to exclude bouquets containing it.
// e.g. "rose no chocolate" finds roses, excluding anything chocolate.

function parseSearchQuery(raw) {
  const tokens = raw.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const include = [];
  const exclude = [];
  let i = 0;

  while (i < tokens.length) {
    const token = tokens[i];
    if (token === "no" && i + 1 < tokens.length) {
      exclude.push(tokens[i + 1]);
      i += 2;
    } else if (token.startsWith("-") && token.length > 1) {
      exclude.push(token.slice(1));
      i += 1;
    } else {
      include.push(token);
      i += 1;
    }
  }

  return { include, exclude };
}

function matchesSearch(product, query) {
  if (!query.include.length && !query.exclude.length) return true;
  const haystack = (product.name + " " + product.description).toLowerCase();
  if (query.exclude.some((term) => haystack.includes(term))) return false;
  return query.include.every((term) => haystack.includes(term));
}

function getFilteredProducts() {
  const searchValue = document.getElementById("search-input").value;
  const minValue = document.getElementById("price-min").value;
  const maxValue = document.getElementById("price-max").value;
  const sortValue = document.getElementById("sort-select").value;

  const query = parseSearchQuery(searchValue);
  const min = minValue === "" ? -Infinity : Number(minValue);
  const max = maxValue === "" ? Infinity : Number(maxValue);

  let results = PRODUCTS.filter(
    (p) => matchesSearch(p, query) && p.price >= min && p.price <= max
  );

  if (sortValue === "price-asc") {
    results = results.slice().sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    results = results.slice().sort((a, b) => b.price - a.price);
  }

  return results;
}

function renderCatalog() {
  const grid = document.getElementById("product-grid");
  const empty = document.getElementById("catalog-empty");
  const results = getFilteredProducts();

  grid.innerHTML = "";
  const frag = document.createDocumentFragment();
  results.forEach((product, i) => frag.appendChild(createProductCard(product, i)));
  grid.appendChild(frag);

  grid.hidden = results.length === 0;
  empty.hidden = results.length !== 0;
}

function wireToolbar() {
  ["search-input", "price-min", "price-max"].forEach((id) => {
    document.getElementById(id).addEventListener("input", renderCatalog);
  });
  document.getElementById("sort-select").addEventListener("change", renderCatalog);

  const resetBtn = document.getElementById("reset-filters");
  resetBtn.addEventListener("click", () => {
    document.getElementById("search-input").value = "";
    document.getElementById("price-min").value = "";
    document.getElementById("price-max").value = "";
    document.getElementById("sort-select").value = "featured";
    renderCatalog();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  wireToolbar();
  renderCatalog();
});
