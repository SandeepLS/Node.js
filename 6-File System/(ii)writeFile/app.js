/*
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
