/*jshint esversion: 6 */
let random1 = Math.floor(Math.random() * 10);
let random2 = Math.floor(Math.random() * 10);
let num1 = random1;
let num2 = random2;

const question = document.querySelector(".question");
const answer = document.querySelector("#answer");
const result = document.querySelector(".result");
const submit = document.querySelector("#submit");
const next = document.querySelector("#next");
const sentence = document.querySelector(".sentence");

window.addEventListener("DOMContentLoaded", function () {
  newQuestion();
});

next.addEventListener("click", function () {
  answer.value = "";
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  question.innerHTML = `${num1} x ${num2}`;
  result.innerHTML = "";
  sentence.innerHTML = "";
});

submit.addEventListener("click", function () {
  let item = num1 * num2;
  if (answer.value == item) {
    result.innerHTML = "Correct Answer";
    result.style.backgroundColor = "#d0f4ba";
    result.style.color = "#007621";
  } else if (answer.value == "") {
    sentence.innerHTML = "Please type something";
    sentence.style.color = "#9d0208";
  } else {
    result.innerHTML = "Wrong Answer";
    result.style.backgroundColor = "#ff758f";
    result.style.color = "#780116";
  }
});

function newQuestion() {
  question.innerHTML = `${num1} x ${num2}`;
}
