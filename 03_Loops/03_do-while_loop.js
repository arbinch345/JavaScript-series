// do - while loop: execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

/*
do {
  // code block to be executed
}
while (condition);
*/

let i = 20;
do {
    console.log("Learning Do-While loop.");
    i++;
} while(i<=10);

// Hence the condition is "false" so it prints only one time.

let x = 0;
do {
    console.log(x);
    x++;
} while(x <= 10);