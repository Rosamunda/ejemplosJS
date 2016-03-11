var fs = require('fs');

function readContent(file,callback) {
   fs.readFile(file, function (err, content) {
       if (err){return callback(err);}
       callback(null, content);
   });
 }


var file1 = "./text1.txt";
var file2 = "./text2.txt";

readContent(file1, function (err, content) {
   var contentFile1 = content.toString();

   readContent(file2, function (err, content2){
       var contentFile2 = content2.toString();        
       if(contentFile1 === contentFile2) {console.log("Los archivos " +file1+ " y " +file2+ " son iguales");}
       else {console.log("Los archivos " +file1+ " y " +file2+ " son distintos");}
   });
})