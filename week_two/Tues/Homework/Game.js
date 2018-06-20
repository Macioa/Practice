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
        if (name.toLowerCase().indexOf('comp')!=-1)
            this.isComputer=true;
    }
    winRound(points = 1){
        this.points+=points;
        this.roundsWon++;

        document.getElementsByTagName('body')[0].innerText=document.getElementsByTagName('body')[0].innerText+this.name+' won a round ('+this.points+" points) with "+this.card.name+"\n";
        window.scrollTo(0,document.body.scrollHeight);
    }
    chooseCardFromHand(cards){
        if (this.isComputer)
            this.card=cards[Math.floor(Math.random()*cards.length)];
        else {
            this.card = this.playerChooseCard(cards);
        }

            
    }
    playerChooseCard(cards){
        let newdiv = document.createElement('div');
        newdiv.innerText="asdflkjasfldjlkdsafj";
        /*let wait = true, t = 0;
        for (let i =0; i<cards.length; i++){
            let cardButton = document.createElement('button');
            cardButton.innerText=cards[i].name;
            cardButton.setAttribute('index', i);
            cardButton.onclick = function(){
                newdiv.remove();
                return cards[this.getAttribute('index')];
                wait=false;                
            }
            newdiv.appendChild(cardButton);
        }*/
        var newbutton = document.createElement('button');
        newbutton.innerHTML="TEXTONABUTTON";
        newbutton.onclick=function(){alert("clicked")}
        document.getElementsByTagName('body')[0].appendChild(newbutton);
        //newdiv.appendChild(newbutton);
        return cards[0];

    }
}

class Game {
    constructor(playerArray = [], numberOfDecksToPlay = 1, cardsPerHand = 3){
        this.cardsPerHand=cardsPerHand;
        this.buildDeck();
        this.numRounds = 0;
        this.numberOfDecksToPlay = numberOfDecksToPlay;
        this.decksPlayed = 0;
        this.players=playerArray;
        this.winners=[];
        if (playerArray.length<2)
            alert("Must have at least two players to construct Game");
    }
    playRound(){
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

        //report the cards played
        let reportString="";
        this.players.forEach( function(player){
            reportString+=player.name+" played "+player.card.name+"("+player.card.damage+"). ";
        });
        document.getElementsByTagName('body')[0].innerText+=reportString+"\n";

        //give the winner(s) points
        this.players.forEach( function(player){
            if (player.card.damage==bestCard.damage)
                player.winRound();
        });
        document.getElementsByTagName('body')[0].innerText+="\n";
    }
    start(){
        let startingText = "Players: ";
        for (let player of this.players){
            startingText+=player.name+", ";
        }
        startingText+="\nPlaying "+this.numberOfDecksToPlay+" decks with "+this.cardsPerHand+" cards in each hand:\n\n\n";

        document.getElementsByTagName('body')[0].innerText=startingText;

        while (this.decksPlayed<=this.numberOfDecksToPlay){
            while (this.cardsRemaining.length > (this.players.length*this.cardsPerHand) )
                this.playRound();
            this.buildDeck();
            this.decksPlayed++;
        }
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
        if (this.winners.length>1)
            document.getElementsByTagName('body')[0].innerText+="\n\n\nGame Over. Winners are:\n\n"; 
        else
            document.getElementsByTagName('body')[0].innerText+="\n\n\nGame Over. Winner is:\n\n"; 

        this.winners.forEach( function (player){
            document.getElementsByTagName('body')[0].innerText+=player.name+":   "+player.points+" points\n";
        });

        window.scrollTo(0,document.body.scrollHeight);
        console.log(this.winners[0].name);
    }
    buildDeck(){
        this.cardsPlayed=[];
        this.cardsRemaining=pokeCards.slice(0,pokeCards.length);
        this.cardsRemaining=shuffle(this.cardsRemaining);
    }
}

