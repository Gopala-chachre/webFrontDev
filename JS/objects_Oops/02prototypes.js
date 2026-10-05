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

// "Ek backup object jahan JavaScript properties/methods dhoondh sakta hai."

// ------------------------------------------------

// 2. Prototype Chain
// Jab JavaScript kisi object mein koi property/method search karta hai, aur woh nahi milta, 
// to JavaScript uske prototype mein search karta hai.


// Example
// arr ke andar directly push() method nahi hota.
// Chain roughly:
// push() → Array.prototype se mila.
// toString() → Object.prototype se mil sakta hai.

// 3. __proto__
// __proto__ ek object ke prototype ko access karne ka legacy accessor hai.
// Modern JavaScript code mein __proto__ ko generally avoid karna better hai. Prototype inspect/set karne
//  ke liye Object.getPrototypeOf() / Object.setPrototypeOf() preferred hain.

// 4. prototype
// Yahin sabse zyada confusion hota hai. prototype har object ka property nahi hota. 
// Ye mainly constructor functions ke saath important hai.