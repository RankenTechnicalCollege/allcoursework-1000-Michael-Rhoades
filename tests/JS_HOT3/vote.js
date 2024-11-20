"use strict";

const $ = selector => document.querySelector(selector);

  let likes = 0;
  let dislikes = 0;
  let ratio = 0;

document.addEventListener("DOMContentLoaded", () => {

  $("#like").addEventListener("click", () => {
    $("#likesCount").textContent = likes + 1;
    $("#ratio").textContent = ratio + 1;
    likes = likes + 1;
    ratio = ratio + 1;
  });

  $("#dislike").addEventListener("click", () => {
    $("#dislikesCount").textContent = dislikes + 1;
    $("#ratio").textContent = ratio - 1;
    dislikes = dislikes + 1;
    ratio = ratio - 1;
  });

});