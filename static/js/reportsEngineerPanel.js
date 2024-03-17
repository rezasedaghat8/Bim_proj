"use strict";

const closeSedeBar = document.querySelector(".closebarButton");
const menuButton = document.querySelector(".menuButton");

const sidebar = document.querySelector(".sidebar");

// const addNewReportBtn = document.querySelector(".addNewReportBtn");
// const addNewReportPage = document.querySelector(".addNewReportPage");
// const closeBtnInAddReport = document.querySelectorAll(".closeBtnInAddReport");
// const viewAndEditPage = document.querySelector(".viewAndEditPage");
// const viewAndEditBtn = document.querySelectorAll(".viewAndEditBtn");

// const submitNewReport = document.querySelector(".submitNewReport");
// const allReports = document.querySelector(".allReports");

// const textOfReport = document.querySelector(".textOfReport");
// const textOfViewAndEditPage = document.querySelector(".textOfViewAndEditPage");

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

// // button add Newreport
// addNewReportBtn.addEventListener("click", () => {
//   addNewReportPage.classList.remove("hidden");
// });

// const newReport = document.querySelector(".newReport");
// submitNewReport.addEventListener("click", () => {
//   // add new report to page
//   const htmlWithReport = `
//        <div class="report">
//                 <div
//                   class="border-2 border-bluewhte rounded-xl p-7 bg-bluelg text-semiWhite relative"
//                 >
//                   <p class="textOfReport max-h-24 overflow-hidden">
//                     ${newReport.value}
//                   </p>
//                   <button
//                     class="viewAndEditBtn bg-red-500 absolute top-1/2 right-85% p-3 rounded-lg text-black hover:bg-semiWhite transition-all duration-300 font-bold"
//                   >
//                     مشاهده و تغییر
//                   </button>
//                 </div>
//               </div>

//    `;
//   allReports.insertAdjacentHTML("beforeend", htmlWithReport);

//   const viewAndEditBtn = document.querySelectorAll(".viewAndEditBtn");

// viewAndEditBtn.forEach((item) => {
//   item.addEventListener("click", () => {
//     const textOfReport = document.querySelectorAll(".textOfReport");
//     viewAndEditPage.classList.remove("hidden");
//     textOfViewAndEditPage.value = textOfReport[item].textContent;

//     //eddited erport add to newReport
//     submitTheEditedreport.addEventListener("click", () => {
//       // console.log(textOfViewAndEditPage.value);
//       // console.log();
//       // textOfReport[item].innerHTML = "hello world";
//       // console.log(typeof textOfViewAndEditPage.value);
//       textOfReport[item].innerHTML = textOfViewAndEditPage.value;
//     });
//   });
// });

// //this is we have a problem
// viewAndEditBtn.forEach((item, currIndex) => {
//   const textOfReport = document.querySelectorAll(".textOfReport");
//   item.addEventListener("click", () => {
//     viewAndEditPage.classList.remove("hidden");
//     textOfViewAndEditPage.value = textOfReport[currIndex].textContent;

//     // submitEdditedReport button
//     submitTheEditedreport.addEventListener("click", () => {
//       textOfReport[currIndex].innerHTML = textOfViewAndEditPage.value;
//       console.log(textOfReport);
//       console.log(currIndex);
//       textOfReport.forEach((item) => {
//         console.log(item);
//         console.log(item.innerHTML);
//       });
//     });
//   });
// });

// for (let item = 0; item < viewAndEditBtn.length; item++) {
//   viewAndEditBtn[item].addEventListener("click", () => {
//     const textOfReport = document.querySelectorAll(".textOfReport");
//     viewAndEditPage.classList.remove("hidden");
//     textOfViewAndEditPage.value = textOfReport[item].textContent;

//     //eddited report add to newReport
//     submitTheEditedreport.addEventListener("click", () => {
//       // console.log(textOfViewAndEditPage.value);
//       // console.log();
//       // textOfReport[item].innerHTML = "hello world";
//       // console.log(typeof textOfViewAndEditPage.value);
//       textOfReport[item].innerHTML = textOfViewAndEditPage.value;
//     });
//   });
// }
// });
// // button close of the view ad edit page and addnewReportPage
// closeBtnInAddReport.forEach((item) => {
//   item.addEventListener("click", () => {
//     addNewReportPage.classList.add("hidden");
//     viewAndEditPage.classList.add("hidden");
//   });
// });
// editBtn.addEventListener("click", () => {
//   textOfViewAndEditPage.removeAttribute("readonly");
//   submitTheEditedreport.disabled = false;

// //eddited erport add to newReport
// submitTheEditedreport.addEventListener("click", () => {
//   console.log(textOfViewAndEditPage.value);
//   textOfReport = textOfViewAndEditPage.vlaue;
// });

// if (submitTheEditedreport.disabled) {
//   submitTheEditedreport.classList.add("cursor-not-allowed");
// } else {
//   submitTheEditedreport.classList.remove("cursor-not-allowed");
//   submitTheEditedreport.classList.add("cursor-pointer");
// }
// });
