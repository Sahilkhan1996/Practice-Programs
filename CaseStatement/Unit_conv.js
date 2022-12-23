//  Problem 4

const ps3 = require("prompt-sync");
const prompt3 = ps3();
const per_Ft_TO_Inch = 12;
const per_Ft_To_Meter = 0.3048;
const per_inch_to_ft = 0.0833333;
const per_meter_to_ft = 3.28084;
const Units = [per_Ft_TO_Inch,per_Ft_To_Meter,per_inch_to_ft,per_meter_to_ft];
let option = prompt3(`Choose the Option to see the conversion of your number  ${Units.indexOf(per_Ft_TO_Inch)} :Feet to Inch  ${Units.indexOf(per_Ft_To_Meter)} :Feet to Meter  ${Units.indexOf(per_inch_to_ft)} :Inch to Feet  ${Units.indexOf(per_meter_to_ft)} :Meter to Feet >   `);
// console.log(typeof option);
if(option >= 4){
    console.log("Invalid Option");
}else{
    let number = prompt3("Enter a Number !! ");
    // console.log(`${number} ft to Inch is ${+number*per_Ft_TO_Inch}`);
    switch(+option){
        case 0:
            console.log(`${number} ft to Inch is ${(+number*per_Ft_TO_Inch).toFixed(2)}`);
            break;
        case 1:
            console.log(`${number} ft to Meter is ${(+number*per_Ft_To_Meter).toFixed(2)}`);
            break;
        case 2:
            console.log(`${number} Inch to Ft is ${(+number*per_inch_to_ft).toFixed(2)}`);
            break;
        case 3:
            console.log(`${number} Meter to Ft is ${(+number*per_meter_to_ft).toFixed(2)}`);
            break;
        default:
            console.log("Invalid Option");                
    } 
}

