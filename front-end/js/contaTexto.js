
/* ---------- FAZ A CONTAGEM DOS CARACTERES DO TEXTAREA ---------- */

var textArea = document.getElementById("texto");
var limiteCaractere = 200;

textArea.onkeyup = function () {
	var len = limiteCaractere - this.value.length;
	document.getElementById("limite").innerHTML = "limite de caracteres: " + len;
}