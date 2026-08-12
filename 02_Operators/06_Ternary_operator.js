// Ternary operator: takes three operands
/*
syntax: condition? true output: false output
meaning: when the "a" condition is true, executes the first line of code,
else execute second one
simpler/compact if-else.
*/

// let age = 25;
let age = 16;

let result = age >= 18 ? "adult" : "not adult";
console.log(result)

// another way or printing the same thing (do not prefer this)
age >= 18 ? console.log("adult") : console.log("not adult");