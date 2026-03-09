const articles = [
  {
    title: "City Plants More Trees",
    level: "A2",
    author: "City Council Reporter",
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
    author: "School News Team",
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
    author: "Local Market Association",
    text: `A local food market is becoming popular again as more people choose fresh fruit and vegetables. 
    Shoppers say they enjoy talking to farmers and buying food from nearby areas. 
    The market manager hopes the number of visitors will continue to rise.`,
    vocab: {
      local: "from your area",
      fresh: "new and not old",
      continue: "to keep going"
    }
  },
  {
    title: "For a Better Future in Iran and Everywhere, Women’s Freedom is a Must",
    level: "B2",
    author: "Dr. Cochav Elkayam Levy",
    text: `On International Women’s Day, and precisely at a time when Israeli women are on the front lines of combat and in the spotlight of international attention; female pilots, navigators, aircrew women as well as fighters, doctors, tank operators, reservists, reshaping the profile of Israeli women, it is time to pause and acknowledge a grim truth: women are not only on the front lines of combat. They are still on the front lines of harm and are struggling against a reality of unprecedented erosion of their basic rights.

It is not for nothing that the faces of the brave Iranian women who led the protests in Iran, and paid with their bodies and/or their lives, are flooding social networks around the world these days. It is not for nothing that the (blurred) faces of Israeli Air Force pilots appear at the top of headlines. The world loves symbols and loves brave women. But the question arises: where does all this love disappear to when it comes to equality and women’s security? Too often, that is where admiration gives way to hesitation, skepticism, and a striking lack of attention.

International Women’s Day reminds us that the struggle for equality does not take place in a vacuum. It is daily, and it involves questions of power, governance, and the world order we seek to uphold. If there is one common lesson from Tehran, Israel, and many other communities, it is this: you cannot build stable security on indifference to the suffering of women.

In Israeli discourse on the confrontation with Iran, the discussion tends to be limited to tangible military threats: missiles, proxies, and a nuclear program. But the deeper threat posed by the regime in Tehran is not only security-related, it is normative. It is a direct challenge to the idea of an international order based on the basic protection of civil liberties. A regime that has built its power on the systematic oppression of women, the persecution of opponents, and the use of political violence not only undermines regional stability, but also allows terrorism and systematic daily violence to flourish.

It is impossible to ignore the thread that connects the struggle of women in Iran and the Israeli reality since October 7. In both contexts, women are at the heart of the arena: sometimes as those who lead courageous civil resistance, and sometimes as those whose bodies and lives become, in the most painful way, a battlefield. The accumulated experience of the world teaches that violence against women, and sexual violence in particular, is not a by-product of conflicts, but a tool of control and intimidation. So it is in Iran, and so it was in the events of October 7 and the captivity that followed.

For the past two years, we have been working to establish a secure international archive documenting the crimes of sexual and gender-based violence committed by Hamas, crimes that unfortunately targeted both women and men, but which disproportionately affected women and were rooted in broader patterns of gender-based violence. The archive, which I was scheduled to present to many at the UN this week, is not just a repository of historical evidence and testimonies; it is a normative intervention in the struggle for truth. It seeks to ensure that these crimes are not absorbed into the fog of denial, silence, or the rapid political erosion of public memory, but are remembered for generations. The documentation that we have labored over for two excruciatingly difficult years, through daily and almost impossible exposure to these materials, is also a reminder that the fight against gender-based violence and the violation of women’s rights is not a peripheral issue in matters of security. It lies at the very core of security and stability. From an Israeli perspective, recognizing this is particularly important. Israeli society has learned since October 7 to what extent the presence and involvement of women is not only a social issue but also a security one.

The discussion about Iran cannot remain solely in the realm of military strategy. It is already clear today that overthrowing the regime is a complicated and difficult matter. At the same time, any real attempt to shape a different reality in Iran will inevitably involve deep and ongoing support for Iranian activists, and first and foremost for the women’s movements that have become one of the main arenas of resistance to the regime in recent years. Alongside the use of force, a long-term strategic vision requires recognizing that the integration of women into decision-making centers, and the recognition of their equal rights, are not marginal social issues. They are fundamental conditions for internal and regional stability. In other words, the struggle for women’s freedom in Iran is a necessary condition for a different future. And much more than that: it is not just an Iranian struggle. It also reminds Israel, and the entire world, that a free and stable future will not be built without the full freedom of women.

Ultimately, the real question is not just how states protect their borders, but how they define their duty to the human beings who live within them. The true test of a society’s security lies in its ability to ensure that women can live without fear at home, on the street, and in the public sphere, and that they will not be required to fight again and again for their place in leadership positions. The choice to support women fighting for their rights is a fundamental position that will determine what kind of world will be built here on the day after the crises. It is, in fact, the boundary line between a society that seeks stability and a society that loses it.`,
    vocab: {
      oppression: "the cruel or unfair treatment of people",
      persecution: "hostile treatment, especially because of race or beliefs",
      violence: "behavior that is intended to hurt people",
      equality: "the state of being equal in rights and opportunities",
      security: "the state of being safe from harm",
      stability: "the state of being steady and not changing",
      regime: "a system of government",
      resistance: "the act of fighting against something",
      integration: "the act of combining or adding parts to make a unified whole",
      governance: "the way a country or organization is governed"
    }
  }
];

const podcasts = [
  {
    title: "Daily News Summary",
    level: "A2",
    description: "A short summary of today's news stories, perfect for beginners.",
    vocab: {
      summary: "a short description of the main points",
      stories: "reports of events"
    }
  },
  {
    title: "Science and Technology Talk",
    level: "B1",
    description: "Discussing the latest in science and technology with simple explanations.",
    vocab: {
      technology: "tools and machines from science",
      explanations: "ways to make something clear"
    }
  },
  {
    title: "Global Issues Debate",
    level: "B2",
    description: "In-depth discussion on important world problems and solutions.",
    vocab: {
      global: "relating to the whole world",
      solutions: "answers to problems"
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

  let filteredArticles;
  if (level === 'daily') {
    const today = new Date();
    const day = today.getDate();
    const index = day % articles.length;
    filteredArticles = [articles[index]];
  } else {
    filteredArticles = level === 'all' ? articles : articles.filter(a => a.level === level);
  }

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
    <p><em>By ${article.author || 'Unknown Author'}</em></p>
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