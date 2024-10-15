"use strict";

let prePrice = document.querySelector("#prePrice");
prePrice.value = 0;
let shipping = 0;

document.getElementById('calc').onclick = () => {
  let price = parseFloat(prePrice.value);

  if (price <= 25) {
    shipping = parseFloat(1.50);
    price = parseFloat(price + shipping).toFixed(2);
    alert("Total cost is $" + price);
  }
  else if (price > 25) {
    shipping = parseFloat(price * 10 / 100);
    price = parseFloat(price + shipping).toFixed(2);
    alert("Total cost is $" + price);
  }
  else {
    alert("The entry needs to be a number");
  }
}

document.getElementById('test').onclick = () => {
  document.write(`<p>prePrice: ${prePrice}<br>shipping: ${shipping}</p>`)
}