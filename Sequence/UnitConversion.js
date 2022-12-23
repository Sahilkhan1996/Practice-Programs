
//Problem 5
// 1 ft = 12 inch
const per_Ft_TO_Inch = 12;
const per_inch_to_ft = 0.08333333;
let output;
function inchToFt(Number){
    output = Number * per_inch_to_ft;
    return(output);    
}

console.log(inchToFt(43));

//ft to Meters
const per_Ft_To_Meter = 0.3048;
let sizeInLenght;
let sizeInBreadth;
let AreaOfPlot;
function ftTOMeter(length,breadth){
    sizeInLenght = length * per_Ft_To_Meter; 
    sizeInBreadth = breadth * per_Ft_To_Meter;
    AreaOfPlot = sizeInLenght * sizeInBreadth;
    return AreaOfPlot;
}  

console.log(`Area of Rectangular Plot in meters is ${ftTOMeter(60,40)}m\u00B2`);
const per_meter_Sqaure_To_Acers = 0.00024711;
console.log(`Area of 25 Rectangular Plot in Acers is ${ftTOMeter(60,40) * 25 * per_meter_Sqaure_To_Acers} acers`)

