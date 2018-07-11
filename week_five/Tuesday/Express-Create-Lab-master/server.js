const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.listen(port, function() {
  console.log("App is running on port: ", port);
});



// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db
const products = require('./model/products');

// index route
app.get('/products', function(req, res) {
  res.send(products);
});

/*app.post('/products', (req, res) =>{
  //res.send('req.body');

});*/

app.set('view engine', 'ejs')

app.get('/products/new', (req, res) =>{
  //res.render('new.ejs');
  console.log('page');
});

// show route
app.get('/products/:id', function(req, res) {
  res.send(products[req.params.id]);
});




// create route
app.post('/products', function(req, res) {
  console.log('CREATE route accessed');
  console.log('Data within req.body: ', req.body);
  products.push(req.body);
  res.redirect('/products');
});
