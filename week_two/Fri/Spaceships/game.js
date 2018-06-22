function log(logString){
    let textarea = document.getElementById("log");
    textarea.value = textarea.value+logString+"\n";
    textarea.scrollTop = textarea.scrollHeight;
}
function report(logString){
    let textarea = document.getElementById("actionlist");
    textarea.value = textarea.value+logString+"\n";
    textarea.scrollTop = textarea.scrollHeight;
}
function listentities(entityarray){
    let textarea = document.getElementById("report");
    for (let entity of entityarray)
    {
        textarea.value = textarea.value+entity.name+"\n";
        textarea.scrollTop = textarea.scrollHeight;
    }
}

const damageShip = (ship, damage) => {
    let damageTaken = damage-Math.floor(ship.armor*Math.random());
    if (damageTaken>0){
        log(`${ship.name} took ${damageTaken} damage.`);
        ship.currentHealth-=damageTaken;
    }
    if (ship.currentHealth<=0){
        ship.destroyed=true;
        log(`${ship.name} was destroyed.`);
        report(`${ship.name} was destroyed.`)
        if (ship.engage){
            clearInterval(ship.engage);
            ship.engage=false;
        }
    }
}

const fireAt = (attacker, defender) => {
    if (defender.destroyed)
        return false;
    log(`${attacker.name} fired at ${defender.name} with ${attacker.firepower} firepower.`);
    let chance = attacker.accuracy-defender.evasion;
    let hit = false;
    let attackpower = Math.floor(Math.random()*attacker.firepower);
    if ((Math.random()<chance)&&(attackpower>0))
        hit = true;
    if (hit)
        damageShip(defender, attackpower);
    else log(`${attacker.name} missed ${defender.name}.`);

    if (defender.destroyed){
        clearInterval(attacker.engage);
        attacker.engage=false;
    }
}

const engage = (attacker, defender) => {
    report(`${attacker.name} engaged ${defender.name}`);
    attacker.engage=setInterval(fireAt,attacker.firerate*1000,attacker,defender);
    if (!defender.engage)
        engage(defender,attacker);
}

const findTarget = (attacker, entityarray) => {
    let targetarray = entityarray.filter( (ship) => ((attacker!=ship)&&(attacker.faction!=ship.faction)) );
    engage(targetarray[Math.floor(Math.random()*targetarray.length)], attacker);
}








const myship = new spaceship("Mars");
const myothership = new spaceship("Earth");
const thirdship = new spaceship("Belter")

myship.setClassRandomStats('dreadnaught');
myothership.setClassRandomStats('dreadnaught');
thirdship.setClassRandomStats('gunship');

/*for (let i=0; i<15; i++){
    fireAt(myship, myothership);
    fireAt(myothership, myship);
    console.log(myship);
    console.log(myothership);
}*/
engage(myship,myothership);
engage(thirdship,myothership);