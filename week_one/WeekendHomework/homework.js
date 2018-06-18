

/*
1. let variable = value;
2. variable = new value;
3. let newVariable = new value;
    variable = newVariable;
    */


let firstVariable = "Hello World";
firstVariable = 7.6;
let secondVariable = firstVariable;
secondVariable = "No";

// answer: a number


let yourName = "Ryan Montgomery";

let printString = "Hello, my name is "+yourName;


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

//a<b
//c>d
//===
//a<b<c
//a===a<d
//e==='Kevin'
//48=='48'

if (animal==='cow')
    console.log("mooooo");
else console.log("Not a cow");

//---------------

let age = 17;
if (age>16)
    console.log("here are the keys");
else console.log("too young");

//------------------
for (i=0; i<10; i++)
    console.log(i);

for (i=10; i<=4000; i++)
    console.log(i);

for (i=10; i<=4000; i+=2)
    console.log(i);


for(i=1; i<=100; i+=2){
    if (i%2==0)
        console.log('is an even number');
}

for (i=0; i<=100; i++)
    if (i%5==0)
        console.log("high fives!");
    else if (i%3==0)
        console.log("three crowd");

let bankAccount = 0;
for (i=1; i<=10; i++)
    bankAccount+=i;
for (i=1; i<=100; i++)
    bankAccount+=i*2;

let sum = 0;
for(i=1; i<1000; i++)
    if ( (i%3==0) || (i%5==0) )
        sum+=i;

const randomThings = [1, 10, "Hello", true]
randomThings[0];
randomThings[2]="World";
console.log(randomThings);

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
ourClass[2];
ourClass[2]="Octocat";
ourClass.push('Cloudcity');

const myArray = [5, 10, 500, 20];
myArray.push('Egon');
myArray.pop();
myArray.unshift('Bob marley');
myArray.shift();
myArray.reverse();

let mynum = 3;
if (mynum<100)
    console.log("littlenum");
else 
    console.log("bignum");

if (mynum<5)
    console.log("little num");
else if (mynum>10)
    console.log("bignum");

    const kristynsCloset = [
        "left shoe",
        "cowboy boots",
        "right sock",
        "GA hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
      ];
      
      // Thom's closet is more complicated. Check out this nested data structure!!
      const thomsCloset = [
        [
          // These are Thom's shirts
          "grey button-up",
          "dark grey button-up",
          "light blue button-up",
          "blue button-up",
        ],[
          // These are Thom's pants
          "grey jeans",
          "jeans",
          "PJs"
        ],[
          // Thom's accessories
          "wool mittens",
          "wool scarf",
          "raybans"
        ]
      ];

console.log('kristyn rocking '+kristynsCloset[2]+' today');
let kristynShoe = kristynsCloset.shift();
kristynsCloset.splice(7,0,"raybans");
kristynsCloset[6]="stained knit hat";
console.log("Thom wears a "+thomsCloset[0][0]+", "+thomsCloset[1][0]+", "+thomsCloset[2][0]);


const reverseWordOrder = (word) => {
    return word.split('').reverse().join();
}

const calc = (num1, num2, action) => {
    switch (action){
        case "sub": return num2-num1; break;
        case "add": return num1+num2; break;
        case "mult": return num1*num2; break;
        case "exp": return Math.pow(num1,num2); break;
        case "div": return num1/num2; break;
        default: return null;
    }
}

const printCool = (name) => {
    console.log(name+" is cool");
}

const calculateCube = (side) => {
    return Math.pow(side,3);
}

const isAVowel = (char) => {
    char = char.toLowerCase();
    if ( (char=='a') || (char=='e') || (char=='i') || (char=='o') || (char=='u') )
        return true;
    else return false;
}

const getTwoLengths = (str1,str2) => {
    return [str1.length,str2.length];
}

const getMultipleLengths = (array) => {
    newarray = [];
    array.forEach( function (item){ newarray.push(item.length)} );
    return newarray;
}

const maxOfThree = (inArray) => {
    let max = inArray[0];
    inArray.forEach( function (item) {
        if (item>max)
            max = item;
    });
    return max;
}

const printLongestWord = (inArray) => {
    let max = inArray[0];
    inArray.forEach( function (item) {
        if (item.length>max.length)
            max = item;
    });
    return max;
}

const transmogrify = (num1, num2, num3) => {
    return Math.pow((num1*num2),num3);
}

const 