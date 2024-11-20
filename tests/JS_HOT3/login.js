"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#submit").addEventListener("click", () => {
      const email = $("#email").value;
      const password = $("#password").value;

      //allows for easy customization
      const currentEmail = "admin@example.com";
      const currentPassword = "password";

      if (email == "" || password == "") {
        $("#correct").textContent = ""
        $("#error").textContent = "You seem to have forgotten your username and password."
      } else if (email != currentEmail || password != currentPassword) {
        $("#correct").textContent = ""
        $("#error").textContent = "That email and password doesn't seem to be right. Try again."
      } else if (email == currentEmail && password == currentPassword) {
        $("#error").textContent = ""
        $("#correct").textContent = "Welcome back Admin!"
      } else {
        $("#correct").textContent = ""
        $("#error").textContent = "unknown error"
      }
    });

});