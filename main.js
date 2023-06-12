AOS.init();

const headerContainer = document.getElementById('header');
const footerContainer = document.getElementById('footer');
const contactoContainer = document.getElementById('contacto');

// Carga el encabezado
fetch('./contenedores_html/header.html')
    .then(response => response.text())
    .then(data => {
        headerContainer.innerHTML = data;
    });

// Carga el pie de página
fetch('./contenedores_html/footer.html')
    .then(response => response.text())
    .then(data => {
        footerContainer.innerHTML = data;
    });

// Carga contacto
fetch('./contenedores_html/contacto.html')
    .then(response => response.text())
    .then(data => {
        contactoContainer.innerHTML = data;
    });

    
window.addEventListener('load', function(){
    const iconHamburger = document.querySelector('.icono_hamburger');
    const navOverlay = document.querySelector('.nav_overlay');

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
});

