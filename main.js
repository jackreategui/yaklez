AOS.init();

const iconHamburger = document.querySelector('.icono_hamburger');
const navOverlay = document.querySelector('.nav_overlay');
const navContainer = document.querySelector('.nav_container');

const headerContainer = document.getElementById('header');
const footerContainer = document.getElementById('footer');

var headerHTML = `<nav>
// <div class="nav_container">
//     <a href="./index.html">
//         <img src="./assets/icon/logo_white.svg" alt="logo de la agencia digital yaklez" class="logo_nav">
//     </a>
    
//     <div class="icono_hamburger" id="iconHamburger"></div>
    
//     <div class="nav_overlay animate__animated">
//         <ul class="nav_ul">
//             <li class="nav_li">
//                 <a href="./servicios.html">Servicios</a>
//             </li>
//             <li class="nav_li">
//                 <a href="./proyectos.html">Trabajos</a>
//             </li>
//             <li class="nav_li">
//                 <a target="_blank" href="https://forms.gle/XbYQjxGC3eV562kz5">Contacto</a>
//             </li>
//         </ul>
//     </div>
// </div>
// </nav>`;
var footerHTML = `<div class="footer_container">
<a href="./index.html">
    <img src="./assets/icon/logo_blacksvg.svg" alt="logo de la agencia digital yaklez" class="logo_footer">
</a>

<div class="footer_info">
    <div class="info sobreNosotros">
        <h4>Sobre Nosotros</h4>
        <a href="./fag.html">Preguntas frecuentes</a>
        <a href="./herramientas.html">Herramientas de trabajo</a>
    </div>
    <div class="info servicios_footer">
        <h4>Servicios</h4>
        <a href="./servicios.html">Diseño digital</a>
        <a href="./servicios.html">Desarrollo web</a>
        <a href="./servicios.html">Marketing digital</a>
        <a href="./servicios.html">Asesoramiento</a>
    </div>
    <div class="info recursos">
        <h4>Recursos</h4>
        <a href="#">Gratuitos</a>
        <a href="#">Pagados</a>
    </div>
</div>
</div>`;

headerContainer.innerHTML = headerHTML;
footerContainer.innerHTML = footerHTML;

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