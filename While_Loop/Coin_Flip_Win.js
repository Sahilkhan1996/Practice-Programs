// Problem 3
let head = 0;
let tail = 0;
while(head<11 || tail<11){
    let number = Math.floor(Math.random()*2);
    if(number==0 ){
    //   console.log("Heads"); 
      head++; 
    }else{
        // console.log("Tails");
        tail++;
    }    
}
console.log(`Heads : ${head} and Tails : ${tail}`);