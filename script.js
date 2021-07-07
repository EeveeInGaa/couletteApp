console.log("Welcome to Coulette!");

let globalColor = "null";
let color = randomHexColor();

//generate random new color for the header
function generateNewHeaderColor() {
  // set hex Name as text of the paragraph
  const hexText = document.querySelector("#hexColorName");
  hexText.textContent = color;

  const header = document.querySelector("header");
  header.style.backgroundColor = color;
}

//initially chance header color
generateNewHeaderColor();

// search/find 'generate color' button
let generateColorButton = document.querySelector("#genColor");
generateColorButton.addEventListener("click", generateNewHeaderColor);

//search/find 'save color' button
const saveColorButton = document.querySelector("#saveColor");
saveColorButton.addEventListener("click", saveNewHeaderColor);

function saveNewHeaderColor() {
  //Zugriff auf Liste der Farben
  const colorList = document.querySelector("#colors");

  //element erzeugen und text einfügen
  const newColorInList = document.createElement("li");
  const textInList = document.createTextNode(color);
  newColorInList.appendChild(textInList);

  //setze hintergrundfarbe in neue liste und füge es in listenelemnt als kind ein
  newColorInList.style.backgroundColor = generateNewHeaderColor;

  colorList.appendChild(newColorInList);
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
