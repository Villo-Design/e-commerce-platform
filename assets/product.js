const imageWidth = 450;

document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".carousel-arrow.left-arrow");
  const rightArrow = document.querySelector(".carousel-arrow.right-arrow");
  const carousel = document.querySelector(".carousel");
  const carouselMax = parseInt(carousel.getAttribute("data-carousel-max"));

  leftArrow.addEventListener("click", function () {
    const index = parseInt(carousel.getAttribute("data-carousel-index"));

    if (index > 0) {
      carousel.setAttribute("data-carousel-index", index - 1);

      carousel.setAttribute(
        "style",
        "margin-left: -" + (index - 1) * imageWidth + "px;"
      );
    }
  });

  rightArrow.addEventListener("click", function () {
    const index = parseInt(carousel.getAttribute("data-carousel-index"));

    if (index < carouselMax - 1) {
      carousel.setAttribute("data-carousel-index", index + 1);

      carousel.setAttribute(
        "style",
        "margin-left: -" + (index + 1) * imageWidth + "px;"
      );
    }
  });
});
