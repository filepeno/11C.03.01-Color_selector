"use strict";

document.addEventListener("DOMContentLoaded", start);

const colorPicker = document.querySelector("input");

function start() {
  console.log("start()");
  trackColorPicker();
}

function trackColorPicker() {
  console.log("trackColorPicker()");
  console.log(colorPicker.value);
  colorPicker.addEventListener("input", updateColor, false);
}

function updateColor() {
  console.log(colorPicker.value);
}

function calculateRGB() {}

function calculateHSL() {}
