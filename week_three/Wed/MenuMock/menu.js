class menu {
    constructor(parentCharacter){ 
        this.parentCharacter=parentCharacter;
        if (this.parentCharacter)
            this.name=this.parentCharacter.name;
        else {
            console.error('No parent for menu');
            return;
        }   
    }
    constructHtml(){
        this.htmlelement = document.createElement('div');
        this.htmlelement.className = "menuContainer";
        this.htmlelement.id=`${this.name}menuContainer`;

        this.accessButton = document.createElement('div');
        this.accessButton.className = "accessContainer";
        this.accessButton.id=`${this.name}accessContainer`;
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
        this.htmlelement.append(this.playButton);
        this.htmlelement.append(this.sleepButton);
        this.htmlelement.append(this.eatButton);
        }
}