/* Interacciones y componentes compartidos.
   Si se abre la web como file://, fetch puede estar bloqueado: en ese caso
   se conserva la cabecera y el pie incluidos como respaldo en cada HTML. */
const scriptElement = document.querySelector('script[src$="assets/js/main.js"]');
const siteBase = scriptElement && scriptElement.getAttribute("src").startsWith("../") ? "../" : "";

function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  if (!navToggle || !siteNav || navToggle.dataset.initialized === "true") return;
  navToggle.dataset.initialized = "true";
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    siteNav.classList.toggle("is-open", !isOpen);
  });
}

function updateYear() {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

async function loadSharedComponents() {
  try {
    const [headerResponse, footerResponse] = await Promise.all([
      fetch(siteBase + "components/header.html"),
      fetch(siteBase + "components/footer.html")
    ]);
    if (!headerResponse.ok || !footerResponse.ok) throw new Error("No se pudieron cargar los componentes compartidos.");

    const [headerMarkup, footerMarkup] = await Promise.all([
      headerResponse.text(),
      footerResponse.text()
    ]);
    const headerTemplate = document.createElement("template");
    const footerTemplate = document.createElement("template");
    headerTemplate.innerHTML = headerMarkup.replaceAll("{{BASE}}", siteBase).trim();
    footerTemplate.innerHTML = footerMarkup.replaceAll("{{BASE}}", siteBase).trim();

    const oldHeaderShell = document.querySelector(".site-header-shell");
    const oldFooter = document.querySelector(".site-footer");
    if (oldHeaderShell && oldFooter) {
      oldHeaderShell.replaceWith(headerTemplate.content);
      oldFooter.replaceWith(footerTemplate.content);
    }
  } catch (error) {
    // El HTML incluye una cabecera y un pie de respaldo para evitar que desaparezcan.
    console.info("Se mantiene la cabecera y el pie de respaldo.", error);
  }
  initNavigation();
  updateYear();
}

loadSharedComponents();
