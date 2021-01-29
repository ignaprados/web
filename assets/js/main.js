/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */


/* ===== INTRO ===== */
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.7, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });


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
sr.reveal('.home__img',{delay: 400, origin: 'bottom'});
sr.reveal('.home__social-icon',{ interval: 300, origin: 'top'});


/* = SCROLL ABOUT = */
sr.reveal('.buttoncv',{origin:'bottom'});
sr.reveal('.send__content',{delay: 300, origin: 'left'});
sr.reveal('.send__img',{delay: 300, origin: 'right'});

/* = SCROLL SKILLS = */
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.about__text',{interval: 200, origin: 'bottom'});
sr.reveal('.hab__img',{delay: 200, origin: 'top'});

/* = SCROLL WORK = */
sr.reveal('.work__img',{interval: 150, origin:'top'});

/* = SCROLL LET'S TALK = */
sr.reveal('.send__content1',{delay: 200, origin: 'bottom'});

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
const iconTheme = 'bxs-toggle-right'
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

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bxs-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

    themeImage.classList[selectedImg === 'dark-img' ? 'add' : 'remove'](imgTheme)

    themeImage1.classList[selectedImg === 'dark-img' ? 'add' : 'remove'](imgTheme)

    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
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


/* ===== POPUP WORK=====*/
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
    popup.classList.remove('active');
});

/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */