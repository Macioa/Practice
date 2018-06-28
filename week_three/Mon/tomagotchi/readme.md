project complete but should have used more functional style for stats;
instead of 
    eat(){
        hunger++;
    }
    play(){
        boredom++;
    }
    sleep(){
        sleepiness++;
    }

etc...


Should be

stats = [
    {
        "stat":"hunger";
        "action":"eat";
        "emotion":"hungry";
        "value": 10;
    },
    {
        "stat":"boredom";
        "action":"play";
        "emotion":"bored";
        "value": 10;
    },
    {
        "stat":"sleepiness";
        "action":"sleep";
        "emotion":"tired";
        "value": 10;
    }
]

increaseStat(stats[index]){
    .value++;
}
// all UI generation, button actions, ticks, etc... involving these stats should work off the array



on similar note, the heads bounce off the window bounds. They should bounce off the parent element's bounds instead. Result should be the same when applied to body, but would allow multiple instances of interface;