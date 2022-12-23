let ran1 = Math.floor(Math.random() * 1000);
let ran2 = Math.floor(Math.random() * 1000);
let ran3 = Math.floor(Math.random() * 1000);

console.log("Random number 1 is " + ran1);
console.log("Random number 2 is " + ran2);
console.log("Random number 3 is " + ran3);

if(ran1 > ran2 && ran1 > ran3){
    console.log("Largest number is " + ran1);
}else if(ran2 > ran1 && ran2 > ran3){
    console.log("Largest number is " + ran2);
}else if(ran3 > ran2 && ran3 > ran2){
    console.log("Largest number is " + ran3);
};