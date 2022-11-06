function addText() {
    var elemento = document.createElement("p");
    var texto = document.createTextNode("¡Texto nuevo!");
    elemento.appendChild(texto);

    var parrafo = document.getElementById("parrafo");
    parrafo.appendChild(elemento);
}