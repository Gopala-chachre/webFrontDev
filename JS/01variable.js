
// we do not use "var" nowadays because it has some issues, 
// so we use "let" and "const" instead of "var" 
// if you work on legecy code then you can use "var" but in new code we do not use "var"


let shopName = "deepu ki dukan";
let customerNo = 100;

console.log(shopName);
console.log(customerNo);

// we can also reassign the value of a variable declared with "let"
customerNo = 200;

console.log("-------------------------");
console.log(customerNo);

// we can also declare a variable without assigning a value to it
let shopAddress;
console.log(shopAddress); // undefined

// we can also assign a value to a variable declared without a value
shopAddress = "123, main street";
console.log(shopAddress);

// we can also declare multiple variables in one line
let shopOwner = "deepu", shopLocation = "delhi", shopType = "grocery";
console.log(shopOwner);
console.log(shopLocation);
console.log(shopType);

// we can also declare a variable with a value of different data types
let isOpen = true; // boolean
let shopRating = 4.5; // number
let shopItems = ["item1", "item2", "item3"]; // array
let shopDetails = { name: "deepu ki dukan", location: "delhi" }; // object

console.log(isOpen);
console.log(shopRating);
console.log(shopItems);
console.log(shopDetails);

// we can also declare a variable with a value of null
let shopDiscount = null;
console.log(shopDiscount);

console.log("-------------------------------------------");
// when you know the value of a variable will not change then you can use "const" instead of "let" 
// because "const" is used to declare a variable whose value cannot be changed
const shopOwnerName = "deepu";
console.log(shopOwnerName);

const address = "123, main street";
console.log(address);

// we cannot reassign the value of a variable declared with "const"
// shopOwnerName = "new owner"; // this will give an error

// we can also declare a variable with a value of different data types using "const"
const isShopOpen = true; // boolean
const shopRatingConst = 4.5; // number
const shopItemsConst = ["item1", "item2", "item3"]; // array
const shopDetailsConst = { name: "deepu ki dukan", location: "delhi" }; // object

console.log(isShopOpen);
console.log(shopRatingConst);
console.log(shopItemsConst);
console.log(shopDetailsConst);

// we can also declare a variable with a value of null using "const"
const shopDiscountConst = null; // but we cannot reassign the value of a variable declared with "const" so we cannot change the value of shopDiscountConst to something else
console.log(shopDiscountConst);


console.log("-------------------------------------------");
// var was used in the past to declare variables but it has some issues so we do not use it nowadays

var name = "Hemu";
name = "dampu";
console.log(name); // dampu

// we see a line on name variable because it is declared with "var" and 
// it is hoisted to the top of the scope, so it can be accessed before it is declared
// but it is not a good practice to use "var" 
// because it can lead to unexpected behavior in the code 

var name = "AbhiBhai";
console.log(name);

// now how can be differencate between these two variables with the same name?
// that is why we do not use "var" nowadays 
// because it can lead to confusion and unexpected behavior in the code


console.log("-------------------------------------------");
// scope for var, const and let is different
// keyword          reassignment    redeclaration    scope
// var              yes             yes              function scope
// let              yes             no               block scope
// const            no              no               block scope


function demo(){
    var a = 10; // function scope
    console.log(a);
    console.log(shopName); // we can access the variable declared outside the function
}

demo();
// console.log(a); // this will give an error because "a" is not defined outside the function

{
    const b = 20;
    let c = 30;
    var d = 40;
}

// console.log(b); 
// console.log(c); we cannot access them outside the block
console.log(d); // but we can access "d" outside

// that leads to leakage of variable "d" outside the block which is not a good practice
// that is why we do not use "var" nowadays because it can lead to unexpected behavior in the code
