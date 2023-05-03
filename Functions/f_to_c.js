
function convertFtoC(tempF) { 
    let tempC = (tempF - 32) * (5 / 9);
    return tempC;
}
let tempF = 212;
let tempC = convertFtoC(tempF);
console.log(`Current Temp: ${tempF} F, convert to ${Math.round(tempC)} C`);

console.log(convertFtoC(90).toFixed(2));
console.log(convertFtoC(72).toFixed(2));
console.log(convertFtoC(32).toFixed(2));
console.log(convertFtoC(0).toFixed(2));
console.log(convertFtoC(-40).toFixed(2));
