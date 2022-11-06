var arrayElementos = [0, 0, 0]; //ESTE ARRAY SIRVE DE CONTADOR; 0 0 0
var arrayContenido = [];

function contar() {

    var elementos = document.getElementsByName("boton"); //array de radiobuttons

    for (var j = 0; j < elementos.length; j++) { //recorre los botones para comprobar si estan checked, si lo esta suma +1
        if (elementos[j].checked) {
            arrayElementos[j] += 1;
        }
    }
    document.getElementById("si").textContent = arrayElementos[0]; //LEE EL CONTENIDO TEXTUAL; SI NO LO PONGO NO IMPRIME
    document.getElementById("no").textContent = arrayElementos[1];
    document.getElementById("ns").textContent = arrayElementos[2];

}