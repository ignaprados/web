/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */


/* ===== INTRO ===== */
const tl = gsap.timeline({ defaults: { ease: Power1.easeInOut } });
const home = document.getElementById('home')

tl.set("html", { overflowY: "hidden" });
tl.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: .85, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: .75, delay: 0.25 });
tl.to(".intro", { y: "-100%", duration: .5 }, "-=.5");
tl.to("html", { overflowY: "visible", delay: -0.20});
tl.fromTo("#home", { opacity: 0 }, { opacity: 1, duration: .40, delay: -0.36 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: .40, delay: -0.29  });
tl.to(".custom-cursor", { opacity: 1, duration: .2 }, "-=.5");

/* ===== OUTRO ===== */
const page = document.querySelector('[data-id]')

function redirect(project){
    console.log('redirect')
    const tl2 = new gsap.timeline({ defaults: { ease: Power1.easeInOut } });
    tl2.set(".custom-cursor", { opacity: 0 });
    tl2.set("#back-to-top-btn", { display: "none" });
    tl2.set("html", { overflowY: "hidden" });
    tl2.set(".intro", { opacity: 0},);
    tl2.set(".text" , { opacity: 0},);
    tl2.set(".intro", { y: "0%"},);
    tl2.to(".intro", { opacity: 1, duration: .5 },);
    setTimeout(function(){
        window.location.href = '/assets/pages/'+ project +'.html';
    }, 1200);
}

function redirectback(path,anchor){
    console.log('redirect')
    const tl2 = new gsap.timeline({ defaults: { ease: Power1.easeInOut } });
    tl2.set(".custom-cursor", { opacity: 0 });
    tl2.set("#back-to-top-btn", { display: "none" });
    tl2.set("html", { overflowY: "hidden" });
    tl2.set(".intro", { opacity: 0},);
    tl2.set(".text" , { opacity: 0},);
    tl2.set(".intro", { y: "0%"},);
    tl2.to(".intro", { opacity: 1, duration: .5 },);
    setTimeout(function(){
        window.location.href = '/'+ path +'.html' + anchor;
    }, 1200);
}

function redirect2(project,id){
  console.log('new tab')
  window.open('https://www.behance.net/gallery/'+ id + '/' + project, '_blank');
}

function redirect3(web){
  console.log('new tab')
  window.open('https://'+ web, '_blank');
}



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

scrollEnabled = true; // Enable scroll

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            toggleScroll()  // toggle scroll
        })
    }
}
showMenu('nav-toggle','nav-menu')


/* ===== ACTIVE AND REMOVE MENU ===== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  // if this is in mobile
  if(window.innerWidth <= 904){
    toggleScroll()  // toggle scroll
  }

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
    reset: false,
});

/* = SCROLL HOME = */
sr.reveal('.home__title',{delay:100, origin:'top'});
sr.reveal('.button',{delay: 100, origin: 'bottom'});
/*sr.reveal('.home__img',{delay: 400, origin: 'bottom'});*/
sr.reveal('.home__social-icon',{ interval: 300, origin: 'top'});


/* = SCROLL ABOUT = */
sr.reveal('.lema',{origin: 'top'});
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
sr.reveal('.project',{delay: 200, origin: 'right'});
sr.reveal('.project-2',{delay: 200, origin: 'left'});
sr.reveal('.work__img',{interval: 150, origin:'top'});

/* = SCROLL LET'S TALK = */
/*sr.reveal('.send__content1',{delay: 200, origin: 'bottom'});
sr.reveal('.exp2',{delay: 200, origin: 'bottom'});*/

/* = SCROLL CONTACT = */
/*sr.reveal('.contact__input',{interval: 200});*/

