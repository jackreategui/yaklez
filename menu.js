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