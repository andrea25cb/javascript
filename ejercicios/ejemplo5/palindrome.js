var cadena = prompt('Introduzca un texto o palabra por favor');
cadena = cadena.toLowerCase().replace(/\s/g, ""); //\s is a predefined character class, que indica un espacio en blanco.
var reves = cadena.split("").reverse().join("");

function palindromo(cadena) {
    if (cadena == reves) {
        alert('Es un palindromo');
    } else {
        alert('NO es un palindromo');
    }
}
palindromo(cadena);