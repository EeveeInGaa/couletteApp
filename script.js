console.log("Welcome to Coulette!");

function generateNewHeaderColor() {
  let color = "salmon";
  let header = document.querySelector("header");
  let bgColor = header.style.backgroundColor;

  if (bgColor === color) {
    bgColor = "transparent";
  } else {
    bgColor = color;
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
