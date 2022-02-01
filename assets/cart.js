document.addEventListener(
  "DOMContentLoaded",
  function () {
    const decreaseElements = document.querySelectorAll(".decrease_value");

    for (let index = 0; index < decreaseElements.length; index++) {
      const decreaseElement = decreaseElements[index];

      decreaseElement.addEventListener("click", function () {
        const itemId = decreaseElement.getAttribute("data-item-id");

        const inputElement = document.querySelector(
          'input[data-item-id="' + itemId + '"]'
        );

        if (parseInt(inputElement.value) > 1) {
          inputElement.value = parseInt(inputElement.value) - 1;

          document.querySelector(".update-button").click();
        }
      });
    }

    const increaseElements = document.querySelectorAll(".increase_value");

    for (let index = 0; index < increaseElements.length; index++) {
      const increaseElement = increaseElements[index];

      increaseElement.addEventListener("click", function () {
        const itemId = increaseElement.getAttribute("data-item-id");

        const inputElement = document.querySelector(
          'input[data-item-id="' + itemId + '"]'
        );

        if (
          !parseInt(inputElement.getAttribute("max")) ||
          parseInt(inputElement.value) <
            parseInt(inputElement.getAttribute("max"))
        ) {
          inputElement.value = parseInt(inputElement.value) + 1;

          document.querySelector(".update-button").click();
        }
      });
    }
  },
  false
);
