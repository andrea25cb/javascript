function seleccionar() {

    var opcion = document.getElementById('opciones'); //getelementarybyid

    var provinciaEscogida = opcion.options[opcion.selectedIndex].text; //cogemos el text de la opcion seleccionada en el select

    document.getElementById("provincia").textContent = provinciaEscogida; //asignamos valor en span

    //TextArea:

    var areaTexto = document.getElementById("areatexto").value;
    document.getElementById("areatexto").value = areaTexto + "" + provinciaEscogida;

}

function añadir() {
    var opcion = document.createElement("option"); //creamos el nodo option
    var repetidos = document.getElementsByName("caja"); //checkbox
    var respuesta = document.getElementById('textointroducido').value; //texto introducido por el usuario
    var contenido = document.createTextNode(respuesta); //creamos el noto tipo text

    //PERMITIR REPETIDOS:
    var select = document.getElementById('opciones'); //id del select

    if (repetidos[0].checked == false) {
        for (var i = 0; i < select.length - 1; i++) {
            if (select.options[i].text == respuesta) {
                alert("La palabra esta repetida");
            }
        }

        if (repetidos[0].checked) { //si no esta repetida
            opcion.appendChild(contenido); //Añadir el nodo Text como hijo del nodo Element
            document.getElementById("opciones").appendChild(opcion); //Añadir el nodo Element como hijo de la pagina
        }

    } else {
        opcion.appendChild(contenido); //Añadir el nodo Text como hijo del nodo Element(opcion)
        document.getElementById("opciones").appendChild(opcion); //Añadir el nodo Element como hijo de la pagina
    }
}