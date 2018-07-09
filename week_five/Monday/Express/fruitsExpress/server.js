const express = require('express');
const app = express();
//http://localhost:3000/fruits/0

//nodemon resets server after file save

const fruits = ['apple','banana', 'pear'];

//use query params

app.get('/fruits/:index', (request, response) => {    
    console.log (request.params);
    response.send(  `this is a ${ fruits[request.params.index] }`  );  
});

app.listen(3000, () => {    console.log('Server listening on port 3000');   });