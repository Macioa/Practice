console.log('app.js');

var mystoredobj = localStorage.getItem('myTestInstance');

console.log(mystoredobj);
console.log(mystoredobj.variable);
console.log(localStorage.getItem('myTO'));

class TestClass{
    constructor(){
        console.log('created new instance')
        this.variable = "myVariable"
    }
    testFunction(){ console.log("Test function from Test Class") };
}

var testInstance = new TestClass();
console.log(testInstance);
localStorage.setItem('myTestInstance', testInstance);

var myTO = { 'key' : 'value' }
localStorage.setItem('myTO', myTO)
