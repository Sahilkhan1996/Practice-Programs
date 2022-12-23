//Problem 4

const ps3 = require("prompt-sync");
const prompt3 = ps3();
let firstNumber = prompt3("Enter First Number " );
let secondNumber = prompt3("Enter Second Number " );
let thirdNumber = prompt3("Enter Third Number " );
let fourthNumber = prompt3("Enter Fourth Number " );
let fifthNumber = prompt3("Enter Fifth Number " );
let numberGiven = [];
numberGiven.push(+firstNumber);
numberGiven.push(+secondNumber);
numberGiven.push(+thirdNumber);
numberGiven.push(+fourthNumber);
numberGiven.push(+fifthNumber);
console.log(`Number Given are : ${numberGiven}`);
 let primeoutput = numberGiven.filter((number)=>{ 
    let count=0;
     console.log(count);
for(let i = 2 ; i < number ; i++){
    if(number%i===0){
        count++;
    }
}
 console.log(count);
if(count===0){
    return number;
}
});

console.log(`Prime Number are : ${primeoutput}`);
