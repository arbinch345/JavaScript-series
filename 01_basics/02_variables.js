// Vairables: containers for data      (single line comment)

// const (constant): values cannot be changed
const account_ID = 144553
// var (variable):  old method to define variable 
var account_pwd = "Bro123"
// let: modern way to declare variable (change the value)
let account_Email = "Bro@fake.com"
// Automatic way to declare variables
account_City = "New_york"        // Not good way to declare variable
// Undefined variable
let account_State;

// account_ID = 2        // not allowed to change because it is constant

// Method to print
console.log(account_ID)
console.log(account_pwd)
console.log(account_Email)
console.log(account_City)
console.log(account_State)

console.table([account_ID, account_pwd, account_Email, account_City, account_State])

// Multiline comment
/*
Note: (var) should not be used 
because of issue in block scope and functional scope
*/