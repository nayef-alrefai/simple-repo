const readlineSync = require('readline-sync');

let name = readlineSync.question("enter your name");
function greet(name) {
    return ("Hello, " + name);
}

let message = greet(name);

if (name == ("n"));
    console.log("I have an N in my name as well. " + message)

