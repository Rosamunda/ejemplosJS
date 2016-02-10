// PASAR A DÍAS, HORAS, MINUTOS Y SEGUNDOS UNA CANTIDAD DE TIEMPO EXPRESADA EN SEGUNDOS.
/*
Usar String.split(delimiter) para particionar el resultado usando el punto.

1000 segundos

1000 segundos / 86400 segundos
0 dias
0.011574074 x 86400 = 999.9999936 segundos

999.9999936 segundos / 3600 segundos
0 horas
0.277777776 x 3600 = 999.9999936 segundos

999.9999936 segundos / 60 segundos
16 minutos
0.66666656 x 60 = 39.9999936 segundos

39.9999936 segundos




var segundo = 1;
var segEnMin = 60; //segundos
var segEnHora = 3600; // segundos
var segEnDia = 86400; // segundos

*/

var cantidadDada = 10000;

var segEnDia = cantidadDada / 86400;
var segEnDiaSplit = segEnDia.toString().split(".");
var diasTotales = segEnDiaSplit[0];
var restoDias = "0." + segEnDiaSplit[1];

var segEnRestoDias = restoDias * 86400;
var segEnHoras = segEnRestoDias / 3600;
var horas = segEnHoras.toString().split(".");
var horasTotales = horas[0];
var restoHoras = "0." + horas[1];

var segEnRestoHoras = restoHoras * 3600;
var segEnMinutos = segEnRestoHoras / 60;
var minutos = segEnMinutos.toString().split(".");
var minutosTotales = minutos[0];
var restoMinutos = "0." + minutos[1];

var segEnRestoMinutos = restoMinutos * 60;

var resultado = diasTotales + " días, " + horasTotales + " horas, " + minutosTotales + " minutos y " + segEnRestoMinutos;

console.log("En " + cantidadDada + " segundos hay " + resultado);



