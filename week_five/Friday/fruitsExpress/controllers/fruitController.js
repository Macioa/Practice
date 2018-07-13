const express = require('express');

//set up router
const router = express.Router();

const Fruits = require('../models/fruits');

router.get('/', (req, res) =>{
    res.send(Fruits);
});
/*router.get('/fruits', (req, res) =>{

})*/




router.post('/', (req, res) =>{
    //res.send('Posted');
    let newfruit = req.body;
    if (req.body.readyToEat=='on')
        newfruit.readyToEat=true;
    else newfruit.readyToEat=false;
    Fruits.push(newfruit);
    res.redirect('/fruits');
});

//ctrl k z
//create new route
router.get('/new', (req, res) =>{
    res.render('new.ejs');
});

router.get('/:index/edit', function(req, res){
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: Fruits[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	);
});

router.delete('/:index', (req, res) =>{
    Fruits.splice(req.params.index, 1);
    res.redirect('/');
})

router.put('/:index', (req, res) => { //:index is the index of our fruits array that we want to change
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
	Fruits[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/'); //redirect to the index page
});


//use query params
// Show route - shows one item from the model

router.get('/:index', (request, response) => {    
    console.log (request.params);
//response.send(  `this is a ${ Fruits[request.params.index] }`  );  

//edit route = to display and edit an individual fruit
/*router.get('/fruits/:index/edit', (req, res) =>{
    res.render('edit.ejs', {
        fruit: fruits[req.params.index],
        index: req.params.index
    });
})*/

//render sends an ejs template to the client
response.render('show.ejs',{
    fruit: Fruits[request.params.index]
    });
});


module.exports = router;