/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement mouse event listeners.
  3. Manipulate CSS properties through JavaScript.

Brief:
Chris is eager to perform a magic trick — to vanish before your eyes! By harnessing the power of CSS and JavaScript, make Chris disappear when the mouse hovers over his image. 

Expected Outcomes:
  1. When the user hovers over Chris's image, he should disappear.
  2. When the user moves the mouse away, Chris should reappear.

Hint: You can achieve this in multiple ways e.g. via the opacity or style property, etc. 
*/

// Place your plan and solution below!

// 3. create function that toggles opacity to 0 and back

// 1. Select the image element
const chrisImg = document.getElementById("chrisImage");
console.log(chrisImg);

// 2. add event listener to img mouseover.
document.addEventListener("mouseover", (event) => {
  if (event.target === chrisImg) {
    chrisImg.style.opacity = 0;
  } else {
    chrisImg.style.opacity = 1;
  }
});
