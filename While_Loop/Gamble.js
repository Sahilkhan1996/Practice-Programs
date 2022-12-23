// Problem 4

let amount = 100 ;
let numberOfBet = 0;
let won = 0;
let loose =0;
while(amount>0 && amount<200){
   
    let outcome = Math.floor(Math.random()*2);
        if(outcome==1){    
            won++;
            numberOfBet++;
            amount++; 
        }else{
            numberOfBet++;
            loose++;
            amount--;
        }
}

console.log(`Amount Left is ${amount} , Number of Bet Done is ${numberOfBet} , Number of times win ${won} , Number of times loose ${loose} `);


    



