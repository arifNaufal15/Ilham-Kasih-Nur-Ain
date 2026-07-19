// Shared by index.html and catalog.html: builds a product card,
// stamps the sprig divider (signature motif), and wires the footer
// WhatsApp link. Keeping this in one file means both pages always
// render cards the same way.

function formatPrice(n) {
  return "RM " + n.toFixed(0);
}

function createProductCard(product, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.setProperty("--tilt", index % 2 === 0 ? "-0.6deg" : "0.6deg");

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
  return card;
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
  renderSprigs();
  wireFooterWhatsapp();
});
