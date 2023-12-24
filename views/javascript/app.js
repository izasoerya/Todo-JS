document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("input-type")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      var buttons = document.getElementsByClassName("button-4");
      for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click", function (event) {
          alert(buttons[index].textContent);
        });
      }
    });
});
