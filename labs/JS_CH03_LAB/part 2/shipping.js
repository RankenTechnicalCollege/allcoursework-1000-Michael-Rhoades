"use strict";

let prePrice = document.querySelector("#prePrice");
prePrice.value = 0;
let shipping = 0;

document.getElementById('calc').onclick = () => {
  prePrice = prePrice.value;
  prePrice = parseFloat(prePrice).toFixed(2);

  if (prePrice <= 25) {
    shipping = parseFloat(1.50);
    alert("Total cost is $" + parseFloat(prePrice + shipping));
  }
  else if (prePrice > 25) {
    shipping = parseFloat(prePrice * 10 / 100).toFixed(2);
    alert("Total cost is $" + parseFloat(prePrice + shipping));
  }
  else {
    alert("The entry needs to be a number");
  }
}