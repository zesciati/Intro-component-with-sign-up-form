// const { isValidElement } = require("react");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.querySelector("form");


// submit button 
const submit = document.getElementById("submit");


// error
const firstNameError = firstName.nextElementSibling;
const lastNameError = lastName.nextElementSibling;
const emailError = email.nextElementSibling;
const passError = pass.nextElementSibling;

// popup form succes submitted
const successState = document.querySelector(".successed");


// Hapus syarat jika value kosong
function valueGone(value, li) {
  if (value === "") {
    li.textContent = " ";
    li.style.display = "none";
  }
}

// Setiap value yang diinput akan dicek dan diberitahu jika ada yang salah atau benar
function message(conditions, value, idMessage) {
  conditions.forEach(c => {
    const li = document.createElement("li");
    if (c.test.test(value)) {
      li.textContent = "✅ " + c.message;
      li.classList.add("list-success");
    } else {
      li.textContent = "❌ " + c.message;
      li.classList.add("list-failed")
    }
    valueGone(value, li);
    idMessage.appendChild(li);
  });
}


// Terloading dulu semua konten baru dijalankan fungsi validasi value
document.addEventListener("DOMContentLoaded", () => {

  firstName.addEventListener("input", liveValidateFirstName);
  lastName.addEventListener("input", liveValidateLastName);
  email.addEventListener("input", liveValidateEmail);
  pass.addEventListener("input", liveValidatePass);



  function liveValidateFirstName() {
    const value = firstName.value.trim();
    let isValid = true;

    const conditions = [
      { test: /^[A-Z]/, message: "Must start with a capital letter" },
      { test: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, message: "Must only contain letters (no numbers or special symbols)" },
    ];

    firstNameError.innerHTML = "";
    const idMessage = firstNameError;
    message(conditions, value, idMessage);

    return isValid;

  };



  function liveValidateLastName() {
    const value = lastName.value.trim();
    let isValid = true;

    const conditions = [
      { test: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, message: "Must only contain letters (no numbers or special symbols)" },
    ];

    lastNameError.innerHTML = "";
    const idMessage = lastNameError;
    message(conditions, value, idMessage);

    return isValid;
  }



  function liveValidateEmail() {
    const value = email.value.trim();
    let isValid = true;

    const conditions = [
      {
        test: /^(?!\.)/,
        message: "Email tidak boleh diawali dengan titik"
      },
      {
        test: /[^.]@/,
        message: "Email tidak boleh diakhiri dengan titik sebelum tanda @"
      },
      {
        test: /^[\w\-_.]+/,
        message: "Bagian username hanya boleh huruf, angka, underscore (_), dash (-), atau titik (.)"
      },
      {
        test: /@\w+/,
        message: "Email harus mengandung domain setelah '@'"
      },
      {
        test: /\.\w+/,
        message: "Domain harus memiliki ekstensi setelah titik, misalnya .com atau .id"
      },
      {
        test: /\.[A-Za-z]{2,}$/,
        message: "Ekstensi domain harus minimal 2 huruf"
      }

    ];
    emailError.innerHTML = "";
    const idMessage = emailError;
    message(conditions, value, idMessage);

    return isValid;
  };



  function liveValidatePass() {
    const value = pass.value.trim();
    let isValid = true;

    const conditions = [
      { test: /.{8,}/, message: "Must be at least 8 characters long" },
      { test: /[A-Z]/, message: "Must contain at least one uppercase letter" },
      { test: /[a-z]/, message: "Must contain at least one lowercase letter" },
      { test: /[0-9]/, message: "Must contain at least one digit" },
      { test: /[#?!@$%^&*-]/, message: "Must contain at least one special character (#?!@$%^&*-)" }
    ];

    passError.innerHTML = "";
    const idMessage = passError;
    message(conditions, value, idMessage);

    return isValid;
  }


  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    console.log("Form submitted");

    const isFirstNameValid = liveValidateFirstName();
    const isEmailValid = liveValidateEmail();
    const isPassValid = liveValidatePass();

    if (isFirstNameValid && isEmailValid && isPassValid) {

      submitBtn.disabled = true; // Disable the submit button
      submitBtn.textContent = "Submitting...";

      try{

      }catch(error){

      }finally{
        
      }

    }

  })
})