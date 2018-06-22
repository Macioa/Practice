//https://github.com/ga-chicago/wdi-11-space-battle-lab

class spaceship{
    constructor(name="unnamed", faction, health=0, firepower=0, accuracy=0, armor=0, evasion=0,firerate=0){
        this.name=name;
        this.faction=faction;
        this.maxHealth=health;
        this.currentHealth=health;
        this.firepower=firepower;
        this.accuracy=accuracy;
        this.armor=armor;
        this.evasion=evasion;
        this.firerate=firerate;
        this.shipsKilled=0;
        this.class="";
        this.engaged=false;
        this.destroyed=false;
        console.log(`Created ${this.name} with ${this.faction}`)
    }
    setStats(health, firepower, accuracy, armor, evasion,firerate){
        this.maxHealth=health;
        this.currentHealth=health;
        this.firepower=firepower;
        this.accuracy=accuracy;
        this.armor=armor;
        this.evasion=evasion;
        this.firerate=firerate;
        this.shipsKilled=0;
        this.class="";
        this.engaged=false;
        this.destroyed=false;
    }
    randomize(faction, maxPossibleHealth=200, maxPossibleFirepower=50, maxPossibleAccuracy=.7, maxPossibleArmor=20, maxPossibleEvasion=.2, maxFireRate=5){
        this.faction=faction;
        this.maxHealth = Math.random()*maxPossibleHealth;
        this.health=this.maxHealth;
        this.firepower=Math.random()*maxPossibleFirepower;
        this.accuracy=Math.random()*maxPossibleAccuracy;
        this.armor=Math.random()*maxPossibleArmor;
        this.evasion=Math.random()*maxPossibleEvasion;
        this.firerate=Math.random()*maxFireRate;
    }
    takeDamage(damage){
        let damageInflicted = damage-this.armor;
        if (damageInflicted>0){
            this.currentHealth-=damageInflicted;
            //console.log('${this.name ')
        }
        if (this.currentHealth<=0){
            this.currentHealth=0;
            this.destroyed=true;
            console.log(`${this.name} was destroyed.`);
        }
    }
    fireAt(opponent){
        console.log(`${this.name} fired at ${opponent.name}`);
        if(Math.random()<=(this.accuracy-opponent.evasion)){
            console.log(`${this.name} hit ${opponent.name} with ${this.firepower} firepower`)    
            opponent.takeDamage(this.firepower);
        }
        else console.log(`${this.name} missed ${opponent.name}`);
        if (opponent.destroyed){
            console.log("SLDLKFJLKSDJFL");
            clearInterval(this.engage);
            this.engaged=false;
        }
    }
    engage(opponent){
        console.log(`${this.name} is engaging ${opponent.name}`);
        this.engaged=true;
        this.engage=setInterval(this.fireAt(opponent),this.firerate*1000);
    }
    findOpponent(arrayOfShips){
        //copy array, filter out ships with same faction, and engage one at random{
        let Ships=arrayOfShips.slice(0,arrayOfShips.length);
        //console.log("before",Ships, this.faction);
        Ships=Ships.filter(Ship => Ship.faction!=this.faction);
        //console.log("filtered by faction", Ships);
        Ships=Ships.filter(Ship => !Ship.destroyed);
        //console.log("filtered by destroyed",Ships);
        while((Ships.length)&&(!this.engaged)){
            let i = Math.floor(Math.random()*Ships.length);
            this.engage(Ships[i]);
        }
    }
    //health, firepower, accuracy, armor, evasion,firerate
    setClass(shipClass){
        switch(shipClass){
            case "gunship": this.setStats(50,30,60,0,30,1); break;
            case "dreadnaught": this.setStats(300,60,60,15,5,5); break;
            case "destroyer": this.setStats(100,60,60,10,10,3); break;
            case "railgun": this.setStats(20,100,80,0,30,8); break;
            case "fighter": this.setStats(30,20,50,3,20,2); break;
        }
        this.class=shipClass;
        console.log(`${this.name} converted to ${shipClass}`);
        this.autoname();
    }
    autoname(){
        this.name=this.faction+" "+this.class;
    }

}

class area{
    constructor(ships = []){
        this.ships=ships;
    }
    update(){
        console.log(this.ships);
        for (let ship of this.ships){
            ship.findOpponent(this.ships);
        }
    }
    addShips(shipArray){
        console.log('adding ships');
        this.ships=this.ships.concat(shipArray);
        this.update();
    }
}
/*
console.log('test1');

let shiparray = [];
for(let i = 0; i<20; i++){
    let newShip = new spaceship("temp","StarFleet");
    newShip.setClass('fighter');
    newShip.autoname();
    shiparray.push(newShip);
}

console.log('test2');

let myarea = new area(shiparray);
shiparray2 = [];
for(let i = 0; i<20; i++){
    let newShip = new spaceship("temp","Klingon");
    newShip.setClass('fighter');
    newShip.autoname();
    shiparray2.push(newShip);
}
console.log('test3');
myarea.addShips(shiparray2);
console.log('test4');
*/
let shiparray = [];

let newShip = new spaceship("temp","StarFleet");
newShip.setClass('fighter');
shiparray.push(newShip);

let newShip2 = new spaceship("temp","Klingon");
newShip2.setClass('fighter');
shiparray.push(newShip2);

let myarea = new area(shiparray);
console.log(newShip.name);
console.log(newShip2.name);

myarea.update();