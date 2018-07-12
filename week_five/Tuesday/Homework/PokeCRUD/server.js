const express = require('express');
var port = 3000;
const server = express();
const bodyparser = require('body-parser');
server.use( bodyparser.urlencoded( {extended: false} ))
var methodOverride = require('method-override');

server.use(methodOverride('_method'));

var pokeList = require('./model/pokemon');
console.log(pokeList)
//server get, url string, request, response, function

//Delete
server.delete('/pokemon/:index'), (request, response) =>{
    console.log(request.params.index);
    pokeList = pokeList.splice(request.params.index, 1);
    //server.redirect('/pokemon/');
}
//Create
server.get('/pokemon/create', (request, response) =>{
    response.render('create.ejs', {});
});

server.post('/pokemon', (request, response) =>{
    let newPoke = { 'name' : request.body.name, 'img' : request.body.img };
    pokeList.push(newPoke);
    console.log(pokeList);
    response.redirect('/pokemon');
})

//Read
server.get('/pokemon/', (request, response) =>{
    response.render('index.ejs', { pokeList : pokeList} );
});

server.get('/pokemon/:index', (request, response) =>{
    console.log(pokeList[request.params.index]);
    response.render('show.ejs', { 
        poke : pokeList[request.params.index],
        index: request.params.index
     });
});

//Update
server.get('/pokemon/:index/edit', (request, response) =>{
    response.render('edit.ejs', {
        poke : pokeList[request.params.index],
        index: request.params.index
    });
});

server.put('/pokemon/:index', (request, response) =>{
    let newPoke = {'name' : request.body.name, 'img' : request.body.img};
    console.log(newPoke);
    pokeList[request.params.index] = newPoke;
    response.redirect('/pokemon');
});




server.listen(port, function(){ console.log(`server listening on ${port}`) });