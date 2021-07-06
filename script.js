console.log("Welcome to Coulette!");

function generateNewHeaderColor() {
  let header = document.querySelector("header");

  let bgColor = header.style.backgroundColor;

  if (bgColor === "salmon") {
    bgColor = "transparent";
  } else {
    bgColor = "salmon";
  }

  header.style.backgroundColor = bgColor;
}

let button = document.querySelector("#genColor");
button.addEventListener("click", generateNewHeaderColor);

/*function saveNewListItems() {}

const saveColor = document.querySelector(".saveColor");
if (saveColor) {
  saveButton.saveColor.addEventListener("click");
}*/
