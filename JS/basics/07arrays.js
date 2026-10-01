// Arrays in JavaScript

// 1. Creating Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

let numbers01 = new Array(1, 2, 3, 4, 5);
console.log(numbers01);

let mixedArray = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(mixedArray);

let demoArray = new Array(5); // Creates an array with 5 empty slots [ <5 empty items> ]
console.log(demoArray);

console.log("+-------------------------------------+");

// 2. Accessing Array Elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

console.log("+-------------------------------------+");

// 3. Modifying Array Elements
fruits[1] = "Blueberry"; // Update existing element
fruits.push("Date"); // Add new element at the end
console.log(fruits);

fruits.unshift("Elderberry"); // Add new element at the beginning
console.log(fruits);

console.log("+-------------------------------------+");

// 4. Deleting Array Elements
fruits.splice(2, 1); // Remove 1 element at index 2
console.log(fruits);
fruits.pop(); // Remove last element
console.log(fruits);
fruits.shift(); // Remove first element
console.log(fruits);

console.log("+-------------------------------------+");

// 5. Iterating Over Array Elements
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function(fruit) {
    console.log(fruit);
});

for (let fruit of fruits) {
    console.log(fruit);
} 

// forEach() new array return nahi karta.
let nums = [10,20,40];

let result = nums.forEach(num => num * 2);

console.log(result);

console.log("+-------------------------------------+");

// 6. Array Methods
fruits.forEach(function(fruit) {
    console.log(fruit);
});

console.log("+-------------------------------------+");
// Array ke har element ko transform/change karke new array banana.
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);

console.log("+-------------------------------------+");

// Jo elements condition satisfy karein, unko lekar new array banata hai.
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);

console.log("+-------------------------------------+");

// Array ke multiple elements ko ek single value mein reduce karta hai.
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// 7. Array Destructuring
const [firstFruit, secondFruit] = fruits;
console.log("First Fruit: " + firstFruit + ", Second Fruit: " + secondFruit);

// 8. Array.includes(), Array.indexOf(), Array.find(), Array.findIndex()
console.log(fruits.includes("Apple")); // true
console.log(fruits.indexOf("Blueberry")); // 1
console.log(numbers.find(function(num) {
    return num > 3;
})); // 4, :Condition satisfy karne wala first element return karta hai.


let index = nums.findIndex(num => num > 20);

console.log(index); // find() ki tarah, but element nahi, uska index return karta hai.

console.log("+-------------------------------------+");

// 9. Nested Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6

console.log("+-------------------------------------+");

// 10. Array.from() and Array.of() and Array.join()
let str = "Hello";
let arrFromStr = Array.from(str);
console.log(arrFromStr); // ["H", "e", "l", "l", "o"]

let arrOfNumbers = Array.of(1, 2, 3, 4);
console.log(arrOfNumbers); // [1, 2, 3, 4]

let joined = fruits.join(", ");
console.log(joined); // Apple, Blueberry, Cherry, Date, Elderberry

console.log("+-------------------------------------+");

// 11. Array.some(), Array.every()

console.log(nums.some(num => num > 25)); // Check karta hai ki at least ONE element condition satisfy karta hai ya nahi.

console.log(nums.every(num => num > 5)); // Check karta hai ki ALL elements condition satisfy karte hain ya nahi.

// 12. Array.sort(), Array.flat()

nums.sort();
nums.sort((a, b) => b - a); // Descending
console.log(nums);

let arr = [1, 2, [3, 4], 5];

console.log(arr.flat());

let arr1 = [1, [2, [3, [4]]]];

console.log(arr1.flat(2));


// | Method        | Work                      | Return                |
// | ------------- | ------------------------- | --------------------- |
// | `forEach()`   | Har element par operation | `undefined`           |
// | `map()`       | Elements transform karna  | **New array**         |
// | `filter()`    | Condition wale elements   | **New array**         |
// | `reduce()`    | Multiple → single value   | **Single value**      |
// | `find()`      | First matching element    | Element / `undefined` |
// | `findIndex()` | First matching index      | Index / `-1`          |
// | `some()`      | Koi ek condition satisfy? | `true/false`          |
// | `every()`     | Sab condition satisfy?    | `true/false`          |
// | `sort()`      | Sort karna                | Sorted array          |
// | `includes()`  | Value present?            | `true/false`          |
// | `flat()`      | Nested array flatten      | **New array**         |
