class emotion { // container class for emotion images
    constructor(name){
        this.name=name;
    }
    setEyes(eyeImgArray){
        this.eyeImgs=eyeImgArray;
    }
    addEyes(eyeImg){
        this.eyeImgs.append(eyeImg);
    }
    setMouths(mouthImgArray){
        this.mouthImgs=mouthImgArray;
    }
    addMouth(mouthImg){
        this.mouthImgs.append(mouthImg);
    }
    getEyeImg(){
        return this.eyeImgs[Math.floor(Math.random()*this.eyeImgs.length)];
    }
    getMouthImg(){
        return this.mouthImgs[Math.floor(Math.random()*this.mouthImgs.length)];
    }
}

var defaultSet = new emotion('default');
defaultSet.setEyes(["eye4.png","eye3.png"]);
defaultSet.setMouths(["smilemouth4.png","smilemouth3.png","smilemouth2.png"]);

var hungry = new emotion('hungry');
hungry.setEyes(["worriedeyes1.png","angryeyes1.png"]);
hungry.setMouths(["frustrationmouth1.png","openmouth3.png","openmouth4.png", "frustrationmouth1.png"]);

var sleepy = new emotion('sleepy');
sleepy.setEyes(["tiredeyes1.png", "confusedeyes1.png","confusedeyes3.png"]);
sleepy.setMouths(["frustrationmouth3.png", "frustrationmouth4.png"]);

var bored = new emotion('bored');  
bored.setEyes(["annoyedeyes2.png","boredeyes2.png", "boredeyes1.png","cryingeyes1.png"]);
bored.setMouths(["frustrationmouth2.png"]);

var dead = new emotion('bored');
dead.setEyes(["deadeyes1.png","closedeyes1.png"]);
dead.setMouths(["tongue1.png", "frown.png"]);