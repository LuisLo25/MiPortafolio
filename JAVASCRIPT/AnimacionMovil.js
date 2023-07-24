function changeClassOnResponsive() {
    const sectionElement = document.getElementById("AcercadeMi")
    const viewportWidth = window.innerWidth

    // Utilizar .toggle() para alternar entre las clases
    if (viewportWidth <= 750) {
       
        ScrollReveal().reveal(".Seccion2",{ desktop:false})
        
      
    } 
}

// Llamar a la función cuando se carga la página y cuando cambia el tamaño de la ventana
window.addEventListener("load", changeClassOnResponsive)
//window.addEventListener("resize", changeClassOnResponsive)