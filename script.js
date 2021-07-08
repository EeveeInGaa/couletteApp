console.log("Welcome to Coulette!");

let currentColor = undefined;
let colorArr = [];

//generate new header color and save hex value
const generateButton = document.querySelector("#generateColor");
generateButton.addEventListener("click", generateColor);

function generateColor() {
  currentColor = randomHexColor();

  const header = document.querySelector("header");
  header.style.backgroundColor = currentColor;

  const colorValueInHeader = document.querySelector("#hexColorName");
  colorValueInHeader.innerText = currentColor;

  saveButtonStatus();
}
generateColor();

//save header color to list
const saveButton = document.querySelector("#saveColor");
saveButton.addEventListener("click", saveColor);

function saveColor() {
  //no duplicate colors (save button disabled)
  if (colorArr.includes(currentColor)) {
    return;
  }

  const listOfColors = document.querySelector("#ListOfColors");
  const newListItem = document.createElement("li");
  listOfColors.appendChild(newListItem);

  const hexNameInList = document.createTextNode(currentColor);

  newListItem.style.backgroundColor = currentColor;
  newListItem.appendChild(hexNameInList);

  colorArr.push(currentColor);

  saveButtonStatus();
}

function saveButtonStatus() {
  const saveButton = document.querySelector("#saveColor");
  saveButton.disabled = colorArr.includes(currentColor);
}

// :::::::: provided code ::::::::

/**
 * Toggle color of header
 * Generate random number between min and max
 */
function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

/**
 * Generate random hex number for color
 */
function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}

/**
 * Generate random hex color
 */
function randomHexColor() {
  const red = randomHexNumber();
  const green = randomHexNumber();
  const blue = randomHexNumber();

  return ("#" + red + green + blue).toUpperCase();
}
