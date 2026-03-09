const articles = [
  {
    title: "City Plants More Trees",
    level: "A2",
    text: `A city council started a new plan to plant 500 trees in local parks and near schools. 
    Leaders say the project will help make the city cleaner and cooler during hot weather. 
    Many students joined the first planting day and said they were happy to help the environment.`,
    vocab: {
      council: "a group of people who help run a town or city",
      project: "a planned piece of work",
      environment: "the natural world around us"
    }
  },
  {
    title: "Students Build a Robot",
    level: "B1",
    text: `A group of middle school students built a small robot for a science fair. 
    The robot can move around the classroom and carry light objects. 
    Their teacher said the activity helped students develop problem-solving skills and teamwork.`,
    vocab: {
      robot: "a machine that can do tasks",
      develop: "to grow or improve",
      teamwork: "working well with other people"
    }
  },
  {
    title: "Local Market Becomes Popular Again",
    level: "B2",
    text: `A local food market is becoming popular again as more people choose fresh fruit and vegetables. 
    Shoppers say they enjoy talking to farmers and buying food from nearby areas. 
    The market manager hopes the number of visitors will continue to rise.`,
    vocab: {
      local: "from your area",
      fresh: "new and not old",
      continue: "to keep going"
    }
  }
];

const matchingWords = [
  { word: "council", answer: "a group of people who help run a town or city" },
  { word: "develop", answer: "to grow or improve" },
  { word: "fresh", answer: "new and not old" }
];

const matchingOptions = [
  "to grow or improve",
  "a group of people who help run a town or city",
  "new and not old"
];

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");
const articleList = document.getElementById("article-list");
const articleDisplay = document.getElementById("article-display");
const matchingExercise = document.getElementById("matching-exercise");
const checkMatchingBtn = document.getElementById("check-matching");
const matchingResult = document.getElementById("matching-result");
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.section;
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

function renderArticles(level = 'all') {
  articleList.innerHTML = "";

  const filteredArticles = level === 'all' ? articles : articles.filter(a => a.level === level);

  filteredArticles.forEach((article) => {
    const originalIndex = articles.indexOf(article);
    const card = document.createElement("div");
    card.className = "article-card";

    card.innerHTML = `
      <h3>${article.title}</h3>
      <p><strong>Level:</strong> ${article.level}</p>
      <button onclick="showArticle(${originalIndex})">Read Article</button>
    `;

    articleList.appendChild(card);
  });
}

function showArticle(index) {
  const article = articles[index];
  let textWithVocab = article.text;

  Object.keys(article.vocab).forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    textWithVocab = textWithVocab.replace(
      regex,
      `<span class="vocab-word" data-word="${word}">${word}</span>`
    );
  });

  articleDisplay.innerHTML = `
    <h3>${article.title}</h3>
    <p>${textWithVocab}</p>
    <div id="vocab-info" class="vocab-box">Click a highlighted word to see the meaning.</div>
  `;

  const vocabWords = document.querySelectorAll(".vocab-word");
  const vocabInfo = document.getElementById("vocab-info");

  vocabWords.forEach(item => {
    item.addEventListener("click", () => {
      const word = item.dataset.word;
      vocabInfo.innerHTML = `<strong>${word}</strong>: ${article.vocab[word]}`;
    });
  });
}

function renderMatchingExercise() {
  matchingExercise.innerHTML = "";

  matchingWords.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "match-row";

    let optionsHtml = `<option value="">Choose a meaning</option>`;
    matchingOptions.forEach(option => {
      optionsHtml += `<option value="${option}">${option}</option>`;
    });

    row.innerHTML = `
      <label><strong>${item.word}</strong></label>
      <select id="match-${index}">
        ${optionsHtml}
      </select>
    `;

    matchingExercise.appendChild(row);
  });
}

checkMatchingBtn.addEventListener("click", () => {
  let score = 0;

  matchingWords.forEach((item, index) => {
    const selected = document.getElementById(`match-${index}`).value;
    if (selected === item.answer) {
      score++;
    }
  });

  matchingResult.textContent = `You got ${score} out of ${matchingWords.length} correct.`;
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = {
    q1: "b",
    q2: "a",
    q3: "a"
  };

  let score = 0;

  Object.keys(answers).forEach(question => {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === answers[question]) {
      score++;
    }
  });

  quizResult.textContent = `Your score is ${score} out of 3.`;
});

const levelTabs = document.querySelectorAll('#articles .level-tab');
levelTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    levelTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderArticles(tab.dataset.level);
  });
});

renderArticles('all');
renderMatchingExercise();