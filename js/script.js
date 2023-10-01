'use strict';
let SecretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage= function (message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click',function(){
    const guess = Number(document.querySelector('.guess').value);
       console.log(guess, typeof guess);
       if(!guess){
        displayMessage('😔 No number!');
    }
    else if (guess === SecretNumber){
        displayMessage('🎉 Correct number!');
        //change background color
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = 
        '30rem';
        document.querySelector('.number').textContent = SecretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = 
            highScore;
        }
    }
    else if(guess !== SecretNumber){
        if(score > 1){
        displayMessage(guess > SecretNumber ? '📈 Too high!' : '📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('😢You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener
('click',function(){
    SecretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})
