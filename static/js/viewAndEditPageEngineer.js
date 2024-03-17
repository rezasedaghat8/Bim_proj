"use strict";

const editBtn = document.querySelector(".EditBtn");
const submitTheEditedreport = document.querySelector(".submitTheEditedreport");
const newReport = document.getElementById('new_report')


editBtn.addEventListener("click", () => {
  newReport.removeAttribute("readonly")


  if (submitTheEditedreport.disabled) {
    submitTheEditedreport.classList.remove("cursor-not-allowed");
    submitTheEditedreport.classList.add("cursor-pointer");
    submitTheEditedreport.disabled = false;
  } else {
    submitTheEditedreport.classList.add("cursor-not-allowed");
    newReport.setAttribute("readonly", true)
    submitTheEditedreport.disabled = true;
  }
});
