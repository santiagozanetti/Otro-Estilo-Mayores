document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((faqItem) => {
    const arrowIcon = faqItem.querySelector(".arrow-icon");
    const faqQuestion = faqItem.querySelector(".faq-question");
    const faqAnswer = faqItem.querySelector(".faq-answer");

    // Agrega un evento de clic a la pregunta
    faqQuestion.addEventListener("click", function () {
      toggleAnswer(faqItem, faqAnswer, arrowIcon);
    });

    // Agrega un evento de clic a la flecha
    arrowIcon.addEventListener("click", function (event) {
      event.stopPropagation(); // Evita que el clic en la flecha se propague al contenedor de la pregunta
      toggleAnswer(faqItem, faqAnswer, arrowIcon);
    });
  });

  // Función para alternar la respuesta desplegable y la rotación de la flecha
  function toggleAnswer(faqItem, faqAnswer, arrowIcon) {
    const isOpen = faqItem.classList.contains("open");

    // Cerrar todas las respuestas desplegadas
    faqItems.forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".faq-answer").style.maxHeight = "0";
      item.querySelector(".arrow-icon").classList.remove("rotated");
    });

    // Abrir la respuesta si no está abierta
    if (!isOpen) {
      faqItem.classList.add("open");
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      arrowIcon.classList.add("rotated");
    }
  }
});
