// JavaScript mein ... ko three dots / ellipsis bolte hain. 

// Ye 2 different kaam karta hai:
// Spread → values ko spread/unpack karta hai.
// Rest → multiple values ko collect karke ek array mein rakhta hai.

// 1. ... with Arrays — Spread

let arr = [10,20,30];
let arr1 = [40,50,60];

let a = [...arr];
let b = [...arr , ...arr1];

console.log(a); // arr ke saare elements ko bahar nikaal do.
console.log(b); // [ 10, 20, 30, 40, 50, 60 ]
// console.log(arr, arr1); [ 10, 20, 30 ] [ 40, 50, 60 ]

// Important use: Copy
a.push(40);
b.push(70);

console.log(a);
console.log(b);

console.log("+-------------------------------------+");

// 2. ... with Objects — Spread
let Uname = {
    name : "Gopala"
};

let Uage = {
    age : 22
};

let user = {
    ...Uage,
    ...Uname
};

console.log(user);

//Existing property overwrite
let person = {
    name : "Gopala",
    age : 22
};

let updated = {
    ...person,
    age : 23
};

console.log(updated);

console.log("+-------------------------------------+");

// Rest Parameters : other use of ...
// Rest = remaining values ko collect karna.

function show(...num){
    console.log(num);
}

show(10,20,30,40); // hear it will collect all the element in array

function sum(...num){
    let total = 0;

    for(let i of num){
        // console.log(i);
        total += i;
    }

    return total;
}

console.log(sum(10,20,30,40));

console.log("+-------------------------------------+");

// | Spread                                 | Rest                                           |
// | -------------------------------------- | ---------------------------------------------- |
// | Values ko **spread/unpack** karta hai  | Values ko **collect** karta hai                |
// | Usually existing array/object ke saath | Usually function parameters/destructuring mein |
// | `...array`                             | `...parameters`                                |
// | Array/object banana ya combine karna   | Multiple values ko ek array mein lena          |

// Rest parameter last mein hona chahiye: function test(a, ...rest) { }  ✅


