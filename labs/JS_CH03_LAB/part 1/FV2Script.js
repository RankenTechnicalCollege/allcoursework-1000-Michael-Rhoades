"use strict";

let investment = 0;

do {
  investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

let rate = 0;
do {
  rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

let years = 0;
do {
  years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) );

let futureValue = investment;
for (let i = 1; i <= years; i++) {
  document.write(`<p>Year = ${i} Interest = ${(futureValue * rate / 100).toFixed(2)} value = ${(futureValue * rate / 100 + futureValue).toFixed(2)}</p>`)
  futureValue += futureValue * rate / 100;
}

