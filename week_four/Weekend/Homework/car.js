

//private variables and functions
const privateTest = () => { console.log('accessed secret function') };
var speed = 0;

module.exports.color = "default";
module.exports.convertible = false;
module.exports.testObj = {'key': 'value'};
module.exports.accelerate = (delta=1) => { speed+=delta; return (speed+"") }
module.exports.decelerate = (delta=1) => { speed-=delta; return (speed-"") }
module.exports.getSpeed = () => { return (speed+"") }

//private function test
module.exports.publicTest = () => { privateTest(); }

//require another module
module.exports.vehicle = require('./vehicle');

