var http = require('http'),  
    io = require('socket.io'), // for npm, otherwise use require('./path/to/socket.io') 
    express = require('express'),
    _ = require('underscore');

app = express.createServer();

app.use(express.static(__dirname + '/public')); 

app.get('/toto', function(req, res){ 
   res.send('Hello World'); 
});

app.listen(3000);
var restaurantMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var socket = io.listen(app); 
var clients = []
socket.on('connection', function(client){ 
  // new client is here! 
  var id = null;
  var defaultWaiter = {
    typeEl: 'Waiter',
    position: {
      xTile: 1,
      yTile: 1
    }
  };


  var objects = [defaultWaiter];
  var modifiedObjects = [];

  function checkAuth(msg) {
    if (!id) {
      if (msg['password'] == "pnt") {
        clients.push(client);
        id = msg['id'];
        client.send({
          action: 'init',
          map : restaurantMap,
          objects: [defaultWaiter]
        });
      } else {
        client.close();
      };
    }
  }

  client.on('message', function(msg){
    checkAuth(msg);

    if (msg.action == 'addChair')
    {
      restaurantMap[msg.yTile][msg.xTile] = 1;
      _.each(clients, function (cl) {
        cl.send({action: 'updateMap', map: restaurantMap});
      });
    }

    if (msg.action == 'moveWaiter')
    {
      // do not forget to verify the json before adding the task
      // doVerif()

      var objectId = msg.object.id;

      var targetObject = objects[objectId];

      targetObject.destination = msg.object.destination;

      // Add the tasks to the list
      modifiedObjects.push(targetObject);
    }
  });

  client.on('disconnect', function(){
    console.log('titiserv');
  });

  function pushToClient() {
    // client.send({action: 'ping', msg: 'ping'});
  }

  function processTasks() {
    // _.each(modifiedObjects, function (modifiedObject) {
    //   if (modifiedObject.xTile != modifiedObject.destination
    // });
  }

  setInterval(function () {
    // Do the operations asked (in the list of tasks)
    processTasks();
    // Push to the client the info (will ping if nothing changed)
    pushToClient();
  }, 30);
});

// var io = require('socket.io'); 
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