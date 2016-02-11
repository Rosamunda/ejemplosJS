/*
Hacer un programa en el que se ingrese un monto de dinero expresado en pesos y la 
cotización del dólar y luego imprima por pantalla el monto equivalente en dólares 
(con 2 dígitos decimales).
*/

function conversorMonedas() {
	var pesos = document.getElementById("pesos");
	var calcularDolar = pesos.value * 14.7;
	document.getElementById("resultado").innerHTML = pesos.value + " pesos equivalen a " + calcularDolar + " dólares.";
	return false;
}
