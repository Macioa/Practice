/*const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];*/



const mongoose = require('mongoose');

const fruitSchema = new mongopose.fruitSchema({
    name: String,
    color: String,
    readyToEat: Boolean
});

//export entire array
module.exports = mongoose.model('Fruit', fruitSchema);