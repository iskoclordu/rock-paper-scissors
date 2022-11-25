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

function singleRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase()=='rock'&&computerSelection=='Rock'){
        let message='No Winner! It\'s a tie';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}.\n${message}`;
    }

    else if (playerSelection.toLowerCase()=='rock'&&computerSelection=='Paper') {
        let message='You Lose! Paper beats Rock.';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}.\n${message}`;
    }

    else if (playerSelection.toLowerCase()=='rock'&&computerSelection=='Scissors') {
        let message='You Win! Rock beats Scissors.';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}.\n${message}`;
    }




    else if (playerSelection.toLowerCase()=='paper'&&computerSelection=='Rock') {
        let message='You Win! Paper beats Rock.';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}.\n${message}`;
    }

    else if (playerSelection.toLowerCase()=='paper'&&computerSelection=='Paper') {
        let message='No Winner! It\'s a tie';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}.\n${message}`;
    }

    else if (playerSelection.toLowerCase()=='paper'&&computerSelection=='Scissors') {
        let message='You Lose! Scissors beats Paper.';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}.\n${message}`;
    }


    

    else if (playerSelection.toLowerCase()=='scissors'&&computerSelection=='Rock') {
        let message='You Lose! Rock beats Scissors.';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}.\n${message}`;
    }

    else if (playerSelection.toLowerCase()=='scissors'&&computerSelection=='Paper') {
        let message='You Win! Scissors beats Paper.';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}.\n${message}`;
    }

    else if (playerSelection.toLowerCase()=='scissors'&&computerSelection=='Scissors') {
        let message='No Winner! It\'s a tie';
        return `You choose ${playerSelection}. Computer choose ${computerSelection}. \n${message}`;
    }
    
    else {
        let message='Please check your weapon choice!';
        return `${message}`;
    }
}

function game(){
    for (let i=1; i<6; i++){
        if (i) {
        let computerSelection= getComputerChoice();
        let playerSelection=prompt("Choose your weapon!Rock, Paper or Scissors?");
        console.log(singleRound(playerSelection,computerSelection));
        console.log(`Round ${i}`);
        }
    }
}

game();

