/*
Update Files:- The File System module has methods for updating files:
  (i)fs.appendFile()
  (ii)fs.writeFile()
*/

(i)update File:-
var fs = require('fs');
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

(ii)Replace File:-
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


