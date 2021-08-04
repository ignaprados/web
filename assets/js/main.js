/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */


/* ===== INTRO ===== */
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.7, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });


/* ===== SIGUERATONES ===== */

var browserPrefix = "";
var usrAg = navigator.userAgent;
if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
  browserPrefix = "-webkit-";
} else if (usrAg.indexOf("Opera") > -1) {
  browserPrefix = "-o";
} else if (usrAg.indexOf("Firefox") > -1) {
  browserPrefix = "-moz-";
} else if (usrAg.indexOf("MSIE") > -1) {
  browserPrefix = "-ms-";
}

//TweenLite.defaultEase = Power3.easeInOut;

var $cursor = jQuery("#js-cursor");
var $cursor__big = jQuery("#js-cursor__big");
var $cursor__big2 = jQuery("#js-cursor__big2");
var $cursor__small = jQuery("#js-cursor__small");
var $links = jQuery(".curserhover, .call-to-action");
var $links2 = jQuery(".curserhover2, .call-to-action2");


jQuery(window).on("mousemove", function (e) {
  $cursor.css(
    browserPrefix + "transform",
    "translate(" + e.pageX + "px, " + e.pageY + "px)",
  );
});

$links.on("mouseenter", function (e) {
  $cursor__big.css(browserPrefix + "transform", "scale(1)");
});

$links.on("mouseleave", function (e) {
  $cursor__big.css(browserPrefix + "transform", "scale(0)");
});

$links.on("mouseenter", function (e) {
  $cursor__small.css(browserPrefix + "transform", "scale(0)");
});

$links.on("mouseleave", function (e) {
  $cursor__small.css(browserPrefix + "transform", "scale(1)");
});

$links2.on("mouseenter", function (e) {
  $cursor__big2.css(browserPrefix + "transform", "scale(1)");
});

$links2.on("mouseleave", function (e) {
  $cursor__big2.css(browserPrefix + "transform", "scale(0)");
});

$links2.on("mouseenter", function (e) {
  $cursor__small.css(browserPrefix + "transform", "scale(0)");
});

$links2.on("mouseleave", function (e) {
  $cursor__small.css(browserPrefix + "transform", "scale(1)");
});


/* ===== MENU SHOW ===== */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/* ===== ACTIVE AND REMOVE MENU ===== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

/* = SCROLL HOME = */
sr.reveal('.home__title',{delay:100, origin:'top'});
sr.reveal('.button',{delay: 100, origin: 'bottom'});
/*sr.reveal('.home__img',{delay: 400, origin: 'bottom'});*/
sr.reveal('.home__social-icon',{ interval: 300, origin: 'top'});


/* = SCROLL ABOUT = */
sr.reveal('.buttoncv',{origin:'bottom'});
sr.reveal('.send__content',{delay: 300, origin: 'left'});
sr.reveal('.send__img',{delay: 300, origin: 'right'});

/* = SCROLL EXPERIENCE = */
sr.reveal('.qualification__button',{origin:'top'});
sr.reveal('.exp',{origin:'top'});
sr.reveal('.container',{origin:'top'});

/* = SCROLL SKILLS = */
sr.reveal('.section-title2',{origin:'top'});
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.about__text',{interval: 200, origin: 'bottom'});
sr.reveal('.customer-logos',{delay: 200, origin: 'top'});

/* = SCROLL WORK = */
sr.reveal('.work__img',{interval: 150, origin:'top'});

/* = SCROLL LET'S TALK = */
sr.reveal('.send__content1',{delay: 200, origin: 'bottom'});
sr.reveal('.exp2',{delay: 200, origin: 'bottom'});

/* = SCROLL CONTACT = */
sr.reveal('.contact__input',{interval: 200});


/* ===== BACK TO TOP BUTTON ===== */
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

window.addEventListener("width", matchMedia); // Attach listener function on state changes


var x = window.matchMedia("(min-width: 768px)")
scrollFunction(x) // Call listener function at run time

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if (x.matches){
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    }
}

  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnEntrance");
    backToTopButton.classList.add("btnExit");
    setTimeout(function() {
        backToTopButton.style.display = "none";
    }, 250);
    }
}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
const targetPosition = 0;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
const duration = 750;
let start = null;

window.requestAnimationFrame(step);

function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
}
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


