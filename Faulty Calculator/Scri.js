// This faulty calculator does the following:
// 1. Takes two numbers as input from the user
// 2. Performs wrong operations as follows:
//    + ---> -
//    * ---> +
//    - ---> /
//    / ---> **

// It performs the wrong operation 10% of the time

// Generate a random number between 0 and 1
let random = Math.random();
console.log(random);

// Take user input for the two numbers and the operation
let a = parseFloat(prompt("Enter first number"));
let c = prompt("Enter operation (+, -, *, /)");
let b = parseFloat(prompt("Enter second number"));

// Define the incorrect operations
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random > 0.1) {
    // Perform correct calculation 90% of the time
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    // Perform wrong calculation 10% of the time
    c = obj[c];
    console.log(`The wrong operation: ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
