"use strict";

const seePassword = document.querySelector(".seePassword");
let passwordField = document.querySelector(".fieldPassword");
// let eyeIcon = document.querySelector(".eyeIcon");

// delete the eyeIcon if the passWordField is Empty
passwordField.addEventListener("mousemove", function () {
  if (passwordField.value.length === 0) {
    seePassword.classList.add("hidden");
  } else {
    seePassword.classList.remove("hidden");
  }
});

// change the type of the password to text or password with button eye
seePassword.addEventListener("click", function () {
  if (passwordField.type == "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});
