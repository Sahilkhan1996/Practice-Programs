// Problem 1
const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter the value  " );
number = +number;
//Degree Celcius to Faranheit Function
let degF;
let fun1 = function(number){
    degF = (number*9/5)+32;
    return degF;
}
let fun1_Output = fun1(number);

// Faranheit to Celcius Function
let degC;
let fun2 = function(number){
    degC = (number-32)*5/9;
    return degC;
}
let fun2_Output = fun2(number);

// Program Flow

if(number>=0 && number<=212){

    let option = prompt("Enter 1 : to find Deg Faranheit , Enter 2 : to find Deg Celcius > " );
    option = +option;
     console.log(typeof option);
    switch(option){
        case 1:

            fun1(number);
            console.log(`${number} °C to °F is ${fun1_Output}`);
            break;

        case 2:

             fun2(number);
             console.log(`${number} °F to °C is ${fun2_Output}`);
            
                 console.log(`Deg C = ${((number-32)*5/9)}`); 
             
            break;
        default:
            console.log("Invalid Option");   
    }

     console.log(typeof number);
}else{
    console.log("The given number is not in range of Boiling Point or Freezing Point of Water !!")
}
