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
  // A1
  { title: "Inflation in Iran", level: "A1", src: "Audio/A1/Inflation in Iran.mp3", vocab: [] },
  { title: "Public Transport", level: "A1", src: "Audio/A1/Public Transport.mpeg", vocab: [] },
  // A2
  { title: "Fall of Assad", level: "A2", src: "Audio/A2/Fall of Assad.mpeg", vocab: [] },
  { title: "Iran Protests: Economic Discontent", level: "A2", src: "Audio/A2/Iran Protests_ Economic Discontent.mp3", vocab: [] },
  { title: "Iron Beam", level: "A2", src: "Audio/A2/Iron Beam.mp3", vocab: [] },
  { title: "Mossad's Secret Agent Yael", level: "A2", src: "Audio/A2/Mossad's Secret Agent Yael.mp3", vocab: [] },
  { title: "Public Transport", level: "A2", src: "Audio/A2/Public Transport.mpeg", vocab: [] },
  // B1
  { title: "Cluster Missiles", level: "B1", src: "Audio/B1/Cluster Missiles.mp4", vocab: [] },
  { title: "Cross-Border Mysteries: Ahmad Shukr's Story", level: "B1", src: "Audio/B1/Cross-Border Mysteries_ Ahmad Shukr's Story.mp3", vocab: [] },
  { title: "Fall of Assad", level: "B1", src: "Audio/B1/Fall of Assad.mpeg", vocab: [] },
  { title: "Hidden Jewish History of Somaliland", level: "B1", src: "Audio/B1/Hidden Jewish History of Somaliland.mp3", vocab: [] },
  { title: "Iran Protests and Potential Changes", level: "B1", src: "Audio/B1/Iran Protests and Potential Changes.mp3", vocab: [] },
  { title: "Iran Protests: Economic Origins and Beyond", level: "B1", src: "Audio/B1/Iran Protests_ Economic Origins and Beyond.mp3", vocab: [] },
  { title: "Oron Shaul", level: "B1", src: "Audio/B1/Oron Shaul.mpeg", vocab: [] },
  { title: "Public Transport", level: "B1", src: "Audio/B1/Public Transport.mpeg", vocab: [] },
  { title: "Secrets of the Night", level: "B1", src: "Audio/B1/Secrets of the Night.mp3", vocab: [] },
  { title: "Somaliland's Quest for Recognition", level: "B1", src: "Audio/B1/Somaliland's Quest for Recognition.mp3", vocab: [] },
  { title: "Understanding the Iran Protests", level: "B1", src: "Audio/B1/Understanding the Iran Protests.mp3", vocab: [] },
  { title: "Moral", level: "B1", src: "Audio/B1/moral.mp3", vocab: [
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
  ]},
  // B2
  { title: "Cluster Missiles", level: "B2", src: "Audio/B2/Cluster Missiles.mp4", vocab: [] },
  { title: "Exploring Somaliland: A Hidden Gem", level: "B2", src: "Audio/B2/Exploring Somaliland_ A Hidden Gem.mp3", vocab: [] },
  { title: "Fall of Assad", level: "B2", src: "Audio/B2/Fall of Assad.mpeg", vocab: [] },
  { title: "Giving Advice", level: "B2", src: "Audio/B2/Giving Advice.mpeg", vocab: [] },
  { title: "Iran Protests and Potential Changes", level: "B2", src: "Audio/B2/Iran Protests and Potential Changes.mp3", vocab: [] },
  { title: "Iron Beam: The Future of Laser Weapons", level: "B2", src: "Audio/B2/Iron Beam_ The Future of Laser Weapons.mp3", vocab: [] },
  { title: "Lost Jewish Connections of Somaliland", level: "B2", src: "Audio/B2/Lost Jewish Connections of Somaliland.mp3", vocab: [] },
  { title: "Mossad's Secret Agent Yael", level: "B2", src: "Audio/B2/Mossad's Secret Agent Yael.mp3", vocab: [] },
  { title: "Oron Shaul", level: "B2", src: "Audio/B2/Oron Shaul.mpeg", vocab: [] },
  { title: "Somaliland's Quest for Recognition", level: "B2", src: "Audio/B2/Somaliland's Quest for Recognition.mp3", vocab: [] },
  // C1
  { title: "Assad: Last Days in Power", level: "C1", src: "Audio/C1/Assad_ Last Days in Power.mpeg", vocab: [] },
  { title: "Cluster Missiles", level: "C1", src: "Audio/C1/Cluster Missiles.mp4", vocab: [] },
  { title: "Giving Advice", level: "C1", src: "Audio/C1/Giving Advice.mpeg", vocab: [] },
  { title: "Iran's Turmoil and Economic Strife", level: "C1", src: "Audio/C1/Iran's Turmoil and Economic Strife.mp3", vocab: [] },
  { title: "Iron Beam: The Future of Laser Weapons", level: "C1", src: "Audio/C1/Iron Beam_ The Future of Laser Weapons.mp3", vocab: [] },
  { title: "Somaliland's Quest for Recognition", level: "C1", src: "Audio/C1/Somaliland's Quest for Recognition.mp3", vocab: [] }
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