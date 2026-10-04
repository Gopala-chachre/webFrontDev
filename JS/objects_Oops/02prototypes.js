// what is Prototype
// JS me prototype ek object hota h jise doosare objects propeties/methods inherite kar sakte h

const person = {
    name : "Gopala"
};

console.log(person.toString());


// hamne toString nhi banaya phir bhi ye kam karta h, 
// kyuki person ko ek prototype mila h, or us prototype ke through toString() available hota h

//    person 
//      |
// Object.prototype
//      |
//    null

