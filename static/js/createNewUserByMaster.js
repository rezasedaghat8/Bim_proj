"use strict";

const closeSedeBar = document.querySelector(".closebarButton");
const menuButton = document.querySelector(".menuButton");
const sidebar = document.querySelector(".sidebar");
const reportBtn = document.querySelectorAll(".reportsButton");
const changePassBtn = document.querySelector(".changePassBtn");
const imgInput = document.querySelector(".imgInput");
const imgOfInput = document.querySelector(".imgOfInput");

//open and close the sidebar im mobile
menuButton.addEventListener("click", () => {
  sidebar.classList.remove("hiddenSidebar");
  sidebar.classList.remove("hidden");
});
closeSedeBar.addEventListener("click", () => {
  sidebar.classList.add("hiddenSidebar");
  sidebar.classList.add("hidden");
});

// js for check the input of file just accept the jpg or png or jpej image file
imgInput.addEventListener("change", () => {
  var fileName = document.getElementById("imageInput").value;
  var idxDot = fileName.lastIndexOf(".") + 1;
  var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
    imgOfInput.src = URL.createObjectURL(imgInput.files[0]);
  } else {
    alert("Only jpg/jpeg and png files are allowed!");
  }
});
