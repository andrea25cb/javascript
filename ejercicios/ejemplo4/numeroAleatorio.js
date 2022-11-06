//se genera un numero aleatorio, usuario tiene que adivinar el numero;
//si es menor o si es mayor, que salga un mensaje
var respuesta = prompt('Introduzca un numero del 1 al 100');
var numAleatorio = Math.floor((Math.random() * (101 - 1)) + 1);
//alert('Numero aleatorio es: ' + numAleatorio);

if (respuesta == numAleatorio) {
    alert('¡Felicidades! ¡Lo adivinaste!')
} else {
    if (respuesta < numAleatorio) {
        alert('¡El número es muy bajo!')
    } else if (respuesta > numAleatorio) {
        alert('¡El número es muy grande!')
    }
}