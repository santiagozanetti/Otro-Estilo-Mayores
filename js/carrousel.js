document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.classList.add("active");
      } else {
        testimonial.classList.remove("active");
      }
    });
  }

  function nextTestimonial() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
      currentIndex = 0;
    }
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = testimonials.length - 1;
    }
    showTestimonial(currentIndex);
  }

  prevButton.addEventListener("click", prevTestimonial);
  nextButton.addEventListener("click", nextTestimonial);
});
