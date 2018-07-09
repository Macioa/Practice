const express = require('express');
const app = express();
//npm install --save express
//npm init
//express
//node filename.js
//localhost:3000

//Greetings App
/*app.get('/greeting/:name', (req, res) => {
    res.send( {params: req.params, queries: req.query} )
  });*/

  app.get('/greeting/:name', (req, res) => {
    res.send( req.params.name );
  });

  app.get('/tip/:total/:tipPercentage', (req, res) => {
      let total = parseFloat(req.params.total);
      let tipPercentage = parseFloat(req.params.tipPercentage);
      let result = total*tipPercentage*0.01;
      result = toString(result);
      console.log(result)
    res.send( result.toString() );
  });


  app.listen(3000, () => {    console.log('Server listening on port 3000');   });