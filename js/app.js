var percentage = 0;
var totalNumber = 11;

function next() {
  percentage++;
  var annual = (percentage / totalNumber) * 100;
  var final = Math.round(annual);
  console.log(final);
  document.getElementById("showPercent").style.width = `${final}%`;
  document.getElementById("percentageNumber").innerHTML = final;
  var firstName = document.getElementById("first_Name").value;
  document.getElementById("firstName1").innerHTML = firstName;
  document.getElementById("firstName2").innerHTML = firstName;
  var elmnt = document.getElementById("slide2");
  elmnt.scrollIntoView();
}
function select(e) {
  e.className = "selected";
}
function showCVinput() {
  document.getElementById("input_CV").style.display = "block";
}
