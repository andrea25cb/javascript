//APARECE UN NUEVO ELEMENTO EN LA LISTA, ESCRITO POR EL USUARIO

function otraProvincia() {
    var respuesta = prompt("Escribe una provincia");
    var elemento = document.createElement("li"); //ELEMENTO
  
    var texto = document.createTextNode(respuesta); //esto debe escribirlo el usuario
    elemento.appendChild(texto);

    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
}

//ELIMINAR LO SELECCIONADO POR EL USUARIO

function eliminar() {
    var respuesta = prompt("¿Cuál quieres borrar?");
    var elemento = document.getElementsByTagName("li");
    var opcion = elemento[respuesta-1];
    opcion.parentNode.removeChild(opcion);

}
