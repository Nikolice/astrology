var sortable = document.getElementsByClassName("sortable length");
var rows = document.getElementsByClassName("sign");
var container = document.getElementById("signs");

// console.log(sortable);

function sortColumnByLength(column) {
    var signs = []; // rows of signs;

    for(var i = 0; i < rows.length; i++) {
        signs.push(rows[i]);
    };
    
    // console.log(signs);

    signs.sort((sign_1, sign_2) => {
        var value_1 = Number(sign_1.getElementsByClassName(column)[0].textContent);
        var value_2 = Number(sign_2.getElementsByClassName(column)[0].textContent);
        // console.log(value_1, value_2);
        return value_1 - value_2;
    });

    for(var i = 0; i < rows.length; i++) {
        rows[i].innerHTML = signs[i].innerHTML;
    }

}

// sortColumnByLength("days_long");
// console.log(rows);