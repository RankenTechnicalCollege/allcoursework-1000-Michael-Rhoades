"use strict";

let prePrice = document.querySelector("#prePrice");
prePrice.value = parseInt(0);
let shipping = parseInt(0);

document.getElementById('calc').onclick = () => {
  prePrice = prePrice.value;
  prePrice = parseFloat(prePrice);

  if (prePrice <= 25) {
    shipping = parseFloat(1.50);
    prePrice = parseFloat(prePrice + shipping).toFixed(2);
    alert("Total cost is $" + prePrice);
  }
  else if (prePrice > 25) {
    shipping = parseFloat(prePrice * 10 / 100);
    prePrice = parseFloat(prePrice + shipping).toFixed(2);
    alert("Total cost is $" + prePrice);
    prePrice.value = parseInt(0);
  }
  else {
    alert("The entry needs to be a number");
  }
}

document.getElementById('test').onclick = () => {
  document.write(`<p>prePrice: ${prePrice}<br>shipping: ${shipping}</p>`)
}