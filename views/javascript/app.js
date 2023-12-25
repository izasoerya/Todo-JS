// await contentLoaded
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.getElementsByClassName("button-4");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function (event) {
      event.preventDefault();
      fetchRequest();
    });
  }
});

function fetchRequest() {
  var textUser = document.getElementsByClassName("input-user");
  console.log(textUser[0].value);
  // fetch(`localhost:3000/${buttons[index].textContent}`),
  //   {
  //     method: "GET",
  //     body: JSON.stringify({
  //       title: inputText.textContent,
  //     }),
  //     Headers: {
  //       "content-type": "application/json; charset=utf-8",
  //     },
  //   };
}
