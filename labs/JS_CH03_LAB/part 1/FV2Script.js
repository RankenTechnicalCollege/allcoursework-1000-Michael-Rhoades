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
  futureValue += futureValue * rate / 100;
}

document.write(`<h3>Future value with yearly interest</h3>`);
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest Rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);

futureValue = investment;
for (let j = 1; j <= (years * 12); j++) {
  futureValue += futureValue * rate / 1200;
}

document.write(`<h3>Future value with monthly interest</h3>`);
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest Rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);