const quizData = [
  {
    q: "How many diapers does a baby use in their first year?",
    a: "About 2,500–3,000 diapers"
  },
  {
    q: "Which sense is most developed at birth?",
    a: "Hearing"
  },
  {
    q: "How many times per day does a newborn typically eat?",
    a: "8–12 times"
  },
  {
    q: "How many bones is a baby born with?",
    a: "About 300 bones"
  },
  {
    q: "How many hours does a newborn sleep in a 24-hour period?",
    a: "14–17 hours"
  },
  {
    q: "What is the size of a baby’s tummy at birth?",
    a: "About the size of a cherry"
  },
  {
    q: "At what age do babies usually begin smiling intentionally?",
    a: "Around 6 weeks"
  },
  {
    q: "What percentage of babies are born on their due date?",
    a: "About 5%"
  },
  {
    q: "True or False: Babies are born with kneecaps",
    a: "False"
  },
  {
    q: "True or False: Newborns can recognize their mother’s voice",
    a: "True"
  }
];

let currentIndex = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");

totalEl.textContent = quizData.length;

function loadQuestion() {
  questionEl.textContent = quizData[currentIndex].q;
  answerEl.textContent = quizData[currentIndex].a;
  answerEl.classList.add("hidden");
  currentEl.textContent = currentIndex + 1;
}

function showAnswer() {
  answerEl.classList.remove("hidden");
}

function nextQuestion() {
  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

loadQuestion();
