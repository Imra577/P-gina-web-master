alert("el JS se ejecuta correctamente")

function cambiamodo(){
    alert("Se cambia el colo de la web");

    const enlace = document.getElementById("tema-oscuro");

    enlace.disable = !enlace.disable;
}