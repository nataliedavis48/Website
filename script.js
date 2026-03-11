document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".section");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-section");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });

  const quizForm = document.getElementById("quiz-form");
  if (quizForm) {
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let score = 0;
      const answers = {
        q1: "b",
        q2: "a",
        q3: "a"
      };

      Object.keys(answers).forEach((key) => {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
          score++;
        }
      });

      const result = document.getElementById("quiz-result");
      if (result) {
        result.textContent = `You got ${score} out of 3 correct.`;
      }
    });
  }

  const dailyWord = document.getElementById("daily-word");
  const dailyDefinition = document.getElementById("daily-definition");

  const words = [
    { word: "resilient", definition: "able to recover quickly from difficulties" },
    { word: "predict", definition: "to say what you think will happen" },
    { word: "improve", definition: "to become better" },
    { word: "challenge", definition: "something difficult that tests you" }
  ];

  if (dailyWord && dailyDefinition) {
    const today = new Date().getDate() % words.length;
    dailyWord.textContent = words[today].word;
    dailyDefinition.textContent = words[today].definition;
  }
  const articleList = document.getElementById("article-list");

const articles = [
  {
    title: "Cities Plant More Trees",
    level: "A2",
    summary: "Many cities are planting more trees to make streets cooler and cleaner."
  },
  {
    title: "Students Build a Small Robot",
    level: "B1",
    summary: "A group of students created a robot for a school science project."
  },
  {
    title: "Local Markets Grow in Popularity",
    level: "B1",
    summary: "More people are visiting local markets because they want fresh food."
  }
];

if (articleList) {
  articles.forEach((article) => {
    const card = document.createElement("div");
    card.className = "article-card";
    card.innerHTML = `
      <h3>${article.title}</h3>
      <p><strong>Level:</strong> ${article.level}</p>
      <p>${article.summary}</p>
    `;
    articleList.appendChild(card);
  });
}

const matchingExercise = document.getElementById("matching-exercise");

const vocabItems = [
  { word: "resilient", correct: "able to recover quickly from difficulties" },
  { word: "predict", correct: "to say what you think will happen" },
  { word: "improve", correct: "to become better" }
];

if (matchingExercise) {
  const options = [
    "able to recover quickly from difficulties",
    "to say what you think will happen",
    "to become better"
  ];

  vocabItems.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "match-row";

    row.innerHTML = `
      <label>${item.word}</label>
      <select data-answer="${item.correct}">
        <option value="">Choose a meaning</option>
        ${options.map(option => `<option value="${option}">${option}</option>`).join("")}
      </select>
    `;

    matchingExercise.appendChild(row);
  });
}

const checkMatchingBtn = document.getElementById("check-matching");
if (checkMatchingBtn) {
  checkMatchingBtn.addEventListener("click", function () {
    const selects = matchingExercise.querySelectorAll("select");
    let correctCount = 0;

    selects.forEach((select) => {
      if (select.value === select.getAttribute("data-answer")) {
        correctCount++;
      }
    });

    const result = document.getElementById("matching-result");
    if (result) {
      result.textContent = `You got ${correctCount} out of ${selects.length} correct.`;
    }
  });
}
});