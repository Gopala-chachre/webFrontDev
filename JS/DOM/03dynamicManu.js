// One of the most imp

// create element
// append/prepend kar do us element ko

let h1 = document.createElement("h1");
// console.log(h1); 
h1.textContent = "Good morning";
// document.body.append(h1); last element
document.querySelector("body").prepend(h1); // first element