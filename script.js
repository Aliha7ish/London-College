"use strict";

// const courses = document.querySelectorAll(".course");
// const mainPage = document.querySelector(".main_page");
// const coursesPage = document.querySelector(".course_page");
// let courseHeading = document.querySelector(".course_heading");
// let courseBackground = document.querySelector(".course_page-img");

// const coursePageContent = {
//   heading: courseHeading,
//   background: courseBackground,
// };
// console.log(coursePageContent);

// for (let i = 0; i < courses.length; i++) {
//   courses[i].addEventListener("click", function () {
//     document.querySelector(".main_page").classList.add("none");
//     document.querySelector(".course_page").classList.remove("none");
//     console.log(courses[i]);

//     if (courses[i].classList.contains("course-business")) {
//       courseHeading.textContent = "أساسيات التجارة";
//       courseBackground.style.backgroundImage =
//         "images/background/marketing-background.png";
//     } else if (courses[i].classList.contains("course-law")) {
//       courseHeading.textContent = "أساسيات المحاماة";
//       courseBackground.style.backgroundImage =
//         "images/background/marketing-background.png";
//     } else if (courses[i].classList.contains("course-programming")) {
//       courseHeading.textContent = "أساسيات البرمجة";
//       courseBackground.style.backgroundImage =
//         "images/background/marketing-background.png";
//     } else if (courses[i].classList.contains("course-marketing")) {
//       courseHeading.textContent = "أساسيات التسويق";
//       courseBackground.style.backgroundImage =
//         "images/background/marketing-background.png";
//     }
//   });
// }

const mediaQuery = window.matchMedia("(max-width: 29.375em)");
mediaQuery.addListener(handleMobileChange);

function handleMobileChange(e) {
  if (e.matches) {
    document
      .querySelector(".search_icon")
      .addEventListener("click", function () {
        document.querySelector(".search_page-mobile").classList.remove("none");
      });
    document.querySelector(".close").addEventListener("click", function () {
      document.querySelector(".search_page-mobile").classList.add("none");
    });
  }
}

handleMobileChange(mediaQuery);
