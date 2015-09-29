var suma = function () {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var res = n1 + n2;

    document.getElementById("lbOpe").innerHTML = "+";
    document.getElementById("lbTot").innerHTML = res;
}

var resta = function () {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var res = n1 - n2;

    document.getElementById("lbOpe").innerHTML = "-";
    document.getElementById("lbTot").innerHTML = res;
}

var multiplicar = function () {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var res = n1 * n2;

    document.getElementById("lbOpe").innerHTML = "*";
    document.getElementById("lbTot").innerHTML = res;
}

var dividir = function () {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var res = n1 / n2;

    document.getElementById("lbOpe").innerHTML = "/";
    document.getElementById("lbTot").innerHTML = res.toFixed(2);
}

var operar = function (e) {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var operador = e.target.outerText;
    var res = eval(n1 + operador+ n2);
    document.getElementById("lbOpe").innerHTML = operador;
    document.getElementById("lbTot").innerHTML = res.toFixed(2);

}



    document.getElementById("btnMas").onclick = operar;
    document.getElementById("btnMenos").onclick = operar;
    document.getElementById("btnPor").onclick = operar;
    document.getElementById("btnDividir").onclick = operar;
