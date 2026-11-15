const CLAVE_TEMA = "tema-color";

function aplicarTema(modoOscuroActivo) {
    document.documentElement.classList.toggle("modo-oscuro", modoOscuroActivo);

    const botonCambiarModo = document.getElementById("cambiar-modo");
    if (botonCambiarModo) {
        botonCambiarModo.setAttribute("aria-pressed", String(modoOscuroActivo));
    }
}

aplicarTema(localStorage.getItem(CLAVE_TEMA) === "oscuro");

const botonCambiarModo = document.getElementById("cambiar-modo");
if (botonCambiarModo) {
    botonCambiarModo.addEventListener("click", function () {
        const modoOscuroActivo = !document.documentElement.classList.contains("modo-oscuro");
        localStorage.setItem(CLAVE_TEMA, modoOscuroActivo ? "oscuro" : "claro");
        aplicarTema(modoOscuroActivo);
    });
}

window.addEventListener("storage", function (evento) {
    if (evento.key === CLAVE_TEMA) {
        aplicarTema(evento.newValue === "oscuro");
    }
});