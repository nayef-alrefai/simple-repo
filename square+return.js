const readlineSync = require('readline-sync');

console.log("This proram squares and cubes your number and it will display if the number is odd or even")

let num = readlineSync.questionFloat('enter an integer/float')

function square(num){
    return num*num;
}

function cube(num){
    return num*num*num;
}

function evenchecker(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

let result1 = square(num);
let result2 = cube(num);

console.log("Here is the square of your number " + result1);
console.log("Here is the qube of your number " + result2);
console.log("Your number is " + evenchecker(num) + ".");