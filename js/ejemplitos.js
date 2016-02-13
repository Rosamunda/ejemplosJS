/*
Mostrar los números del 1 al 10 con un bucle
*/
function mostrarNum(num) {
	for (var i=1; i<=num; i++) {
		console.log(i);
	}
}
mostrarNum(10);

/*
Mostrar sólo números pares del 1 al 100

for (var i=0; i<=100; i++) {
	if (i % 2 == 0) {
		console.log(i);
	};
}
*/

/*
Sumar los números del 1 al 10
*/

var total= 0;
for (var i=0; i<=10; i++) {
	total = total + i;
}
console.log("total = " + total);

/*
Mostrar todos los elementos del siguiente array ([1,2,3,4,5])
*/
function elementosArray(miArray) {
	//var miArray = [1,2,3,4,5];
	for (var i=0; i<miArray.length; i++) {
		console.log(miArray[i]);
	}
}
elementosArray([1,2,3,4,5]);

/*
Mostrar los números de un parámetro A numérico a un parámetro B numérico
*/
function showNumBetweenPars(first,second){
	if (!isNaN(first) && !isNaN(second)) {
		if (first <= second){
			for(var i=first; i<=second; i++){
				console.log("."+i);
			}
		} else {
			console.log("el primer número debe ser menor que el segundo");
		}
	} else {
		console.log("No pusiste dos números");
	}
}
showNumBetweenPars(1,5);



/*
En base a una palabra, crear un objeto que cuente la cantidad de cada letra
Ejemplo: Ingreso hola => {h:1, o:1, l:1, a:1}
*/

