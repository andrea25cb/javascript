function añadir() {
    var codigo = document.getElementById("cod").value;
    var descripcion = document.getElementById("desc").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;

    if (codigo == "" || descripcion == "" || cantidad == "" || precio == "") {
        alert("Algunos campos están vacíos");
    } else {
        //__________calculamos el subtotal

        var cantidad = parseInt(cantidad);
        var precioInt = parseFloat(precio);
        var subtotal = cantidad * precioInt;

        //__________ insertamos

        var arr = [codigo, descripcion, cantidad, precio, subtotal, "<input type='button' value='Borrar' onclick='borrar(this)'> <input type='button' value='Modificar' onclick='modificar(this)'>"];

        var table = document.getElementById("tabla");
        var row = table.insertRow(1);

        for (var i = 0; i < arr.length; i++) {

            if (i == 4) {
                row.innerHTML += "<td class='subtotal'>" + arr[i] + "</td>";
            } else {
                row.innerHTML += "<td>" + arr[i] + "</td>";
            }
        }

        //_____ cambiamos el span total

        var total = document.getElementById("total");
        total.innerHTML = calcular();
    }
}

function borrar(t) {
    document.getElementById("tabla").deleteRow(t.parentNode.parentNode.rowIndex);
    //______ recalculamos el total
    var total = document.getElementById("total");
    total.innerHTML = calcular();
}

function calcular() {
    var arraySubtotal = document.getElementsByClassName("subtotal");
    var total = 0;
    for (i = 0; i < arraySubtotal.length; i++) {
        total += parseFloat(arraySubtotal[i].innerHTML);
    }
    return total;
}

let indice = 0;

function modificar(node) {
    indice = node.parentNode.parentNode.rowIndex; //indice de cada fila 
    let elementosTd = node.parentNode.parentNode.getElementsByTagName('td');
    //se escribe en los inputs porque saco el texto del td y lo meto en los inputs al igualar
    //entonces se cambia el valor por el que hay en los elementos de la fila(4)
    document.getElementById('cod').value = elementosTd[0].textContent;
    document.getElementById('desc').value = elementosTd[1].textContent;
    document.getElementById('cantidad').value = elementosTd[2].textContent;
    document.getElementById('precio').value = elementosTd[3].textContent;

    let botonAceptar = document.getElementById('aceptar');
    botonAceptar.style.display = 'inline'; //aparece el boton
}

function confirmarModificacion() {
    let tabla = document.getElementById('tabla'); //tabla
    let elementosTr = tabla.getElementsByTagName('tr'); // tr es cada fila de la tabla, tds componen la fila
    let fila = elementosTr[indice];
    let elementosTd = fila.getElementsByTagName('td');

    let cantidad = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').value;

    elementosTd[0].textContent = document.getElementById('cod').value;
    elementosTd[1].textContent = document.getElementById('desc').value;
    elementosTd[2].textContent = cantidad;
    elementosTd[3].textContent = precio;
    elementosTd[4].textContent = cantidad * precio;

    calcular();

    let botonAceptar = document.getElementById('aceptar');
    botonAceptar.style.display = "none"; //desaparece el boton
}

function buscarProducto() {
    var codigo = document.getElementById("cod").value;
    var codigos = document.getElementsByClassName("c"); //td de cada codigo
    var encontrado = false;
    for (var i = 0; i < codigos.length; i++) {
        if (codigo == codigos[i].textContent) {
            var fila = codigos[i].parentNode; //la fila es padre de los td, tr
            var elementosTd = fila.children; //los hijos de la fila, los td
            document.getElementById('cod').value = elementosTd[0].textContent;
            document.getElementById('desc').value = elementosTd[1].textContent;
            document.getElementById('precio').value = elementosTd[2].textContent;
            encontrado = true;
            break;
        }

    }
    if (!encontrado)
        alert("Articulo no encontrado")

}