// Problem 3
const ps2 = require("prompt-sync");
const prompt2 = ps2();
let number = prompt2("Enter a number !! " );
let count=0;
for(let i = 2 ; i < number ; i++){
    if(+number%i===0){
        count++;
         console.log( count);
    }
}
 console.log(count);
if(count>0){
    console.log(`${number} is not prime number`);
}else{
    console.log(`${number} is Prime number`);
}
