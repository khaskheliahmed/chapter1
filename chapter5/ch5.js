var num1 = 5;
var num2 = 3;
console.log(num1 + num2);

var num3 = 8;
var num4 = 9;
console.log(num4 - num3);

var myVariable = 4;
myVariable = 6;
var myVariable = 8
myVariable = myVariable - 8;

console.log(myVariable);

var ticket = 600;
var person = 5;
console.log(ticket * person);


document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result;

    // Perform the conversion
    if (unit === 'C') {
        result = (temperature * 9/5) + 32;
        document.getElementById('result').textContent = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temperature - 32) * 5/9;
        document.getElementById('result').textContent = `${temperature}°F is ${result.toFixed(2)}°C`;
    }
});

