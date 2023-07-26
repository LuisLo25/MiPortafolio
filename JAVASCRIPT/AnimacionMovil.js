function changeClassOnResponsive() {
    const primeraSeccion = document.getElementById("Primero")
    const primo = document.getElementById("primeraseccion")
    const viewportWidth = window.innerWidth

    // Utilizar .toggle() para alternar entre las clases
    if (viewportWidth <= 550) {

        let titulo = `<h3>Perfil Personal</h3>` + primeraSeccion;

        primo.innerHTML = titulo
    }

}

// Llamar a la función cuando se carga la página y cuando cambia el tamaño de la ventana
window.addEventListener("resize", changeClassOnResponsive)