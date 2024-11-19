/**write a program to print try again until the user enters the correct number  */
const correctNumber = 7;  // Set the correct number
let userNumber = null;

while (userNumber !== correctNumber) {
    userNumber = parseInt(prompt("Enter a number:"));
    if (userNumber !== correctNumber) {
        alert("Try again!");
    } else {
        alert("Correct number entered!");
    }
}
