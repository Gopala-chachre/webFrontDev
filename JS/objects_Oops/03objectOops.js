// 1. class & constructor
class Student {
    // blueprint
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let s1 = new Student("Gopala" , 22);
let s2 = new Student("Deepansh" , 20);

console.log(s1.name);
console.log(s2.age);

// -----------------------------------------------

// 2. Methods
// Method = class ke andar banaya gaya function.
class Car {
    constructor(model){
        this.model = model;
    }

    showModel(){
        console.log("the mobel number is :" + this.model);
    }
}

let c1 = new Car(1969);
c1.showModel();

// 3. extends
// extends ka use tab hota hai jab ek class, doosri class se properties aur methods inherit karna chahti hai.

class Animal {
    eat(){
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

}

let d = new Dog();
d.eat();

// 4. super
// super ka use child class se parent class ki cheezein access karne ke liye hota hai.
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello from Person");
    }
}

class Teacher extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    greet() { //super sirf constructor ke liye nahi hai.
        super.greet();
        console.log("Hello from Student");
    }
}

let t1 = new Teacher("Gopala", "MCA");

console.log(t1.name);
console.log(t1.course);


// 5. Encapsulation
// JavaScript mein private field banane ke liye # use karte hain.

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(1000);

account.deposit(500);
console.log(account.getBalance());

account.withdraw(300);
console.log(account.getBalance());
// console.log(account.#balance); error dega

// 6. Inheritance

// Ek class doosri class ki properties aur methods ko inherit/reuse karti hai.
// see (3. extends)
// Method overriding : Child parent ke method ko apne version se replace bhi kar sakta hai.

class Docter extends Person {
    greet() {
        super.greet();
        console.log("I am a Docter");
    }
}

let d1 = new Docter();

d1.greet();

// 7. Getters & Setters
class Student1 {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

let s8 = new Student1("Gopala");

console.log(s8.name);

s8.name = "Rahul";

console.log(s8.name);

// 8. Static Methods
// Yahan (line 129) greet() ko object ke through call kiya:

// static method class ka hota hai, object ka nahi.
class Student11 {
    static greet() {
        console.log("Hello");
    }
}

Student11.greet();

class MathUtils {
    static square(num) {
        return num * num;
    }

    static cube(num) {
        return num * num * num;
    }
}

console.log(MathUtils.square(5));
console.log(MathUtils.cube(3));