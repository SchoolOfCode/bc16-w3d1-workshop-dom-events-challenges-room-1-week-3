/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!
// 1 select the slider
// 2. select the stars div
// 3. select the stars element
// 4. add event lister to the slider element
// 5. add stars depending on value of slider

const slider = document.getElementById("starSlider");
const starsDiv = document.getElementById("stars");
// const starElement = document.querySelector(".star-icon");

// console.log(starElement);

slider.addEventListener("input", () => {
  starsDiv.innerHTML = "";
  for (let i = 0; i < slider.value; i++) {
    const newStarElement = document.createElement("span");
    newStarElement.className = "star-icon";
    newStarElement.textContent = "★";
    starsDiv.appendChild(newStarElement);
  }
});
