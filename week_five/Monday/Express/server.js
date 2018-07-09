const express = require('express');
const app = express();

//first argument is the address on the server. 
app.get('/', (request, response) => {    response.send(  'this is a response'   );  });


// set up listener on a port
app.listen(3000, () => {    console.log('Server listening on port 3000');   });