let randomNumber= parseInt(Math.random()*2000+1);
const submit = document.querySelector('#subt');
console.log(submit);
const userInp = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowhi = document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p');
let preGuess=[];
let numGuess= 1;
let playgame = true;
if (playgame) {
    if (userInp && submit) {
        submit.addEventListener('click', function(e) {
            e.preventDefault();

            const guess = parseInt(userInp.value);
            console.log(guess);
            validateGuess(guess);
            userInp.value =" ";
        });
    } else {
        console.error('Submit button or user input not found');
    }
}
function validateGuess(guess){
    if(guess<1 || guess>2000 || isNaN(guess)){
        alert("enter a valid number");
    }
    else{
        preGuess.push(guess);
        if(numGuess==11){
            display("you have reached maximum guesses. GAME OVER !!");
            
        setTimeout(()=>{
            display(`Random no is ${randomNumber}`)
            }
            ,5000);
        
        endgame();}
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}
function checkguess(guess){
    if(guess==randomNumber){
        display("you guesssed it right");
        endgame();
    }
    else if(guess>randomNumber){
        display("Number is too large");
    }
    else{
        display("Number is too small");
    }
}
function displayguess(guess){
     numGuess++;
     remaining.innerHTML= `${11-numGuess}`;
     guessSlot.innerHTML += ` ${guess}`;

}
function display(message){
    lowhi.innerHTML= `<h2>${message}</h2>`;
}
function endgame(){
    userInp.value = '';
    userInp.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newgame();
}
function newgame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      preGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInp.removeAttribute('disabled');
      display("");
      startOver.removeChild(p);
      playgame = true;
});
}