var http = require('http')
var dt = require('./module')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type':'text/html'})
    res.write("Today DT is:"+dt.myDateTime());
    res.end();
}).listen(8080)
