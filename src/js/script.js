const hamburger = document.querySelector(".nav__button");
const menu = document.querySelector(".nav__menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("nav__button--open");
  menu.classList.toggle("nav__menu--hidden");
});
const newsletterBtn = document.querySelector(".newsletter__btn");
newsletterBtn.addEventListener("click", e => {
  e.preventDefault();
});
