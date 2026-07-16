// Builds the product grid from products.js, wires WhatsApp order
// links, and stamps the sprig divider (signature motif) into slots.

function formatPrice(n) {
  return "RM " + n.toFixed(0);
}

function waLink(productName) {
  const message = `Hi! I'd like to order the "${productName}" bouquet.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  const frag = document.createDocumentFragment();

  PRODUCTS.forEach((product, i) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--tilt", (i % 2 === 0 ? "-0.6deg" : "0.6deg"));

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${product.image}" alt="${product.name} bouquet" loading="lazy" class="card-image">
      </div>
      <div class="card-body">
        <div class="card-tag">
          <span class="card-tag-hole"></span>
          <span class="card-price">${formatPrice(product.price)}</span>
        </div>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
      </div>
    `;
    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

function renderSprigs() {
  const tpl = document.getElementById("sprig-template");
  document.querySelectorAll("[data-sprig]").forEach((slot) => {
    slot.appendChild(tpl.content.cloneNode(true));
  });
}

function wireFooterWhatsapp() {
  const footerLink = document.getElementById("footer-whatsapp");
  if (footerLink) {
    footerLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I have a question about your bouquets.")}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderSprigs();
  wireFooterWhatsapp();
});
