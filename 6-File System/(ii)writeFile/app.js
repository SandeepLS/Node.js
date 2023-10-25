/*
Create Files:-
            The File System module has methods for creating new files:
            fs.appendFile()
            fs.open()
            fs.writeFile()

writeFile have 3 parameter first(create a new file for writing('module.js'),
                           second(write a content which u want, in a new file(console.log("Hi Sandeep");) ),
                           third(after complet this above job,/ if u want to print something 
                             function(err){
                             console.log("Data Saved")
                             }
*/
Ex:-
var fs = require('fs')
fs.writeFile('module.js','console.log("Hi Sandeep")', function(err){
    console.log("Data Saved");
})
----------------------------------OR---------------------------------------
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
----------------------------------OR---------------------------------------
var fs = require('fs');
fs.appendFile('mynewfile0.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
----------------------------------OR---------------------------------------
var fs = require('fs');
fs.open('mynewfile5.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
  
