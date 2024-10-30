"use strict";

const $ = selector => document.querySelector(selector)

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus;
  elem.select;
};

const check = () => {
  const age = parseInt($("#age").value);

  if (age > 200 || age < 1) {
      alert ("Age out of range!");
  } else if (age >= 21) {
      alert ("Welcome to the venue!");
  } else if (age < 21) {
      alert ("You're not old enough!")
  } else {
      alert ("Please enter your age!")
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#check").addEventListener("click", check);
  $("#age").focus();
});