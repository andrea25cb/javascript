//push: Agrega nuevos elementos al final de un array y devuelve la nueva longitud del array

const palabra = prompt('Dime una palabra:');

var array_palabra = palabra.split("").sort(); //esto es un array //con sort las letras se ordenan
var letrasRepetidas = [] //almacena letras repetidas
var numLetrasRepetidas = [] //almacena veces que se repiten letras repes
var count = 1; //cuantas veces se repite cada letra

for (let i = 0; i < array_palabra.length; i++) {
    if (array_palabra[i + 1] == array_palabra[i]) { //si la siguiente es igual a la anterior
        count++; //cuenta el número de letras
    } else { //y si no es igual, pasa a comprobar la siguinete
        letrasRepetidas.push(array_palabra[i]) //array de letras 
        numLetrasRepetidas.push(count) //array de numeros
        count = 1
    }
}

//  console.log(numLetrasRepetidas);
// console.log(array_palabra);
//console.log(letrasRepetidas);

var valorMax = Math.max(...numLetrasRepetidas); //la letra más repetida esa el numero mas alto
// console.log(valorMax);
var letraMasRepe = "";

for (let i = 0; i < numLetrasRepetidas.length; i++) {
    if (numLetrasRepetidas[i] = valorMax) {
        letraMasRepe = letrasRepetidas[i];
    }
}
document.write("La letra más repetida es la '" + letraMasRepe + "'. Se repite " + valorMax + " veces.");