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

// --- ARTICLE OF THE DAY --- update these fields whenever you want a new article ---
const dailyArticle = {
  title: "When War Hits Close To Home",
  level: "B1",
  summary: "Going door to door near the missile strike in Beit Shemesh, I realized I was at the homes of families whose children are classmates of my own children",
  link: "https://blogs.timesofisrael.com/when-war-hits-close-to-home/" // link to the full article, or remove this line if not needed
};
// ---------------------------------------------------------------------------------

function showArticleCard(article) {
  const card = document.createElement("div");
  card.className = "article-card";
  card.innerHTML = `
    <h3>${article.title}</h3>
    <p><strong>Level:</strong> ${article.level}</p>
    <p>${article.summary}</p>
    ${article.link ? `<p><a href="${article.link}" target="_blank">Read full article →</a></p>` : ""}
  `;
  card.addEventListener("click", () => {
    const display = document.getElementById("article-display");
    if (display) {
      display.innerHTML = `
        <h3>${article.title}</h3>
        <p><strong>Level:</strong> ${article.level}</p>
        <p>${article.summary}</p>
        ${article.link ? `<p><a href="${article.link}" target="_blank">Read full article →</a></p>` : ""}
      `;
      display.scrollIntoView({ behavior: "smooth" });
    }
  });
  return card;
}

function renderArticles(filterLevel) {
  articleList.innerHTML = "";

  if (filterLevel === "daily") {
    articleList.appendChild(showArticleCard(dailyArticle));
    return;
  }

  const filtered = filterLevel === "all"
    ? articles
    : articles.filter(a => a.level === filterLevel);

  filtered.forEach((article) => {
    articleList.appendChild(showArticleCard(article));
  });
}

if (articleList) {
  renderArticles("all");

  document.querySelectorAll(".level-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".level-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderArticles(tab.getAttribute("data-level"));
    });
  });
}

// --- LISTENING FILES --- add new audio files here ---
const listeningFiles = [
  {
    title: "Moral",
    level: "B1",
    src: "Audio/moral.mp3",
    vocab: [
      { word: "anxiety", definition: "strong worry about what might happen" },
      { word: "struggle", definition: "a very difficult situation or effort" },
      { word: "pressure", definition: "stress or strong demands" },
      { word: "desperation", definition: "a feeling of having no hope or no options" },
      { word: "ruthless", definition: "cruel and without pity" },
      { word: "trapped", definition: "unable to escape a difficult situation" },
      { word: "confessed", definition: "admitted the truth about doing something wrong" },
      { word: "responsibility", definition: "accepting that something is your duty or fault" },
      { word: "sentenced", definition: "officially given a punishment by a court" },
      { word: "pardon", definition: "official forgiveness by a president or government" },
      { word: "mercy", definition: "kindness or forgiveness instead of punishment" },
      { word: "justice", definition: "fair treatment according to the law" }
    ]
  }
  // Add more files here, e.g.:
  // { title: "My Title", level: "A1", src: "Audio/filename.mp3", vocab: [] }
];
// -----------------------------------------------------

const audioList = document.getElementById("audio-list");

function showAudioFile(file) {
  const existing = document.getElementById("audio-display");
  if (existing) existing.remove();
  if (!file) return;

  const card = document.createElement("div");
  card.className = "card";
  card.id = "audio-display";
  const vocabHTML = file.vocab.map(v =>
    `<li><strong>${v.word}</strong> <button class="speaker-btn" onclick="speakWord('${v.word}')">🔊</button> ${v.definition}</li>`
  ).join("");
  card.innerHTML = `
    <h3>${file.title}</h3>
    <p>Listen to the audio and click the speaker icon to hear each word pronounced.</p>
    <audio controls style="width:100%;margin:10px 0">
      <source src="${file.src}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    ${file.vocab.length > 0 ? `<ul style="display:block;padding-left:20px;margin-top:12px">${vocabHTML}</ul>` : ""}
  `;
  audioList.appendChild(card);
}

function renderAudioLevel(level) {
  audioList.innerHTML = "";
  const filtered = listeningFiles.filter(f => f.level === level);

  const select = document.createElement("select");
  select.style.marginTop = "16px";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = filtered.length === 0 ? "No files for this level yet" : "Select a listening file...";
  select.appendChild(defaultOption);

  filtered.forEach((file, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = file.title;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const file = filtered[parseInt(select.value)];
    showAudioFile(file || null);
  });

  audioList.appendChild(select);
}

if (audioList) {
  renderAudioLevel("A1");

  document.querySelectorAll("[data-audio-level]").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("[data-audio-level]").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderAudioLevel(tab.getAttribute("data-audio-level"));
    });
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

  vocabItems.forEach((item) => {
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