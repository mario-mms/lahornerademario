/* Componentes comunes, menú móvil y año automático. Compatible con hosting estático HTTP/HTTPS. */
(async () => {
  const root = document.body.dataset.root || "";
  const includes = [...document.querySelectorAll("[data-include]")];
  await Promise.all(includes.map(async (slot) => {
    const component = slot.dataset.include;
    try {
      const response = await fetch(`${root}components/${component}.html`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      slot.innerHTML = (await response.text()).replaceAll("__ROOT__", root);
    } catch (error) {
      console.error(`No se pudo cargar el componente ${component}:`, error);
      slot.setAttribute("data-include-error", component);
      slot.textContent = component === "header"
        ? "La navegación no se ha podido cargar. Abre esta página desde un servidor web estático."
        : "";
    }
  });

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      siteNav.classList.toggle("is-open", !isOpen);
    });
  }
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
