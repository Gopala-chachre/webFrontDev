// What is DOM?
// The Document Object Model (DOM) is a programming interface for web documents. 
// It represents the page so that programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects;that way, programming languages can interact with the page.


// And now DoM manipulation using JavaScript
// aab iske liye 4-6 chize samajhna padega
// 1. HTML se element select karna
// 2. text badalna
// 3. html badalna
// 4. css badalna
// 5. koi attribute badalna
// 6. event listener add karna 

// -------------------------------------------------

// selecting element

let id_1 = document.getElementById("a1");
console.log(id_1);

let class_1 = document.getElementsByClassName("c1");
console.log(class_1);

let queS_1 = document.querySelector("h1"); // only select the first h1 teg
console.log(queS_1);

let queSall_1 = document.querySelectorAll("h1"); // give array like structure(NodeList)
console.log(queSall_1);

// ----------------------------------------------------------------------------------------------
// text access & change:
// innerText & textContent do the same work
// change the text 


let h1 = document.querySelector("h1");
// console.log(h1) see where is the "Lorem ipsum dolor sit amet." likha huaa and change it 
h1.innerText = "Hello my name is gopala";

let h2 = document.querySelector("h2");
h2.textContent = "hello my name is deepanshu";

// innerHTML it chane the inner html of that tag
let h3 = document.querySelector("h3");
h3.innerHTML = "Hello my name is <i>Himanshu<i/>";

// you can even change any values of selected tag 
// when we got the log of h1 all the doc aapne samne sari element ki properity aajaygi
// fir us properity (object) ko yaha pe chanege kar sakte h
// eg:
// h3.hidden = true;
// and many more

//----------------------------------------------------------------------------------------------

