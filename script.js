let array=[
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice(){
    return array[Math.floor(Math.random()*array.length)];
}
let computerChoice= getComputerChoice();
console.log(computerChoice);
