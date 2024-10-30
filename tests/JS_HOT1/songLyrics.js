"use strict";

const $ = selector => document.querySelector(selector)

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus;
  elem.select;
};

const lyrics = () => {
  const num = parseFloat($("#num").value);

  if (num == 1) {
      alert ("One is the loneliest number that you'll ever do.")
  } else if (num == 2) {
      alert ("Two can be as bad as one. It's the loneliest number since the number one.")
  } else if (num == 3) {
      alert ("There is no three.")
  } else if (isNaN(num)){
      alert ("Please enter a number, not a word.")
  } else {
      alert ("You didn't enter a valid number.")
  }

};

document.addEventListener("DOMContentLoaded", () => {
  $("#lyrics").addEventListener("click", lyrics);
  $("#num").focus();
});