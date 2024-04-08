document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

document.querySelector(".close-icon").addEventListener("click", function () {
  document.querySelector(".menu").classList.remove("active");
});
