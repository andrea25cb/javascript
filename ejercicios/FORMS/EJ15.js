function contarLetra() {
    var resultado = document.getElementById("resultado");
    var letra = document.getElementById("letra").value;
    var palabra = document.getElementById("palabra").value;

    var array_palabra = palabra.split("");

    var count = 0;

    for (i = 0; i < array_palabra.length; i++)
        if (palabra.charAt(i) == letra)
            count++;

    resultado.value = count;
}