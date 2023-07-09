"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// /* This function in order to replace with duplicated expression */
// const displayMessage = (message) => (document.querySelector(".message").textContent = message);

// document.querySelector(".again").addEventListener("click", function () {
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     score = 20;
//     document.querySelector(".score").textContent = score;
//     // document.querySelector(".message").textContent = "Start guessing...";
//     displayMessage("Start guessing...");
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".guess").value = "";
//     document.querySelector(".number").textContent = "?";
//     document.querySelector(".number").style.width = "15rem";
// });

// document.querySelector(".check").addEventListener("click", function () {
//     const guess = +document.querySelector(".guess").value;

//     // When no input
//     if (!guess) {
//         //document.querySelector(".message").textContent = "⛔ No number!";
//         displayMessage("⛔ No number!");
//     } // When Player wins
//     else if (guess === secretNumber) {
//         //document.querySelector(".message").textContent = "🎉 Correct number!";
//         displayMessage("🎉 Correct number!");
//         document.querySelector(".number").textContent = secretNumber;
//         document.querySelector("body").style.backgroundColor = " #60b347";
//         document.querySelector(".number").style.width = "30rem";
//         if (score > highscore) {
//             highscore = score;
//             document.querySelector(".highscore").textContent = highscore;
//         }
//     } // When guess is wrong (Shorter option for duplicated code below)
//     else if (guess !== secretNumber) {
//         if (score > 1) {
//             //document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
//             displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
//             score--;
//             document.querySelector(".score").textContent = score;
//         } else {
//             // document.querySelector(".message").textContent = "💥 You lost the game!";
//             displayMessage("💥 You lost the game!");
//             document.querySelector(".score").textContent = 0;
//         }
//     }

//     /******************  We can make shorter duplicated code as we change below code to above code **********************/

//     // // When guess is high
//     // else if (guess > secretNumber) {
//     //     if (score > 1) {
//     //         document.querySelector(".message").textContent = "📈 Too high!";
//     //         score--;
//     //         document.querySelector(".score").textContent = score;
//     //     } else {
//     //         document.querySelector(".message").textContent = "💥 You lost the game!";
//     //         document.querySelector(".score").textContent = 0;
//     //     }
//     // } //When guess is low
//     // else if (guess < secretNumber) {
//     //     if (score > 1) {
//     //         document.querySelector(".message").textContent = "📉 Too low!";
//     //         score--;
//     //         document.querySelector(".score").textContent = score;
//     //     } else {
//     //         document.querySelector(".message").textContent = "💥 You lost the game!";
//     //         document.querySelector(".score").textContent = 0;
//     //     }
//     // }
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const againBtn = document.querySelector(".again");
const scoreElement = document.querySelector(".score");
const guessElement = document.querySelector(".guess");
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

checkBtn.addEventListener("click", function () {
    const guess = +guessElement.value;

    if (!guess) {
        message.textContent = "No number! ⛔";
    } else if (guess === secretNumber) {
        message.textContent = "Correct number! 🏆";
        number.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        message.textContent = "Wrong number! 💥";
        if (score > 1) {
            message.textContent = guess > secretNumber ? "📈Too high" : "📉 Too low";
            score--;
            scoreElement.textContent = score;
        } else {
            message.textContent = "💥 You lost the game!";
            scoreElement.textContent = 0;
        }
    }
});

againBtn.addEventListener("click", function (e) {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);
    score = 20;
    scoreElement.textContent = score;
    document.body.style.backgroundColor = "#222";
    message.textContent = "Start guessing ...";
    guessElement.value = "";
    number.textContent = "?";
});
