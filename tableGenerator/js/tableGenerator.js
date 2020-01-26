var parTable = {};
var input = document.querySelectorAll("input");
var cont = document.querySelector(".content");
var bar = document.querySelector(".sideBar");

/**
 * Form the quantity of lines
 * @param {quantity of lines from the table object} x
 */
function getTr(x) {
  var arrTr = [];
  for (var i = 0; i < x; ++i) {
    var tr = document.createElement("tr");
    tr.style.height = parTable.heightTr + "px";
    arrTr.push(tr);
  }
  return arrTr;
}

/**
 * Form the quantity of columns
 * @param {quantity of columns from the table object} x
 */
function getTd(x) {
  var arrTd = [];
  for (var i = 0; i < x; ++i) {
    var td = document.createElement("td");
    td.style.width = parTable.widthTd + "px";
    td.prepend(document.querySelector("textarea").value);
    arrTd.push(td);
  }
  return arrTd;
}

// Form the table object
document.querySelector("#toFormTable").addEventListener("click", function() {
  parTable["quantityTd"] = input[0].value;
  parTable["quantityTr"] = input[1].value;
  parTable["border"] = input[2].value;
  parTable["widthTd"] = input[3].value;
  parTable["heightTr"] = input[4].value;
  parTable["color"] = input[5].value;

  var table = document.createElement("table");
  // Put the table in DOM
  cont.prepend(table);
  table.style.borderWidth = parTable.border + "px";
  table.style.backgroundColor = parTable.color;
  // Put lines in the table
  table.prepend(...getTr(+parTable.quantityTr));

  var line = document.querySelectorAll("tr");
  // Put columns in the table
  for (var i = 0; i < line.length; ++i) {
    line[i].prepend(...getTd(+parTable.quantityTd));
  }
  var column = document.querySelectorAll("td");
});
