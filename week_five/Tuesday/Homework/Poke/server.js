const express = require('express');
var port = 3000;
const server = express();


//server get, url string, request, response

server.get('/pokemon/', (request, response) =>{
    response.render('index.ejs');
})

server.listen(port, function(){console.log(`server listening on ${port}`)})