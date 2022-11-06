function sumar(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var suma = num1+num2;

  resultado.value=suma;
   }