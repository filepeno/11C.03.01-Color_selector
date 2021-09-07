"use strict";

document.addEventListener("DOMContentLoaded", start);

const colorPicker = document.querySelector("input");

function start() {
  console.log("start()");
  trackColorPicker();
}

function trackColorPicker() {
  console.log("trackColorPicker()");
  colorPicker.addEventListener("input", updateColor, false);
}

function updateColor() {
  const currentColorHEX = colorPicker.value;
  console.log(currentColorHEX);
  getRGB(currentColorHEX);
}

function displayHEX() {}

function getRGB(value) {
  const value1 = value.substring(1, 3);
  const value2 = value.substring(3, 5);
  const value3 = value.substring(5, 7);
  calculateRGB(value1, value2, value3);
}

function calculateRGB(value1, value2, value3) {
  const r = parseInt("0x" + value1, 16);
  const g = parseInt("0x" + value2, 16);
  const b = parseInt("0x" + value2, 16);
  console.log(r, g, b);
  displayRGB(r, g, b);
  calculateHSL(r, g, b);
}

function displayRGB(r, g, b) {}

function calculateHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  //   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  roundHSL(h, s, l);
}

function roundHSL(h, s, l) {
  const roundedH = Math.round(h);
  const roundedS = Math.round(s);
  const roundedL = Math.round(l);
  console.log(roundedH, roundedS, roundedL);
}

function displayHSL() {}
