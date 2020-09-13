document.querySelector("#startFight").addEventListener("click", function () {
    document.querySelector("#bossFight").style.display = "block";
    document.querySelector("#welcomeText").style.display = "none";
    document.querySelector("#introButton").style.display = "none";
});

// each player chooses a move
// defense goes first (player then comp)
// attacks go second (player then comp)
// health gets minus as attacks land



//Global variables >>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let savedCompMove;
let playerHealth = 100;
let botHealth = 100;

//Turn counters >>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let totRounds = 0;

//Document rewrites >>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let res;
let playByPlay = document.getElementById('announcements');
let playerHealthBar = document.getElementById('playerHealthBar');
let botHealthBar = document.getElementById('botHealthBar');
let attackButton = document.getElementById('attack');
let counterButton = document.getElementById('counter');

//Run on load >>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function enableButtons() {
    attackButton.disabled = false;
    counterButton.disabled = false;
}

//Moves >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Shared Functions >>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// triggers the fight in the HTML
function fight(id) {
    addRound();
    compMove(id);
    healthChange();
    gameOver();
}
// adds a round to the round counters
function addRound() {
    totRounds += 1;
}

//adds the counter action to attack
function counter(y, c) {
    let move = Math.floor((Math.random()*5));
    if (move >= 3 && y === 'attack') {
        res = 'Computers counter was successful! You took 10 damage';
        playerHealth -= 10;
    } else if (move >= 3 && y === 'counter') {
        res = 'Your counter was successful! Comp took 10 damage';
        botHealth -= 10;
    } else if (move < 3 && y === 'attack') {
        res = 'Computer counter failed! You dealt 15 damage!';
        botHealth -= 15;
    } else if (move < 3 && y === 'counter') {
        res = 'Your counter was not successful! You were dealt 15 damage!';
        playerHealth -= 15;
    }

}

function showAnnouncements() {
    let Ann = document.getElementById('announcements');
    Ann.style.display = "block";
}


// Displays results of the round
function roundResults(res) {
    playByPlay.innerHTML = res + "<br>";
}

function healthChange() {
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
        res = 'Its a tie!';
        roundResults(res);
        attackButton.disabled = true;
        counterButton.disabled = true;

    }

    if (playerHealth === 0) {
        res = 'You died. Press f5 and try again!';
        roundResults(res);
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

//The Game >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Takes the moves of the player and generates one for the comp and then runs the damage step
function compMove(id) {
    let move = Math.floor((Math.random()*4)+1);
    if (move <= 3) {
        savedCompMove =  'attack';
    } else {
        savedCompMove = 'counter';
    }
    res = ('your move is <span>'+ id + '</span> and the computers move is <span>' + savedCompMove + '</span> on round ' + totRounds);
    damageStep(id, savedCompMove);
    roundResults(res);

}

//processes the moves to a result
function damageStep(y, c) {
    if ( y === 'attack' && c === 'attack') {
        res = 'Both players took damage';
        if (botHealth >= 10 && playerHealth >= 10) {
            botHealth -= 10;
            playerHealth -= 10;
        } else {
            botHealth = 0;
            playerHealth = 0;
        }
    } else if ( y === 'counter' && c === 'counter') {
        res = 'Defensive stances taken in vain';
    } else if ( y === 'attack' && c === 'counter') {
        res = 'Comp took a defensive stance and prepares to counter';
        counter(y, c);
    } else if ( y === 'counter' && c === 'attack') {
        res = 'You took a defensive stance and prepare to counter';
        counter(y, c);
    }
}


window.onload=enableButtons();