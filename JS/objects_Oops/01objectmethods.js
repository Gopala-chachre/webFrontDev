// 1. Property Shorthand

// Normally agar variable aur object property ka naam same ho
let uname = "Gopala";
let uage = 22;

let user = {
    uname,
    uage
};

console.log(user);

console.log("+-------------------------------------+");
// 2. Computed Properties

// Normal object mein property name directly likhte hain:
// Lekin agar property ka name kisi variable se dynamically lena ho, to [] use karte hain:

let key = "name";

let user1 = {
    [key] : "Gopala"
};

console.log(user1.name);
console.log("+-------------------------------------+");

// 3. Object methods

// object ke anderr agaer ham function define karte h, usse object method kehte h

let student = {
    Sname : "Hemu",
    Sage : 22,
    Scity : "Indore",
    details : function(){ // or use details() 
        console.log(`${this.Sname} is a studen of MCA, with age ${this.Sage}`);
    }
}

student.details();

console.log("+-------------------------------------+");
// 4. Optional chaining ?.

// Ye tab use hota h jab hame sure nhi h ki object/property exist karti h ya nhi 
let teacher = {
    Tname : "Deepu",
    Tage : 20
}

console.log(teacher.Tname, teacher.Tage);
// console.log(teacher.address.city); // give error because it does not exist
// so use optional chaining
console.log(teacher?.Tcity); // undefined

console.log(student?.Scity); // Indore


console.log("+-------------------------------------+");
// 5. Nullish coalescing ??
// ?? iska use default value dene ke liye h jab value null ya undefined ho.

let score = null;
console.log(score??33);

// and 

let marks = 100;
console.log(marks??55);


// ?? VS || 
// ?? only null or undefined par default value deta h par
// || ye 0, "", false, null, undefined sub pe default value deta h

let age = 0;
console.log(age || 18); // 18
console.log(age ?? 18); // 0