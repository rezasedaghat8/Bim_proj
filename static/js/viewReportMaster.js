"use strict";

const confirmReport = document.querySelector(".ConfirmReport");
const writeMasterReport = document.querySelector(".writeMasterReport");
const textAnnounce = document.querySelector(".textAnnounce");
const iconAnnounce = document.querySelector(".iconAnnounce");

confirmReport.addEventListener("click", function () {
  textAnnounce.classList.remove("text-bestRed");
  textAnnounce.classList.add("text-bestGreen");

  iconAnnounce.classList.remove("fa-circle-xmark");
  iconAnnounce.classList.add("fa-circle-check");

  iconAnnounce.classList.remove("text-bestRed");
  iconAnnounce.classList.add("text-bestGreen");
});
