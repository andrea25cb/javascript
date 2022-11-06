//pedir una cadena de letras y numeros 
//devolver el numero de letras y numeros

var cadena = prompt('Dime una cadena de letras y números:');
var array_cadena = cadena.split("");
var numeros = 0;
var letras = "";
var suma = 0;

for (i = 0; i < array_cadena.length; i++)
    if (isNaN(cadena.charAt(i))) {
        letras++
    } else {
        numeros++
        suma += parseInt(cadena.charAt(i));
    }

document.write("En la cadena " + cadena + " hay: " + numeros + " números y " + letras + " letras ");
document.write("<br>La suma de los números es igual a: " + suma);
