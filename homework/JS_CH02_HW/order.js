"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid integer of 0 or greater`;

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
}

const processEntries = () => {
  const burgers = parseInt($("#burgers").value);
  const fries = parseInt($("#fries").value) * 2;
  const sodas = parseInt($("#sodas").value) * 2.5;

  if (isNaN(burgers) || burgers < 0) {
    alert(getErrorMsg("Burgers ordered"));
    focusAndSelect("#burgers")
  } else if (isNaN(fries) || fries < 0) {
    alert(getErrorMsg("Fries ordered"));
    focusAndSelect("#fries")
  } else if (isNaN(sodas) || sodas < 0) {
    alert(getErrorMsg("Sodas ordered"));
    focusAndSelect("#sodas")
  } else {
    $("#total").value = (burgers + fries + sodas).toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#order").addEventListener("click", processEntries);
  $("#burgers").focus;
});

