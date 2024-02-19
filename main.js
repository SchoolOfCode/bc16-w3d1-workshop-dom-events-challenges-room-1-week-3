// 1. get container
const container = document.getElementById("container");
// 2. create elements
const parElement = document.createElement("p");
const h3Element = document.createElement("h3");
const divElement = document.createElement("div");

// div elements
const h1Element = document.createElement("h1");
const par2Element = document.createElement("p");
// 3. add attributes and text content
// p
parElement.textContent = "Hey I'm red!";
parElement.style.color = "red";

// h3
h3Element.textContent = "I'm a blue h3!";
h3Element.style.color = "blue";

// div
divElement.setAttribute("style", "background: pink; border: 1px solid black ");

// h1
h1Element.textContent = "I'm in a div.";
par2Element.textContent = "#metoo";

// 4. append to parent
container.appendChild(parElement);
container.appendChild(h3Element);
divElement.appendChild(h1Element);
divElement.appendChild(par2Element);
container.appendChild(divElement);
// 5. repeat for the other elements
