// this in JavaScript 


//this ki value is baat par depend karti hai ki function ko kaise call kiya gaya hai.

// 1. Object ke andar this
const person = {
    name: "Gopala",

    greet: function() {
        console.log(this.name);
    }
};

person.greet();

console.log("+-------------------------------------+");

// 2. Arrow Function & this
//Arrow function ka apna this nahi hota.

const person1 = {
    name: "DEEPU",

    greet: () => {
        console.log(this.name);
    }
};

person1.greet();

// Arrow function apne surrounding scope ka this use karta hai.
//Isme normal function ki tarah: this → person NHI HOTA

console.log("+-------------------------------------+");

// Method shorthand
const person2 = {
    name: "HEMU",

    greet() {
        console.log(this.name);
    }
};

// Ek line me yaad rakho
// object.method()
//       ↓
//     this = object
// or
//     arrow function
//       ↓
//   apna this nahi

console.log("+-------------------------------------+");


//this ke 4 important cases:

// 1. Object method → this = object

const person5 = {
    name: "JALAM",

    greet() {
        console.log(this.name);
    }
};

person.greet();

console.log("+-------------------------------------+");

// 2. Normal function
// globle object ko call karta h
function greet() {
    // console.log(this);
}

greet();

// Yahan this object ke method ki tarah kisi object ko point nahi kar raha.
// Strict mode ke bahar normal function call me this generally global object ko refer karta hai;
// strict mode me this undefined hota hai.
// Modern JavaScript me modules/strict mode ki wajah se strict behavior ko dhyan me rakhna useful hai.

console.log("+-------------------------------------+");

// 3. Arrow function → apna this nahi hota

const person6 = {
    name: "Thala",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();

console.log("+-------------------------------------+");

// 4. Constructor + new
function Person(name) {
    this.name = name;
}

const p1 = new Person("Gopala ji");

// Yahan new ek new object banata hai.
// new Person("Gopala ji")
//         ↓
// new object
//         ↓
// this → new object
//         ↓
// this.name = "Gopala ji"

console.log(p1.name);

const p2 = new Person("Deepu don!!");

console.log(p2.name);

console.log("+-------------------------------------+");

// Nested function me this

const per = {
    name: "aman",

    greet() {
        function inner() {
            console.log(this.name);
        }

        inner();
    }
};

per.greet();

// arrow function me
const per1 = {
    name: "Gopala",

    greet() {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

per1.greet();

console.log("+-------------------------------------+");
console.log("+-------------------------------------+");

// this ko manually set karna

// JavaScript me hum this ko manually bhi control kar sakte hain using:
// call() & apply() -> Dono this set karte hain.

// call()

function greet() {
    console.log(this.name);
}

const person7 = {
    name: "Gopala"
};

greet.call(person7); //greet ko execute karo aur uske andar this ko person bana do.


// apply()
function add(a, b) {
    console.log(this.name);
    console.log(a + b);
}

const person8 = {
    name: "Gopala"
};

add.call(person8, 10, 20);
// only diff ^ no array argument | isme array me argument
add.apply(person, [10, 20]);

// bind()

// bind() function ko turant execute nahi karta.
// Ye ek new function return karta hai jisme this fix ho jata hai.

function greet() {
    console.log(this.name);
}

const newGreet = greet.bind(person);

newGreet();

// greet
//   ↓
// bind(person)
//   ↓
// new function
//   ↓
// newGreet()
//   ↓
// this = person

// IMP
// call()  → immediately execute
// apply() → immediately execute
// bind()  → new function return