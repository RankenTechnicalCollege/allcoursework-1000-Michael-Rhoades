"use strict";

const $ = selector => document.querySelector(selector)

const getErrorMsgZero = lbl => `${lbl} must be greater than or equal to zero`;
const getErrorMsgNAN = lbl => `${lbl} must be a valid number`;

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus;
  elem.select;
};

const calculateIncomeTax = () => {
  const income = parseFloat($("#income").value);
  let incomeTax = 0;
  let incomeRem = income;

  if (isNaN(income)) {
      alert(getErrorMsgNAN("Taxable income"));
      focusAndSelect("#income");
  } else if (income < 0) {
      alert(getErrorMsgZero("Taxable income"));
      focusAndSelect("#income");
  } else {
    if (income <= 9875) {
      incomeTax = incomeRem * 0.1;
    } else if (income <= 40125) {
      incomeRem = incomeRem - 9875;
      incomeTax = 987.5 + (incomeRem * 0.12);
    } else if (income <= 85525) {
      incomeRem = incomeRem - 9875 - 40125;
      incomeTax = 4617.5 + (incomeRem * 0.22);
    } else if (income <= 163300) {
      incomeRem = incomeRem - 9875 - 40125 - 85525;
      incomeTax = 14605.5 + (incomeRem * 0.24);
    } else if (income <= 207350) {
      incomeRem = incomeRem - 9875 - 40125 - 85525 - 163300;
      incomeTax = 33271.5 + (incomeRem * 0.32);
    } else if (income <= 518400) {
      incomeRem = incomeRem - 9875 - 40125 - 85525 - 163300 - 207350;
      incomeTax = 47367.5 + (incomeRem * 0.35);
    } else if (income > 518400) {
      incomeRem = incomeRem - 9875 - 40125 - 85525 - 163300 - 207350 - 518400;
      incomeTax = 156235 + (incomeRem * 0.37);
    }

    $("#incomeTax").value = (incomeTax).toFixed(2);

  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calculateIncomeTax);
  $("#income").focus();
});