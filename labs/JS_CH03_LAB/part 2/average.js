"use strict";

let value1 = document.querySelector("#value1");
value1.value = 0;

let value2 = document.querySelector("#value2");
value2.value = 0;

let value3 = document.querySelector("#value3");
value3.value = 0;

let value4 = document.querySelector("#value4");
value4.value = 0;

let value5 = document.querySelector("#value5");
value5.value = 0;

document.getElementById('calc').onclick = () => {
  value1 = value1.value;
  value1 = parseFloat(value1);
  
  value2 = value2.value;
  value2 = parseFloat(value2);
  
  value3 = value3.value;
  value3 = parseFloat(value3);
  
  value4 = value4.value;
  value4 = parseFloat(value4);
  
  value5 = value5.value;
  value5 = parseFloat(value5);
  
  document.write(`<p>${((value1 + value2 + value3 + value4 + value5) / 5).toFixed(2)}</p>`);
}

