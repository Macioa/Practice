const express = require('express');

//set up router
const router = express.Router();

const Fruits = require('../models/fruits');

router.get('/', (req, res) =>{
    res.send(Fruits);
});
/*router.get('/fruits', (req, res) =>{

})*/

router.get('/', (req, res) =>{
    Fruits.find({}, (err, allFruits)=>{
        if (err){
            res.send(err);
        } else {
            res.render('index.js', {
                fruits: allFruits
             });
        }
    });
});


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

router.get('/:ind/edit', function(req, res){

    Fruits.findById(req.params.id, (err, foundFruit) =>{
        res.render('edit.ejs'), {
            fruit: foundFruit
        }
    });
	/*res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: Fruits[req.params.index], //the fruit object
		}
	);*/
});

router.delete('/:id', (req, res) =>{
    Fruits.findByIdAndRemove(req.params.id, (err, deletedFruit)=>{
        if (err){
            console.log(err);
        }else {
            console.log(deletedFruit, 'fruit deleted');
        }
    })
    res.redirect('/');
})

router.put('/:index', (req, res) => { //:index is the index of our fruits array that we want to change
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
	Fruits.create(req.body), (err, createdFruit)=>{
        if (err){
            console.log(err);
        } else {
            console.log(createdFruit);
            res.redirect('/fruits');
        }
    }; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/'); //redirect to the index page
});


//use query params
// Show route - shows one item from the model

router.get('/:id', (request, response) => {    
    console.log (request.params);
});
//response.send(  `this is a ${ Fruits[request.params.index] }`  );  

//edit route = to display and edit an individual fruit
/*router.get('/fruits/:index/edit', (req, res) =>{
    res.render('edit.ejs', {
        fruit: fruits[req.params.index],
        index: req.params.index
    });
})*/

//render sends an ejs template to the client
response.render('show.ejs', {
    //fruit: Fruits[request.params.index]
    fruit: Fruits.findById()
    }
);


module.exports = router;