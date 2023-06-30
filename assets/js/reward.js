const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const tabActive = $('.tab-item.active');
const line = $('.tabs .line');
const codeInput = $('.star-codes__input');
const lblFocus = $('.label-focus');
const codeType = $('.code-type');
const btnSubmit = $('.btn-submit');
const codeWrap = $('.star-codes__wrap');
const codeError = $('.code-error');
const headTitle = $('.header__title');
const header = $('.header');
const extendBtns = $$('.extend-btn');
const footerCgs = $$('.footer-category__item')
const ctgLists = $$('.category-list');
const ctgWraps = $$('.category-wrap');
const menuBtn = $('.header__menu');
const inputCheck = $('.nav-input');
const body = document.querySelector('body');
const menuExit = $('.header__menu-exit');
const overlay = $('.overlay');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach(function (tab, index) {
    const pane = panes[index];

    tab.onclick = function() {
        if(tab.classList.contains('active')) {
            return true;
        }
        else {
            $('.tab-item.active').classList.remove('active');
            $('.tab-pane.active').classList.remove('active');

            line.style.left = this.offsetLeft + 'px';
            line.style.width = this.offsetWidth + 'px';

            this.classList.add('active');
            pane.classList.add('active');
        }
    }
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function change() {
        if(codeType.value) {
            lblFocus.classList.remove('unFocus');
            lblFocus.classList.add('isFocus');
        }
        else if(codeType.value === '') {
            lblFocus.classList.add('unFocus');
            lblFocus.classList.remove('isFocus');
        }
}
window.addEventListener("change", change);


btnSubmit.onclick = ()=> {
    if(!codeType.value) {
        codeInput.classList.remove('valid');
        codeInput.classList.add('invalid');
        lblFocus.classList.remove('valid')
        lblFocus.classList.add('invalid');
        lblFocus.classList.add('isFocus');
        lblFocus.classList.remove('unFocus');
        codeError.removeAttribute('style');
        return false;
    }
}

codeType.oninput = ()=> {
    codeInput.classList.remove('invalid');
    codeInput.classList.add('valid');
    lblFocus.classList.remove('invalid');
    lblFocus.classList.add('valid');
    codeError.setAttribute('style','display: none');
}

window.onscroll = ()=> {
    var sticky = headTitle.offsetTop;

    if(window.innerWidth <= 1023) {

        if(window.pageYOffset > sticky) {
            headTitle.classList.add('sticky');
        }
        else {
            headTitle.classList.remove('sticky');
        }
    }
    
}

for(let i = 0; i < footerCgs.length; i++) {
    footerCgs[i].onclick = function() {
        extendBtns[i].classList.toggle('active');
        ctgLists[i].classList.toggle('active');
        ctgWraps[i].classList.toggle('expand');
    }
}


menuBtn.onclick = function() {
    body.style.overflow = 'hidden';
    menuExit.setAttribute('style', 'display: block');
    menuBtn.setAttribute('style', 'display: none');
}

menuExit.onclick = function() {
    body.style.overflow = 'visible';
    menuExit.setAttribute('style', 'display: none');
    menuBtn.setAttribute('style', 'display: block');
}

if(!inputCheck.checked) {
    overlay.onclick = function() {
        body.style.overflow = 'visible';

        menuExit.setAttribute('style', 'display: none');
        menuBtn.setAttribute('style', 'display: block');
    }
}