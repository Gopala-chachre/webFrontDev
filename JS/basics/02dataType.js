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