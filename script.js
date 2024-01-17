//create two classes
//player class
//Game Class

let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')



const gameUpdate = (p1, p2, gameState) => {
    p1NameDiv.innerText = p1.name;
    p2NameDiv.innerText = p2.name;
    p1HealthDiv.innerText = p1.health;
    p2HealthDiv.innerText = p2.health;

    //condition if either of the player <=0 then set to isOver is true and declare the winner
    if(p1.health <= 0 || p2.health <= 0) {
        game.isOver = true;
        gameState = game.isOver;
        resultDiv.innerText =
        game.declareWinner(p1,p2,game.isOver);
        return gameState;
    }

}


class Player {
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackDmg = attackDamage;
    }

    //strke the damage by random number select from 0 
    strike(player, enemy, attackDmg) {
        let damageAmount = Math.ceil(Math.random() * attackDmg);
        enemy.health -= damageAmount;
        gameUpdate(player,enemy,game.isOver);
        return `${player.name} attacks ${enemy.name} for ${damageAmount} damage!`;
    }

    //player healing function

    heal(player) {
        //select the random number between 1 - 5 and store in hpAmount

        let hpAmount = Math.ceil(Math.random() * 5);
        player.health += hpAmount;
        gameeUpdate(p1,p2,game.isOver);
        return `${player.name} heals for ${hpAmount} HP!`;
    }

}

class Game {
    constructor() {
        this.isOver = false;
    }

    declareWinner(isOver,p1,p2) {
        //if the game is over and a player has 0 health declare the winner
    
        //Create a message variable that will display the message based on the condition
        // let message;

        if(isOver == true && p1.health <= 0) {
            message = `${p2.name} WINS!`;
        }else if(isOver == true && p2.health <= 0) {
            message = `${p1.name} WINS!`;
        }

        return message;

    }

    reset(p1,p2) {

    }

    play(p1,p2) {

    }
}


let player1 = new Player('Sanam', 100, 10);
let player2 = new Player('Sanjog', 100, 10);

let p1 = player1;
let p2 = player2;

//create a object for Game class
let game = new Game()

//Intialize the game by calling the gameUpdate function
gameUpdate(p1,p2,game.isOver)

let gameState;
// player1 controls

document.addEventListener('keydown', function(e) {
    if(e.key == 'q' && p2.health > 0 && game.isOver == false) {
        p1.strike(p1,p2,p1.attackDmg);
    }
}); 