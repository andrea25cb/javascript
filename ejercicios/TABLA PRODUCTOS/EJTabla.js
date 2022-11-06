function anadir() {
    let codigo = document.getElementById("cod").value;
    let descripcion = document.getElementById("desc").value;
    let cantidad = document.getElementById("cant").value;
    let precio = document.getElementById("precio").value;
    let subtotal = cantidad * precio;
    let botonBorrar = document.createElement("button");
    botonBorrar.innerText = "borrar";
    botonBorrar.setAttribute("onclick", "borrar(this)");

    let botonModificar = document.createElement("button");
    botonModificar.innerText = "modificar";
    botonModificar.setAttribute("onclick", "modificar(this)");

    if (codigo == "" || descripcion == "" || cantidad == "" || precio == "") {
        alert("Algunos campos están vacíos");
    } else {
        let tbody = document.getElementById("tbody");
        tbody.style.display = "";
        let fila = document.createElement("tr");
        let celdaCodigo = document.createElement("td");
        let celdaDescripcion = document.createElement("td");
        let celdaCantidad = document.createElement("td");
        let celdaPrecio = document.createElement("td");
        let celdaSubtotal = document.createElement("td");
        let celdaBorrar = document.createElement("td");
        let celdaModificar = document.createElement("td");

        celdaCodigo.innerHTML = codigo;
        celdaDescripcion.innerHTML = descripcion;
        celdaCantidad.innerHTML = cantidad;
        celdaPrecio.innerHTML = precio;
        celdaSubtotal.innerHTML = subtotal;
        celdaSubtotal.classList.add("subtotal");
        celdaBorrar.append(botonBorrar);
        celdaModificar.append(botonModificar);

        tbody.appendChild(fila);
        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaDescripcion);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaSubtotal);
        fila.appendChild(celdaBorrar);
        fila.appendChild(celdaModificar);

        actualizaTotal();
    }
}
//localizar boton cada fila tiene su boton de borrar. el boton tiene q localizar al padre de la celda, que es la fila entera, despues eliminarla. remove

function actualizaTotal() {
    let total = 0;
    let celdaTotal = document.getElementById("total");
    let myTotal = document.getElementsByClassName("subtotal");
    for (let i = 0; i < myTotal.length; i++) {
        total += parseInt(myTotal[i].innerHTML);
    }
    celdaTotal.innerHTML = total;
}

function borrar(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabla").deleteRow(i);
    actualizaTotal();
}

var editando = false;

function modificar(nodo) {

    if (editando == false) {

        var nodoTd = nodo.parentNode; //Nodo TD

        var nodoTr = nodoTd.parentNode; //Nodo TR

        var nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV

        var nodosEnTr = nodoTr.getElementsByTagName('td');

        var codigo = nodosEnTr[0].textContent;
        var descripcion = nodosEnTr[1].textContent;

        var cantidad = nodosEnTr[2].textContent;
        var precio = nodosEnTr[3].textContent;

        var nuevoCodigoHtml =
            '<td><input type="text" name="cod" id="cod" value="' + codigo + '" size="5"</td>' +

            '<td><input type="text" name="desc" id="desc" value="' + descripcion + '" size="5"</td>' +

            '<td><input type="text" name="cant" id="cant" value="' + cantidad + '" size="5"</td>' +

            '<td><input type="text" name="precio" id="precio" value="' + precio + '" size="5"</td> <td>En edición</td>';

        nodoTr.innerHTML = nuevoCodigoHtml;

        nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +

            '<form name = "formulario" method="get" onsubmit="capturarEnvio()" onreset="anular()">' +

            '<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

        editando = "true";
    } else {
        alert('Solo se puede editar una línea. Recargue la página para poder editar otra');

    }

}


function capturarEnvio() {

    var nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV

    nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +

        '<form name = "formulario"  method="get" onsubmit="capturarEnvio()" onreset="anular()">' +

        '<input type="hidden" name="cod" value="' + document.querySelector('#cod').value + '">' +

        '<input type="hidden" name="desc" value="' + document.querySelector('#desc').value + '">' +

        '<input type="hidden" name="cant" value="' + document.querySelector('#cant').value + '">' +

        '<input type="hidden" name="precio" value="' + document.querySelector('#precio').value + '">' +

        '<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

    document.formulario.submit();
}



function anular() {

    window.location.reload();

}