
// Problem 1
const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter the value of n " );
let outArr = [];
for(let i = 1 ; i <= number ; i++){
    outArr.push(2**i);
    
}
console.log(outArr);