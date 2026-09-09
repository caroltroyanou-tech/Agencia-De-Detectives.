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