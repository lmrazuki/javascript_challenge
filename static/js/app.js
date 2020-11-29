var tbody = d3.select("tbody");

// Creates the table upon page being loaded.
data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var formFilter = d3.select("#filter-btn");
var allData = d3.select("#show-all");
var form = d3.select("#datetime");

formFilter.on("click", runEnter);
allData.on("click", showAll);

// Function to generate a filtered table upon click.
function runEnter() {
  d3.event.preventDefault();

  var trows = d3.select("tbody");
  trows.remove();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter((date) => date.datetime === inputValue);
  console.log(filteredData);

  var ufo_table = d3.select("#ufo-table");
  var tbody = ufo_table.append("tbody");

  filteredData.forEach((rows) => {
    var row = tbody.append("tr");
    Object.entries(rows).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Function to return the full table to the page after any filtering
function showAll() {
  var trows = d3.select("tbody");
  trows.remove();

  var ufo_table = d3.select("#ufo-table");
  var tbody = ufo_table.append("tbody");

  data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
