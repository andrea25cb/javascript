function validar() {
    var nombre = document.getElementById("nombre").value;
    var indice = document.getElementById("opciones").selectedIndex; //ELEMENTO SELECCIONADO
    var email = document.getElementById("email").value;
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");

    if (nombre == null || nombre == '') {
        error1.textContent = "DEBE INTRODUCIR EL NOMBRE";
        return false;
    }
    if (indice == null || indice == 0) {
        error2.textContent = "DEBE SELECCIONAR UNA OPCIÓN";
        return false;
    }
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        error3.textContent = "CORREO INCORRECTO";
        return false;
    }

    //return true;
}