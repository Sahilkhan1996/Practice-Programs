
let desiredArray = [];
for(let i = 0 ; i < 5 ; i++){
    let randomNumber = Math.floor(Math.random()*(999-100+1))+100;
    desiredArray.push(randomNumber);
}
console.log(desiredArray);
let minNumber = desiredArray.sort((a,b) => a-b);
console.log(minNumber[0]);
let maxNumber = desiredArray.sort((a,b)=>b-a);
console.log(maxNumber[0]);