var percentage = 0;
var totalNumber = 11;
var nextSlideNo = 2;
var previousSlideNo = 1;
var currentSlideNo = 2;

let user = {
  firstName: "",
  nothingNeeded: "",
  lastName: "",
  title: "",
  mainPracticeArea: "",
  additionalPracticeArea: [],
  zipCode: "",
  firmSize: [],
  email: "",
  phoneNumber: "",
  resume: true,
};

function next(e, th) {
  if (e == 2) {
    var firstName = document.getElementById("first_Name").value;
    if (firstName == "" || firstName == " ") {
      document.getElementById("first_Name").focus();
      document.getElementById("error").style.display = "block";
      return false;
    }
    user.firstName = firstName;
    console.log(user);
  }
  if (e == 3) {
    user.nothingNeeded = "there is no question";
    console.log(user);
  }

  if (e == 4) {
    var lastName = document.getElementById("last_Name").value;
    console.log();
    if (lastName == "" || lastName == " ") {
      document.getElementById("last_Name").focus();
      document.getElementById("error2").style.display = "block";
      return false;
    }
    user.lastName = lastName;
    console.log(user);
  }
  if (e == 5) {
    let title = th.innerHTML;
    user.title = title;
    console.log(user);
  }
  if (e == 6) {
    let mainarea = th.innerHTML;
    user.mainPracticeArea = mainarea;
    console.log(user);
  }
  if (e == 7) {
    console.log(user);
  }

  if (e == 8) {
    var zipCode = document.getElementById("zip_Code").value;
    if (zipCode == "" || zipCode == " ") {
      document.getElementById("zip_Code").focus();
      document.getElementById("error3").style.display = "block";
      return false;
    }
    user.zipCode = zipCode;
    console.log(user);
  }
  if (e == 9) {
    // var firms = document.getElementById("zip_Code").value;
    console.log(user);
  }

  if (e == 10) {
    var email = document.getElementById("email").value;
    console.log();
    if (email == "" || email == " ") {
      document.getElementById("email").focus();
      document.getElementById("error4").style.display = "block";
      return false;
    }
    user.email = email
    console.log(user);
  }

  if (e == 11) {
    var contact = document.getElementById("contactNumber").value;
    console.log();
    if (contact == "" || contact == " ") {
      document.getElementById("contactNumber").focus();
      document.getElementById("error5").style.display = "block";
      return false;
    }
    user.contact = contact
    console.log(user)
  }
  if (e == 12) {
    var cv = document.getElementById("input_CV").files;
    console.log(cv[0]);
    sendEmail()
  }
  // if (e == 12) {
  //   var firstName = document.getElementById("email").value;
  //   console.log();
  //   if (firstName == "" || firstName == " ") {
  //     document.getElementById("contactNumber").focus();
  //     document.getElementById("error5").style.display = "block";
  //     return false;
  //   }
  // }
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
    if (e.parentNode.parentNode.id === "selection1") {
      user.additionalPracticeArea.push(e.innerHTML);
      console.log(e.innerHTML);
    } else if (e.parentNode.parentNode.id === "selection2") {
      user.firmSize.push(e.innerHTML);
      console.log(e.innerHTML);
    }
  }
}
function showCVinput(e) {
  if(e.innerHTML == 'Send'){
    let cv = document.getElementById("input_CV").files
    user.cv = cv
    console.log(user)
    sendEmail()
  }else{
    document.getElementById("input_CV").style.display = "block";
    e.innerHTML = 'Send'
  }
}
function sendEmail() { 
  Email.send({ 
    Host: "smtp.gmail.com", 
    Username: "sender@email_address.com", 
    Password: "Enter your password", 
    To: 'chris@holtzandbernard.com', 
    From: "sender@email_address.com", 
    Subject: "Sending Email using javascript", 
    Body: "Well that was easy!!", 
    html: `<h1>${user.firstName} ${user.lastName}</h1><p>A computer science portal</p>`,
    Attachments: [ 
      { 
        name: user.cv.name, 
        path: "Full Path of the file" 
      }] 
  }) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
} 