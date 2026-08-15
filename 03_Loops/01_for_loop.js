// Loops: loops are used to execute a piece of code again & again.

/*
for loop: The for statement creates a loop with 3 optional expressions:

syntax: for loop
for (expr1; expr2; expr3) {
  // code block to be executed
}
*/

// Print 1 to 5
// for (let i = 1; i<=5; i++) {
//     console.log("Hello")
// }


// Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum = ",sum);


// Calculate sum of 1 to n
let sum = 1;
let n = 10;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("sum = ",sum);

// print 1 to 5
for (i = 1; i <= 6; i++) {
    console.log("i = ",i)
}