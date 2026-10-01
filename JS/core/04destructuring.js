// Destructuring = array/object ke andar ki values ko directly variables me nikalna.

// 1. Array Destructuring
// normally:

let arr = [10,20,30,40,50];

let a = arr[0];
let b = arr[1];
let c = arr[4];

console.log(a,b,c);

// by Destructuring

let [a1, b1, c1] = arr; //Position matter
console.log(a1,b1,c1);

let [a2, , b2, , c2] = arr; // Skip elements
console.log(a2,b2,c2);

console.log("+-------------------------------------+");

// 2.Object Destructuring
// Object me position nahi, property name important hota hai. kyuli ye unordered hote h
// normally:
let user = {
    name : "Gopala",
    age : 22
}

let uName = user.name;

console.log(uName);
console.log(user.age);

// by Destructuring:
let {name, age} = user; // Property name important.
console.log(name, age);

// if want to change the name of variable in object then

let {name : userName, age : userAge} = user; 
console.log(userName, userAge); 

console.log("+-------------------------------------+");

// 3. Nested Destructuring

// for object
//normally
let user1 = {
    name2: "Gopala",
    address: {
        city: "Kurukshetra",
        pincode: 136119
    }
};

console.log(user1.address.city);
console.log(user1.address.pincode);


// by Destructuring:

let {
    name2 , 
    address : {city, pincode}
} = user1;

console.log(name2, city, pincode);

// for Array

let data = [10, [20, 30], 40];

let [o, [p,q], r] = data;
console.log(o,p,q,r);


console.log("+-------------------------------------+");

// 4. Default Values
// Agar value available nahi hai, to default value de sakte ho.

// Array
let [d,e,f,g,h,i = 100] = arr; // if g = 100 then even 40 print
console.log(d,e,f,g,h,i);

// Object
let {name : n , age: ag, marks = 89} = user;
console.log(n, ag, marks);

// Default value sirf undefined par apply hoti hai.
let { age4 = 22 } = {};

console.log(age4); // 22

// but

let { age3 = 22 } = { age3: null };

console.log(age3); // null

console.log("+-------------------------------------+");

// example API se data aaya:
let student = {
    name_: "Gopala",
    age_: 22,
    marks_: {
        java: 85,
        dbms: 90
    }
};

// Without destructuring:

console.log(student.name_);
console.log(student.marks_.java);
console.log(student.marks_.dbms);

// With destructuring:

let {
    name_,
    age_,
    marks_: { java, dbms }
} = student;

console.log(name_);
console.log(age_);
console.log(java);
console.log(dbms);