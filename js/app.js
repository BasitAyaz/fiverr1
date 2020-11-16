var percentage = 0;
var totalNumber = 11;
var nextSlideNo = 2;
var previousSlideNo = 1;
function next(e) {
  percentage++;
  nextSlideNo++;
  previousSlideNo++;
  var annual = (percentage / totalNumber) * 100;
  var final = Math.round(annual);
  console.log(final);
  document.getElementById("showPercent").style.width = `${final}%`;
  document.getElementById("percentageNumber").innerHTML = final;
  var firstName = document.getElementById("first_Name").value;
  document.getElementById("firstName1").innerHTML = firstName;
  document.getElementById("firstName2").innerHTML = firstName;
  var num = e;
  console.log(num);
  var ref = `slide${num}`;
  console.log(ref);
  var elmnt = document.getElementById(ref);
  elmnt.scrollIntoView();
  window.location.href = `#slide${num}`;

}
function nextSlide() {
  var elmnt = document.getElementById(`slide${nextSlideNo}`);
  elmnt.scrollIntoView();
}
function previousSlide() {
  var elmnt = document.getElementById(`slide${previousSlideNo}`);
  elmnt.scrollIntoView();
}
function select(e) {
  e.className = "selected";
}
function showCVinput() {
  document.getElementById("input_CV").style.display = "block";
}
