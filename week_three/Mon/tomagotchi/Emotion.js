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
defaultSet.setEyes(["eye1.png","eye1.png"]);
defaultSet.setMouths(["mouth1.png","mouth1.png"]);

var hungry = new emotion('hungry');
hungry.setEyes(["image1","image2"]);
hungry.setMouths(["image1","image2"]);

var sleepy = new emotion('sleepy');
sleepy.setEyes(["image1","image2"]);
sleepy.setMouths(["image1","image2"]);

var bored = new emotion('bored');  
bored.setEyes(["image1","image2"]);
bored.setMouths(["image1","image2"]);

var dead = new emotion('bored');
dead.setEyes(["image1, image2"]);
dead.setMouths(["image1","image2"]);