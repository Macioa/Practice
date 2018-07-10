const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Fruits = require('./models/fruits');

//http://localhost:3000/fruits/0


//install express
//install ejs
//install nodemon
//nodemon resets server after file save

//install body-parcer


//initialized middleware
//bodyParser allows us to read contents of a form or the 'body' of a request
app.use( bodyParser.urlencoded( {extended: false} ))

//manual middleware
/*app.use((req, res, next) =>{
    console.log('runs on every route');
    //this sends the request to the next piece in the call stack
    //
})*/



console.log(Fruits);

app.get('/fruits', (req, res) =>{
    res.send(Fruits);
});

app.post('/fruits', (req, res) =>{
    //res.send('Posted');
    let newfruit = req.body;
    if (req.body.readyToEat=='on')
        newfruit.readyToEat=true;
    else newfruit.readyToEat=false;
    Fruits.push(newfruit);
    res.redirect('/fruits')
});

//ctrl k z
//create new route
app.get('/fruits/new', (req, res) =>{
    res.render('new.ejs');
});



//use query params
// Show route - shows one item from the model

app.get('/fruits/:index', (request, response) => {    
    console.log (request.params);
//response.send(  `this is a ${ Fruits[request.params.index] }`  );  

//render sends an ejs template to the client
    response.render('show.ejs',{
        fruit: Fruits[request.params.index]
        });
    });



app.listen(3000, () => {    console.log('Server listening on port 3000');   });

