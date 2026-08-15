// special loops: help to iterate in some special data types

// for-of: used in strings and array not in objects

/*
    for (let val of strVar) {
        // do some work
    }
*/

// let str = "JavaScript";

// for (let i of str) { // i automatically takes the value (no initialization, updation and stops needed) 
//     console.log("i = ",i);    // iterate
// }


// print size of the strings
let str = "BroCode";
let size = 0;

for (let i of str) {
    console.log("i = ",i);
    size++;
}

console.log("String Size = ",size);

// note: "i" is universal to use as using other letters throw an error!

// for-in: used in objects and arrays.
let student = {
    name: "Rahul Kumar",
    age: 20,
    gpa: 3.6,
    isPass: true
};

for (let key in student) {
    console.log("key = ",key, "value = ",student[key]);
}