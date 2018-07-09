const express = require('express');
const app = express();
//http://localhost:3000/fruits/0

//install express
//install ejs
//nodemon resets server after file save

const Fruits = require('./models/fruits');

console.log(Fruits);

app.get('/fruits', (req, res) =>{
    res.send(Fruits);
})

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