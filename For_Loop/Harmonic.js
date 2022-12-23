// Problem 2
const ps1 = require("prompt-sync");
const prompt1 = ps1();
let number = prompt1("Enter the value of n " );
let output=0;
for(let i = 1; i<=number ; i++){
    output += 1/i;
     console.log(output);
}
console.log(`The value of nth Harmonic number is ${(+output).toFixed(2)}`);
