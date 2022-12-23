// Problem 3

const ps2 = require("prompt-sync");
const prompt2 = ps2();
let number2 = prompt2("Enter a  Number Either 1 or in Multiple of Tens !! ");
switch(+number2){
    case 1:
        console.log("Ones Place Value");
        break;
    case 10:
        console.log("Tens Place Value");
        break;
    case 10**2:
        console.log("Hundreds Place Value");
        break;
    case 10**3:
        console.log("Thousands Place Valueusands");
        break;
    case 10**4:
        console.log("Ten Thousands Place Value");
        break;
    case 10**5:
        console.log("Lakhs Place Value");
        break;
    case 10**6:
        console.log("Ten Lakhs Place Value");
        break;
    case 10**7:
        console.log("Crores Place Value");
        break;
    case 10**8:
        console.log("Ten Crores Place Value");
        break;
    default:
        console.log("It is not a Valid Number");              

}