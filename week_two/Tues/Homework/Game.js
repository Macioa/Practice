function shuffle(deck, numShuffles = 3){ //simulates the shuffling of a deck of cards
    if (numShuffles>1)
        deck = shuffle(deck, numShuffles-1);
    let splitIndex = Math.floor(deck.length/2);
    let part1 = deck.slice(0,splitIndex);
    let part2 = deck.slice(splitIndex,deck.length)
    let newDeck = []
    while (part1.length||part2.length){
        let coin = Math.floor(Math.random()*2);
        coin = ((new Date().getTime()%2)*coin)%2;
        if (coin&&part1.length)
            newDeck.push(part1.pop(0));
        else if (part2.length)
            newDeck.push(part2.pop(0));
    }
    return newDeck;
}


class Player {
    constructor(name){
        this.name=name;
        this.card=null;
        this.points=0;
        this.roundsWon=0;
        this.isComputer=false;
        if (name.toLowerCase().indexOf('computer')!=-1)
            this.isComputer=true;
    }
    winRound(points = 1){
        this.points+=points;
        this.roundsWon++;

        console.log('${this.name} won a round');
    }
    chooseCardFromHand(cards){
        if (this.isComputer)
            this.card=cards[Math.floor(Math.random()*cards.length)];
    }
}

class Game {
    constructor(playerArray = [], cardsPerHand = 3){
        this.cardsPerHand=cardsPerHand;
        this.cardsPlayed=[];
        this.cardsRemaining=pokeCards.slice(0,pokeCards.length);
        this.numRounds = 0;
        this.players=playerArray;
        this.winners=[];
        if (playerArray.length<2)
            alert("Must have at least two players to construct Game");
    }
    playRound(){
        console.log(this.players);
        //draw cards for each player
        for (let j=0; j<this.players.length; j++){
            let hand = [];
            for (let i=0; i<this.cardsPerHand; i++)
                hand.push(this.cardsRemaining.pop());
            this.players[j].chooseCardFromHand(hand);
            this.cardsPlayed.concat(hand);
        }

        //determine best card chosen for the round
        let bestCard = this.players[0].card;
        this.players.forEach( function(player){
            if (player.card.damage>bestCard.damage)
                bestCard=player.card;
        });
        //give the winner(s) points
        this.players.forEach( function(player){
            if (player.card.damage==bestCard.damage)
                player.winRound();
        });
    }
    start(){
        while (this.cardsRemaining.length > (this.players.length*this.cardsPerHand) )
            this.playRound();
        this.endGame();
    }
    endGame(){
        let highScore = this.players[0].points;
        this.players.forEach( function(player){
            if (player.points>highScore)
                highScore=player.points;
        });
        for (let j=0; j<this.players.length; j++)
            if (this.players[j].points==highScore)
                this.winners.push(this.players[j]);
        console.log("GameOver. Winners are:");
        this.winners.forEach( function (player){
            console.log(player.name);
        });
    }
}


var myGame = new Game([new Player("computer 1"), new Player("computer 2")]);
myGame.start();