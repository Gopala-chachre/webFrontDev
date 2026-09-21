// Scope in JavaScript:

// mainly three types of scope: Global Scope, Function Scope, and Block Scope

// 1. Global Scope
var globalVar = "I am a global variable";

function globalScopeExample() {
    console.log(globalVar); // Accessible here
}

globalScopeExample();
console.log(globalVar); // Accessible here too

// 2. Function Scope
// House
// │
// ├── Room A
// │      └── Laptop
// │
// └── Room B

function functionScopeExample() {
    var functionVar = "I am a function-scoped variable";
    console.log(functionVar); // Accessible here
}

functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// 3. Block Scope
if (true) {
    let blockVar = "I am a block-scoped variable";
    const blockConst = "I am also block-scoped";
    console.log(blockVar); // Accessible here
    console.log(blockConst); // Accessible here
}

// Example : if, for, while

// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// console.log(blockConst); // Uncaught ReferenceError: blockConst


// Now let's see the difference between var, let, and const in terms of scope:

// | Keyword | Function Scope | Block Scope |
// | ------- | -------------- | ----------- |
// | `var`   | ✅             | ❌           |
// | `let`   | ✅             | ✅          |
// | `const` | ✅             | ✅          |

// var is function-scoped, meaning it is accessible within the function it is declared in. However, it is not block-scoped, so if you declare a var inside a block (like an if statement), it will still be accessible outside that block.

// let and const are block-scoped, meaning they are only accessible within the block they are declared in. This makes them more predictable and less prone to errors compared to var.

var x = 10; // Global scope

function testVar() {
    var x = 20; // Function scope
    if (true) {
        var x = 30; // Still function scope, not block scope
        console.log(x); // 30
    }
    console.log(x); // 30
}

testVar();
console.log(x); // 10

// let and const are block-scoped, meaning they are only accessible within the block they are declared in. 
// This makes them more predictable and less prone to errors compared to var.
let y = 10; // Global scope

function testLet() {
    let y = 20; // Function scope
    if (true) {
        let y = 30; // Block scope
        console.log(y); // 30
    }
    console.log(y); // 20
}

testLet();
console.log(y); // 10

// const is also block-scoped, but it cannot be reassigned after its initial assignment.
const z = 10; // Global scope

function testConst() {
    const z = 20; // Function scope
    if (true) {
        const z = 30; // Block scope
        console.log(z); // 30
    }
    console.log(z); // 20
}


console.log("+---------------------------------------------------+");
//JavaScript mein inner scope outer scope ko access kar sakta hai.

let a = 10;

function test() {

    let b = 20;

    console.log(a);
    console.log(b);
}

test();

// but outer cannot access inner scope.

console.log("+---------------------------------------------------+");

// Function Scope 
function greet() {

    let message = "Hello";

    console.log(message);
}

greet();

console.log(+"---------------------------------------------------+");

//Lexical Scope vs Scope Chain

// Lexical Scope:
// Decide karta hai ki kaunsa scope kis outer scope se connected hai.

// Scope Chain:
// Us connection ka use karke variable ko search karta hai.

