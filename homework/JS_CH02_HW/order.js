"use strict";

let burgers = document.querySelector("#burgers");
burgers.value = parseFloat(0);
let fries = document.querySelector("#fries");
fries.value = parseFloat(0);
let sodas = document.querySelector("#sodas");
sodas.value = parseFloat(0);
let total = document.querySelector("#total");
total.value = parseFloat(0);
let totalCost = 0;

document.getElementById('order').onclick = () => {
  let burgerCost = parseFloat(burgers.value);
  let fryCost = parseFloat(fries.value);
  let sodaCost = parseFloat(sodas.value);

  totalCost = parseFloat(0);
  burgerCost = parseFloat(burgerCost * 1);
  fryCost = parseFloat(fryCost * 2);
  sodaCost = parseFloat(sodaCost * 2.5);
  totalCost = parseFloat(burgerCost + fryCost + sodaCost).toFixed(2);
  total.value = totalCost;
}