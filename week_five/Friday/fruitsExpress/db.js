const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db');

mongoose.connection.on('connected', () =>{
    console.log('Mongoose is connected.');
})



mongoose.connection.on('error', (err) => {
    console.log(err, 'Mongoose is disconnected')
})

mongoose.connection.on('disconnected', () =>{

})