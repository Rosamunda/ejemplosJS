var fs =require('fs');

function listaArchivos(directorio){
    fs.readdir(directorio, function(err, archivos){
        if(!err) {
            //console.log(archivos);
            for(item in archivos){
                console.log(archivos[item]);
            }
        } else {console.log(err)}
    })
}

var directorio = '/home/victoria/Desktop/coderhouse/fs/';
listaArchivos(directorio);
