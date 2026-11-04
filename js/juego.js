alert("Bienvenido al juego de Piedra, Papel o Tijera");
let partidas = 0;
let ganadas = 0;
let perdidas = 0;
let empates = 0;

function escribir(valor) {
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value === "0") {
        pantalla.value = valor;
    }else {
        pantalla.value += valor;
    }
}

function piedraPapelTijera(jugador, maquina) {
    const opciones = ["piedra", "papel", "tijera"];
    const randomIndex = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje;


    if (jugador === maquina) {
        console.log("Empate");
        empates++;
    }

    else if (jugador === "piedra" && maquina === "tijera" 
        || jugador === "tijera" && maquina === "papel" 
        || jugador === "papel" && maquina === "piedra") {
        console.log("Gana el jugador");
        ganadas++;
    }

    else {
        console.log("Gana la máquina");
        perdidas++;
    }
}

document.getElementById("mensaje").textContent = mensaje;

let jugador = "piedra";
let maquina = "tijera";

piedraPapelTijera(jugador, maquina);

document.getElementById("jugador").textContent =
    `Tu elección: ${jugador}`;
document.getElementById("maquina").textContent =
    `Máquina: ${maquina}`;
document.getElementById("mensaje").textContent = mensaje;

document.getElementById("partidas").textContent =
    `Partidas jugadas: ${partidas}`;
document.getElementById("ganadas").textContent = `Partidas ganadas: ${ganadas}`;
document.getElementById("perdidas").textContent = `Partidas perdidas: ${perdidas}`;
document.getElementById("empates").textContent = `Empates: ${empates}`;
