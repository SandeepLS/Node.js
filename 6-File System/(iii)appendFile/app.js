var fs = require('fs')

fs.appendFile('module.js','console.log("Hi Sandeep")', function(err){
    console.log("Data Saved");
})