/* = SCROLL PROJECT = */
sr.reveal('.video',{delay:100, origin:'top'});

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
/* ==================== ACTIVATE CONFETTI ==================== */
const sections = document.querySelectorAll('section[id]')
var activarconfetti = true;
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
            if (sectionId === 'contact' && activarconfetti === true){ /* START CONFETTI JS*/
              confetti.start();
              setTimeout(function(){confetti.stop(); activarconfetti = false;},3000);/* STOP CONFETTI JS*/
            }
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
if(window.location.pathname === '/index.html' || window.location.pathname === '/'){
window.addEventListener('scroll', scrollActive)
}


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


/* ========== AUTOHIDE NAV ON SCROLL ==========*/
var prev = 0;
var $window = $(window);
var nav = $(".l-header");

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  nav.toggleClass("hidden", scrollTop > prev);
  prev = scrollTop;
});


/* ========== PARTICLE EXPLOSION ON CLICK LOGO ==========*/
// click event listener
$('.logoimg').on('click', function(e) {
  explode(e.pageX, e.pageY);
  explode(e.pageX, e.pageY);
})

// explosion construction
function explode(x, y) {
  var particles = 15,
    // explosion container and its reference to be able to delete it on animation end
    explosion = $('<div class="explosion"></div>');

  // put the explosion container into the body to be able to get it's size
  $('body').append(explosion);

  // position the container to be centered on click
  explosion.css('left', x - explosion.width() / 2);
  explosion.css('top', y - explosion.height() / 2);

  for (var i = 0; i < particles; i++) {
    // positioning x,y of the particle on the circle (little randomized radius)
    var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      color = rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255), // randomize the color rgb
        // particle element creation (could be anything other than div)
      elm = $('<div class="particle" style="' +
        'background-color: rgb(' + color + ') ;' +
        'top: ' + y + 'px; ' +
        'left: ' + x + 'px"></div>');

    if (i == 0) { // no need to add the listener on all generated elements
      // css3 animation end detection
      elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        explosion.remove(); // remove this explosion container when animation ended
      });
    }
    explosion.append(elm);
  }
}

// get random number between min and max value
function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}


/* ========== CONFETTI JS ==========*/

