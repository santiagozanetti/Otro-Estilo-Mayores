(function () {
  const openButton = document.querySelector(".nav__menu");
  const menu = document.querySelector(".nav__link");
  const closeMenu = document.querySelector(".nav__close");
  const links = document.querySelectorAll(".nav__links"); // Selecciona todos los enlaces del menú

  openButton.addEventListener("click", () => {
    menu.classList.add("nav__link--show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("nav__link--show");
  });

  // Agrega un evento de clic a cada enlace del menú
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("nav__link--show"); // Cierra el menú al hacer clic en un enlace
    });
  });
})();
