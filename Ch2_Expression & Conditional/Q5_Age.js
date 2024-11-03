/*Print "You can drive  " or "you cannot drive " based on the age being greater than 18 using ternary operator*/
// let age = prompt("Enter your age :");
// let c = (age>=18)?("You can drive "):("You cannot drive");
// console.log(c);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age: ', (age) => {
  let c = (age >= 18) ? 'You can drive' : 'You cannot drive';
  console.log(c);
  rl.close();
});
