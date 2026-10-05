// 1. Closure kya hai?

function outer1() {
    let name = "Gopala";

    function inner() {
        console.log(name);
    }

    return inner;
}

let fn = outer1();

fn();

// Closure = jab inner function apne outer function ke variables ko yaad rakhta hai, 
// even after outer function finish ho chuka ho.

// Eg:
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();

// 2. Data Hiding
// Closures ka ek major use hai data hiding.
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        getCount() {
            return count;
        }
    };
}

let counter1 = createCounter();

counter1.increment();
counter1.increment();

console.log(counter1.getCount());


// Multiple independent closures

function createCounter2() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter3 = createCounter2();
let counter2 = createCounter2();

console.log(counter3());
console.log(counter3());

console.log(counter2());
console.log(counter2());