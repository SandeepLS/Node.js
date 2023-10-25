var fs = require('fs')

fs.unlink('mmmm.js', function(err){
    console.log("Deleted");
})
//after execution mmmm.js file have deleted.
-------------------------------OR------------------------------
var fs = require('fs');
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