var confetti = {
	maxCount: 200,
	speed: 2,
	frameInterval: 15,
	alpha: 1,
	gradient: !1,
	start: null,
	stop: null,
	toggle: null,
	pause: null,
	resume: null,
	togglePause: null,
	remove: null,
	isPaused: null,
	isRunning: null
};
! function ()
{
	confetti.start = s, confetti.stop = w, confetti.toggle = function ()
	{
		e ? w() : s()
	}, confetti.pause = u, confetti.resume = m, confetti.togglePause = function ()
	{
		i ? m() : u()
	}, confetti.isPaused = function ()
	{
		return i
	}, confetti.remove = function ()
	{
		stop(), i = !1, a = []
	}, confetti.isRunning = function ()
	{
		return e
	};
	var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
		n = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"],
    e = !1,
		i = !1,
		o = Date.now(),
		a = [],
		r = 0,
		l = null;

	function d(t, e, i)
	{
		return t.color = n[Math.random() * n.length | 0] + (confetti.alpha + ")"), t.color2 = n[Math.random() * n.length | 0] + (confetti.alpha + ")"), t.x = Math.random() * e, t.y = Math.random() * i - i, t.diameter = 10 * Math.random() + 5, t.tilt = 10 * Math.random() - 10, t.tiltAngleIncrement = .07 * Math.random() + .05, t.tiltAngle = Math.random() * Math.PI, t
  }

	function u()
	{
		i = !0
	}

	function m()
	{
		i = !1, c()
	}

	function c()
	{
		if (!i)
			if (0 === a.length) l.clearRect(0, 0, window.innerWidth, window.innerHeight), null;
			else
			{
				var n = Date.now(),
					u = n - o;
				(!t || u > confetti.frameInterval) && (l.clearRect(0, 0, window.innerWidth, window.innerHeight), function ()
				{
					var t, n = window.innerWidth,
						i = window.innerHeight;
					r += .01;
					for (var o = 0; o < a.length; o++) t = a[o], !e && t.y < -15 ? t.y = i + 100 : (t.tiltAngle += t.tiltAngleIncrement, t.x += Math.sin(r) - .5, t.y += .5 * (Math.cos(r) + t.diameter + confetti.speed), t.tilt = 15 * Math.sin(t.tiltAngle)), (t.x > n + 20 || t.x < -20 || t.y > i) && (e && a.length <= confetti.maxCount ? d(t, n, i) : (a.splice(o, 1), o--))
				}(), function (t)
				{
					for (var n, e, i, o, r = 0; r < a.length; r++)
					{
						if (n = a[r], t.beginPath(), t.lineWidth = n.diameter, i = n.x + n.tilt, e = i + n.diameter / 2, o = n.y + n.tilt + n.diameter / 2, confetti.gradient)
						{
							var l = t.createLinearGradient(e, n.y, i, o);
							l.addColorStop("0", n.color), l.addColorStop("1.0", n.color2), t.strokeStyle = l
						}
						else t.strokeStyle = n.color;
						t.moveTo(e, n.y), t.lineTo(i, o), t.stroke()
					}
				}(l), o = n - u % confetti.frameInterval), requestAnimationFrame(c)
			}
	}

	function s(t, n, o)
	{
		var r = window.innerWidth,
			u = window.innerHeight;
		window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t)
		{
			return window.setTimeout(t, confetti.frameInterval)
		};
		var m = document.getElementById("confetti-canvas");
		null === m ? ((m = document.createElement("canvas")).setAttribute("id", "confetti-canvas"), m.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"), document.body.prepend(m), m.width = r, m.height = u, window.addEventListener("resize", function ()
		{
			m.width = window.innerWidth, m.height = window.innerHeight
		}, !0), l = m.getContext("2d")) : null === l && (l = m.getContext("2d"));
		var s = confetti.maxCount;
		if (n)
			if (o)
				if (n == o) s = a.length + o;
				else
				{
					if (n > o)
					{
						var f = n;
						n = o, o = f
					}
					s = a.length + (Math.random() * (o - n) + n | 0)
				}
		else s = a.length + n;
		else o && (s = a.length + o);
		for (; a.length < s;) a.push(d(
		{}, r, u));
		e = !0, i = !1, c(), t && window.setTimeout(w, t)
	}

	function w()
	{
		e = !1
	}
}();


/* ========== CLOCK ==========*/

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var d = date.getDay(); // 0-6
  var statusColor = '';
  var statusText = "";
  var session = "AM";

  /* Check if its week or weekend */
  if (d != 0 && d != 6) {
    /* Change status depending on the time */
    if ((h == 0 || h == 24) || h < 08) {
      statusColor = "#0373fc";
      statusText = "I am currently sleeping";
    }

    else if (h >= 08 && h < 14) {
      statusColor = "#FFA500";
      statusText = "I am currently working";
    }

    else if ( h >= 14 && h < 18) {
      statusColor = "#bf1919";
      statusText = "I am currently in class";
    }

    else if (h >= 18 && h < 24)  {
      statusColor = "#15c215";
      statusText = "I am currently in my free time";
    }
  } else {
      /* Change status depending on the time */
      if ((h == 0 || h == 24) || h < 08) {
        statusColor = "#0373fc";
        statusText = "I am currently sleeping";
      }
      else if (h >= 8 && h < 24)  {
        statusColor = "#15c215";
        statusText = "I am currently in my free time";
      }
  }

  /* Change AM/PM */
  if(h == 0 || h == 24){
    h = 12;
    session = "PM";
  }

  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  document.getElementById("status").innerText = statusText;
  $('.statuscircle').css('color', statusColor);
  
  setTimeout(showTime, 1000);
  
}
if(window.location.pathname === '/index.html' || window.location.pathname === '/'){
showTime();
}


/* ==================== DYNAMIC COPYRIGHT YEAR ==================== */
function copyright() {
  copyrightYear = new Date().getFullYear();
  copyFinal = "© "  + copyrightYear + " Made by IgnacioPrados";
  document.getElementById("copy").innerText = copyFinal;
};
copyright();


