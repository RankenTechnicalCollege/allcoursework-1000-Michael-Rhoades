"use strict";

$("div").hide();

$(document).ready(function(){
  const h1Elements = document.querySelectorAll("h1");

  for (let h1Element of h1Elements) {
    $("h1Element").click(function(){
      $(this).hide();
    });
  }
})