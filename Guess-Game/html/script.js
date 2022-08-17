'use strict';

const getUserName = prompt('Are you ready to play? please fill in your name').trim();
ocument.querySelector('.user').textContent = 'Welcome ' + getUserName;

if (!getUserName || getUserName === '.') {
    document.querySelector('.user').textContent = 'You are playing as a Guest';
}
console.log(typeof(getUserName));

// CREATE THE HIDDEN NUMBER
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log(secretNumber);

//THE CHECK CLICK EVENT
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No number!";
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "😆 Guess matches!";
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Number is too high!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost!";
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Number is too low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost!";
            document.querySelector('.score').textContent = 0;
        }

    }
});

// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
    //document.querySelector('.number').textContent = secretNumber;
})


