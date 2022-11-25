let array=[
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice(){
    return array[Math.floor(Math.random()*array.length)];
}
let computerSelection= getComputerChoice();

let playerSelection=prompt("Choose your weapon!Rock, Paper or Scissors?");

function singleRound(){
    if (playerSelection.toLowerCase()=='rock'&&computerSelection=='Rock'){
        let message='No Winner! It\'s a draw';
        console.log(message);
    }

    else if (playerSelection.toLowerCase()=='rock'&&computerSelection=='Paper') {
        let message='You Lose! Paper beats Rock.';
        console.log(message);
    }

    else if (playerSelection.toLowerCase()=='rock'&&computerSelection=='Scissors') {
        let message='You Win! Rock beats Scissors.';
        console.log(message);
    }




    else if (playerSelection.toLowerCase()=='paper'&&computerSelection=='Rock') {
        let message='You Win! Paper beats Rock.';
        console.log(message);
    }

    else if (playerSelection.toLowerCase()=='paper'&&computerSelection=='Paper') {
        let message='No Winner! It\'s a draw';
        console.log(message);
    }

    else if (playerSelection.toLowerCase()=='paper'&&computerSelection=='Scissors') {
        let message='You Lose! Scissors beats Paper.';
        console.log(message);
    }


    

    else if (playerSelection.toLowerCase()=='scissors'&&computerSelection=='Rock') {
        let message='You Lose! Rock beats Scissors.';
        console.log(message);
    }

    else if (playerSelection.toLowerCase()=='scissors'&&computerSelection=='Paper') {
        let message='You Win! Scissors beats Paper.';
        console.log(message);
    }

    else if (playerSelection.toLowerCase()=='scissors'&&computerSelection=='Scissors') {
        let message='No Winner! It\'s a draw';
        console.log(message);
    }
    
    else {
        let message='Please check your weapon choice!';
        console.log(message);
    }
}

singleRound();
