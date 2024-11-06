"use strict";

const toggle = evt => {
  const aElement = evt.currentTarget;
  const divElement = aElement.parentNode.nextElementSibling;

  aElement.classList.toggle("minus");
  divElement.classList.toggle("open");

  evt.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  const aElements = document.querySelectorAll("#faqs a");

  for (let aElement of aElements) {
    aElement.addEventListener("click", toggle);
  }

  aElements[0].focus();
})
