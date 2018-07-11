const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Fruits = require('./models/fruits');

var methodOverride = require('method-override');
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

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

app.get('/fruits/:index/edit', function(req, res){
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: fruits[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	);
});

app.put('/fruits/:index', (req, res) => { //:index is the index of our fruits array that we want to change
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
	fruits[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
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

