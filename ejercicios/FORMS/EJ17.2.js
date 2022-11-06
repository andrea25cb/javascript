var count1 = 0,
    count2 = 0,
    count3 = 0,
    total = 0;

function contar() {
    if (document.getElementById("si").checked) {
        count1++;
        total++;
    } else if (document.getElementById("no").checked) {
        count2++;
        total++;
    } else if (document.getElementById("ns").checked) {
        count3++;
        total++;
    }
    var porcentaje1 = (count1 / total) * 100;
    var porcentaje2 = (count2 / total) * 100;
    var porcentaje3 = (count3 / total) * 100;

    document.getElementById("barrasi").style.width = porcentaje1 + "px";
    document.getElementById("barrano").style.width = porcentaje2 + "px";
    document.getElementById("barrans").style.width = porcentaje3 + "px";
    document.getElementById("span1").textContent = " - " + count1 + "/  " + total + " - " + porcentaje1.toFixed(2) + " % ";
    document.getElementById("span2").textContent = " - " + count2 + "/  " + total + " - " + porcentaje2.toFixed(2) + " % ";
    document.getElementById("span3").textContent = " - " + count3 + "/  " + total + " - " + porcentaje3.toFixed(2) + " % ";
}