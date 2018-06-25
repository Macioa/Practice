const hungerInterval = 60;
const sleepyInterval = 60;
const boredomInterval = 60;
const animationInterval =5;

const emotion = ["default","crying", "angry", "hungry", "sleepy", "bored"];

class Tomagotchi {
    constructor (Name, headImg) {
        this.name = Name;
        this.age = 0;
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.tickCount=0;
        this.headImg=headImg;
        this.emotion = "default";
        this.alive = true;

    }
    constructHTMLElements(){
        this.htmlelement = document.createElement('div');
        this.htmlelement.className="toma";
       this.headDiv=document.createElement('div');
       this.headDiv.className="head";
       this.htmlelement.append(this.headDiv);
       this.headDiv.style.backgroundImage = "url('img/head1.png')";

       this.eyeDiv=document.createElement('div');
       this.eyeDiv.className="eyes";
       this.headDiv.append(this.eyeDiv);
       this.eyeDiv.style.backgroundImage= "url('img/eye1.png')";
       this.eyeDiv.style.left = "100px"; 
       this.eyeDiv.style.top = "145px"; 

       this.noseDiv=document.createElement('div');
       this.noseDiv.className="nose";
       this.headDiv.append(this.noseDiv);
       this.noseDiv.style.backgroundImage= "url('img/nose1.png')";
       this.noseDiv.style.left = "140px"; 
       this.noseDiv.style.top = "180px"; 

       this.mouthDiv=document.createElement('div');
       this.mouthDiv.className="mouth";
       this.headDiv.append(this.mouthDiv);
       this.mouthDiv.style.backgroundImage= "url('img/mouth1.png')";
       this.mouthDiv.style.left = "130px"; 
       this.mouthDiv.style.top = "240px"; 


    }

    tick(){
        this.tickCount+=1;
        if (this.hunger<5)
            this.emotion="hungry";
        else if (this.sleepiness<5)
            this.emotion="sleepy";
        else if (this.boredom<5)
            this.emotion="bored";

        if (  (this.boredom===0)  ||  (this.hunger===0)   ||  (this.sleepy===0)  )
    }

}

