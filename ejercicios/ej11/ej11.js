function mostrarInfo() {

    var info = document.getElementById("info");

    //1. Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
    info.innerHTML = info.innerHTML + "Numero de enlaces = " + enlaces.length;

    //2. Direccion del penultimo enlace
    info.innerHTML = info.innerHTML + "<br> El penultimo enlace apunta a: " + enlaces[enlaces.length - 2].href;

    //3. Numero de enlaces que apuntan a http://prueba
    var contador = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "http://prueba") {
            contador++;
        }
    }
    info.innerHTML = info.innerHTML + "<br/> enlaces que apuntan a http://prueba: " + contador;

    //4. Numero de enlaces del tercer párrafo
    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");
    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = " + enlaces.length;

}