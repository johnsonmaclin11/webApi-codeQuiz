const quizDB = [
  {
    question: "Q1: What is full form of HTML ?",
    a: "Hello to my land",
    b: "Hey text markup Language",
    c: "Hypertext Makeup Language",
    d: "Hypertext Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is full form of CSS ?",
    a: "Cascading style sheets",
    b: "Cascading style sheep",
    c: "Cartoon style sheets",
    d: "Cascading super sheets",
    ans: "ans1",
  },
  {
    question: "Q3: what is fullform of HTML ?",
    a: "Hypertext Transfer Product",
    b: "Hypertext test protocol",
    c: "Hey Transfer protocol",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: Whats is full form of JS ?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustScript",
    d: "JordanShoes",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerHTML = questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} Good Job </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
      `;
    showScore.classList.remove("scoreArea");
  }
});
