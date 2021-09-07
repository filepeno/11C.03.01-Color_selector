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
}

function displayRGB(r, g, b) {}

function calculateHSL() {}

function displayHSL() {}
