/*contamos la cantuidad de líneas de un archivo dado*/

var fs =require('fs');

var bufferString;
var bufferStringSplit;

function contarLineas(archivo){
    fs.readFile(archivo, function(err, data){
        if (err){console.log(err);}
        bufferString = data.toString();
        bufferStringSplit=bufferString.split('\n');
        console.log('El archivo '+archivo+' tiene '+bufferStringSplit.length+' líneas');
    });
}

var archivo = "./text2.txt";
contarLineas(archivo);