/* ==================== DYNAMIC YEARS OLD ==================== */
function calcularEdad() {
  var hoy = new Date();
  var cumpleanos = new Date(2003, 04, 26);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }

  document.getElementById("edad").innerText = (edad + " years old");
};
calcularEdad();


/* ==================== TIPYNG TITLE ANIMATION ==================== */
window.ityped.init(document.querySelector('.ityped'),{
  strings: ['Frontend Dev ','UI Designer '],
  loop: true,
  typeSpeed:  150,
  backDelay: 3000,
})


/* ==================== DISABLE SCROLL ON EVENT ==================== */
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  scrollEnabled = false;
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  scrollEnabled = true;
}


// create a toggle function to disable/enable scroll
function toggleScroll() {
  if (window.addEventListener) {
    if (scrollEnabled) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
}


/* ==================== MUSIC PLAYER ==================== */
$(function () {
  var playerTrack = $("#player-track"),
    bgArtwork = $("#bg-artwork"),
    bgArtworkUrl,
    albumName = $("#album-name"),
    trackName = $("#track-name"),
    albumArt = $("#album-art"),
    sArea = $("#s-area"),
    seekBar = $("#seek-bar"),
    trackTime = $("#track-time"),
    insTime = $("#ins-time"),
    sHover = $("#s-hover"),
    playPauseButton = $("#play-pause-button"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time"),
    tTime = $("#track-length"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false,
    albums = [
      "Scared To Be Lonely",
      "Ocean Drive",
      "Titanium",
      "All The Time",
      "Versailles",
    ],
    trackNames = [
      "Martin Garrix • Dua Lipa",
      "Duke Dumont",
      "David Guetta • Sia",
      "Zara Larsson",
      "Axollo • MAJRO",
    ],
    albumArtworks = ["_1", "_2", "_3", "_4", "_5"],
    trackUrl = [
      "/assets/music/1.mp3",
      "/assets/music/2.mp3",
      "assets/music/3.mp3",
      "assets/music/4.mp3",
      "assets/music/5.mp3"
    ],
    playPreviousTrackButton = $("#play-previous"),
    playNextTrackButton = $("#play-next"),
    currIndex = -1;

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        i.attr("class", "fas fa-pause");
        audio.play();
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        i.attr("class", "fas fa-play");
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;
    else --currIndex;

    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-pause");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      currAlbum = albums[currIndex];
      currTrackName = trackNames[currIndex];
      currArtwork = albumArtworks[currIndex];

      audio.src = trackUrl[currIndex];

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img.active").removeClass("active");
      $("#" + currArtwork).addClass("active");

      bgArtworkUrl = $("#" + currArtwork).attr("src");

      bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
    } else {
      if (flag == 0 || flag == 1) --currIndex;
      else ++currIndex;
    }
  }

  function initPlayer() {
    audio = new Audio();

    selectTrack(0);

    audio.loop = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.on("click", function () {
      selectTrack(1);
    });
  }

  initPlayer();
});

/* show-hide music player */
const musicplayer = document.querySelector("#app-cover");

window.addEventListener("scroll", scrollFunctionmusic);

window.addEventListener("width", matchMedia); // Attach listener function on state changes


var x = window.matchMedia("(min-width: 768px)")
scrollFunctionmusic(x) // Call listener function at run time

function scrollFunctionmusic() {
  if (window.pageYOffset > 300) { // Show musicplayer
    if (x.matches){
        if (!musicplayer.classList.contains("btnEntrance")) {
          musicplayer.classList.remove("btnExit");
          musicplayer.classList.add("btnEntrance");
          musicplayer.style.display = "block";
        }
    }
}

  else { // Hide musicplayer
    if(musicplayer.classList.contains("btnEntrance")) {
      musicplayer.classList.remove("btnEntrance");
      musicplayer.classList.add("btnExit");
    setTimeout(function() {
        musicplayer.style.display = "none";
    }, 250);
    }
}
}




/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */
/* ===== IGNACIO PRADOS ===== */