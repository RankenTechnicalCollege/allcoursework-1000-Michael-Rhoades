"use strict";

const $ = selector => document.querySelector(selector);

let todoArray = ["Take out garbage", "Wash dishes", "Clean the car", "Do laundry", "Do homework"];

document.addEventListener("DOMContentLoaded", () => {
    
  const runList = () => {
    let arrayList = "<ul>";
    for (let i = 0; i < todoArray.length; i++) {
      arrayList += "<li>" + todoArray[i] + "</li>";
    }
    arrayList += "</ul>";
    document.getElementById("todoList").innerHTML = arrayList;
  }

  const checkList = (d) => {
    let deleteArray = [];
    for (let i = 0; i < todoArray.length; i++) {
      if (todoArray[i] == d) {

        let p = 1;
        let deleteArray = [];
        for (let j = (i + 1); j < todoArray.length; j++) {
          deleteArray[deleteArray.length] = todoArray[j];
          p++;
        }
        while (p > 0) {
          todoArray.pop();
          p = p - 1;
        }

        for (let k = 0; k < deleteArray.length; k++) {
          todoArray[todoArray.length] = deleteArray[k];
        }
      }
    }
  }

  $("#add").addEventListener("click", () => {
    const item = $("#addItem").value;

    if (item != "") {
      $("#error1").textContent = ""
      todoArray[todoArray.length] = item;
      runList();
    } else {
      $("#error1").textContent = "Please enter a valid item";
    }
  });

  $("#removeNumber").addEventListener("click", () => {
    const number = parseInt($("#removeItemNumber").value);

    if (isNaN(number)) {
      $("#error2").textContent = "Please enter a valid number";
    } else {
      $("#error2").textContent = "";
      const arrayNumber = number - 1;
      const item = todoArray[arrayNumber];
      checkList(item);
      runList()
    }
  });

  $("#removeText").addEventListener("click", () => {
    const item = $("#removeItemText").value;

    if (item != "") {
      $("#error2").textContent = "";
      checkList(item);
      runList();
    } else {
      $("#error2").textContent = "Please enter an item";
    }
  });
  runList()

});