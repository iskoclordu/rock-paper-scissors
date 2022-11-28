let array=[
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice(){
    return array[Math.floor(Math.random()*array.length)];
}

function singleRound(){
    let x= prompt("Choose your weapon!Rock, Paper or Scissors?");
    let y= getComputerChoice();
    if (x.toLowerCase()=='rock'&&y=='Rock'){
        let message='No Winner! It\'s a tie';
        return `You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='rock'&&y=='Paper') {
        let message='You Lose! Paper beats Rock.';
        return `You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='rock'&&y=='Scissors') {
        let message='You Win! Rock beats Scissors.';
        return `You choose ${x}. Computer choose ${y}.\n${message}`;
    }




    else if (x.toLowerCase()=='paper'&&y=='Rock') {
        let message='You Win! Paper beats Rock.';
        return `You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='paper'&&y=='Paper') {
        let message='No Winner! It\'s a tie';
        return `You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='paper'&&y=='Scissors') {
        let message='You Lose! Scissors beats Paper.';
        return `You choose ${x}. Computer choose ${y}.\n${message}`;
    }


    

    else if (x.toLowerCase()=='scissors'&&y=='Rock') {
        let message='You Lose! Rock beats Scissors.';
        return `You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='scissors'&&y=='Paper') {
        let message='You Win! Scissors beats Paper.';
        return `You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='scissors'&&y=='Scissors') {
        let message='No Winner! It\'s a tie';
        return `You choose ${x}. Computer choose ${y}. \n${message}`;
    }
    
    else {
        let message='Please check your weapon choice!';
        return `${message}`;
    }
}

function game(){
    for (let i=1; i<6; i++){
       
        console.log(singleRound());
        console.log(`Round ${i}`);
        
    }
}

game();

