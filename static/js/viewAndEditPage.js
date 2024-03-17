"use strict";

const editBtn = document.querySelector(".EditBtn");
const submitTheEditedreport = document.querySelector(".submitTheEditedreport");

editBtn.addEventListener("click", () => {
  console.log(submitTheEditedreport.disabled);

  if (submitTheEditedreport.disabled) {
    submitTheEditedreport.classList.remove("cursor-not-allowed");
    submitTheEditedreport.classList.add("cursor-pointer");
    submitTheEditedreport.disabled = false;
  } else {
    submitTheEditedreport.classList.add("cursor-not-allowed");
    submitTheEditedreport.disabled = true;
  }
});
