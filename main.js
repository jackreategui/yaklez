AOS.init();

const iconHamburger = document.querySelector('.icono_hamburger');
const navOverlay = document.querySelector('.nav_overlay');
const navContainer = document.querySelector('.nav_container');

iconHamburger.addEventListener('click', () => { 
    iconHamburger.classList.toggle('icono_hamburger--open');
    navOverlay.classList.toggle('nav_overlay--show');
    navOverlay.classList.toggle('animate__slideInRight');
})

navOverlay.addEventListener('click', () => {
    iconHamburger.classList.remove('icono_hamburger--open');
    navOverlay.classList.remove('nav_overlay--show');
    navOverlay.classList.remove('animate__slideInRight');
})