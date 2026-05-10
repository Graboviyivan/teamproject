import { questionsData } from "../db/quez.js";

let score = 0;
let time = 10;
let curentQuestion = 0;
let curentQuestionList = [];
let timerId;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const choicDifficult = document.getElementById("choicDifficult");
const startBtn = document.getElementById("startQuiz");

const questionText = document.getElementById("questionText");
const questionImg = document.getElementById("questionImg");
const timerText = document.getElementById("timerText");
const answerList = document.getElementById("answerList");
const reloadBtn = document.getElementById("reloadBtn")

function displayAnswer(answerText, correctIndex, answerIndex) {
  const answerItem = document.createElement("li");
  const answerBtn = document.createElement("button");

  answerBtn.textContent = answerText;
  answerBtn.classList.add("answerTextStyle")
  answerItem.append(answerBtn);
  answerList.append(answerItem);

  answerBtn.addEventListener("click", () => {
    clearInterval(timerId);

    const allButton = answerList.querySelectorAll("button");
    allButton.forEach((btn) => (btn.disabled = true));

    if (answerIndex === correctIndex) {
      score++;
      answerBtn.classList.add("correct");
    } else {
      answerBtn.classList.add("unCorrect");
    }

    setTimeout(() => {
      nextQestion();
    }, 500);
  });
}

function displayAnswerScreen(questions) {
  answerList.innerHTML = "";
  questionImg.src = questions.imgquestion;
  questionImg.classList.add("quiz-image");
  questionText.textContent = questions.question;

  questions.answers.forEach((element, index) => {
    displayAnswer(element, questions.correct, index);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerId);
  time = 10;
  timerText.textContent = time;

  timerId = setInterval(() => {
    time--;
    timerText.textContent = time;
    if (time <= 0) {
      nextQestion();
    }
  }, 1000);
}

function nextQestion() {
  clearInterval(timerId);
  curentQuestion++;

  if (curentQuestion < curentQuestionList.length) {
    displayAnswerScreen(curentQuestionList[curentQuestion]);
  } else {
    result(curentQuestionList.length);
  }
}

function result(num) {
  clearInterval(timerId);
  quizScreen.classList.add("disable");
  resultScreen.classList.remove("disable");
  
  const scoreText = document.getElementById("score-text");
  resultScreen.textContent = `Правильні відповаіді : ${score} із ${num}`;
  resultScreen.classList.add("resultText")
}

function startQuiz() {
  console.log(1);
  curentQuestionList = questionsData[choicDifficult.value];
  curentQuestion = 0;
  score = 0;

  startScreen.classList.add("disable");
  quizScreen.classList.remove("disable");
  resultScreen.classList.add("disable");
  resultScreen.classList.add("result-text");

  displayAnswerScreen(curentQuestionList[curentQuestion]);
}

startBtn.addEventListener("click", startQuiz);