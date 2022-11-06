$(function() {
    $("#añadir").on("click", function() {
        $('#tabla').append('<tr><td>' + $('#cod').val() + '</td>' + '<td>' + $('#des').val() + '</td>' + '<td>' + $('#can').val() + '</td>' + '<td>' + $('#pre').val() + '</td><td class="subtotal">' + $('#can').val() * $('#pre').val() + '</td><td><button value="borrar" class="borrar">BORRAR</button></td><td><button value="modificar" class="modificar">MODIFICAR</button></td></tr>');
        calcular();
    });

    $('#tabla').on("click", ".borrar", function() {
        $(this).closest('tr').remove();
        calcular();
    });

    function calcular() {
        $subtotal = 0;
        $('.subtotal').each(function(i, el) {
            $subtotal = $subtotal + parseFloat($(el).html());
        });
        $total = $('#total').html($subtotal);

        return $total;
    }

    $('#tabla').on("click", ".modificar", function() {
        $fila = $(this).closest('tr');
        $('#cod').val() = $fila[0].html();
        $('#des').val() = $fila[1].html();
        $('#can').val() = $fila[2].html();
        $('#pre').val() = $fila[3].html();

        let botonAceptar = $('#aceptar');
        botonAceptar.style.display = 'inline'; //aparece el boton
    });


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

});