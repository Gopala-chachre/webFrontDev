// String in JavaScript

// 1. Creating Strings
let str1 = "Hello, World!";
console.log(str1);

let str2 = new String("Hello, JavaScript!");
console.log(str2);

let str3 = `This is a template literal with a variable: ${str1}`; 
// its backtick and not single or double quotes
console.log(str3);

console.log("+-------------------------------------+");

// 2. Accessing String Characters
console.log(str1[0]); // H
console.log(str1.charAt(1)); // e

console.log("+-------------------------------------+");

// 3. Modifying Strings
let modifiedStr = str1.replace("World", "JavaScript");
console.log(modifiedStr);

let upperStr = str1.toUpperCase();
console.log(upperStr);

let lowerStr = str1.toLowerCase();
console.log(lowerStr);

let trimmedStr = "   Hello, Trimmed!   ".trim();
console.log(trimmedStr);

let splitStr = str1.split(", ");
console.log(splitStr);

let slicedStr = str1.slice(7, 12);
console.log(slicedStr); // World

let substringStr = str1.substring(7, 12);
console.log(substringStr); // World

let concatenatedStr = str1.concat(" How are you?");
console.log(concatenatedStr);

let indexOfStr = str1.indexOf("World");
console.log(indexOfStr); // 7

let lastIndexOfStr = str1.lastIndexOf("o");
console.log(lastIndexOfStr); // 8

let includesStr = str1.includes("Hello");
console.log(includesStr); // true

let startsWithStr = str1.startsWith("Hello");
console.log(startsWithStr); // true

let endsWithStr = str1.endsWith("!");
console.log(endsWithStr); // true

console.log("+-------------------------------------+");

// 4. String Length
console.log(str1.length); // 13

console.log("+-------------------------------------+");

// 5. Iterating Over String Characters
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

for (let char of str1) {
    console.log(char);
}

console.log("+-------------------------------------+");

// you cannot change a string character directly because strings are immutable in JavaScript.
// but you can reassign the entire string variable to a new string value.
let name2 = "John Doe";
name2[0] = "j"; // This will not change the string as strings are immutable
console.log(name2); // John Doe

name2 = "Jhon wick"; // This will change the string as we are reassigning it
console.log(name2); // Jhon wick


console.log("+-------------------------------------+");

let num = 100;
let strNum = String(num); // Convert number to string
let num2 = Number("77"); // Convert string to number
let bol = Boolean("hello"); // true
console.log(strNum, typeof strNum); // "100" "string"
console.log(num2, typeof num2); // 77 "number"
console.log(bol, typeof bol); // true "boolean" 


console.log("+-------------------------------------+");

// a project to demonstrate string manipulation
let fullName = "aSHwAni upADhYay";

fullName = fullName.trim(); // Remove leading and trailing spaces

// to lower and slip
let nameSlipt = fullName.toLowerCase().split(/\s+/);
console.log(nameSlipt);

// capitalize first letter of each word
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

let capitalizedFullName = nameSlipt.map(capitalizeFirstLetter).join(" ");
console.log(capitalizedFullName); // Ashwani Upadhyay  

