"use strict";

let score = 0;

do {
  score = parseFloat(prompt("Enter number grade from 0 to 100, or enter 999 to end.", 999))
  if (score <= 100 && score >= 0) {
    if (score >= 88) {
      document.write(`<p>Grade ${score.toFixed(2)} = A</p>`)
    }
    else if (score >= 80) {
      document.write(`<p>Grade ${score.toFixed(2)} = B</p>`)
    }
    else if (score >= 68) {
      document.write(`<p>Grade ${score.toFixed(2)} = C</p>`)
    }
    else if (score >= 60) {
      document.write(`<p>Grade ${score.toFixed(2)} = D</p>`)
    }
    else {
      document.write(`<p>Grade ${score.toFixed(2)} = F</p>`)
    }
  }
  else if (score = 999) {
  }
  else if (score >= 100 || score <= 0) {
    alert ("Score must be between 1 and 100.");
  }
  else if (score = isNaN) {
    alert ("Score must be a number.");
  }
}
while (score != 999);

