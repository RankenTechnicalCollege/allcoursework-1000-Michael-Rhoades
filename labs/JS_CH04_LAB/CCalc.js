"use strict";

const $ = selector => document.querySelector(selector)

const getErrorMsgZero = lbl => `${lbl} must be greater than or equal to zero`;
const getErrorMsgNAN = lbl => `${lbl} must be a valid number`;
const getErrorMsgMax = lbl => `${lbl} must be less than or equal to 99`;

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus;
  elem.select;
};

const makeChange = () => {
  const change = parseFloat($("#change").value);
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  let remaining = change;

  if (isNaN(change)) {
      alert(getErrorMsgNAN("Change due"));
      focusAndSelect("#change");
  } else if (change < 0) {
      alert(getErrorMsgZero("Change due"));
      focusAndSelect("#change");
  } else if (change > 99) {
      alert(getErrorMsgMax("Change due"));
      focusAndSelect("#change");
  } else {
      while (remaining >= 25) {
        remaining = remaining - 25;
        quarters++;
      }
      while (remaining >= 10) {
        remaining = remaining - 10;
        dimes++;
      }
      while (remaining >= 5) {
        remaining = remaining - 5;
        nickels++;
      }
      while (remaining >= 1) {
        remaining = remaining - 1;
        pennies++;
      }
      $("#quarters").value = (quarters);
      $("#dimes").value = (dimes);
      $("#nickels").value = (nickels);
      $("#pennies").value = (pennies);



  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", makeChange);
  $("#subtotal").focus();
});