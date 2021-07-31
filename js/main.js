"use strict";

const inputSoft = document.getElementById("soft");
const inputStrong = document.getElementById("strong");
let wrapper = document.querySelector(".wrapper-theme");

function changeTheme() {
  if (inputSoft.checked) {
    wrapper.classList.add("soft");
    wrapper.classList.remove("strong");
    localStorage.setItem("theme", "soft");
  } else {
    wrapper.classList.add("strong");
    wrapper.classList.remove("soft");
    localStorage.setItem("theme", "strong");
  }
}

function getTheme() {
  let themeCookie = localStorage.getItem("theme");

  if (themeCookie === "soft") {
    inputSoft.checked = "checked";
  } else {
    inputStrong.checked = "checked";
  }

  changeTheme();
}

const formBtn = document.querySelector(".choose-theme");
formBtn.addEventListener("click", changeTheme);
window.addEventListener("load", getTheme);
