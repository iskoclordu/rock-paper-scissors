let array=[
    "Rock",
    "Paper",
    "Scissors"
];

let winner='' ;

function getComputerChoice(){
    return array[Math.floor(Math.random()*array.length)];
}

function singleRound(x){
    let y= getComputerChoice();
    if (x.toLowerCase()=='rock'&&y=='Rock'){
        winner = 'Draw';
        return message=`You choose ${x}. Computer choose ${y}.`;
        
    }

    else if (x.toLowerCase()=='rock'&&y=='Paper') {
        winner = 'Computer';
        return message=`You choose ${x}. Computer choose ${y}.`;
        
        
    }

    else if (x.toLowerCase()=='rock'&&y=='Scissors') {
        winner = 'Human';
        return message=`You choose ${x}. Computer choose ${y}.`;
    }




    else if (x.toLowerCase()=='paper'&&y=='Rock') {
        winner = 'Human';
        return message=`You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='paper'&&y=='Paper') {
        winner = 'Draw';
        return message=`You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='paper'&&y=='Scissors') {
        winner = 'Computer';
        return message=`You choose ${x}. Computer choose ${y}.\n${message}`;
    }


    

    else if (x.toLowerCase()=='scissors'&&y=='Rock') {
        winner = 'Computer';
        return message=`You choose ${x}. Computer choose ${y}.\n${message}` ;
    }

    else if (x.toLowerCase()=='scissors'&&y=='Paper') {
        winner = 'Human';
        return message=`You choose ${x}. Computer choose ${y}.\n${message}`;
    }

    else if (x.toLowerCase()=='scissors'&&y=='Scissors') {
        winner = 'Draw';
        return message=`You choose ${x}. Computer choose ${y}. \n${message}`;
    }
    
    else {
    
    }
}

function game(n){
    for (let i=1; i<=n; i++){
       
        console.log(singleRound());
        console.log(`Round ${i}`);
        
    }
}

const resultContainer=document.querySelector('.result');

const result=document.createElement('div');
result.classList.add('result-round');
resultContainer.appendChild(result);

const win=document.createElement('p');
win.classList.add('winner-text');
resultContainer.insertBefore(win,result);
win.textContent='Winner:'



const score= document.createElement('div');
score.classList.add('result-score');
resultContainer.appendChild(score);
let p=0
let c=0
score.textContent= `Human: ${p} - Computer: ${c}`;



const rock= document.querySelector('#rock');
rock.addEventListener('click',function(){
    singleRound('rock');
    win.textContent = 'Winner is: ' + winner;
    result.textContent = message;
    

        if (winner==='Human') {
            p += 1
            
        }

        else if (winner==='Computer') {
            c += 1
        }

        else {}
  
        score.textContent=`Human: ${p} - Computer: ${c}`;
        message='';

        if (p+c===5) {

            if(p>c) {
                score.textContent=`Human: ${p} - Computer: ${c}/ Winner is Human.` 

            }

            else {
                score.textContent=`Human: ${p} - Computer: ${c}/ Winner is Computer.`
            }

            p=0
            c=0


        } 
});

const paper= document.querySelector('#paper');
paper.addEventListener('click',function(){
    singleRound('paper');
    win.textContent = 'Winner is: ' + winner;
    result.textContent = message;
    

        if (winner==='Human') {
            p += 1
        }

        else if (winner==='Computer') {
            c += 1
        }

        else {}
  
        score.textContent=`Human: ${p} - Computer: ${c}`;
        message='';

        if (p+c===5) {

            if(p>c) {
                score.textContent=`Human: ${p} - Computer: ${c}/ Winner is Human.` 

            }

            else {
                score.textContent=`Human: ${p} - Computer: ${c}/ Winner is Computer.`
            }

            p=0
            c=0


        } 
});

const scissors= document.querySelector('#scissors');
scissors.addEventListener('click',function(){
    singleRound('scissors');
    win.textContent = 'Winner is: ' + winner;
    result.textContent = message;
    

        if (winner==='Human') {
            p += 1
        }

        else if (winner==='Computer') {
            c += 1
        }

        else {}
  
        score.textContent=`Human: ${p} - Computer: ${c}`;
        message='';

        if (p+c===5) {

            if(p>c) {
                score.textContent=`Human: ${p} - Computer: ${c}/ Winner is Human.` 

            }

            else {
                score.textContent=`Human: ${p} - Computer: ${c}/ Winner is Computer.`
            }

            p=0
            c=0


        } 
});

