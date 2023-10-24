/*File System:- When we have a Programing language,/ when we want to work with project, offcourse we need to work with files as well.
maube u want write something in the file, may be we want read a file.
Explain:- 
(i) first we have to mention the required of the FileSystem name.
    var fs = required('fs')
(ii) Now we want to read a file, the readFile have a 3 parameter, 
    first(Name of the file, which u want to read it.),
    second(type of the file/Formate of the file/Encoding(utf8)/(it is a optional)),
    third(it is a call back function), and this function will have 2 parameter,(i)err(wt it is the error, it will check exception), (ii) data(once we complete reading the file that will be stored data in a data Variable.)
    Next we print the data in console.
    fs.readFile('calc.js', 'utf8', function(err, data){
      console.log(data);
    });
*/

Ex:-app.js
var fs = require('fs')

fs.readFile('module.js', 'utf8', function(err, data){
    console.log(data);
})
