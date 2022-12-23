//Problem 1

//Saving the function exported by prompt-sync module to a varible
// const PromptSync = require("prompt-sync");
 const ps =require("prompt-sync");
const prompt = ps();
// // //Declaring the variable to store data received from user
let number = prompt("Enter a Single digit Number!!  ");
 console.log(typeof number);
    if(+number===0 && +number<10){
        console.log("Zero");
    }else if(+number===1 && +number<10){
        console.log("One");
    }else if(+number===2 && +number<10){
        console.log("Two");
    }else if(+number===3 && +number<10){
        console.log("Three");
    }else if(+number===4 && +number<10){
        console.log("Four");
    }else if(+number===5 && +number<10){
        console.log("Five");
    }else if(+number===6 && +number<10){
        console.log("Six");
    }else if(+number===7 && +number<10){
        console.log("Seven");
    }else if(+number===8 && +number<10){
        console.log("Eight");
    }else if(+number===9 && +number<10){
        console.log("Nine");
    }else{        
        console.log("It is not a Single Digit or a Valid Number");
    }