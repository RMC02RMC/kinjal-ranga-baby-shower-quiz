const quizData = [
  { q:"How many diapers in first year?", options:["500–800","1,000–1,500","2,500–3,000","4,000+"], correct:2 },
  { q:"Most developed sense at birth?", options:["Sight","Touch","Smell","Hearing"], correct:3 },
  { q:"How many feeds per day?", options:["3–4","5–6","8–12","15–20"], correct:2 },
  { q:"How many bones at birth?", options:["206","250","300","350"], correct:2 },
  { q:"How long do newborns sleep?", options:["6–8","10–12","14–17","20+"], correct:2 },
  { q:"Baby tummy size?", options:["Apple","Cherry","Plum","Lemon"], correct:1 },
  { q:"Intentional smile age?", options:["1 week","3 weeks","6 weeks","3 months"], correct:2 },
  { q:"Born on due date (%)?", options:["25%","10%","5%","1%"], correct:2 },
  { q:"Babies born with kneecaps?", options:["True","False","Sometimes","Only boys"], correct:1 },
  { q:"Recognize mom’s voice?", options:["True","False","After 1 month","After birth"], correct:0 },
  { q:"Newborn heart rate?", options:["60–80","80–100","120–160","180+"], correct:2 },
  { q:"Babies cry without tears?", options:["True","False","Only boys","Only girls"], correct:0 },
  { q:"Babies born with fingerprints?", options:["True","False","Later","Only twins"], correct:0 },
  { q:"Newborn vision distance?", options:["2–4 inches","8–12 inches","2 feet","Very clear"], correct:1 },
  { q:"Babies hiccup in womb?", options:["True","False","Only girls","Only boys"], correct:0 }
];

let i = 0;
const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const cur = document.getElementById("current");
const tot = document.getElementById("total");

tot.textContent = quizData.length;

function loadQuestion() {
  qEl.textContent = quizData[i].q;
  optEl.innerHTML = "";
  quizData[i].options.forEach((o, idx) => {
    const d = document.createElement("div");
    d.className = "option";
    d.textContent = o;
    optEl.appendChild(d);
  });
  cur.textContent = i + 1;
}

function showAnswer() {
  const opts = document.querySelectorAll(".option");
  opts[quizData[i].correct].classList.add("correct");
  opts[quizData[i].correct].textContent += " 🎉👶🍼";
}

function nextQuestion() { if (i < quizData.length-1) { i++; loadQuestion(); } }
function prevQuestion() { if (i > 0) { i--; loadQuestion(); } }

loadQuestion();
