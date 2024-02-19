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

// 1. Assign all needed elements to variables
// 2. Create event listener for click on door and call handler function
// 3. Assign random number to variable
// 4. Check if door is open
// 5a. if yes, Set doors src to open-empty
// 5b. if no, set doors src to closed
// 6. Set src to loz on random door using random index

const doors = document.querySelectorAll(".door");
let doorsOpen = false;


function handleDoorClick() {
  const randomIndex = Math.floor(Math.random() * doors.length);

  if (!doorsOpen) {
    doors.forEach((door) => {
      door.src = "door-open-empty.png";
      doors[randomIndex].src = "door-open-loz.png";
    })
    doorsOpen = true;
  } else {
    doors.forEach((door) => {
    door.src = "door-closed.png";
    })
    doorsOpen = false;
  }
}

doors.forEach((door) => {
  door.addEventListener("click", handleDoorClick);
})