/* ==================== DARK LIGHT THEME ==================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'
const themeImage = document.getElementById('logo')
const imgTheme = 'dark-img'
const themeImage1 = document.getElementById('navlogo')

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const selectedImg = localStorage.getItem('selected-img')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentImg = () => themeImage.classList.contains(imgTheme) ? 'dark-img' : 'light-img'

const getCurrentImg1 = () => themeImage1.classList.contains(imgTheme) ? 'dark-img' : 'light-img'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

    themeImage.classList[selectedImg === 'dark-img' ? 'add' : 'remove'](imgTheme)

    themeImage1.classList[selectedImg === 'dark-img' ? 'add' : 'remove'](imgTheme)

    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    themeImage.classList.toggle(imgTheme)
    themeImage1.classList.toggle(imgTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    localStorage.setItem('selected-img' , getCurrentImg())
})


/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* ===== POPUP WORK =====*/
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    html = document.querySelector('html');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
    popup.classList.add('active');
    html.classList.add('my-body-noscroll-class');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
    popup.classList.remove('active');
    html.classList.remove('my-body-noscroll-class');
});

/* ===== POPUP WORK 2 =====*/
var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
	overlay2 = document.getElementById('overlay2'),
	popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');
    html2 = document.querySelector('html');

btnAbrirPopup2.addEventListener('click', function(){
	overlay2.classList.add('active');
    popup2.classList.add('active');
    html2.classList.add('my-body-noscroll-class');
});

btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('active');
    popup2.classList.remove('active');
    html2.classList.remove('my-body-noscroll-class');
});

/* ===== POPUP WORK 3 =====*/
var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
	overlay3 = document.getElementById('overlay3'),
	popup3 = document.getElementById('popup3'),
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');
    html3 = document.querySelector('html');

btnAbrirPopup3.addEventListener('click', function(){
	overlay3.classList.add('active');
    popup3.classList.add('active');
    html3.classList.add('my-body-noscroll-class');
});

btnCerrarPopup3.addEventListener('click', function(e){
	e.preventDefault();
	overlay3.classList.remove('active');
    popup3.classList.remove('active');
    html3.classList.remove('my-body-noscroll-class');
});

/* ===== POPUP WORK 4 =====*/
var btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
	overlay4 = document.getElementById('overlay4'),
	popup4 = document.getElementById('popup4'),
    btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');
    html4 = document.querySelector('html');

btnAbrirPopup4.addEventListener('click', function(){
	overlay4.classList.add('active');
    popup4.classList.add('active');
    html4.classList.add('my-body-noscroll-class');
});

btnCerrarPopup4.addEventListener('click', function(e){
	e.preventDefault();
	overlay4.classList.remove('active');
    popup4.classList.remove('active');
    html4.classList.remove('my-body-noscroll-class');
});

/* ===== POPUP WORK 5 =====*/
var btnAbrirPopup5 = document.getElementById('btn-abrir-popup5'),
	overlay5 = document.getElementById('overlay5'),
	popup5 = document.getElementById('popup5'),
    btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5');
    html5 = document.querySelector('html');

btnAbrirPopup5.addEventListener('click', function(){
	overlay5.classList.add('active');
    popup5.classList.add('active');
    html5.classList.add('my-body-noscroll-class');
});

btnCerrarPopup5.addEventListener('click', function(e){
	e.preventDefault();
	overlay5.classList.remove('active');
    popup5.classList.remove('active');
    html5.classList.remove('my-body-noscroll-class');
});

/* ===== POPUP WORK 6 =====*/
var btnAbrirPopup6 = document.getElementById('btn-abrir-popup6'),
	overlay6 = document.getElementById('overlay6'),
	popup6 = document.getElementById('popup6'),
    btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6');
    html6 = document.querySelector('html');

btnAbrirPopup6.addEventListener('click', function(){
	overlay6.classList.add('active');
    popup6.classList.add('active');
    html6.classList.add('my-body-noscroll-class');
});

btnCerrarPopup6.addEventListener('click', function(e){
	e.preventDefault();
	overlay6.classList.remove('active');
    popup6.classList.remove('active');
    html6.classList.remove('my-body-noscroll-class');
});

/*========== QUALIFICATION  TABS ==========*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/* ========== SKILLS SLIDER ==========*/
$(document).ready(function() {
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    draggable: false,
    touchMove: false,
    swipeToSlide: false,
    swipe: false,
    pauseOnHover: false,
    pauseOnFocus:false,
    responsive: [{
      breakpoint: 880,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 550,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});




/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */