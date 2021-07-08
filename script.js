console.log("Welcome to Coulette!");

let currentColor = randomHexColor();

const generateButton = document.querySelector("#generateColor");
generateButton.addEventListener("click", generateColor);

//generate new header color and save hex value
function generateColor() {
  const generatedColor = randomHexColor();

  const header = document.querySelector("header");
  header.style.backgroundColor = generatedColor;

  const colorValueInHeader = document.querySelector("#hexColorName");
  colorValueInHeader.innerText = generatedColor;
}
generateColor();

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
