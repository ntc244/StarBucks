const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");
const codeInput = $(".star-codes__input");
const lblFocus = $(".label-focus");
const codeType = $(".code-type");
const btnSubmit = $(".btn-submit");
const codeWrap = $(".star-codes__wrap");
const codeError = $(".code-error");
const headTitle = $(".header__title");
const header = $(".header");
const extendBtns = $$(".extend-btn");
const footerCgs = $$(".footer-category__item");
const ctgLists = $$(".category-list");
const ctgWraps = $$(".category-wrap");
const menuBtn = $(".header__menu-bars");
const inputCheck = $(".nav-input");
const body = document.querySelector("body");
const menuExit = $(".header__menu-exit");
const overlay = $(".overlay");

for (let i = 0; i < footerCgs.length; i++) {
  footerCgs[i].onclick = function () {
    extendBtns[i].classList.toggle("active");
    ctgLists[i].classList.toggle("active");
    ctgWraps[i].classList.toggle("expand");
  };
}

menuBtn.onclick = function () {
  body.style.touchAction = "none";
  menuExit.setAttribute("style", "display: block");
  menuBtn.setAttribute("style", "display: none");
};

menuExit.onclick = function () {
  body.style.touchAction = "auto";
  menuExit.setAttribute("style", "display: none");
  menuBtn.setAttribute("style", "display: block");
};

if (!inputCheck.checked) {
  overlay.onclick = function () {
    body.style.touchAction = "auto";
    menuExit.setAttribute("style", "display: none");
    menuBtn.setAttribute("style", "display: block");
  };
}
