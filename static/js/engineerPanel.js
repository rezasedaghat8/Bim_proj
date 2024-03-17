"use strict";

const closeSedeBar = document.querySelector(".closebarButton");
const menuButton = document.querySelector(".menuButton");
const sidebar = document.querySelector(".sidebar");
const reportBtn = document.querySelectorAll(".reportsButton");
const changePassBtn = document.querySelector(".changePassBtn");

//open and close the sidebar im mobile
menuButton.addEventListener("click", () => {
  sidebar.classList.remove("hiddenSidebar");
  sidebar.classList.remove("hidden");
});
closeSedeBar.addEventListener("click", () => {
  sidebar.classList.add("hiddenSidebar");
  sidebar.classList.add("hidden");
});
//open and close the sidebar im mobile

// go to reports and changePassword Pannel with ajax
//search in google about this

// let reportPage = async function () {
//   let resReportPage = await fetch("./reportsPage.html");
//   console.log(resReportPage.json[0]);
// };
// reportBtn.forEach((item) => {
//   item.addEventListener("click", () => {
//     reportPage();
//   });
// });
// go to reports and changePassword Pannel with ajax
