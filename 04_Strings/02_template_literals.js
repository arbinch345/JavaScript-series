// Template literals: special type of strings formed by using "``"(backtick) and can embed expression

let specialstring = `This is special type of string`
console.log(specialstring);
console.log(typeof specialstring);

// Difference in normal string and special string
let obj = {
    item: "pen",
    price: "10",
};

//template literals: easy to use
let output = `the cose of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

//normal use of string
console.log("the cost of", obj.item, "is", obj.price, "rupees.");

// Used expressions
let str = `This is the template literal ${1+2+3}.`
console.log(str);

// Escape character in literal string
console.log("Bro\nCode")   // change the line/paragraph
console.log("Bro\tCode")   // Tab space

let str2 = "bro\t Code"
console.log(str2.length)        // count the tab space too.


//  string interpolation: to create strings by doing substitution of placeholder.
// string text $ {expression} string text    (f-string)