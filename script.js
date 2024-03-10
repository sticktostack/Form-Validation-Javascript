let nameBox = document.getElementById("name");
let emailBox = document.getElementById("email");
let passwordBox = document.getElementById("password");
let confirmBox = document.getElementById("confirmpassword");

// activating the submit button 

document.getElementById("submitbtn").addEventListener("click", (e) => {
  e.preventDefault();

// to submit the form every function should run thats why using "&&" - logical & operator 

  if (nameCheck() && emailCheck() && passwordcheck() && confirmPassword()) {
    confirm("You want to submit ?");
    clearForm()
    console.log(details);
  }
});

// function to clear the input fields after submitting
function clearForm(){
  let inputs = document.getElementsByTagName('input')
  for(let i=0; i<inputs.length; i++){
    inputs[i].value=''
  }
};

// storing user's submitted data (name email & password)
let details = {
  username : '',
  email : '',
  password : ''
}

// checking the name field should maintain all the conditions given below 

function nameCheck() {
  names = nameBox.value;
  if (names.length === 0) {
    document.getElementById("namespan").innerHTML = "Name is required";
    document.getElementById("namespan").style.color = "firebrick";
    return false;
  } else if (!names.match(/^[^\s]+(?:\s[^\s]+){1,2}$/)) {
    document.getElementById("namespan").innerHTML = "Full name please";
    document.getElementById("namespan").style.color = "firebrick";
    return false;
  } else {
    document.getElementById("namespan").innerHTML = "";
    details.username = names
    return true;
  }
}

// checking the email field should maintain all the conditions given below 

function emailCheck() {
  email = emailBox.value;
  if (email.length === 0) {
    document.getElementById("emailspan").innerHTML = "Email is required";
    document.getElementById("emailspan").style.color = "firebrick";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    document.getElementById("emailspan").innerHTML = "Email is not valid";
    document.getElementById("emailspan").style.color = "firebrick";
    return false;
  } else {
    document.getElementById("emailspan").innerHTML = "";
    details.email = email
    return true;
  }
}

// checking the password field should maintain all the conditions given below 

function passwordcheck() {
  password = passwordBox.value;
  if (password.length === 0) {
    document.getElementById("passwordspan").innerHTML = "Password is required";
    document.getElementById("passwordspan").style.color = "firebrick";
    return false;
  } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;'"<>,.?/])(?=.*[^\w\d\s]).{8,30}$/)) {
    document.getElementById("passwordspan").innerHTML =
      "password must contain numbers(123) symbols(#-$-&) one uppercase(A-Z) and one lowercase(a-z)";
    document.getElementById("passwordspan").style.color = "firebrick";
    return false;
  } else {
    document.getElementById("passwordspan").innerHTML = "";
    details.password = password
    return true;
  }
};

// function to retrear the password filed and to match with confirmPassword field 

function confirmPassword() {
  confirmpass = confirmBox.value;
  if (confirmpass.length === 0) {
    document.getElementById("confirmpasswordspan").innerHTML =
      "Password is required";
    document.getElementById("confirmpasswordspan").style.color = "firebrick";
    return false;
  } else if (confirmBox.value === passwordBox.value) {
    document.getElementById("confirmpasswordspan").innerHTML = "";
    return true;
  } else {
    document.getElementById(
      "confirmpasswordspan"
    ).innerHTML = `password doesn't match`;
    document.getElementById("confirmpasswordspan").style.color = "firebrick";
    return false;
  }
}

// if user clicks on the eye icon it will show the password 

document.getElementById("pweye").addEventListener("click", () => {
  if (passwordBox.type === "password") {
    passwordBox.type = "text";
    document.getElementById("pweye").style.color = "teal";
  } else {
    document.getElementById("pweye").style.color = "";
    passwordBox.type = "password";
  }
});
document.getElementById("pweyetwo").addEventListener("click", () => {
  if (confirmBox.type === "password") {
    confirmBox.type = "text";
    document.getElementById("pweyetwo").style.color = "teal";
  } else {
    document.getElementById("pweyetwo").style.color = "";
    confirmBox.type = "password";
  }
});
