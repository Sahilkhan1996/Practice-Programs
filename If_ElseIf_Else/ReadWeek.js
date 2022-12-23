//Problem 2
    //Saving the function exported by prompt-sync module to a varible
      const ps1 =require("prompt-sync");
      const prompt1 = ps1();
    // //Declaring the variable to store data received from user
     let number1 = prompt1("Enter a  Number!!  ");
     if(+number1===1 && +number1<10 && +number1!==0){
        console.log("Monday");
    }else if(+number1===2 && +number1<10 && +number1!==0){
        console.log("Tuesday");
    }else if(+number1===3 && +number1<10 && +number1!==0){
        console.log("Wednesday");
    }else if(+number1===4 && +number1<10 && +number1!==0){
        console.log("Thursday");
    }else if(+number1===5 && +number1<10 && +number1!==0){
        console.log("Friday");
    }else if(+number1===6 && +number1<10 && +number1!==0){
        console.log("Saturday");
    }else if(+number1===7 && +number1<10 && +number1!==0){
        console.log("Sunday");
    }else{        
        console.log("It is not a Single Digit or a Valid Number");
    }