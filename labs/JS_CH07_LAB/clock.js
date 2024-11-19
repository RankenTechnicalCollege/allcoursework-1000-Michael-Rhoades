"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  let timeDisplay = $("#time");
  let ampm = "";

  const startTime = () => {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    ampm = checkAMPM(hours);
    hours = checkHours(hours);
    minutes = check0(minutes);
    seconds = check0(seconds);
    timeDisplay.textContent = hours + ":" + minutes + ":" + seconds + " " + ampm;
    setTimeout(startTime, 1000);
  }

  const check0 = (number) => {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  }

  const checkHours = (number) => {
    if (number > 12) {
      number = number - 12;
    }
    if (number == 0) {
      number = number + 12;
    }
    return number;
  }

  const checkAMPM = (number) => {
    if (number >= 0 && number <= 11) {
      ampm = "AM";
    } else {
      ampm = "PM";
    }
    return ampm;
  }

  startTime();
});
