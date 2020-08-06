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

    index        .innerHTML = signs[i].Index;
    icon         .innerHTML = signs[i].Icon;
    zodiacName   .innerHTML = "<a href='https://en.wikipedia.org/wiki/" + signs[i].Name + "_(constellation)'>" + signs[i].Name + "</a>";
    entryYear    .innerHTML = signs[i].DateStart.getFullYear();
    entryMonth   .innerHTML = signs[i].DateStart.getMonth() + 1;
    entryDate    .innerHTML = signs[i].DateStart.getDate();
    lengthDays   .innerHTML = signs[i].Length[0];
    lengthPercent.innerHTML = signs[i].Length[1];
    
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
