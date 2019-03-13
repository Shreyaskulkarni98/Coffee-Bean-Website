function validateForm() {
  var gender = document.forms["Signup_form"]["Gender"].value;
  var pass = document.forms["Signup_form"]["Password"].value;
  var cpass = document.forms["Signup_form"]["Confirm Password"].value;
  if (gender == "") {
    alert("Gender to be picked");
    return false;
  }
  if (cpass != pass) {
    alert("Passwords don't match !");
    return false;
  }

}
