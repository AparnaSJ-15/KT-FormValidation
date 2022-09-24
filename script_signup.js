// Select all input elements for varification
const userName = document.getElementById("name");
const email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword=document.getElementById("confirm");
const phoneNumber = document.getElementById("phoneNumber");

// function for form varification
function formValidation() {
  // checking length of name
  var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regPhone=/^\(?([1-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let regPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (userName.value.length < 2 || userName.value.length > 20) {
    alert("Name length should be more than 2 and less than 21 charaters");
    userName.focus();
    return true;
  }
  // checking email format
  if (!regEmail.test(email.value)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  // checking phone number
  if (!regPhone.test(phoneNumber.value)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    return false;
  }
  // checking password character pattern
  if (!regPass.test(password.value)) {
    alert("Minimum 8 characters, at least one uppercase, at least one lower case, at least one number and at least one special character");
    password.focus();
    return false;
  }
  if(password.value != cpassword.value){
    alert("Passwords did not match"); 
    cpassword.focus();
    return false;
  }
  return true;
}
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
function myFunction1() {
    var y = document.getElementById("confirm");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
}

function validatePassword(password) {
                
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Poor";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}