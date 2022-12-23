// Problem 5
const ps4 = require("prompt-sync");
const prompt4 = ps4();
let number = prompt4("Enter a number  " );
let output=1;
for(let i=1; i<=number; i++){
    output *= i;
}
console.log(`Factorial of ${number} is ${output}`);