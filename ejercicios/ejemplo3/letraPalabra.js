var letra = prompt('Dime una letra:');
var palabra = prompt('Dime una palabra:');
var array_palabra = palabra.split("");
var count = 0;

for (i = 0; i < array_palabra.length; i++)
    if (palabra.charAt(i) == letra)
        count++;

document.write("La letra " + letra + " se repite " + count + " veces en la palabra: " + palabra);

//pedir una cadena