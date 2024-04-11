document.addEventListener("DOMContentLoaded", function () {
  let btnScrollToTop = document.getElementById("btnScrollToTop");

  window.addEventListener("scroll", function () {
    // Muestra u oculta el botón basado en la posición vertical de la página
    if (window.scrollY > 800) {
      // Cambiado a 0 píxeles
      btnScrollToTop.style.display = "block";
    } else {
      btnScrollToTop.style.display = "none";
    }
  });

  // Función para desplazarse suavemente hacia arriba
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  btnScrollToTop.addEventListener("click", scrollToTop);
});
