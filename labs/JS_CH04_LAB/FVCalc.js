"use strict";

const $ = selector => document.querySelector(selector)

const getErrorMsgZero = lbl => `${lbl} must be greater than zero`;
const getErrorMsgNAN = lbl => `${lbl} must be a valid number`;
const getErrorMsgMaxInvestment = lbl => `${lbl} must be less than or equal to 100,000`;
const getErrorMsgMaxInterest = lbl => `${lbl} must be less than or equal to 15`;
const getErrorMsgMaxYears = lbl => `${lbl} must be less than or equal to 50`;



const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus;
  elem.select;
};

const calculateFV = () => {
  const investment = parseFloat($("#investment").value);
  const rate = parseFloat($("#rate").value);
  const years = parseFloat($("#years").value);
  let futureValue = investment;

  if (isNaN(investment)) {
      alert(getErrorMsgNAN("Total investment"));
      focusAndSelect("#investment");
  } else if (isNaN(rate)) {
      alert(getErrorMsgNAN("Interest rate"));
      focusAndSelect("#rate");
  } else if (isNaN(years)) {
      alert(getErrorMsgNAN("Number of Years"));
      focusAndSelect("#years");
  } else if (investment <= 0) {
      alert(getErrorMsgZero("Total investment"));
      focusAndSelect("#investment");
  } else if (investment > 100000) {
      alert(getErrorMsgMaxInvestment("Total investment"));
      focusAndSelect("#investment");
  } else if (rate <= 0) {
      alert(getErrorMsgZero("Interest rate"));
      focusAndSelect("#rate");
  } else if (rate > 15) {
      alert(getErrorMsgMaxInterest("Interest rate"));
      focusAndSelect("#rate");
  } else if (years <= 0) {
      alert(getErrorMsgZero("Number of Years"));
      focusAndSelect("#years");
  } else if (years > 50) {
      alert(getErrorMsgMaxYears("Number of years"));
      focusAndSelect("#years");
  } else {
      for (let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
      }
      $("#futureValue").value = (futureValue).toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calculateFV);
  $("#investment").focus();
});