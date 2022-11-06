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
        total.innerHTML = calcularTotal();
    }
}

function calcularTotal() {
    var arraySubtotal = document.getElementsByClassName("subtotal");
    var total = 0;
    for (i = 0; i < arraySubtotal.length; i++) {
        total += parseFloat(arraySubtotal[i].innerHTML);
    }
    return total;
}

function borrar(fila) {
    document.getElementById("tabla").deleteRow(fila.parentNode.parentNode.rowIndex);
    var total = document.getElementById("total");
    total.innerHTML = calcularTotal();
}

var indice = 0;

function modificar(thi) {
    indice = thi.parentNode.parentNode.rowIndex;
    var elementosTd = thi.parentNode.parentNode.getElementsByTagName("td");

    document.getElementById("cod").value = elementosTd[0].textContent;
    document.getElementById("desc").value = elementosTd[1].textContent;
    document.getElementById("cantidad").value = elementosTd[2].textContent;
    document.getElementById("precio").value = elementosTd[3].textContent;

    var botonAceptar = document.getElementById("aceptar");
    botonAceptar.style.display = 'inline'; //aparece el boton
}

function confirmarModificacion() {

    var tabla = document.getElementById("tabla");
    var elementosTr = tabla.getElementsByTagName("tr");
    var fila = elementosTr[indice];
    var elementosTd = fila.getElementsByTagName("td");

    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;

    elementosTd[0].textContent = document.getElementById("cod").value;
    elementosTd[1].textContent = document.getElementById("desc").value;
    elementosTd[2].textContent = cantidad;
    elementosTd[3].textContent = precio;
    elementosTd[4].textContent = parseInt(precio) * parseInt(cantidad);

    var botonAceptar = document.getElementById("aceptar");
    botonAceptar.innerText = "ACEPTAR";
    botonAceptar.style.display = 'none'; //desaparece el boton

    var total = document.getElementById("total");
    total.innerHTML = calcularTotal();

}