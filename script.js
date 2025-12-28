const quizData = [
  {
    q: "How many diapers does a baby use in their first year?",
    options: ["500–800", "1,000–1,500", "2,500–3,000", "4,000+"],
    correct: 2
  },
  {
    q: "Which sense is most developed at birth?",
    options: ["Sight", "Smell", "Touch", "Hearing"],
    correct: 3
  },
  {
    q: "How many times per day does a newborn typically eat?",
    options: ["3–4", "5–6", "8–12", "15–20"],
    correct: 2
  },
  {
    q: "How many bones is a baby born with?",
    options: ["206", "250", "300", "350"],
    correct: 2
  },
  {
    q: "How many hours does a newborn sleep in a day?",
    options: ["6–8", "10–12", "14–17", "20–22"],
    correct: 2
  },
  {
    q: "What is the size of a baby’s tummy at birth?",
    options: ["Apple", "Cherry", "Lemon", "Plum"],
    correct: 1
  },
  {
    q: "At what age do babies smile intentionally?",
    options: ["1 week", "3 weeks", "6 weeks", "3 months"],
    correct: 2
  },
  {
    q: "What percentage of babies are born on their due date?",
    options: ["25%", "10%", "5%", "1%"],
    correct: 2
  },
  {
    q: "True or False: Babies are born with kneecaps",
    options: ["True", "False", "Sometimes", "Only boys"],
    correct: 1
  },
  {
    q: "True or False: Newborns recognize their mother’s voice",
    options: ["True", "False", "Only after birth", "Only after 1 month"],
    correct: 0
  }
];

let currentIndex = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");

totalEl.textContent = quizData.length;

function loadQuestion() {
  const q = quizData[currentIndex];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;
    optionsEl.appendChild(btn);
  });

  currentEl.textContent = currentIndex + 1;
}

function showAnswer() {
  const correctIndex = quizData[currentIndex].correct;
  const options = document.querySelectorAll(".option");

  options[correctIndex].classList.add("correct");
  options[correctIndex].textContent += " 🎉👶🍼";
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
