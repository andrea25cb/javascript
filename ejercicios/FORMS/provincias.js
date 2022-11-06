function pueblos() {
    //select1:
    var provinciaSeleccionada = document.getElementById('provincias').value;
    //select2:
    var pueblos = document.getElementById('pueblos');
    var listaPueblos = {
        1: ["Punta Umbría", "Mazagón", "Gibraleón"],
        2: ["Langreo", "Villaviciosa", "Oviedo"],
        3: ["Tui", "Cambados", "Redondella"],
        4: ["Camas", "Écija", "Algeciras"],
    }

    // Se limpia
    pueblos.innerHTML = ""; //para que no se acumulen

    // Se seleccionan los pueblos: 
    provinciaSeleccionada = listaPueblos[provinciaSeleccionada];
    // Insertamos los pueblos
    provinciaSeleccionada.forEach(function(pueblo) {
        let opcion = document.createElement('option')
        opcion.value = pueblo
        opcion.text = pueblo
        pueblos.add(opcion)
    });

}