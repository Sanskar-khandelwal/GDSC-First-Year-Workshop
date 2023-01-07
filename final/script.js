const body = document.querySelector("body");
const nav = document.querySelector("nav");
const btn = document.querySelector("#btn-change");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contactUs = document.querySelector("#contact-us");

btn.addEventListener("click", function (e) {
  document.body.classList.toggle("body-white");
  nav.classList.toggle("nav-white");
  home.classList.toggle("anchor-color");
  about.classList.toggle("anchor-color");
  contactUs.classList.toggle("anchor-color");
});
