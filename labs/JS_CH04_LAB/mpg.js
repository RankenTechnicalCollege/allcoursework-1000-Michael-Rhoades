"use strict";

const $ = selector => document.querySelector(selector)

const getErrorMsgZero = lbl => `${lbl} must be greater than zero`;
const getErrorMsgNAN = lbl => `${lbl} must be a valid number`;

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus;
  elem.select;
};

const processEntries = () => {
  const miles = parseFloat($("#miles").value);
  const gallons = parseFloat($("#gallons").value);

  if (isNaN(miles)) {
      alert(getErrorMsgNAN("Miles driven"));
      focusAndSelect("#miles");
  } else if (miles <= 0) {
      alert(getErrorMsgZero("Miles driven"));
      focusAndSelect("#miles");
  } else if (isNaN(gallons)) {
      alert(getErrorMsgNAN("Gallons of gas used"));
      focusAndSelect("#gallons");
  } else if (gallons <= 0) {
      alert(getErrorMsgZero("Gallons of gas used"));
      focusAndSelect("#gallons");
  } else {
      $("#mpg").value = (miles / gallons).toFixed(2);
  }
};

const clearEntries = () => {
  $("#miles").value = 0;
  $("#gallons").value = 0;
  $("#mpg").value = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clearEntries);
  $("#miles").focus();
});