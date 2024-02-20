// Learning Objectives:
// 1) Build upon the skills you've already worked on
// - DOM Manipulation,
// - Looping,
// - Utilising and manipulating Data Structures,
// - Altering the styles of the page
// ---------------------------
// Challenge:
// We have a pub quiz form that was left incomplete
// Using the questions, answers and multiple choice options provided,
// dynamically fill out the quiz and return an answer
// ---------------------------
// Expected Outcome:
// 1) Initially there is an example question structure in the HTML, your script should only fill the pub quiz sheet with relevant questions from the question data you've been provided.
// You can either choose 5 questions from this data to use, or check the bonus objective for a different way to do it.
// 2) The submit button should return all selected answers.
// 3) Compare the form data you receive on submit, with the correct answers to generate a correct answers score
// 4) Upon submitting the form (questions) should disappear/ no longer be visible, leaving only the result box
// 5) The players result should be displayed in the result element
// example: 5/5 correct!
// ----------------------------
// **bonus objectives:**
// 1) Instead of choosing some questions to use, code it to pick 5 random
// questions when the quiz is generated.
// 2)
// 3a) If the player gets 5/5 score,
// - a message should appear congratulating them below the result
// - the result box should change background-color to #77f17a
// 3b) If the player gets 0/5 score
// - a message should appear challenging the player to do better next time
// - the result box should change background-color to #f17778
// -----------------------------
// ** bonus bonus objective:**
// 1) display a play again button after the result is shown, which refreshes the quiz with new questions so the player can try again.

import { questions } from "./questions.js";
// console.log(questions);

// 1. select nodes ** question container and submit button create score variable to 0. select result div.

const questionContainer = document.querySelector(".question__container");
const submitButton = document.querySelector("button");
const resultDiv = document.getElementById("result");

// console.log(questionContainer);
// console.log(submitButton);
// console.log(resultDiv);

let score = 0;
const numOfQuestions = 5;

// ** Outer function to run 5 times related to quiz . length.

// ** clear all the html nodes uncomment line below **
// questionContainer.innerHTML = "";

// 2. function to generate 5 random questions 5 should be a global variable. so it can change.
function generateQuestions() {
  // shuffle quiz object then just select first 5 numbers
  const shuffledQuestions = shuffleArray(questions);
  const fiveQuestionArray = [];
  for (let i = 0; i < numOfQuestions; i++) {
    fiveQuestionArray[i] = shuffledQuestions[i];
  }
  return fiveQuestionArray;
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

console.log(generateQuestions());

// 2. store quiz question objects in a new array.

// 3. function to build nodes.
// 3. build one ul outside of the loop + attributes
// 3. function should loop 4 times corresponding to number of questions. build Li, inputs and labels. add attributes. need a unique variable naming system. name attr on input needs to change with loop iteration.
// 3. start appending elements inside out. this can be done in the for loop.
// li > input and label
// ul > li, li ,li, li  this one could be a loop.
// Outside of for loop - add questions to the question container.

// 4. add event listener ot the submit button. use function checkAnswer.

// 5. function to checkAnswer
// 5. update result div
// 5. call quizBuilder function

// 6 when game over notify user
