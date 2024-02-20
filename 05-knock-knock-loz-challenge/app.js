/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on images.
  3. Manipulate image attributes dynamically based on user interactions and randomness.

Brief:
You're presented with two closed doors. Your task is to choose one to reveal what's behind both. Will you find Loz behind the door you chose or the other one? The outcome should be random.

Expected Outcomes:
  1. Initially, both doors are closed.
  2. When one door is clicked, both doors should open, revealing either an empty room or Loz behind them.
*/

// Place your plan and solution below!

// 1. get both doors as a node list [node, node]
const doorList = document.querySelectorAll(".door");
// console.log(doorList);
let doorOpen = false

// 3. function to do stuff.
function openDoor() {
  let randomNum = Math.floor(Math.random() * doorList.length);
  
  if (!doorOpen) {
    doorList.forEach((door) => {
      door.src = 'door-open-empty.png'
    })
     doorList[randomNum].src = "door-open-loz.png";
     doorOpen = true;
  } else {
    doorList.forEach((door) => {
      door.src = 'door-closed.png'
    })
    doorOpen = false
  }
}

// 2. add event listener click to both
doorList.forEach((door) => {
  door.addEventListener("click", openDoor);
});
