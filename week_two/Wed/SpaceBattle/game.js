//https://github.com/ga-chicago/wdi-11-space-battle-lab

class spaceship{
    constructor(name="unnamed", faction, health=0, firepower=0, accuracy=0, armor=0, evasion=0,firerate=0){
        this.name=name;
        this.faction;
        this.maxHealth=health;
        this.currentHealth=health;
        this.firepower=firepower;
        this.accuracy=accuracy;
        this.armor=armor;
        this.evasion=evasion;
        this.firerate=firerate;
        this.shipsKilled=0;
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
        if (damage-this.armor>0){
            this.currentHealth-=(damage-this.armor);
            console.log('${this.name ')
        }
        if (this.currentHealth<=0){
            this.currentHealth=0;
            this.destroyed=true;
            console.log('${this.name} was destroyed.');
        }
    }
    fireAt(opponent){
        console.log('${this.name} fired at ${opponent.name}');
        if(Math.random()<=(this.accuracy-opponent.evasion)){
            console.log('${this.name} hit ${opponent.name} with ${this.firepower} firepower')    
            opponent.takeDamage(this.firepower);
        }
        else console.log('${this.name} missed ${opponent.name}');
        if (opponent.destroyed){
            clearInterval(this.engage);
            this.engaged=false;
        }
    }
    engage(opponent){
        console.log('${this.name} is engaging ${opponent.name}')
        this.engaged=true;
        this.engage=setInterval(fireAt,this.firerate*1000,opponent);
    }
    findOpponent(arrayOfShips){
        //copy array, filter out ships with same faction, and engage one at random
        let Ships=arrayOfShips.slice(0,arrayOfShips.length);
        Ships=Ships.filter(Ship => Ship.faction==this.faction);
        while((Ships.length)&&(!this.engaged)){
            let i = Math.floor(Math.random()*Ships.length);
            this.engage(Ships[i]);
        }
    }

}

