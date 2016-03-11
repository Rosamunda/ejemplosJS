var fs =require('fs');

function listaArchivos(directorio){
    fs.readdir(directorio, function(err, archivos){
        if(!err) {
            var objetito = {};
            for (item in archivos) {
                var archivo = archivos[item].split(".");
                var nombre = archivo[1];
                if (objetito[nombre]) {
                    objetito[nombre].push(archivos[item]);
                } else {
                    objetito[nombre] = [];
                }
            }
            console.log(objetito);
        } else {console.log(err)}
    })

}

var directorio = '/home/victoria/Desktop/coderhouse/fs/';
listaArchivos(directorio);
