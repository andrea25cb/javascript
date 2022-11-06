//APARECE UN NUEVO ELEMENTO EN LA LISTA, ESCRITO POR EL USUARIO

function otraProvincia() {
    var respuesta = prompt("Escribe una provincia");
    var elemento = document.createElement("li");
   // var confirma = confirm("¿Estas seguro?");
    var texto = document.createTextNode(respuesta); //esto debe escribirlo el usuario
    elemento.appendChild(texto);

    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
}

//ELIMINAR LO ULTIMO ESCRITO POR EL USUARIO

function eliminar() {
    var lista = document.getElementsByTagName("li");
    lista[lista.length-1].parentNode.removeChild(lista[lista.length-1]);

    //lo ultimo de la lista:
   // lista[lista.length - 1].parentNode.removeChild;

}