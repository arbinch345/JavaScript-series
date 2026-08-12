// Conditional Statements: To implement some condition in the code

// if statement: Use if to specify a code block to be executed, if a specified condition is true.
// let age = 18;

// if (age>=18) {
//     console.log("can vote");
// }

// if (age < 18) {
//     console.log("cannot vote");
// }

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log(color);


// else statement: Use else to specify a code block to be executed, if the same condition is false
let age = 16;

if (age >= 18) {
    console.log("vote");
} else {
    console.log("cannot vote");
}

// find the number is even or odd
let number = 0;

if (number % 2 === 0) {
    console.log(number, "is Even Number!");
} else {
    console.log(number, "is Odd Number!");
}

// syntax -> rules

// else-if statement: check multiple condition
num1 = 8;
num2 = 10;
num3 = 5;

if (num1 > num2 && num1 > num3) {
    console.log(num1, "is the greatest number!")
} else if (num2 > num1 && num2 > num3) {
    console.log(num2, "is greatest number!")
} else {
    console.log(num3, "is the greatest number!")
} 