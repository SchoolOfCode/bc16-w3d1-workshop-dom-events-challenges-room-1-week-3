// Learning Objectives:
// 1) Build upon the skills you've already worked on
// - DOM Manipulationm, - Looping, - Utilising Data Structures
// Challenge:
// We have a pub quiz form that was left incomplete
// Using the questions, answers and multiple choice options provided,
// dynamically fill out the quiz and return an answer

// Expected Outcome:
// 1) Initially there is an example question structure
// 2) Your script should only fill the pub quiz sheet with relevant questions
// from the question data you've been providied.
// You can choose 5 questions from this data to use, or check bonus objective
// 3) The submit button should return all selected answers, compare them with
// the correct answer and display your result in the result div element.
// example: 5/5 correct!
// **bonus:**
// 1) Instead of choosing some questions to use, code it to pick 5 random
// questions when the quiz is generated.

import { questions } from "./questions.js";

// creat score variable
let score = 0;
let fiveRandomizedQuestions = [];
// setting variables with selectors quiz container, button and results
const bodyElement = document.body;
const questionContainer = document.querySelector(".question__container");
const submitButton = document.querySelector("button");
const results = document.querySelector("#result");
const quizForm = document.querySelector("#quizForm");

// event listener for page load

bodyElement.addEventListener("load", get5Questions());

// event listeners for form submit

quizForm.addEventListener("submit", checkAnswer);

// function to create questions boiler plate
function displayQuestions(ques) {
  // loop through all questions 5 questions and display
  for (let i = 0; i < ques.length; i++) {
    //   create elements for each questions
    let questionTitle = document.createElement("div");
    let questionOptionsList = document.createElement("ul");
    let options = ques[i].options;
    // add text and classes
    questionOptionsList.classList.add("question__options");
    questionTitle.classList.add("question__title");
    questionTitle.innerText = ques[i].question;
    // append elements to correct parent elements
    questionContainer.appendChild(questionTitle);
    questionContainer.appendChild(questionOptionsList);
    // loop through array of answer options
    options.forEach((option) => {
      // create element for options
      let questionOption = document.createElement("li");
      let optionLabel = document.createElement("label");
      let optionInput = document.createElement("input");
      // append elements to correct parents
      questionOptionsList.appendChild(questionOption);
      questionOption.appendChild(optionInput);
      questionOption.appendChild(optionLabel);
      // add attributes and text
      optionInput.type = "radio";
      optionLabel.innerText = `${option}`;
    });
  }
}

// function to get 5 random question

function get5Questions() {
  fiveRandomizedQuestions.push(
    questions.sort((a, b) => 0.5 - Math.random()).slice(0, 5)
  );
  displayQuestions(fiveRandomizedQuestions[0]);
}

// function to compare data against answers

function checkAnswer() {}

// function creating the question text, list with input options and a label for those options
