// Hoisting in JavaScript

// it is a behavior in JavaScript where variable and function declarations are moved to 
// the top of their containing scope during the compilation phase. This means that you can 
// use variables and functions before they are declared in the code.

//JavaScript jab code execute karta hai, usse pehle JavaScript declarations ko process karta hai.
// Isi behavior ko commonly hoisting kaha jata hai.
// Hoisting ka matlab literally ye nahi hai ki JavaScript tumhari lines ko utha kar upar le jaata hai.

// example:
console.log(x); // undefined (not ReferenceError)
var x = 5;
console.log(x); // 5

// In the above example, the variable x is hoisted 
// to the top of its scope, but its value is not hoisted.

console.log("+---------------------------------------------------+");

// Declaration vs Initialization
var y; // Declaration
console.log(y); // undefined
y = 10; // Initialization
console.log(y); // 10

console.log("+---------------------------------------------------+");

// now hoisting with let and const
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 20;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 30;

// In the above example, both let and const variables are hoisted to the top of their scope, 
// but they are not initialized. Accessing them before initialization results in a ReferenceError.

// Q: but now the question arises that if let and const are hosted then why we are getting ReferenceError. 
// The answer is that let and const variables are in a "temporal dead zone" from the start of 
// the block until the declaration is encountered. This means that you cannot access them before 
// they are declared, even though they are hoisted.

// let aur const ki declarations bhi scope ke beginning se associated hoti hain, lekin declaration 
// execute hone se pehle unhe access nahi kar sakte.

// Temporal Dead Zone 
// The temporal dead zone (TDZ) is a behavior in JavaScript that occurs when you try to access a variable
// declared with let or const before it has been initialized. The TDZ starts from the beginning of the 
// block until the variable is declared and initialized. If you try to access the variable during this 
// period, you will get a ReferenceError.

// example:
{
    console.log(c); // ReferenceError: Cannot access 'c' before initialization
    let c = 40;
}

// In the above example, the variable c is in the temporal dead zone from the start of the block until 
// it is declared and initialized. Accessing it before initialization results in a ReferenceError.

// Scope starts
//      ↓
//      a exists but cannot be accessed
//      ↓
// Temporal Dead Zone
//      ↓
// let a = 10
//      ↓
// TDZ ends

// TDZ in easy language:
// Socho tumhare college mein ek room hai.
// Room mein ek student ka naam register mein already hai.
// Lekin student ko officially class mein enter karne ka permission 10 AM par milta hai.
// 10 AM se pehle:
// Student exist karta hai, but tum usko use/access nahi kar sakte.


// | Keyword | Hoisting | Initialization before declaration access |
// | ------- | -------- | ---------------------------------------- |
// | `var`   | Yes      | `undefined`                              |
// | `let`   | Yes      | ❌ TDZ / ReferenceError                  |
// | `const` | Yes      | ❌ TDZ / ReferenceError                  |

// var
// ↓
// hoisted
// ↓
// initial value = undefined

// while 

// let / const
// ↓
// hoisted
// ↓
// TDZ
// ↓
// cannot access

console.log("+-----------------------------------------------------+");

// Function
