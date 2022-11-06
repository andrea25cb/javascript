var imagenes = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png"]
var acierto = [];
var palabras;
var vidas = 6;
var fallos = 1;
var guiones;
var audio = new Audio('music.mp3');

function principal() {
    ocultar();
    crearBotones();
    cargarBotones();
    generarGuiones();
    elegirCategoria();
    obtenerPalabra();
    document.getElementById('vidas').textContent = "VIDAS: 6";
    document.getElementById('imagen').src = "images/0.png";
    console.log(palabras);
}

//musica:
function play() {
    audio.play();
}

function pause(){
    audio.pause();
}

//al darle a reiniciar se vuelven a inicializar las variables
function reiniciar() {
    location.reload();
}
//paso a la siguiente pantalla, oculto los elementos de la primera
function ocultar() {
    document.getElementById("reiniciar").style.visibility = "hidden";
    document.getElementById('categoria').style.visibility = "hidden"
    document.getElementById('start').style.visibility = "hidden";
    document.getElementById('title').style.visibility = "hidden";
}

var numRandomDict = ((Math.random() * 4).toFixed(0));

//diccionario segun la categoria del select que se elija
function elegirCategoria() {
    var opcion = document.getElementById("categoria");

    var indiceSel = opcion.selectedIndex;

    var animales = ["ballena", "zorro", "panda", "pantera", "halcon"];
    var asignaturas = ["griego", "biologia", "ingles", "quimica", "economia"];
    var paises = ["Bulgaria", "Chequia", "Rumania", "Hungria", "Alemania"];
    var randomCat = ["mosquito", "piruleta", "telefono", "agenda", "ajedrez"];

    switch (indiceSel) {
        case 0:
            document.getElementById('mensaje').textContent = "HAS ELEGIDO: RANDOM";
            return randomCat;
        case 1:
            document.getElementById('mensaje').textContent = "HAS ELEGIDO:  ANIMALES";
            return animales;
        case 2:
            document.getElementById('mensaje').textContent = "HAS ELEGIDO:  ASIGNATURAS";
            return asignaturas;
        case 3:
            document.getElementById('mensaje').textContent = "HAS ELEGIDO:  PAISES";
            return paises;
    }
    console.log(palabras);
}

//obtenemos la palabra secreta random del diccionario escogido
function obtenerPalabra() {
    categoria = elegirCategoria();
    palabras = categoria[numRandomDict].toUpperCase();
    return palabras;
}

//generamos los guiones según letras tenga la palabra
function generarGuiones() {
    obtenerPalabra();

    if (document.getElementById("palabra") != null)
        for (i = 0; i < palabras.length; i++) {
            guiones = "<span class='guiones' id='letra" + i + "'> _</span>";
            document.getElementById("palabra").innerHTML += guiones;
        }
}
//generamos una lista de botones que contendrán las letras
function crearBotones() {
    if (document.getElementById("letras") != null) {
        letras = document.getElementById("letras");
        for (let i = 65; i < 79; i++) {
            letras.innerHTML += "<button id='letras' type='button' value='" + String.fromCharCode(i) + "'>" + String.fromCharCode(i) + "</button>"
        }
        letras.innerHTML += "<button id='letras' type='button' value='Ñ'>Ñ</button>"
        for (let i = 79; i < 91; i++) {
            letras.innerHTML += "<button id='letras' type='button' value='" + String.fromCharCode(i) + "'>" + String.fromCharCode(i) + "</button>"
        }
    }
}

function cargarBotones() {
    arrayBotones = document.getElementsByTagName("button");
    for (let i = 0; i < arrayBotones.length; i++) {
        arrayBotones[i].addEventListener("click", buscarLetra)
    }
}

//cada vez que usuario hace 'click'(evento) a un boton, si la palabra no incluye la letra, funcion usuarioFalla(),
//si la palabra incluye la letra, funcion cambiar la letra
function buscarLetra(event) {
    letra = event.target.value;
    var i = 0;
    if (palabras.includes(letra)) {
        cambiarLetra(i, letra);
    } else {
        usuarioFalla();
    }
    event.target.disabled = true;
    comprobarLetra();
}

//los guiones cambian por la letra si ésta es acertada
function cambiarLetra(i, letra) {
    for (let j = 0; j < palabras.length; j++) {
        i = palabras.indexOf(letra, i);
        if (i == -1) break;
        acierto[i] = letra;
        document.getElementById("letra" + i).innerHTML = " " + letra;
        i++;
    }
}

function usuarioFalla() {
    if (document.getElementById("imagen") != null) {
        document.getElementById("imagen").src = imagenes[fallos];
        fallos++;
        if (!palabras.includes(letra)) {
            vidas--;
            document.getElementById('vidas').textContent = "VIDAS: " + vidas;
        }

        if (vidas <= 0) {
            document.getElementById('mensaje').textContent = "HAS PERDIDO... LA PALABRA ERA: " + palabras;
            document.getElementById('reiniciar').value = "PLAY AGAIN?";
 
            document.getElementById('ganapierde').innerHTML="<img src='gameover.gif'>";
            document.getElementById('palabra').style.visibility = "hidden";
            document.getElementById('letras').style.visibility = "hidden";

            document.getElementById('reiniciar').style.visibility = "visible";
            document.getElementById('reiniciar').style.display = "initial";
        }

    }
}

function comprobarLetra() {
    if (acierto.join('') == palabras) {
        document.getElementById('mensaje').textContent = "¡FELICIDADES, HAS GANADO!";
        document.getElementById('reiniciar').value = "PLAY AGAIN?";
        document.getElementById('reiniciar').style.visibility = "visible";
        document.getElementById('reiniciar').style.display = "initial";
        document.getElementById('ganapierde').innerHTML="<img src='winner.gif'>";
        document.getElementById('palabra').style.visibility = "hidden";
        document.getElementById('letras').style.visibility = "hidden";

    }
}

// //musica:
// function play() {
//     var audio = new Audio('music.mp3');
//     audio.play();
// }

// (function() {
//     let vid = document.getElementById("video");

//     function playVid() {
//         vid.play();
//     }

//     function pauseVid() {
//         vid.pause();
//     }
// })();