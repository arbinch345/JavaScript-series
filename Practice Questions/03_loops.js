// Qn.1. Print all the even numbers from 0 to 100

for (i=0; i<=100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Qn.2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 5;
let userNum = prompt("Guess the game number: ");

while (userNum != gameNum) {
    prompt("You entered wrong number. Guess again: ")
}
console.log("congratulations! you entered the right number!")