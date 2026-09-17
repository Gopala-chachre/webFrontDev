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

console.log("+-------------------------------------+");

// 6. Array Methods
fruits.forEach(function(fruit) {
    console.log(fruit);
});

console.log("+-------------------------------------+");

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);

console.log("+-------------------------------------+");

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);

console.log("+-------------------------------------+");

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// 7. Array Destructuring
const [firstFruit, secondFruit] = fruits;
console.log("First Fruit: " + firstFruit + ", Second Fruit: " + secondFruit);

// 8. Array.includes(), Array.indexOf(), Array.find()
console.log(fruits.includes("Apple")); // true
console.log(fruits.indexOf("Blueberry")); // 1
console.log(numbers.find(function(num) {
    return num > 3;
})); // 4

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