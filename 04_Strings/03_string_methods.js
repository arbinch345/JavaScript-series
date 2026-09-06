// string methods: Built-in functions to manipulate a string

// toUppercase():

let str1 = "Hello";
console.log(str1.toUpperCase());

// toLowercase():
let str2 = "BRO CODe";
console.log(str2.toLowerCase());

// trim(): trim the space of front and end not in the middle
let str3 = "      I am learning      JS        ";
console.log(str3.trim());

// slice(start, end): return parts of string
let str4 = "123456789";
console.log(str4.slice(4, 6));

// concat(): joins two strings
let a = "Bro";
let b = "Code";

console.log(a.concat(b))

let res = "Hello " + a + b;
console.log(res);

let result = a.concat(b);
console.log(result);

// replace(search val, new val):
let str5 = "Hellololo";

console.log(str5.replace("H", "M"));
console.log(str5.replace("lo", "lu"));    // replace only the first value
console.log(str5.replaceAll("lo", "lu"));   // replace all the matching value

// charAT(index): prints character at the index number
let i = "IloveYou";

console.log(i.charAt(5));
console.log(i[0]);              // You can also access the char like this

/*
    Original string value can't be changed because string is immutable.
    If you have to change the string you have to make new string.
*/
