// Object in JavaScript

// an object is a collection of properties, and a property is an association between 
// a name (or key) and a value. 
// The value of a property can be a function, in which case the property is known as a method.

// mainly it is collection of key-value pairs 

// 1. Creating an Object
//    a. Using Object Literal
let person = {
    name: "Hemu",
    age: 25,
    city: "Delhi"
};
console.log(person);

//    b. Using Object Constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log(car);

//    c. Using Object.create()
let animal = Object.create(null);
animal.type = "Dog";
animal.breed = "Labrador";
console.log(animal);

console.log("+-------------------------------------+");


// 2. Accessing Object Properties
// NOTE : Dot notation and bracket notation can be used to access the properties of an object.

console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

console.log("+-------------------------------------+");


// 3. Modifying Object Properties
person.age = 26; // Update existing property
person.country = "India"; // Add new property
console.log(person);

console.log("+-------------------------------------+");


// 4. Deleting Object Properties
delete person.city;
console.log(person);


console.log("+-------------------------------------+");

// 5. Iterating Over Object Properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}


console.log("+-------------------------------------+");

// 6. Object Methods
person.greet = function() {
    return "Hello, my name is " + this.name;
};
console.log(person.greet());



// 7. Object Destructuring
// what it does is it allows you to unpack values from arrays, 
// or properties from objects, into distinct variables.
const { name, age } = person;
console.log("Name: " + name + ", Age: " + age);

// 8. Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person)); // ["name", "age", "country"]
console.log(Object.values(person)); // ["Hemu", 26, "India"]
console.log(Object.entries(person)); // [["name", "Hemu"], ["age", 26], ["country", "India"]]



// 9. Object.freeze() and Object.seal()

const student = {
    name: "Hemu",
    age: 16,
    course: "JavaScript"
};

//   a. Object.freeze() - prevents modification of existing properties and addition of new properties
Object.freeze(student);
student.age = 17; // This will not change the age
student.grade = "A"; // This will not add a new property
console.log(student);

//   b. Object.seal() - prevents addition of new properties but allows modification of existing properties
const teacher = {
    name: "Mr. Sharma",
    subject: "Math"
};
Object.seal(teacher);
teacher.subject = "Science"; // This will change the subject
teacher.experience = 10; // This will not add a new property
console.log(teacher);


console.log("+-------------------------------------+");

// 10. Nested Objects
const school = {
    name: "Greenwood High",
    location: "Delhi",
    principal: {
        name: "Mr. Verma",
        age: 50
    },
    students: [
        { name: "Hemu", grade: 10 },
        { name: "Riya", grade: 9 }
    ]
};

console.log(school);
console.log("Principal's Name: " + school.principal.name);
console.log("First Student's Name: " + school.students[0].name);


// objects forEach() method
const fruits = {
    apple: 1,
    banana: 2,
    cherry: 3
};

Object.keys(fruits).forEach(function(key) {
    console.log(key + ": " + fruits[key]);
});
