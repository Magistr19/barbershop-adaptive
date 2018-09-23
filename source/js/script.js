/* Js active */

var bodyElement = document.querySelector ('.no-js');
bodyElement.classList.remove('no-js');

/* Mobile nav open */

var toogleBtn = document.querySelector ('.main-nav__toogle');
var mobileNav = document.querySelector ('.main-nav__items-wrapper');

toogleBtn.addEventListener("click", function(evt) {
  if (toogleBtn.classList.contains('main-nav__toogle--open')) {
    toogleBtn.classList.remove ('main-nav__toogle--open');
    mobileNav.classList.remove ('main-nav__items-wrapper--open');
  }
  else {
    toogleBtn.classList.add ('main-nav__toogle--open');
    mobileNav.classList.add ('main-nav__items-wrapper--open');
  }
});

/* Modal login */

var loginLink = document.querySelector ('.main-nav__user-item--login a');
var modalLogin = document.querySelector ('.modal-login');
var closeBtn = document.querySelector ('.modal-login__close');
var overlay = document.querySelector ('.overlay');

loginLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  toogleBtn.classList.remove ('main-nav__toogle--open');
  mobileNav.classList.remove ('main-nav__items-wrapper--open');
  modalLogin.classList.add ('modal-login--show');
  overlay.classList.add ('overlay--show');
});

closeBtn.addEventListener("click", function(evt) {
  modalLogin.classList.remove ('modal-login--show');
  overlay.classList.remove ('overlay--show');
});

overlay.addEventListener("click", function(evt) {
  modalLogin.classList.remove ('modal-login--show');
  overlay.classList.remove ('overlay--show');
});

/* Slider features for mobile */

