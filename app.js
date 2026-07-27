//hamburguesa menu desplegable
function myFunction(x) {
      x.classList.toggle("change");
      const contenedor = document.getElementById("ul")
      contenedor.classList.toggle("div-ul")
}

// movimiento a sections desde el nav

const nav = document.querySelector(".nav-ul")
const secciones = document.querySelectorAll("main > section")

nav.addEventListener("click", (e) => {
    // Solo actuar si se hizo clic en un enlace con data-target
    const enlace = e.target.closest("[data-target]");
    if (!enlace) return;

    e.preventDefault(); // evitar el salto del href="#"

    const targetId = enlace.dataset.target;

    // Ocultar todas las secciones
    secciones.forEach((seccion) => {
      seccion.classList.add("oculto");
    });

    // Mostrar solo la seleccionada
    const seccionActiva = document.getElementById(targetId);
    if (seccionActiva) {
      seccionActiva.classList.remove("oculto");
    }

    // me lleva al inicio de la pagina
    seccionActiva.scrollIntoView({ behavior: "smooth", block: "start" });
  });