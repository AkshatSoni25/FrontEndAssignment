function myDeleteFunctionEM() {
  document.getElementById("myTable").deleteRow(0);
  var table = document.getElementById("deleted");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var val = document.getElementById("name");
  cell1.innerHTML = "Deleted Entry : "
  cell2.innerHTML = "Employee Name";
  cell3.innerHTML = "Row1 cell2";
}

function myDeleteFunctionID() {
  document.getElementById("myTable").deleteRow(1);
  var table = document.getElementById("deleted");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "Deleted Entry : ";
  cell2.innerHTML = "Employee ID";
  cell3.innerHTML = "Row2 cell2";
}

function myDeleteFunctionDP() {
  document.getElementById("myTable").deleteRow(2);
  var table = document.getElementById("deleted");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "Deleted Entry : ";
  cell2.innerHTML = "Department";
  cell3.innerHTML = "Row3 cell2";
}

function myDeleteFunctionEmID() {
  document.getElementById("myTable").deleteRow(3);
  var table = document.getElementById("deleted");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "Deleted Entry : ";
  cell2.innerHTML = "Email ID";
  cell3.innerHTML = "Row3 cell2";
}

function myDeleteFunctionDOJ() {
  document.getElementById("myTable").deleteRow(4);
  var table = document.getElementById("deleted");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "Deleted Entry : ";
  cell2.innerHTML = "Date of Joining";
  cell3.innerHTML = "Row3 cell2";
}
