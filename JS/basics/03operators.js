// Now see the operators in JavaScript

// 1. Arithmetic operators : +, -, *, /, %, **

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
console.log(a ** b); // 1000

console.log("+-------------------------------------+");

// 2. Assignment operators : =, +=, -=, *=, /=, %=, **=

let c = 10;

c += 5; // c = c + 5
console.log(c); // 15

c -= 5; // c = c - 5
console.log(c); // 10

c *= 5; // c = c * 5
console.log(c); // 50

c /= 5; // c = c / 5
console.log(c); // 10

c %= 3; // c = c % 3
console.log(c); // 1

c **= 3; // c = c ** 3
console.log(c); // 1

console.log("+-------------------------------------+");

// 3. Comparison operators : ==, ===, !=, !==, >, <, >=, <=

let d = 10;
let e = "10";

console.log(d == e); // true (value is same)
console.log(d === e); // false (value and type is not same)
console.log(d != e); // false (value is same)
console.log(d !== e); // true (value and type is not same)
console.log(d > e); // false
console.log(d < e); // false
console.log(d >= e); // true
console.log(d <= e); // true

// note : use === and !== instead of == and != 
// because they check for both value and type, while == and != only check for value.

console.log("+-------------------------------------+");

// 4. Logical operators : &&, ||, !

let f = true;
let g = false;

console.log(f && g); // false
console.log(f || g); // true
console.log(!f); // false

console.log("+-------------------------------------+");

// 5. Unary operators : typeof, delete, ++, --

let h = 10;
console.log(typeof h); // number

let shopDetailsObj = { name: "Hemu ki dukan", location: "delhi" };
console.log(shopDetailsObj); // { name: 'Hemu ki dukan', location: 'delhi' }

delete shopDetailsObj.location; // delete the location property from the object
console.log(shopDetailsObj); // { name: 'Hemu ki dukan' }

console.log(++h); // 11 (pre-increment)
console.log(h++); // 11 (post-increment)
console.log(h); // 12

console.log(--h); // 11 (pre-decrement)
console.log(h--); // 11 (post-decrement)
console.log(h); // 10

console.log("+-------------------------------------+");

// 6. Ternary operator : condition ? expression1 : expression2

// shorthand for if-else statement

let i = 10;
let j = 20;

let result = i > j ? "i is greater than j" : "i is less than or equal to j";
console.log(result); // i is less than or equal to j

console.log("+-------------------------------------+");

// 7. Bitwise operators : &, |, ^, ~, <<, >>, >>>

let k = 5; // 0101
let l = 3; // 0011

console.log(k & l); // 1 (0001)
console.log(k | l); // 7 (0111)
console.log(k ^ l); // 6 (0110)
console.log(~k); // -6 (inverts the bits)
console.log(k << 1); // 10 (1010)
console.log(k >> 1); // 2 (0010)
console.log(k >>> 1); // 2 (0010)
// difference between >> and >>> is that 
// >> preserves the sign bit (leftmost bit) while >>> does not preserve the sign bit (leftmost bit)

console.log("+-------------------------------------+");

// 8. String operators : +, +=

let m = "Hello";
let n = "World";

console.log(m + " - " + n); // Hello World

m += " " + n; // m = m + " " + n
console.log(m); // Hello World

let s = `hello ${n} welcome to the ${m}`; // string interpolation
console.log(s); // hello World welcome to the Hello World