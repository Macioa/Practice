//needs refactor, see readme

const hungerInterval = 20; //how often hunger decreases, in ticks
const sleepinessInterval = 20; //how often sleepiness decreases, in ticks
const boredomInterval = 20; //how often boredom decreases, in ticks
//const animationInterval = 5; 
const ageInterval = 40;    //how often age increases, in ticks
const initialSize = .25;    //initial scale for new tomas
const growthInterval = 1; //how often size increases, by age
const growthIncrement = .01; //how much char grows in each increment (relative to default size set in css)
const maxStat = 12; //maximum value for hunger/sleepiness/boredom
const travelIncrement = 3; //number of pixels to travel each tick


const debug=false;
 
class Tomagotchi {
    constructor (Name, headImg, count=1) {
        //set inner variables from arguments and global settings
        this.name = Name;
        this.age = 0;
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.tickCount=1;
        this.headImg=headImg;
        this.emotion = "default";
        this.lastEmotion=this.emotion;
        this.lastScaledAge=-1;
        this.alive = true;

        this.xTravel = travelIncrement;
        this.yTravel = travelIncrement;

        this.scale = initialSize;
        //cooking
        this.constructHTMLElements(headImg);
         this.zIndex = count*5;
        this.htmlelement.style.zIndex=`${this.zIndex}`;

        this.menu = new menu(this);
        this.menu.attach(this.htmlelement);

        this.scaleRender();
        console.log(`${this.name} was born.`)

        this.htmlelement.style.left=Math.floor(Math.random()*window.innerWidth)+"px";
        this.htmlelement.style.top=Math.floor(Math.random()*window.innerHeight)+"px";
    }
    constructHTMLElements(headImg){
        this.htmlelement = document.createElement('div');
        this.htmlelement.className="toma";
        this.htmlelement.style.left=0;
        this.htmlelement.style.top=0;
       this.headDiv=document.createElement('div');
       this.headDiv.className="head";
       this.htmlelement.append(this.headDiv);
       this.headDiv.style.backgroundImage = `url(${headImg})`;

       this.eyeDiv=document.createElement('div');
       this.eyeDiv.className="eyes";
       this.headDiv.append(this.eyeDiv);
       this.eyeImg = defaultSet.getEyeImg();
       this.eyeDiv.style.backgroundImage= `url('img/${this.eyeImg}')`;
        this.eyeDiv.style.top = "130px"; 

       this.noseDiv=document.createElement('div');
       this.noseDiv.className="nose";
       this.headDiv.append(this.noseDiv);
       this.noseDiv.style.backgroundImage= "url('img/nose1.png')";
       this.noseDiv.style.left = "135px"; 
       this.noseDiv.style.top = "130px"; 

       this.mouthDiv=document.createElement('div');
       this.mouthDiv.className="mouth";
       this.headDiv.append(this.mouthDiv);
       this.mouthImg = defaultSet.getMouthImg();
       this.mouthDiv.style.backgroundImage= `url('img/${this.mouthImg}')`;
       this.mouthDiv.style.left = "125px"; 
       this.mouthDiv.style.top = "130px"; 

       this.nametagDiv=document.createElement('div');
       this.nametagDiv.className="nametag"
       this.nametagDiv.innerHTML=this.name;
       this.htmlelement.append(this.nametagDiv);

       $('body')[0].append(this.htmlelement);

       this.eyeDiv.style.left = this.htmlelement.offsetWidth/4+this.eyeDiv.offsetWidth/4-5+"px"; 
    }

    tick(){
        if (!this.alive)
            return;

        this.travel();

        this.tickCount++;

        if (this.boredom<7){
            this.emotion="bored";
            this.menu.readyPlay();
        }
        else this.menu.canPlay=false;

        if (this.sleepiness<6){
            this.emotion="sleepy";
            this.menu.readySleep();
        }
        else this.menu.canSleep=false;

        if (this.hunger<5){
            this.emotion="hungry";
            this.menu.readyEat();
        }
        else this.menu.canEat=false;

        if (  (this.boredom>=7)  &&  (this.sleepiness>=6)  &&  (this.hunger>=5)  ){
            this.emotion="default";
        }

        if (  (this.boredom>=10)  &&  (this.sleepiness>=10)  &&  (this.hunger>=10)  ){
            this.emotion="happy";
        }

        if (  (this.boredom===0)  ||  (this.hunger===0)   ||  (this.sleepiness===0)  ){
            this.emotion = "dead";
            this.alive = false;
            console.log(`${this.name} has died.`);
            this.menu.htmlelement.remove();
            this.nametagDiv.innerHTML+=` (dead, ${this.age} years)`;
            this.htmlelement.style.zIndex="0";
            this.htmlelement.style.opacity=".33";
        }

        if (this.tickCount%hungerInterval===0)
            if (!Math.floor(Math.random()*3))
                    this.hunger-=1;
        if (this.tickCount%boredomInterval===0)
            if (!Math.floor(Math.random()*3))
                    this.boredom-=1;
        if (this.tickCount%sleepinessInterval===0)
            if (!Math.floor(Math.random()*3))    
                    this.sleepiness-=1;

        if (this.tickCount%ageInterval===0)
            this.age+=1;
        if (  (this.age%growthInterval===0)  &&  (this.age!=0)  &&  (this.lastScaledAge!=this.age)  ){
                this.lastScaledAge=this.age;
                this.scale+=growthIncrement;
                console.log(`${this.name} has grown. scale(${this.scale})`)
        }

        if (this.tick===1000)
            this.tick=1;

        if (this.emotion!=this.lastEmotion)
            this.renderEmotion();

        this.lastEmotion=this.emotion;
        this.scaleRender();


        if (debug)
            console.log(`${this.name} has ${this.hunger} hunger, ${this.sleepiness} sleepiness, and ${this.boredom} boredom. ${this.name} is ${this.emotion}. ${this.name} is ${this.age} years old.`);
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
        this.htmlelement.style.transform=`scale(${this.scale})`;
        this.menu.htmlelement.style.transform=`scale(1)`;
    }
    eat(amount=5){
        this.hunger+=amount;
        if (this.hunger>maxStat)
            this.hunger=maxStat;
    }
    play(amount=5){
        this.boredom+=amount;
        if (this.boredom>maxStat)
            this.boredom=maxStat;
    }
    sleep(amount=5){
        this.sleepiness+=amount;
        if (this.sleepiness>maxStat)
            this.sleepiness=maxStat;
    }
    travel(){
        // check window bounds against html element position to determine travel direction
        if (this.htmlelement.getBoundingClientRect().right>window.innerWidth )
            this.xTravel=-travelIncrement;
        if (this.menu.htmlelement.getBoundingClientRect().bottom>window.innerHeight )
            this.yTravel=-travelIncrement;
        if (this.htmlelement.getBoundingClientRect().left<=0 )
            this.xTravel=travelIncrement;
        if (this.htmlelement.getBoundingClientRect().top<=0 )
            this.yTravel=travelIncrement;

        let xpos = parseInt(this.htmlelement.style.left.replace("px",""));
        let ypos = parseInt(this.htmlelement.style.top.replace("px",""));
        this.htmlelement.style.left=xpos+this.xTravel+"px";
        this.htmlelement.style.top=ypos+this.yTravel+"px";
    }
}

