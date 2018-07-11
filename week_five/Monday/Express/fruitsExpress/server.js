const express = require('express');
const app = express();
const bodyParser = require('body-parser');


var methodOverride = require('method-override');


//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
//set up controller after middleware
const fruitController = require('./controllers/fruitController');

//all routes start with /fruits from first argument
app.use('/fruits', fruitController)


//http://localhost:3000/fruits/0

//REST AND CRUM

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



//console.log(Fruits);




app.listen(3000, () => {    console.log('Server listening on port 3000');   });

