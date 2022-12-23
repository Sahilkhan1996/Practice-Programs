
//Problem 4
let randomDigit = 0;
let sumOfRandomDigit = 0
for(let i = 0 ; i < 5 ; i++){
    randomDigit = Math.floor(Math.random() * (99-10+1))+10;
    console.log(randomDigit);
    sumOfRandomDigit += randomDigit;
}
let AverageOfDigits = sumOfRandomDigit / 5;
console.log(`Sum Of 5 Random Numbers are ${sumOfRandomDigit} and Average of Random Numbers are ${AverageOfDigits}`);

