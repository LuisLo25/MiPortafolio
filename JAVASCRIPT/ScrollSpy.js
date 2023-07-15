const encabezados = document.querySelectorAll('.AcercadeMiCard-Card-secciones-Seccion-Encabezado');
const enlaces = document.querySelectorAll('#enlaces a')
const oberver = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const id = '#' + entrada.target.id;
            enlaces.forEach(enlace => {
                enlace.classList.remove('activo');
                const href = enlace.attributes.href.nodeValue;
                if (href === id) {
                    enlace.classList.add('activo');
                }
            });
        }
    });
}, {
    threshold: 1,
    rootMargin: '0px 0px -80% 0px'
});

encabezados.forEach(encabezado => {
    oberver.observe(encabezado);
});