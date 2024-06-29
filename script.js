'use strict';

const displayMessage = function(message)
{
    document.querySelector(".message").textContent = message;
}

let randomNumber = Math.trunc(Math.random()*20+1);
document.querySelector(".number").value = randomNumber;
let score = 20;
let highscore = 0;

//check button

document.querySelector(".check").addEventListener("click" ,function ()
{
    const guess = Number(document.querySelector(".guess").value);
    if(guess!==randomNumber)
    {
        displayMessage(guess > randomNumber ? 'High ⬆️':'Low ⬇️');
        if(score<=0)
        {
           displayMessage(' You Lost Nigga 💀');
        }
        else
        {
            score--;
            document.querySelector(".score").textContent = score;
        }
    }
    else if(guess === randomNumber)
    {
        displayMessage('Ewww 💯');
        document.querySelector("body").style.backgroundColor = '#2f8b44';

        if(score>highscore)
        {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
    else
    {
        displayMessage("💀 Invalid Input");
    }
});

//again button

document.querySelector(".again").addEventListener("click", function ()
{
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = '';
    randomNumber = Math.trunc(Math.random()*20+1);
    document.querySelector(".number").value = randomNumber;
    // document.querySelector(".number").textContent = randomNumber;
    displayMessage('Start guessing...');
    document.querySelector("body").style.backgroundColor = '#222';
});