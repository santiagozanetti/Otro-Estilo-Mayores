document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    const image = item.querySelector("img");
    const lightbox = item.querySelector(".lightbox");

    image.addEventListener("click", function () {
      lightbox.style.display = "block";
    });

    lightbox.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
  });
});
