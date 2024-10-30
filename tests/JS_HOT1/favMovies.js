"use strict";

const $ = selector => document.querySelector(selector)

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus;
  elem.select;
};

const favoriteMovies = ["The Princess Bride", "The Hunchback of Notre Dame", "Deadpool and Wolverine"];

const addEntry = () => {
  const movie = $("#movie").value;

  favoriteMovies[favoriteMovies.length] = movie;

  for (let i = 0; i < favoriteMovies.length; i++) {
    document.write(`<p>${favoriteMovies[i]}</p><br>`);
    
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#addToList").addEventListener("click", addEntry);
  $("#movie").focus();
});