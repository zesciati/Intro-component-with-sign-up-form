const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

// submit button 
const submit = document.getElementById("submit");


// error
const firstNameError = firstName.nextElementSibling;
const lastNameError = lastName.nextElementSibling;
const emailError = email.nextElementSibling;
const passError = pass.nextElementSibling;

// popup form succes submitted
const successState = document.querySelector(".successed");

// Terloading dulu semua konten baru dijalankan fungsinya
document.addEventListener("DOMContentLoaded", () => {

  firstName.addEventListener("input", liveValidateFirstName);


})