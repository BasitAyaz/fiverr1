var percentage = 0;
var totalNumber = 11;
var nextSlideNo = 2;
var previousSlideNo = 1;
var currentSlideNo = 2;
function checkInput() {
  var firstName = document.getElementById("first_Name").value;
  console.log();
  if (firstName == "") {
    document.getElementById("error").style.display = "block";
    return false;
  } else {
    document.getElementById("error").style.display = "block";
  }
}
function next(e, th) {
  if (e == 2) {
    var firstName = document.getElementById("first_Name").value;
    console.log();
    if (firstName == "" || firstName == " ") {
      document.getElementById("first_Name").focus();
      document.getElementById("error").style.display = "block";
      return false;
    } else {
      document.getElementById("error").style.display = "block";
    }
  }

  if (e == 4) {
    var firstName = document.getElementById("last_Name").value;
    console.log();
    if (firstName == "" || firstName == " ") {
      document.getElementById("last_Name").focus();
      document.getElementById("error").style.display = "block";
      return false;
    } else {
      document.getElementById("error").style.display = "block";
    }
  }

  if (e == 8) {
    var firstName = document.getElementById("zip_Code").value;
    console.log();
    if (firstName == "" || firstName == " ") {
      document.getElementById("zip_Code").focus();
      document.getElementById("error").style.display = "block";
      return false;
    } else {
      document.getElementById("error").style.display = "block";
    }
  }

  if (e == 10) {
    var firstName = document.getElementById("email").value;
    console.log();
    if (firstName == "" || firstName == " ") {
      document.getElementById("email").focus();
      document.getElementById("error").style.display = "block";
      return false;
    } else {
      document.getElementById("error").style.display = "block";
    }
  }
  currentSlideNo = e;
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
  var elmnt = document.getElementById(`slide${num}`);
  elmnt.scrollIntoView();
  th.disabled = true;
  // elmnt.scroll = true
}

function nextSlide() {
  if (currentSlideNo > 12) {
    console.log(currentSlideNo);
    return;
  } else {
    console.log(currentSlideNo);
    var nextSlide = currentSlideNo++;
    var elmnt = document.getElementById(`slide${nextSlide}`);
    elmnt.scrollIntoView();
  }
}
function previousSlide() {
  if (currentSlideNo == 13) {
    currentSlideNo--;
  }
  if (currentSlideNo < 1) {
    console.log(currentSlideNo);
    return;
  } else {
    console.log(currentSlideNo);
    var nextSlide = currentSlideNo--;
    var elmnt = document.getElementById(`slide${nextSlide}`);
    elmnt.scrollIntoView();
  }
}
function select(e) {
  if (e.className == "selected") {
    e.className = "select";
    e.blur();
    console.log(e.className);
  } else {
    e.className = "selected";
    console.log(e.className);
  }
}
function showCVinput() {
  document.getElementById("input_CV").style.display = "block";
}
