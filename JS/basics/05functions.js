// what is function in javascript

// function scope is the area in which a function is defined and can be accessed. 
// Functions can be defined using function declarations, function expressions, or arrow functions. 
// They can take parameters, return values, and can be called from other parts of the code.

// 1. Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Hemu"));

console.log("+-------------------------------------+");


// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));

console.log("+-------------------------------------+");


// 3. Arrow Function
// comes with ES6 (ECMAScript 2015) and provides a shorter syntax for writing functions
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

console.log("+-------------------------------------+");

// 4. Function with Default Parameters
function sayHello(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(sayHello());
console.log(sayHello("Hemu"));

console.log("+-------------------------------------+");

// 5. Function with Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));   

// 6. Callback Function
function processUserInput(callback) {
    const name = "Hemu";
    callback(name);
}
processUserInput(function(name) {
    console.log("Hello, " + name + "!");
});

console.log("+-------------------------------------+");

// 7. Immediately Invoked Function Expression (IIFE)

// this is mainly used to avoid polluting the global namespace and 
// to create a private scope for variables and functions.
(function() {
    console.log("This is an IIFE!");
})();

console.log("+-------------------------------------+");

// 8. Nested Functions
function outerFunction() {
    function innerFunction() {
        return "Hello from the inner function!";
    }
    return innerFunction();
}
console.log(outerFunction());

console.log("+-------------------------------------+");

// 9. Function Returning Another Function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10

console.log("+-------------------------------------+");

// Higher-order functions

// Jo function:
// kisi function ko argument ke roop me accept kare, ya
// kisi function ko return kare

function execute(fn) {
    fn();
}

function createFunction() {
    return function() {
        console.log("Hello");
    };
}

// JavaScript me functions first-class citizens hain.

// Matlab function ko:

// variable me store kar sakte ho
// argument ke roop me pass kar sakte ho
// return kar sakte ho
// object ke andar rakh sakte ho
// array ke andar rakh sakte ho


// Callback ka real use

function processUser(name, callback) {
    console.log("Processing " + name);

    callback();
}
processUser("Gopala", function() {
    console.log("Done!");
});

console.log("+-------------------------------------+");

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

calculate(10, 20, function(result) {
    console.log(result);
});

console.log("+-------------------------------------+");

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

calculate(10, 20, (result) => {
    console.log(result);
});

// or

calculate(10, 20, result => console.log(result));

console.log("+-------------------------------------+");

const numbers = [10, 20, 30];

numbers.forEach(function(num) {
    console.log(num);
});

console.log("+-------------------------------------+");

numbers.forEach(num => {
    console.log(num);
});

//or

numbers.forEach(num => console.log(num));

console.log("+-------------------------------------+");

// Callback ko 2 values mil sakti hain
// const numbers = [10, 20, 30];

numbers.forEach((num, index) => {
    console.log(index, num);
});

