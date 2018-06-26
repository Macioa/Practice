const hungerInterval = 60; //how often hunger decreases in seconds
const sleepinessInterval = 60; //how often sleepiness decreases in seconds
const boredomInterval = 60; //how often boredom decreases in seconds
const animationInterval = 5; 
const ageInterval = 120;    //how often age increases in seconds
const growthInterval = 5; //how often size increases, by age
const growthIncrement = .25; //how much char grows in each increment (relative to default size set in css)
const maxStat = 12; //maximum value for hunger/sleepiness/boredom
 
const getImgRelativeSize = (filename) => {
    let newimg = document.createElement('img');
    newimg.src=(`img/${filename}`);
    let width = newimg.naturalWidth;
    let height = newimg.naturalHeight;
    console.log((width+height)/2);
    return ((width+height)/2);
}

getImgRelativeSize("eye1.png");

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

        this.scale = .25;
        
        this.constructHTMLElements();
        this.scaleRender();
        this.ticker = setInterval(this.tick,1000);
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
       //console.log(defaultSet, defaultSet.getEyeImg());
       this.eyeImg = defaultSet.getEyeImg();
       //console.log(this.eyeImg);
       this.eyeDiv.style.backgroundImage= `url('img/${this.eyeImg}')`;
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
       this.mouthImg = defaultSet.getMouthImg();
       this.mouthDiv.style.backgroundImage= `url('img/${this.mouthImg}')`;
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

        if (  (this.boredom===0)  ||  (this.hunger===0)   ||  (this.sleepy===0)  ){
            this.emotion = "dead";
            this.alive = false;
            console.log(`${this.name} has died.`);
            //this.renderEmotion();
        }

        if (this.tickCount%hungerInterval===0)
            this.hunger-=1;
        if (this.tickCount%boredomInterval===0)
            this.boredom-=1;
        if (this.tickCount%sleepinessInterval===0)
            this.sleepiness-=1;
        if (this.tickCount%ageInterval===0)
            this.age+=1;
        if (this.tickCount%growthInterval===0)
            this.scale+=growthIncrement;

        //this.renderEmotion();
        //this.scaleRender();
    }
    renderEmotion(){
        switch (this.emotion){
            case "default": this.eyeDiv.style.backgroundImage= `url('img/${this.eyeImg}')`;
                            this.mouthDiv.style.backgroundImage= `url('img/${this.mouthImg}')`;
                            break;
            case "hungry":  this.eyeDiv.style.backgroundImage= `url('img/${hungry.getEyeImg()}')`;
                            this.mouthDiv.style.backgroundImage= `url('img/${hungry.getMouthImg()}')`;
                            break;
            case "sleepy":  this.eyeDiv.style.backgroundImage= `url('img/${sleepy.getEyeImg()}')`;
                            this.mouthDiv.style.backgroundImage= `url('img/${sleepy.getMouthImg()}')`;
                            break;
            case "bored":   this.eyeDiv.style.backgroundImage= `url('img/${bored.getEyeImg()}')`;
                            this.mouthDiv.style.backgroundImage= `url('img/${bored.getMouthImg()}')`;
                            break;
            case "dead":    this.eyeDiv.style.backgroundImage= `url('img/${dead.getEyeImg()}')`;
                            this.mouthDiv.style.backgroundImage= `url('img/${dead.getMouthImg()}')`;
                            break;
        }
    }
    scaleRender() {
        this.htmlelement.style.scale=this.scale;
    }
    feed(amount){
        this.hunger+=amount;
        if (this.hunger>maxStat)
            this.hunger=maxStat;
    }
    play(amount){
        this.boredom+=amount;
        if (this.boredom>maxStat)
            this.boredom=maxStat;
    }
    sleep(amount){
        this.sleepiness+=amount;
        if (this.sleepiness>maxStat)
            this.sleepiness=maxStat;
    }
}

