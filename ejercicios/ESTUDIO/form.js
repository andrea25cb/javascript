var valor1 = document.getElementById("texto").value;
var valor2 = document.getElementById("parrafo").value;

var preguntas = document.getElementsByName("pregunta");

for (var i = 0; i < preguntas.length; i++) {
    alert(" Pregunta: " + preguntas[i].value + "\n Seleccionada: " + preguntas[i].checked);
}