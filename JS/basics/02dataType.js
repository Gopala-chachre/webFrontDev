// Data types in JavaScript

// 1. Primitives data types
//    a. Number
let age = 25; // number
console.log(age);

//    b. String
let username = "Hemu"; // string
console.log(username);

//    c. Boolean
let isOpen = true; // boolean
console.log(isOpen);

//    d. Null
let shopDiscount = null; // null
console.log(shopDiscount);

//    e. Undefined
let shopAddress; // undefined
console.log(shopAddress);

//   f. bigint
let bigNumber = 1234567890123456789012345678901234567890n; // bigint
console.log(bigNumber);

//   g. Symbol
let uniqueId = Symbol("id"); // symbol
console.log(uniqueId);


console.log("-------------------------------------------");
// 2. Non-primitives data types
//    a. Array
let shopItems = ["item1", "item2", "item3"]; // array
console.log(shopItems);

//    b. Object
let shopDetails = { name: "Hemu ki dukan", location: "delhi" }; // object
console.log(shopDetails);   

//   c. Function
let shopFunction = function() {
    console.log("This is a function");
};
shopFunction();

// or function can also be declared using arrow function
let shopArrowFunction = () => {
    console.log("This is an arrow function");
};
shopArrowFunction();

// and function can also be declared using function declaration
function shopFunctionDeclaration() {
    console.log("This is a function declaration");
}
shopFunctionDeclaration();

// now typeof operator can be used to check the data type of a variable
console.log(typeof age); // number
console.log(typeof username); // string
console.log(typeof isOpen); // boolean
console.log(typeof shopDiscount); // object (this is a known issue in JavaScript, null is considered an object)
console.log(typeof shopAddress); // undefined
console.log(typeof bigNumber); // bigint
console.log(typeof uniqueId); // symbol
console.log(typeof shopItems); // object (arrays are considered objects in JavaScript)
console.log(typeof shopDetails); // object
console.log(typeof shopFunction); // function
console.log(typeof shopArrowFunction); // function
console.log(typeof shopFunctionDeclaration); // function