"use strict";
const searchBtn = document.querySelector(".search-btn");

const mediaQuery = window.matchMedia("(max-width: 29.375em)");
mediaQuery.addListener(handleMobileChange);

function handleMobileChange(e) {
  if (e.matches) {
    searchBtn.disabled = true;
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
