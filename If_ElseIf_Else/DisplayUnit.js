// Problem3
//Saving the function exported by prompt-sync module to a varible
const ps2 =require("prompt-sync");
const prompt2 = ps2();
// //Declaring the variable to store data received from user
let number2 = prompt2("Enter a  Number Either 1 or in Multiple of Tens!!  ");
if(+number2===1){
    console.log("Ones Place Value");
}else if(+number2===10 ){
    console.log("Tens Place Value");
}else if(+number2===10**2 ){
    console.log("Hundreds Place Value");
}else if(+number2===10**3){
    console.log("Thousands Place Value");
}else if(+number2===10**4 ){
    console.log("Ten Thousands Place Value");
}else if(+number2===10**5 ){
    console.log("Lakhs Place Value");
}else if(+number2===10**6){
    console.log("Ten Lakhs Place Value");
}else if(+number2===10**7){
    console.log("Crores Place Value");
}
else if(+number2===10**8){
    console.log("Ten Crores Place Value");
}
else{        
    console.log("It is not a Valid Number");
}