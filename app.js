document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = document.querySelectorAll(".carousel-images img");

  let currentIndex = 0;

  function showImage(index) {

    images.forEach(img => img.classList.remove("active"));

    images[index].classList.add("active");
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  }

  showImage(currentIndex);

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);
});
