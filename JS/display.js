var tBody = document.getElementById("signs");

for (var i = 0; i < signs.length; i++) {
    var row = document.createElement("tr");
    var index = document.createElement("td");
    var icon = document.createElement("td");
    var zodiacName = document.createElement("td");
    var entryYear = document.createElement("td");
    var entryMonth = document.createElement("td");
    var entryDate = document.createElement("td");
    var lengthDays = document.createElement("td");
    var lengthPercent = document.createElement("td");

    index.innerText                 = signs[i].Index;
    icon.innerText                  = signs[i].Icon;
    zodiacName.innerText            = signs[i].Name;
    entryYear.innerText             = signs[i].DateStart.getFullYear();
    entryMonth.innerText            = signs[i].DateStart.getMonth() + 1;
    entryDate.innerText             = signs[i].DateStart.getDate();
    lengthDays.innerText            = signs[i].Length[0];
    lengthPercent.innerText         = signs[i].Length[1];
    
    index.classList.add("index", signs[i].Element);
    icon.classList.add("icon");
    zodiacName.classList.add("name");
    entryYear.classList.add("entryYear");
    entryMonth.classList.add("entryMonth");
    entryDate.classList.add("entryDate");
    lengthDays.classList.add("lengthDays");
    lengthPercent.classList.add("lengthPercent");

    row.append(index);
    row.append(icon);
    row.append(zodiacName); 
    row.append(entryYear);
    row.append(entryMonth);
    row.append(entryDate);
    row.append(lengthDays);
    row.append(lengthPercent);
    tBody.append(row);
}

console.log(tBody);