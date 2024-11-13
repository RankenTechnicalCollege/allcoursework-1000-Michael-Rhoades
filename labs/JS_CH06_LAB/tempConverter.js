"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#toCelsius").addEventListener("click", () => {
      const tempValue = $("#inDegrees");
      const outValue = $("#outDegrees");

      tempValue.previousSibling.textContent = "Enter F Degrees:"
      outValue.previousSibling.textContent = "Degrees Celsius:"
    });

    $("#toFahrenheit").addEventListener("click", () => {
      const tempValue = $("#inDegrees");
      const outValue = $("#outDegrees");

      tempValue.previousSibling.textContent = "Enter C Degrees:"
      outValue.previousSibling.textContent = "Degrees Fahrenheit:"
    });

    $("#convert").addEventListener("click", () => {
      const tempValue = parseFloat($("#inDegrees"));
      let outDegrees = 0;
      let error = $("#error");

      if (isNaN(tempValue) == false) {
        if ($("#toCelsius").checked == true) {
          outDegrees = ((tempValue - 32) * (5 / 9));
        } else if ($("#toFahrenheit").checked == true) {
          outDegrees = (tempValue * (9 / 5) + 32);
        }

        $("#outDegrees").value = parseFloat(outDegrees).toFixed(2);
      } else {
        error.textContent = "You must enter a valid number for degrees"
      }
    });
    
    $("#inDegrees").focus();
});