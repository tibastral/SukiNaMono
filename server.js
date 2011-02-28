var http = require('http'),  
    io = require('socket.io'), // for npm, otherwise use require('./path/to/socket.io') 
    express = require('express'),
    nodemon = require('nodemon'),
app = express.createServer(); 
app.get('/', function(req, res){ 
   res.send('Hello World'); 
}); 
app.listen(3000); 

var io = require('socket.io'); 
// var socket = io.listen(app);
// socket.on('connection', function(){ 
//   client.on('message', function(){
//     alert('tot')
//   });
//   client.on('disconnect', function(){
//   }); 
// })



// server = http.createServer(function(req, res){ 
//  // your normal server code 
//  res.writeHead(200, {'Content-Type': 'text/html'}); 
//  res.end('<h1>Hello world</h1>'); 
// });
// server.listen(8080);
//   
// // socket.io 
// var socket = io.listen(server); 
// socket.on('connection', function(client){ 
//   client.on('message', function(){ alert('tot') }) 
//   client.on('disconnect', function(){ alert('titi') }) 
// });