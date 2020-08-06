var tBody = document.getElementById("signs");

for (var i = 0; i < signs.length; i++) {
    var row           = document.createElement("tr"),
        index         = document.createElement("td"),
        icon          = document.createElement("td"),
        zodiacName    = document.createElement("td"),
        entryYear     = document.createElement("td"),
        entryMonth    = document.createElement("td"),
        entryDate     = document.createElement("td"),
        lengthDays    = document.createElement("td"),
        lengthPercent = document.createElement("td");

    index        .innerText = signs[i].Index;
    icon         .innerText = signs[i].Icon;
    zodiacName   .innerText = signs[i].Name;
    entryYear    .innerText = signs[i].DateStart.getFullYear();
    entryMonth   .innerText = signs[i].DateStart.getMonth() + 1;
    entryDate    .innerText = signs[i].DateStart.getDate();
    lengthDays   .innerText = signs[i].Length[0];
    lengthPercent.innerText = signs[i].Length[1];
    
    index        .classList.add("index", signs[i].Element);
    icon         .classList.add("icon");
    zodiacName   .classList.add("name");
    entryYear    .classList.add("entryYear");
    entryMonth   .classList.add("entryMonth");
    entryDate    .classList.add("entryDate");
    lengthDays   .classList.add("lengthDays");
    lengthPercent.classList.add("lengthPercent");

    row.append(
        index, 
        icon, 
        zodiacName, 
        entryYear, 
        entryMonth, 
        entryDate, 
        lengthDays, 
        lengthPercent
    );

    tBody.append(row);
}
