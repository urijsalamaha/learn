document.querySelector("#toFormTable").addEventListener("click", function() {
  // Access to input
  var lines = document.querySelector("#lines").value;
  var columns = document.querySelector("#columns").value;
  var widthColumns = document.querySelector("#widthColumns").value + "px";
  var heightLines = document.querySelector("#heigthLines").value + "px";
  var widthBorder =
    document.querySelector("#widthBorder").value + "px" + " solid" + " black";
  var color = document.querySelector("#color").value;
  var defoltMessege = document.querySelector("textarea").value;
  // Insert the table
  var table = document.createElement("table");

  document.querySelector(".content").prepend(table);
  table.style.border = widthBorder;

  // Insert lines
  for (var count = 0; count < lines; ++count) {
    var tr = document.createElement("tr");
    tr.style.height = heightLines;
    table.prepend(tr);

    // Insert columns
    for (var count_2 = 0; count_2 < columns; ++count_2) {
      var td = document.createElement("td");
      td.prepend(defoltMessege);
      td.style.width = widthColumns;
      td.style.backgroundColor = color;
      tr.prepend(td);
    }
  }
});
