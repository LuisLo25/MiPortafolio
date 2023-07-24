function changeClassOnResponsive() {
    const sectionElement = document.getElementById("AcercadeMi")
    const viewportWidth = window.innerWidth

    // Utilizar .toggle() para alternar entre las clases
    if (viewportWidth <= 750) {
        sectionElement.classList.toggle("Seccion1", false)
        sectionElement.classList.toggle("Sec1-movil", true)
        sectionElement.classList.toggle("Seccion2", false)
        sectionElement.classList.toggle("Sec2-movil", true)
        sectionElement.classList.toggle("Seccion3", false)
        sectionElement.classList.toggle("Sec3-movil", true)
    } else {
        sectionElement.classList.toggle("Seccion1", true)
        sectionElement.classList.toggle("Sec1-movil", false)
        sectionElement.classList.toggle("Seccion2", true)
        sectionElement.classList.toggle("Sec2-movil", false)
        sectionElement.classList.toggle("Seccion3", true)
        sectionElement.classList.toggle("Sec3-movil", false)
    }
}

// Llamar a la función cuando se carga la página y cuando cambia el tamaño de la ventana
window.addEventListener("load", changeClassOnResponsive)
window.addEventListener("resize", changeClassOnResponsive)