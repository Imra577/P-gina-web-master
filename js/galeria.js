const imagenesCr7 = [
    "Img/cr7.jpg",
    "Img/cr71.jpg",
    "Img/cr72.webp",
    "Img/cr73.jpg",
    "Img/cr74.jpg"
];

const imagenCarrusel = document.querySelector("#imagen-cr7");
const botonAnterior = document.querySelector(".carrusel-control.anterior");
const botonSiguiente = document.querySelector(".carrusel-control.siguiente");
const carrusel = document.querySelector(".carrusel");
const imagenInteractiva = document.querySelector("#imagen-cr7");

let indiceImagen = 0;
let inicioDeslizamiento = null;

function mostrarImagen(indice) {
    indiceImagen = (indice + imagenesCr7.length) % imagenesCr7.length;
    imagenCarrusel.src = imagenesCr7[indiceImagen];
    imagenCarrusel.alt = "Cristiano Ronaldo";
}

botonAnterior.addEventListener("click", () => mostrarImagen(indiceImagen - 1));
botonSiguiente.addEventListener("click", () => mostrarImagen(indiceImagen + 1));

imagenInteractiva.addEventListener("dragstart", (evento) => evento.preventDefault());

imagenInteractiva.addEventListener("pointerdown", (evento) => {
    if (!evento.isPrimary || evento.button !== 0) return;
    inicioDeslizamiento = { x: evento.clientX, y: evento.clientY, id: evento.pointerId };
    imagenInteractiva.setPointerCapture(evento.pointerId);
    carrusel.classList.add("arrastrando");
});

imagenInteractiva.addEventListener("pointerup", (evento) => {
    if (!inicioDeslizamiento) return;

    const diferenciaX = evento.clientX - inicioDeslizamiento.x;
    const diferenciaY = evento.clientY - inicioDeslizamiento.y;
    inicioDeslizamiento = null;
    carrusel.classList.remove("arrastrando");

    if (Math.abs(diferenciaX) < 40 || Math.abs(diferenciaX) < Math.abs(diferenciaY)) return;
    mostrarImagen(indiceImagen + (diferenciaX < 0 ? 1 : -1));
});

imagenInteractiva.addEventListener("pointercancel", () => {
    inicioDeslizamiento = null;
    carrusel.classList.remove("arrastrando");
});

imagenInteractiva.addEventListener("lostpointercapture", () => {
    inicioDeslizamiento = null;
    carrusel.classList.remove("arrastrando");
});
