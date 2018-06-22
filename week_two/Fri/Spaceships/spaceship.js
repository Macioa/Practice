

class spaceship{
    constructor (faction, name="fighter", health=100, firepower=20, accuracy=60, armor=5, evasion=15, firerate=1){
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
        this.class="fighter";
        this.engaged=false;
        this.destroyed=false;
        console.log(`Created ${this.name} with ${this.faction}`);
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
    randomize(maxPossibleHealth=200, maxPossibleFirepower=50, maxPossibleAccuracy=.7, maxPossibleArmor=20, maxPossibleEvasion=.2, maxFireRate=5){
        this.setStats(Math.floor(Math.random()*maxPossibleHealth*.4+.6*maxPossibleHealth), Math.floor(Math.random()*maxPossibleFirepower*.4+.6*maxPossibleFirepower), Math.random()*maxPossibleAccuracy*.4+.6*maxPossibleAccuracy, Math.random()*maxPossibleArmor*.4+.6*maxPossibleArmor, Math.random()*maxPossibleEvasion*.4+.6*maxPossibleEvasion, Math.random()*maxFireRate*.4+.6*maxFireRate);
    }
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
    setClassRandomStats(shipClass){
        switch(shipClass){
            case "gunship": this.randomize(50,30,60,0,30,1); break;
            case "dreadnaught": this.randomize(300,60,60,15,5,5); break;
            case "destroyer": this.randomize(100,60,60,10,10,3); break;
            case "railgun": this.randomize(20,100,80,0,30,8); break;
            case "fighter": this.randomize(30,20,50,3,20,2); break;
        }
        this.class=shipClass;
        console.log(`${this.name} converted to ${shipClass}`);
        this.autoname();
    }
    autoname(){
        this.name=this.faction+" "+this.class;
    }
}