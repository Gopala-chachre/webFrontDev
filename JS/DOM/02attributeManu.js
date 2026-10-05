// attribute manipulation
// 1. getAttribute() - it will return the value of that attribute
// 2. setAttribute() - it will set the value of that attribute
// 3. removeAttribute() - it will remove the attribute from that tag

let a = document.querySelector("a");
console.log(a); 
// you got "href: "http://127.0.0.1:5500/JS/DOM/indexDOM.html" " kahi pe
// mtlb aagr href me na do to same page of point karta h
// or change karne keliye 

/// we can get attribute
console.log(a.getAttribute("herf"));


// a.href = "https://www.google.com";
// but we done it by setAttribute()
a.setAttribute("href", "https://www.google.com");


let img = document.querySelector("img");
img.setAttribute("src", "../../HTLM/example01.png")

// now remove attribute
img.removeAttribute("alt");