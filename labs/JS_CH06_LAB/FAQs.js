"use strict";

const toggle = evt => {
  const aElement = evt.currentTarget;
  const divElement = aElement.parentNode.nextElementSibling;

  //aElement.classList.toggle("minus");
  //divElement.classList.toggle("open");

  if (aElement.hasAttribute("class")) {
    aElement.removeAttribute("class");
  } else {
    aElement.className = "minus";
  }

  if (divElement.hasAttribute("class")) {
    divElement.removeAttribute("class");
  } else {
    divElement.className = "open";
  }

  evt.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  const aElements = document.querySelectorAll("#faqs a");

  for (let aElement of aElements) {
    aElement.addEventListener("click", toggle);
  }

  aElements[0].focus();
})
