// Problem 2
const ps1 = require("prompt-sync");
const prompt1 = ps1();
let number1 = prompt1("Enter First Number " );
let number2 = prompt1("Enter Second Number " );
// Function to Check Palindrome of First Number
let fun1 = function(number1){
    let reversedNumber1 = number1.split("").reverse().join("");
    return reversedNumber1 === number1 ? "Yes" : "No";
}
let fun1_Output = fun1(number1);

//Function to check Palindrome of Second Number
let fun2 = function(number2){
    let reversedNumber2 = number2.split("").reverse().join("");
    return reversedNumber2 === number2 ? "Yes" : "No";
}
let fun2_Output = fun1(number2);

let option = prompt1("Enter 1: to check first number is Palindrome or not  Enter 2: to check Second number is Palindrome or not "  );
let i =1;
option = +option;
    switch(option){
        case 1:
            fun1(number1);
            console.log(` Palindrome : ${fun1_Output}`);
            // let option = prompt1("Enter 1: to check first number is Palindrome or not  Enter 2: to check Second number is Palindrome or not "  );
            break;
    
        case 2:
            fun2(number2);
            console.log(` Palindrome : ${fun2_Output}`);
            break;
        default:
            console.log("Invalid Input");        
    }
    i++;


