
// REEMPLAZAR LETRAS POR NÚMEROS

var letra = "0800Hola";
var resultado = "";
var palabra = letra.toLowerCase();
for (var i = 0; i<palabra.length; i++)
	switch(palabra[i]){
	   	case "a":
	   	case "b":
	   	case "c":
	       resultado+="2";
    	   break;
	   	case "d":
	   	case "e":
	   	case "f":
    	   resultado+="3";
       	   break;
	   	case "g":
	   	case "h":
	   	case "i":
	       resultado+="4";  
	       break;
	   	case "j":
	   	case "k":
	   	case "l":
	       resultado+="5";	            	   
	       break;
	   	case "m":
	   	case "n":
	   	case "o":
	       resultado+="6";
	       break;
	   	case "p":
	   	case "q":
	   	case "r":
	   	case "s":
	       resultado+="7";
	       break;
	   	case "t":
	   	case "u":
	   	case "v":
	       resultado+="8";	 
	       break;      	       
	   	case "w":
	   	case "x":
	   	case "y":
	   	case "z":
	       resultado+="9";
	       break;
	    default:
	    	resultado+=palabra[i];
	    break; 

	}	    
	console.log(letra + " se traduce en números como " + resultado);


