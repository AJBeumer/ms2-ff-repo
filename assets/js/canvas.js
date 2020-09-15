document.querySelector("#startFight").addEventListener("click", function () {
    document.querySelector("#bossFight").style.display = "block";
    document.querySelector("#welcomeText").style.display = "none";
    document.querySelector("#introButton").style.display = "none";
});


// GLOBAL VARIABLES
let savedDragonMove;
let playerHealth = 100;
let botHealth = 100;

//Turn counters

let totRounds = 0;

//DOCUMENT VARIABLES

let sum;
let playByPlay = document.getElementById('battleText');
let playerHealthBar = document.getElementById('playerHealthBar');
let botHealthBar = document.getElementById('botHealthBar');
let attackButton = document.getElementById('attack');
let counterButton = document.getElementById('counter');


function enableButtons() {
    attackButton.disabled = false;
    counterButton.disabled = false;
}

/* TURNS BOTH USER AS BOT*/

// HTML TRIGGER
function fight(id) {
    addRound();
    dragonMove(id);
    hpChange();
    gameOver();
}
// ROUND ADD FOR FUTURE IMPLEMENTATION
function addRound() {
    totRounds += 1;
}

// COUNTER ACTION
function counter(y, c) {
    let move = Math.floor((Math.random()*5));
    if (move >= 3 && y === 'attack') {
        sum = 'The counter of the Dragon was a success! You took 10 damage';
        playerHealth -= 10;
    } else if (move >= 3 && y === 'counter') {
        sum = 'Your counter was successful! Dragon took 10 damage';
        botHealth -= 10;
    } else if (move < 3 && y === 'attack') {
        sum = 'The counter of the Dragon failed! You dealt 15 damage!';
        botHealth -= 15;
    } else if (move < 3 && y === 'counter') {
        sum = 'Your counter failed and you were dealt 15 damage!';
        playerHealth -= 15;
    }

}

//BATTLE TEXT
function showBattleText() {
    let batText = document.getElementById('battleText');
    batText.style.display = "block";
}


// Displays results of the round
function roundResults(sum) {
    playByPlay.innerHTML = sum + "<br>";
}

function hpChange() {
    playerHealthBar.style.width = playerHealth + "%";
    botHealthBar.style.width =  botHealth + "%";

    if (playerHealth <75){
        playerHealthBar.style.backgroundColor = `#297521`;
    }
    if (botHealth < 75){
        botHealthBar.style.backgroundColor = `#297521`;
    }

    if (playerHealth < 45){
        playerHealthBar.style.backgroundColor = `#943c26`;
    }
    if (botHealth <45){
        botHealthBar.style.backgroundColor = `#943c26`;
    }
    if (playerHealth < 25){
        playerHealthBar.style.backgroundColor = `#c9320c`;
    }
    if (botHealth <25){
        botHealthBar.style.backgroundColor = `#c9320c`;
    }

    if (playerHealth === 0 || botHealth === 0){
        document.querySelector("#enterSite").style.display = "block";
    }


}



function gameOver() {
    if (playerHealth === 0 && botHealth === 0) {
        sum = 'Its a tie!';
        roundResults(sum);
        attackButton.disabled = true;
        counterButton.disabled = true;

    }

    if (playerHealth === 0) {
        sum = 'You died. Press f5 and try again!';
        roundResults(sum);
        attackButton.disabled = true;
        counterButton.disabled = true;

        document.querySelector("#enterSite").style.display = "none";
        document.querySelector("#bossFight").style.display = "block";

    }

    if (botHealth === 0){
        attackButton.disabled = true;
        counterButton.disabled = true;
        document.querySelector("#enterSite").style.display = "block";
        document.querySelector("#bossFight").style.display = "none";
    }
}


// PLAYER MOVE AND AFTER DRAGON MOVE FUNCTION
function dragonMove(id) {
    let move = Math.floor((Math.random()*4)+1);
    if (move <= 3) {
        savedDragonMove =  'attack';
    } else {
        savedDragonMove = 'counter';
    }
    sum = ('player move <span>'+ id + '</span> and move of the dragon <span>' + savedDragonMove + '</span> in fight ' + totRounds);
    damageStep(id, savedDragonMove);
    roundResults(sum);

}

//PROCESSING OF MOVES
function damageStep(y, c) {
    if ( y === 'attack' && c === 'attack') {
        sum = 'Both are damaged!';
        if (botHealth >= 10 && playerHealth >= 10) {
            botHealth -= 10;
            playerHealth -= 10;
        } else {
            botHealth = 0;
            playerHealth = 0;
        }
    } else if ( y === 'counter' && c === 'counter') {
        sum = 'Your defence fell!';
    } else if ( y === 'attack' && c === 'counter') {
        sum = 'Dragon looks defensive and is preparing for a counter attack.';
        counter(y, c);
    } else if ( y === 'counter' && c === 'attack') {
        sum = 'You took a defensive stance and prepare to counter';
        counter(y, c);
    }
}


window.onload=enableButtons();