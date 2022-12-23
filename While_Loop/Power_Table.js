// Problem 1
const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter a Number " );
let outArr = [];
let i = 1;
while(i<=number){
    if(number<=8){
        outArr.push(Math.pow(2,i));
       
    }
    i++;
}
if(number<=8){
    console.log(outArr);
}
else{
    console.log("Number Invalid - Out of range");
}
