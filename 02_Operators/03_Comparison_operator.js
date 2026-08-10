// Comparison Operator: Comparison operators are used to compare two values
// Always return "true" or "false"

// == : Equals to
let a = 5;
let b = 2;
let c = "5";

console.log("a == b:", a==b);
console.log("a == c:", a == c);    // prints true, accepts strings too

// === : equal value and equal type
let z = 5;
let o = "10";

console.log("z === 5: ",z === 5);    // (true) because the value assign is same and the type is "int"
console.log("o === '10':",o === 10);        // (false) Here the value assign is string but compare with "integer"

// != : Not equal to
let x = 5;
let y = 8;

console.log("x != y:", x!=y);

// !== : not equal value or not equal type
let d = 8

console.log("d !== 5:",d !== 5);
console.log("d !== '5':",d !== "5");
console.log("d !== 8:",d !== 8);

// > : greater than
let m = 99;
let n = 55;

console.log("m > n: ", m > n);

// < : less than
let p = 33;
let q = 15;

console.log("p < q: ", p < q);

// >= greater than equal to
let r = 5;
let s = 5;

console.log("r >= s: ",r >= s);   // In 5 is also included in greater than equal to

// <= : less than equal to
let u = 55;
let v = 22;

console.log("u <= v: ", u <= v);    // u is greater than v

// Note: Comparison operators can be used in conditional statements to compare values and take action depending on the result.