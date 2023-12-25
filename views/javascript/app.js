// await contentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.getElementsByClassName("button-4");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function (event) {
      event.preventDefault();
      fetchRequest(buttons[index]);
    });
  }
});

function fetchRequest(buttons) {
  var textUser = document.getElementsByClassName("input-user")[0]; // Assuming there is only one element with the class "input-user"
  fetch(`/${buttons.textContent}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8", // Correct property name and lowercase "h" in "Content-Type"
    },
    body: JSON.stringify({
      title: textUser.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".message").textContent = data.message;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
