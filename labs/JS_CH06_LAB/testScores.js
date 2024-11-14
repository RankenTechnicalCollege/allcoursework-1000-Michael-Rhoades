"use strict";

const $ = selector => document.querySelector(selector);

const scoreArray = [];

document.addEventListener("DOMContentLoaded", () => {
    
  $("#addToArray").addEventListener("click", () => {
    const name = $("#name").value;
    const score = parseFloat($("#score").value);

    if (name == "") {
      $("#nameError").textContent = "Please enter a name"
    }
    if (score < 0 || score > 100 || isNaN(score)) {
      $("#scoreError").textContent = "Score must be between 0 and 100"
    }
    if (name != "" && (score >= 0 && score <= 100)) {
      scoreArray[scoreArray.length] = [name,score]
    }
  });

  $("#displayResults").addEventListener("click", () => {

    document.getElementById("resultsDiv").innerHTML = "<h2>Results</h2><span id=\"averageScore\"></span><br><span id=\"highScore\"></span><br>";


    let highScore = 0;
    let highScorer = "";
    let average = 0;

    for (let i = 0; i < scoreArray.length; i++) {
      average += scoreArray[i][1]

      if (highScore < scoreArray[i][1]) {
        highScore = scoreArray[i][1];
        highScorer = scoreArray[i][0];
      }
    }

    average = average / (scoreArray.length);

    $("#averageScore").textContent = "Average score = " + average;
    $("#highScore").textContent = "High Score = " + highScorer + " with a score of " + highScore;
  });

  $("#displayScores").addEventListener("click", () => {
    document.getElementById("scoresDiv").innerHTML = "<h2>Scores</h2><span id=\"scoresList\"></span>";

    let arrayList = "<ul>";

    for (let i = 0; i < scoreArray.length; i++) {
      arrayList += "<li>" + scoreArray[i][0] + " received a score of " + scoreArray[i][1] + "</li>";
    }
    arrayList += "</ul>"

    document.getElementById("scoresList").innerHTML = arrayList;
  });
    
  $("#name").focus();
});