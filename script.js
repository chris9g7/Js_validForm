function validate() {
  let userN = document.getElementById("userName");
  let userE = document.getElementById("InputEmail");
  let userP = document.getElementById("InputPassword");

  nameCheck(userN);
  emailCheck(userE);
  passCheck(userP);
}
// name
function nameCheck(userName) {
  if (userName.value.length == "") {
    let u_error = document.getElementById("u_error");
    u_error.innerText = "User Name is Empty";
    userName.classList.add("Invalid");
    userName.classList.replace("valid", "Invalid");
  } else if (userName.value.length <= 6) {
    u_error.innerText = "User Name must be 6 letters.";
    userName.classList.add("Invalid");
    userName.classList.replace("valid", "Invalid");
  } else if (userName.value.length >= 6) {
    userName.classList.add("valid");
    u_error.innerText = "";
  }
}
//email
function emailCheck(userEmail) {
  if (userEmail.value.length == "") {
    let e_error = document.getElementById("e_error");
    e_error.innerHTML = "User Email is Empty";
    userEmail.classList.add("Invalid");
    userEmail.classList.replace("valid", "Invalid");
  } else if (userEmail.value.includes("@gmail.com")) {
    userEmail.classList.add("valid");
    userEmail.classList.replace("Invalid", "valid");
    e_error.innerHTML = "";
  } else if (!userEmail.value.includes("@gmail.com")) {
    userEmail.classList.add("Invalid");
    userEmail.classList.replace("valid", "Invalid");
    e_error.innerHTML = "Email must contain @gmail.com";
  }
}
//password
function passCheck(userPassword) {
  if (userPassword.value.length == "") {
    let p_error = document.getElementById("p_error");
    p_error.innerHTML = "Password is Empty";
    userPassword.classList.add("Invalid");
    userPassword.classList.replace("valid", "Invalid");
  } else if (userPassword.value.length <= 8) {
    p_error.innerText = "Password must be 8 digits long.";
    userPassword.classList.add("Invalid");
    userPassword.classList.replace("valid", "Invalid");
  } else if (userPassword.value.length >= 8) {
    userPassword.classList.add("valid");
    p_error.innerText = "";
  }
}
