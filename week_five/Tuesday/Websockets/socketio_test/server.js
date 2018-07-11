//https://www.npmjs.com/package/socket.io

//http://devdocs.io/socketio/server-api

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(){ console.log('connected!') });
io.on('connect', function(){ console.log('connected!') });
//server.listen(3000);
server.listen(3000, () => {    console.log('Server listening on port 3000');   });