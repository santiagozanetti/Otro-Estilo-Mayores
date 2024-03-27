document.addEventListener("DOMContentLoaded", function () {
  const opiniones = document.querySelectorAll(".opinion");
  let indiceOpinionActual = 0;

  function mostrarOpinion(indice) {
    opiniones.forEach((opinion) => opinion.classList.remove("active"));
    opiniones[indice].classList.add("active");
  }

  function mostrarSiguienteOpinion() {
    indiceOpinionActual = (indiceOpinionActual + 1) % opiniones.length;
    mostrarOpinion(indiceOpinionActual);
  }

  function mostrarOpinionAnterior() {
    indiceOpinionActual =
      (indiceOpinionActual - 1 + opiniones.length) % opiniones.length;
    mostrarOpinion(indiceOpinionActual);
  }

  document
    .getElementById("next-opinion")
    .addEventListener("click", mostrarSiguienteOpinion);
  document
    .getElementById("prev-opinion")
    .addEventListener("click", mostrarOpinionAnterior);

  // Mostrar la primera opinión al cargar la página
  mostrarOpinion(indiceOpinionActual);
});
