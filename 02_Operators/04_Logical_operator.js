// Logical Operator: Evaluate multiple expression and provide final answer in the form of boolean.

// Logical AND (&&): Provides "true" if the all the condition is true, else false.
let a = 6;
let b = 5;

// let cond1 = a > b;  // true
let cond1 = a < b;  // false
let cond2 = a === 6;  // true
console.log("cond1 && cond2 =", cond1 && cond2); // false

// Logical OR (||): returns "false" if all the condition is false, else returns "true"
let x = 6;
let y = 5;

// let cond3 = x > y;   // condition true
let cond3 = x < y;      // condition false
let cond4 = x == y;     // condition false
console.log("cond3 || cond4 = ", x < y || x == y);  // false

// Logical NOT (!): reverse the condition and return the answer
m = 10;
n = 11;

console.log("m > n:", !(m > n))  // condition "false" but return true