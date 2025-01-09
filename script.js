function insert_Row() {
  // Get the table element
  let table = document.getElementById("sampleTable");

  // Insert a new row at the top (index 0)
  let newRow = table.insertRow(0);

  // Insert cells into the new row
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  // Add content to the cells
  cell1.textContent = "New cell1";
  cell2.textContent = "New cell2";
}
