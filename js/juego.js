const estado = {
    partidas: 0,
    ganadas: 0,
    perdidas: 0,
    empates: 0
};

const opciones = ["piedra", "papel", "tijera"];

function eleccionAleatoria() {
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

function actualizarMarcador() {
    document.getElementById("partidas").textContent = estado.partidas;
    document.getElementById("ganadas").textContent = estado.ganadas;
    document.getElementById("perdidas").textContent = estado.perdidas;
    document.getElementById("empates").textContent = estado.empates;
}

function compararJugada(jugador, maquina) {
    if (jugador === maquina) {
        estado.empates++;
        return "Empate";
    }

    if (
        (jugador === "piedra" && maquina === "tijera") ||
        (jugador === "tijera" && maquina === "papel") ||
        (jugador === "papel" && maquina === "piedra")
    ) {
        estado.ganadas++;
        return "¡Has ganado!";
    }

    estado.perdidas++;
    return "Has perdido";
}

function jugar(eleccionJugador) {
    const eleccionMaquina = eleccionAleatoria();
    const resultado = compararJugada(eleccionJugador, eleccionMaquina);
    estado.partidas++;

    document.getElementById("jugador").textContent = `Tu elección: ${eleccionJugador}`;
    document.getElementById("maquina").textContent = `Máquina: ${eleccionMaquina}`;
    document.getElementById("mensaje").textContent = resultado;

    actualizarMarcador();
}

const botones = document.querySelectorAll(".eleccion");
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        jugar(boton.dataset.eleccion);
    });
});

document.getElementById("reiniciar").addEventListener("click", () => {
    estado.partidas = 0;
    estado.ganadas = 0;
    estado.perdidas = 0;
    estado.empates = 0;
    document.getElementById("jugador").textContent = "Tu elección: -";
    document.getElementById("maquina").textContent = "Máquina: -";
    document.getElementById("mensaje").textContent = "Elige una opción para empezar.";
    actualizarMarcador();
});

actualizarMarcador();
