

//needs refactor, see readme

class menu {
    constructor(parentCharacter){ 
        if (!parentCharacter instanceof Tomagotchi){
            console.error("Menu constructer requires an object of class Tomagotchi. Menu was not constructed");
            return;
        }
        this.parentCharacter=parentCharacter;
        this.name=parentCharacter.name;
        this.constructHtml(); 
        this.canPlay=false;
        this.canSleep=false;
        this.canEat=false;
        this.onmouseexit();
        this.checkAccess();
    }
    constructHtml(){
        this.htmlelement = document.createElement('div');
        this.htmlelement.className = "menuContainer";
        this.htmlelement.id=`${this.name}menuContainer`;

        this.accessButton = document.createElement('div');
        this.accessButton.className = "accessButton";
        this.accessButton.id=`${this.name}accessButton`;
        this.accessButton.innerHTML= "&#x2630";

        this.playButton = document.createElement('div');
        this.playButton.className = "interactButton";
        this.playButton.id = `${this.name}playButton`;
        this.playButton.style.backgroundImage = "url('img/icon/play.png')";

        this.sleepButton = document.createElement('div');
        this.sleepButton.className = "interactButton";
        this.sleepButton.id = `${this.name}sleepButton`;
        this.sleepButton.style.backgroundImage = "url('img/icon/sleep.png')";

        this.eatButton = document.createElement('div');
        this.eatButton.className = "interactButton";
        this.eatButton.id = `${this.name}eatButton`;
        this.eatButton.style.backgroundImage = "url('img/icon/eat.png')";

        this.htmlelement.append(this.accessButton);
        this.htmlelement.append(document.createElement('br'));
        this.htmlelement.append(this.playButton);
        this.htmlelement.append(this.sleepButton);
        this.htmlelement.append(this.eatButton);

        let me = this;
        this.htmlelement.addEventListener("mouseenter", function(event) {me.onmouseover();} );
        this.htmlelement.addEventListener("mouseleave", function(event) {me.onmouseexit();} );
        this.playButton.addEventListener("click", function(event) {me.playClick();} );
        this.eatButton.addEventListener("click", function(event) {me.eatClick();} );
        this.sleepButton.addEventListener("click", function(event) {me.sleepClick();} );
        }
    onmouseover(){
        if (this.canPlay)
            this.playButton.style.visibility="visible";
        if (this.canEat)
            this.eatButton.style.visibility="visible";
        if (this.canSleep)
            this.sleepButton.style.visibility="visible";
    }
    onmouseexit(){
        this.playButton.style.visibility="hidden";
        this.eatButton.style.visibility="hidden";
        this.sleepButton.style.visibility="hidden";
    }
    attach(parentHtml, top=0){
        parentHtml.append(this.htmlelement);
        this.htmlelement.style.top=top+"px";
        
        this.htmlelement.style.left=parentHtml.offsetWidth/2-this.htmlelement.offsetWidth/2+"px";
    }
    playClick(){
        this.parentCharacter.play();
        this.canPlay=false;
        this.playButton.style.visibility="hidden";
        this.checkAccess();
    }
    eatClick(){
        this.parentCharacter.eat();
        this.canEat=false;
        this.eatButton.style.visibility="hidden";
        this.checkAccess();
    }
    sleepClick(){
        this.parentCharacter.sleep();
        this.canSleep=false;
        this.sleepButton.style.visibility="hidden";
        this.checkAccess();
    }
    checkAccess(){
        if (  (this.canPlay) || (this.canEat) || (this.canSleep)  )
            this.accessButton.style.visibility="visible";
        else this.accessButton.style.visibility="hidden";
    }
    readyPlay(cp=true){
        this.canPlay=cp;
        this.checkAccess();
    }
    readyEat(ce=true){
        this.canEat=ce;
        this.checkAccess();
    }
    readySleep(cs=true){
        this.canSleep=cs;
        this.checkAccess();
    }
}

