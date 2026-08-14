// Get user to input a number using ("Enter a number: "). Check if the number is a multiple of 5 or not.

let num = prompt("Enter a number: ");

if (num % 5 === 0) {
    console.log(num, "is multiple of 5!");
} else {
    console.log(num, "is not a multiple of 5!");
}
console.log(user);


/*
Write a code which can give grades to students according to their grades.
. 80-100 --> A
. 70-89 --> B
. 60-69 --> C
. 50-59 --> D
. 0-49 --> F
*/

let mark = prompt("Enter the marks: ")

if (mark >= 80 && mark <= 100) {
    console.log("You've got 'A' grade.")
} else if (mark >= 70 && mark <= 89) {
    console.log("You've got 'B' grade.")
} else if (mark >= 60 && mark <= 69) {
    console.log("You've got 'C' grade.")
} else if (mark >= 50 && mark <= 59) {
    console.log("You've got 'D' grade.")
} else {
    console.log("You've got 'F' grade.")
}


// Note: To do this exercise, you need console. Not doable in the vscode terminal