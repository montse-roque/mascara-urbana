// ======================================
// MÁScara Urbana - app.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Máscara Urbana cargado correctamente");

    // ===========================
    // Animaciones al hacer scroll
    // ===========================

    const elementos = document.querySelectorAll(".fade");

    function mostrarElementos() {

        elementos.forEach(elemento => {

            const posicion = elemento.getBoundingClientRect().top;

            const alturaPantalla = window.innerHeight;

            if (posicion < alturaPantalla - 100) {

                elemento.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", mostrarElementos);

    mostrarElementos();

    // ===========================
    // Menú activo
    // ===========================

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {

        if (enlace.href === window.location.href) {

            enlace.classList.add(
                "text-yellow-400",
                "font-bold"
            );

        }

    });

    // ===========================
    // Validación formulario
    // ===========================

    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", (e) => {

            e.preventDefault();

            const nombre =
                formulario.querySelector(
                    'input[type="text"]'
                );

            const correo =
                formulario.querySelector(
                    'input[type="email"]'
                );

            if (
                nombre.value.trim() === "" ||
                correo.value.trim() === ""
            ) {

                alert(
                    "Por favor captura tu nombre y correo."
                );

                return;

            }

            alert(
                "¡Gracias! Tu mensaje ha sido enviado."
            );

            formulario.reset();

        });

    }

});

// ======================================
// Botón volver arriba
// ======================================

window.addEventListener("scroll", () => {

    const boton = document.getElementById("btn-top");

    if (!boton) return;

    if (window.scrollY > 500) {

        boton.style.display = "flex";

    } else {

        boton.style.display = "none";

    }

});

function volverArriba() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ======================================
// Lightbox simple para galería
// ======================================

function abrirImagen(src) {

    const visor = document.getElementById("lightbox");

    const imagen = document.getElementById("lightbox-img");

    if (!visor || !imagen) return;

    imagen.src = src;

    visor.style.display = "flex";

}

function cerrarImagen() {

    const visor = document.getElementById("lightbox");

    if (!visor) return;

    visor.style.display = "none";

}
