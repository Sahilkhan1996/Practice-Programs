// Problem 2
const ps1 = require("prompt-sync");
const prompt1 = ps1();
 console.log(typeof prompt1);
let number1 = prompt1("Enter a Number !! ");
switch(+number1){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("It is not a Single Digit or Vaid Number !!");                            
}