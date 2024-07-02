document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a'); //selecciono los enlaces del menu navegacion

    links.forEach(link => { //itero sobre cada enlace agregandole un evento clic
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId); //busco el elemento en el dom con el id correspondiente al href

            if (targetElement) {
                targetElement.scrollIntoView({ //desplaza la ventana suavemente hasta el elemento.
                    behavior: 'smooth'
                });
            }
        });
    });

    // efecto de rotacion del logo

    const logo = document.getElementById('logo');

    window.addEventListener('scroll', function() { //escucha el evento de desplazamiento scroll
        const scrollPosition = window.scrollY; //obtiene la posicion vertical actual
        const rotationAngle = scrollPosition * 0.5; 

        logo.style.transform = `rotate(${rotationAngle}deg)`; //aplica la transformacion css al logo basada en el desplazamiento rotationangle
    });
});
