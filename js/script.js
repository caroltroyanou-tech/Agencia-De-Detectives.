function cambiarModo() {
    var elemento = document.body;
    elemento.classList.toggle("dark-mode");
}

function validarFormulario() {
    let x = document.forms["formularioCaso"]["nombre"].value;
    if (x.trim() === "") {
        alert("El campo nombre debe ser llenado");
        return false;
    }else {
        // Llama a la función para hacer visible el mensaje
        mostrarOcultar();
        document.forms["formularioCaso"].reset();
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

function verExpediente(id) {
    var elemento = document.getElementById(id);
    if (elemento) {
        if (elemento.style.display === "none" || elemento.style.display === "") {
            elemento.style.display = "block";
        } else {
            elemento.style.display = "none";
        }
    }
}