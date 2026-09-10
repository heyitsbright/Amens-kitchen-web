const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const orderNumber = "917871325014";

const closeMenu = () => {
  navigation?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("scrolled", window.scrollY > 24),
  { passive: true }
);

document.querySelectorAll("[data-order]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const item = link.getAttribute("data-order");
    const message = `Hi AMEN Kitchen! I'd like to order: ${item}. Please share availability and delivery details.`;
    window.open(`https://wa.me/${orderNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
