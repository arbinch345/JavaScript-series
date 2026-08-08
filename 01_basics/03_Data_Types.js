// Data Types:  the kind of value a variable can hold and how computer can manipulate that data

// Primitive data types:  are the most basic, built-in data types that represent a single value and are not objects.

// Number: A number representing a mathematical value
let age = 24

console.log(age)
console.log(typeof(age))

// String: A text of characters enclosed in quotes
let fullName = "Tony Stark"

console.log(fullName)
console.log(typeof(fullName))

// Boolean: Either "True" or "False"
isFollow = true

console.log(typeof(isFollow))

// Undefined: A primitive variable with no assigned value
let name;

console.log(name)
console.log(typeof(name))

// null: A primitive value representing object absence
let x = null;

console.log(x)
console.log(typeof(x))    

// BigInt:A number representing a large integer
let y = BigInt("123");

console.log(y)
console.log(typeof(y))

// Symbol: A unique and primitive identifier
let z = Symbol("hello!")

console.log(typeof(z))
console.log(z)


// non-primitive data types: complex data structures that do not store their actual data directly inside the variable

// object = A collection of key-value pairs of data (different variables)
const student = {
    Full_Name: "Rahul Prashad",
    age: 20,
    gpa: 3.6,
    isPass: true
}

console.log(student)
console.log(typeof(student))

// printing the values
console.log(student["Full_Name"])
console.log(student.age)

// increasing the age
student["age"] = student["age"] + 1
console.log(student.age)

// 
student["name"] = "Hari Prashad"
console.log(student.name)