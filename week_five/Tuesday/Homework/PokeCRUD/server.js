const express = require('express');
var port = 3000;
const server = express();
//var methodOverride = require('method-override');

//

var pokeList = require('./model/pokemon');
console.log(pokeList)
//server get, url string, request, response, function


//Create
server.get('/pokemon/create', (request, response) =>{
    response.render('create.ejs', {});
});

server.post('/pokemon', (request, response) =>{
    console.log(request.body);
    //response.render('create.ejs');
    let newPoke = { 'name' : request.body.name, 'img' : request.body.img }
    pokeList.push(request.body);
    console.log('complete');
})

//Read
server.get('/pokemon/', (request, response) =>{
    response.render('index.ejs', { pokeList : pokeList} );
});

server.get('/pokemon/:index', (request, response) =>{
    response.render('show.ejs', { poke : pokeList[request.params.index] });
});

//Update
server.put('/pokemon/:index', (request, response) =>{
    pokeList[request.params.index] = request.body;
});

//Delete
server.delete('/pokemon/:index'), (request, response) =>{
    pokeList = pokeList.splice(request.params.index, 1);
    server.redirect('/pokemon/');
}


server.listen(port, function(){ console.log(`server listening on ${port}`) });