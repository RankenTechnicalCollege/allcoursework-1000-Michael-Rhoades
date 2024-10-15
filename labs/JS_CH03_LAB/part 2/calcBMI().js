"use strict";

let height = document.querySelector("#height");
height.value = parseInt(0);
let weight = document.querySelector("#weight");
weight.value = parseInt(0);
let bmi = document.querySelector("#bmi");
bmi.value = parseInt(0);
let total = 0;

document.getElementById('calc').onclick = () => {
  let heightValue = parseFloat(height.value);
  let weightValue = parseFloat(weight.value);

  total = parseFloat(0);
  weightValue = parseFloat(weightValue * 703);
  heightValue = parseFloat(heightValue * heightValue);
  total = parseInt(weightValue / heightValue);
  bmi.value = total;
}

document.getElementById('test').onclick = () => {
  document.write(`<p>weight: ${weight}<br>height: ${height}</p>`)
}