const readlineSync = require('readline-sync');

console.log("This proram squares and cubes your number and it will display if the number is odd or even")

let num = readlineSync.questionFloat('enter an integer/float')

let power = readlineSync.questionInt('Enter the power you want to raise the number to: ');

function raiseToPower(num, power) {
    return Math.pow(num, power); 
}

function evenchecker(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

let result = raiseToPower(num, power);


console.log("Your number raised to the power of " + power + " is: " + result);
console.log("Your number is " + evenchecker(num) + ".");