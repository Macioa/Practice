const express = require('express');
var port = 3000;
const server = express();

//

var pokeList = require('./model/pokemon');
console.log(pokeList)
//server get, url string, request, response

server.get('/pokemon/', (request, response) =>{
    // /response.send(pokeList);
    response.render('index.ejs', { pokeList: pokeList} );
});

server.get('/pokemon/:id', (request, response) =>{
    response.render('show.ejs', { poke : pokeList[request.params.id] });   
});

server.listen(port, function(){ console.log(`server listening on ${port}`) });