function cambiarModo() {
    var elemento = document.body;
    elemento.classList.toggle("dark-mode");
}

function validarFormulario() {
    let x = document.forms["formularioCaso"]["nombre"].value;
    if (x.trim() === "") {
        alert("El campo nombre debe ser llenado");
        return false;
    }
}

function mostrarOcultar() {
    var x = document.getElementById("mensajeExito");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}