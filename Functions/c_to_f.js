function convertCtoF(tempC) { 
    let tempF = (tempC * 5 / 9) + 32;
    return tempF;
}
let tempC = 45
let tempF = convertCtoF(tempC);
console.log(`Current Temp: ${tempC} C, convert to ${Math.round(tempC)} F`)