/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!

// select on button
const turnBulbOn = document.getElementById("turnBulbOn");
// select off butt
const turnBulbOff = document.getElementById("turnBulbOff");
// select bulb image
const bulbImage = document.getElementById("lightbulb");

// add event listener to turn on bulb
turnBulbOn.addEventListener("click", () => {
  // change bulb image to on
  bulbImage.src = "light-bulb-on.png";
});
// add event listener to turn off bulb
turnBulbOff.addEventListener("click", () => {
  // change bulb image to off
  bulbImage.src = "light-bulb-off.png";
});
