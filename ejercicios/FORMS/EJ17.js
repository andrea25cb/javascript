var arrayContador = [0, 0, 0];
var arrayPorcentaje = [];
var votosTotales = 0;

function votar() {

    var elementos = document.getElementsByName("pregunta");
    var arrayBarras = document.getElementsByClassName("barras");

    for (var a = 0; a < elementos.length; a++) {
        if (elementos[a].checked == true) {
            arrayContador[a] += 1;
            votosTotales++;
        }
    }

    for (var z = 0; z < elementos.length; z++) {
        var resultado = (arrayContador[z] * 100 / votosTotales).toFixed(2);
        arrayPorcentaje[z] = resultado;
        arrayBarras[z].style.width = resultado; //segun el %, el width cambia
    }

    document.getElementById("sip1").textContent = arrayPorcentaje[0]; //% si
    document.getElementById("nop1").textContent = arrayPorcentaje[1]; //% no    
    document.getElementById("snp1").textContent = arrayPorcentaje[2]; //% ns

    document.getElementById("sip").textContent = arrayContador[0];
    document.getElementById("nop").textContent = arrayContador[1];
    document.getElementById("snp").textContent = arrayContador[2];

    document.getElementById("total").textContent = "VOTOS TOTALES: " + votosTotales;


}