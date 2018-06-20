var car = {
    make: "saturn",
    model: "ion",
    year: 2003
}

for (let key in car){
    console.log(key, car[key]);
}

var multidimensionalarray = [[0,0],[0,1]];

for (let i = 0; i<multidimensionalarray.length; i++)
    for (let j = 0; j<2; j++)
        console.log(i,j,multidimensionalarray[i][j]);

const colorObjects = {red: 'red', blue: 'blue', cyan: 'cyan'};
const seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"};
const profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]};

const printContents = (inObj) => {
    for (let key in inObj)
        console.log(key, inObj[key]);
}

printContents(colorObjects);
printContents(seinfeld);
printContents(profile);

const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

console.log(solarSystem);
let Neptune = solarSystem.find(function (inObj) {return inObj.name == "Neptune"});
console.log(Neptune.moons[1]);
let Venus = solarSystem.find(function (inObj) {return inObj.name == "Venus"});
Venus.moons.push("Endor");
solarSystem.push({ name: "Pluto", ringSystem: true, moons: ["Charon"] });
let Earth = solarSystem.find(function (inObj) {return inObj.name == "Earth"});
Earth.diameter = 12;
let Mercury = solarSystem.find(function (inObj) {return inObj.name == "Mercury"});
Mercury.ringSystem = true;
let Uranus = solarSystem.find(function (inObj) {return inObj.name == "Uranus"});
Uranus.moons[3] = "Oberon";
console.log(solarSystem);



let start = new Date().getTime();
let ringSystems = solarSystem.filter(function (inObj) {return inObj.ringSystem});
for (rS of ringSystems)
    console.log(rS);
let end = new Date().getTime();

console.log(end-start);


start = new Date().getTime();
for (S of solarSystem)
    if (S.ringSystem)
        console.log(S)
end = new Date().getTime();

console.log(end-start);