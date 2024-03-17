"use strict";

const closeSedeBar = document.querySelector(".closebarButton");
const menuButton = document.querySelector(".menuButton");
const sidebar = document.querySelector(".sidebar");
const reportBtn = document.querySelectorAll(".reportsButton");
const changePassBtn = document.querySelector(".changePassBtn");

// for token
const generatedTokenComponent = document.querySelectorAll(
  ".generatedTokenComponent"
);
const btnForAddtToken = document.querySelectorAll(".btnForAddtToken");

const deleteToken = document.querySelectorAll(".deleteToken");
const tokenUser = document.querySelectorAll(".tokenUser");

//open and close the sidebar im mobile
menuButton.addEventListener("click", () => {
  sidebar.classList.remove("hiddenSidebar");
  sidebar.classList.remove("hidden");
});
closeSedeBar.addEventListener("click", () => {
  sidebar.classList.add("hiddenSidebar");
  sidebar.classList.add("hidden");
});

//for generate Token
btnForAddtToken.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(generatedTokenComponent);
    generatedTokenComponent[index].classList.remove("hidden");
  });
});

// for deleteToken
deleteToken.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    tokenUser[index].classList.add("hidden");
  });
});
