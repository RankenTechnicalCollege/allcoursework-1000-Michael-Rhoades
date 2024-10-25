"use strict";

const $ = selector => document.querySelector(selector)

const getErrorMsgZero = lbl => `${lbl} must be greater than zero`;
const getErrorMsgNAN = lbl => `${lbl} must be a valid number`;
const getErrorMsgMaxSubtotal = lbl => `${lbl} must be less than 10,000`;
const getErrorMsgMaxTaxRate = lbl => `${lbl} must be less than 12`;

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus;
  elem.select;
};

const processEntries = () => {
  const subtotal = parseFloat($("#subtotal").value);
  const taxRate = parseFloat($("#taxRate").value);
  let salesTax = 0;
  let total = subtotal;

  if (isNaN(subtotal)) {
      alert(getErrorMsgNAN("Subtotal"));
      focusAndSelect("#subtotal");
  } else if (isNaN(taxRate)) {
      alert(getErrorMsgNAN("Tax rate"));
      focusAndSelect("#taxRate")
  } else if (subtotal <= 0) {
      alert(getErrorMsgZero("Subtotal"));
      focusAndSelect("#subtotal");
  } else if (subtotal >= 10000) {
      alert(getErrorMsgMaxSubtotal("Subtotal"));
      focusAndSelect("#subtotal");
  } else if (taxRate <= 0) {
      alert(getErrorMsgZero("Tax rate"));
      focusAndSelect("#taxRate");
  } else if (taxRate >= 12) {
      alert(getErrorMsgMaxTaxRate("Tax rate"));
      focusAndSelect("#taxRate")
  } else {
      salesTax = parseFloat(subtotal * (taxRate / 100))
      total = parseFloat(subtotal + salesTax)

      $("#salesTax").value = (salesTax).toFixed(2);
      $("#total").value = (total).toFixed(2);
  }
};

const clear = () => {
  $("#subtotal").value = 0;
  $("#taxRate").value = 0;
  $("#salesTax").value = 0;
  $("#total").value = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clear);
  $("#subtotal").focus();
});