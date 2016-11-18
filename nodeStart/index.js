var http = require('http');
var conn = require('./connect_mysql.js');

http.createServer( function(request,response) {
   response.writeHead(200, { 'Content-Type': 'text/plain',})
   response.write('I am a new node server');

   response.write(conn.getConnection())
   console.log('mydata'+ conn.getConnection())
   response.end('END');
}).listen('9000').on('error',function(e){
    console.log(e);
});