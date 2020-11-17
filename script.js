alert('Attention! The program deletes the fractional part if you enter a decimal fraction!');

let startNumber = parseInt(prompt('input start number'));
let endNumber = parseInt(prompt('input end number'));

while (!startNumber) {
   startNumber = parseInt(prompt('You need to input THE START NUMBER that is bigger than 0'));
} 

while (!endNumber || endNumber < startNumber) {
    endNumber = parseInt(prompt('You need to input THE END NUMBER that is bigger than 0 and bigger than start number'));
}

let condition = confirm('Do you want to calculate without even numbers?');
let sum = 0
if (condition === true) {
    for(startNumber; startNumber <= endNumber; startNumber++) {
        if (startNumber %2 === 1) {
            sum +=startNumber;
        }
    }
} else {
        for(startNumber; startNumber <= endNumber; startNumber++) {
        sum += startNumber;
        }
    }
 console.log(sum);