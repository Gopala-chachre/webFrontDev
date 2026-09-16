// Control Statements in JavaScript

// 1. Conditional Statements
//    a. if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}


console.log("+-------------------------------------+");

//    b. if-else statement
let isMember = true;
if (isMember) {
    console.log("Welcome, member!");
} else {
    console.log("Please sign up to become a member.");
}


console.log("+-------------------------------------+");

//    c. if-else if-else statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

console.log("+-------------------------------------+");

//    d. switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Midweek days are so-so.");
}

console.log("+-------------------------------------+");

// 2. Loops
//    a. for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

console.log("+-------------------------------------+");

//    b. while loop
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

console.log("+-------------------------------------+");

//    c. do-while loop
let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 5);

console.log("+-------------------------------------+");

//    d. for...in loop (for objects)
let person = { name: "Hemu", age: 25, city: "Delhi" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

console.log("+-------------------------------------+");

//    e. for...of loop (for arrays)
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

console.log("+-------------------------------------+");

// 3. Break and Continue
//    a. break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i = " + i);
        break;
    }
    console.log("i: " + i);
}

console.log("+-------------------------------------+");

//    b. continue statement
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd number: " + i);
}
