/*jshint esversion: 6 */
let random1 = Math.floor(Math.random() * 10);
let random2 = Math.floor(Math.random() * 20);
let num1 = random1;
let num2 = random2;

const question = document.querySelector(".question");
const answer = document.querySelector("#answer");
const result = document.querySelector(".result");
const submit = document.querySelector("#submit");
const next = document.querySelector("#next");
const sentence = document.querySelector(".sentence");
const totalScore = document.querySelector(".total-score");

let score = 0;

window.addEventListener("DOMContentLoaded", function () {
  newQuestion();
});

next.addEventListener("click", function () {
  let item = num2 - num1;
  if (answer.value == item) {
    nextQuestion();
  }
});

submit.addEventListener("click", function () {
  let item = num2 - num1;
  if (answer.value == item) {
    result.innerHTML = "Correct Answer";
    result.style.backgroundColor = "#d0f4ba";
    result.style.color = "#007621";
    score++;
  } else if (answer.value == "") {
    sentence.innerHTML = "Please type something...";
    sentence.style.color = "#9d0208";
  } else {
    result.innerHTML = "Incorrect Answer";
    result.style.backgroundColor = "#ff758f";
    result.style.color = "#780116";
    score--;
  }
  totalScore.innerHTML = `Score : ${score}`;
});

function nextQuestion() {
  answer.value = "";
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 20);
  question.innerHTML = `${num2} - ${num1}`;
  result.innerHTML = "";
  sentence.innerHTML = "";
}

function newQuestion() {
  question.innerHTML = `${num2} - ${num1}`;
}
