function mostrarResultado(resultado) {
    document.getElementById("resultado").value = resultado;
}

function sumar() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;

    mostrarResultado(numero1 + numero2)
}

function restar() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;

    mostrarResultado(numero1 - numero2)
}

function multiplicar() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;

    mostrarResultado(numero1 * numero2)
}

function dividir() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;

    mostrarResultado(numero1 / numero2)
}