// Learning Objectives:
// 1) Build upon the skills you've already worked on
// - DOM Manipulationm, 
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
// 1) Initially there is an example question structure in the HTML, your script should only fill the pub quiz sheet with relevant questions from the question data you've been providied.
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

console.log(questions);
