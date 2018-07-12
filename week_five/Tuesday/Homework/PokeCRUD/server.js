const express = require('express');
var port = 3000;
const server = express();
//var methodOverride = require('method-override');

//

var pokeList = require('./model/pokemon');
console.log(pokeList)
//server get, url string, request, response


//Create

//Read
server.get('/pokemon/', (request, response) =>{
    response.render('index.ejs', { pokeList : pokeList} );
});

server.get('/pokemon/:index', (request, response) =>{
    response.render('show.ejs', { poke : pokeList[request.params.index] });
});

//Update

//Delete
server.delete('/pokemon/:index'), (request, response) =>{
    pokeList = pokeList.splice(request.params.index, 1);
    server.redirect('/pokemon/')
}


server.listen(port, function(){ console.log(`server listening on ${port}`) });