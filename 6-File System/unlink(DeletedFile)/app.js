var fs = require('fs')

fs.unlink('mmmm.js', function(err){
    console.log("Deleted");
})
//after execution mmmm.js file have deleted.
