document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".section");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-section");
      if (!target) return;
      showSection(target);
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
  { title: "Inflation in Iran", level: "A1", category: "Current Affairs", src: "Audio/A1/Inflation in Iran.mp3", vocab: [
    { word: "money", definition: "coins and paper used to buy things" },
    { word: "price", definition: "how much something costs" },
    { word: "expensive", definition: "costs a lot of money" },
    { word: "cheap", definition: "does not cost much money" },
    { word: "buy", definition: "to pay money for something" },
    { word: "food", definition: "things we eat" },
    { word: "poor", definition: "not having much money" },
    { word: "market", definition: "a place where people buy and sell things" }
  ], questions: [
    "Is food expensive in your country? What do people buy most?",
    "What do you do when you do not have much money?"
  ], transcriptSrc: "Transcripts/A1/Inflation-in-Iran.txt"},
  { title: "Public Transport", level: "A1", category: "Society & Culture", src: "Audio/A1/Public Transport.mpeg", vocab: [
    { word: "bus", definition: "a large vehicle that carries many people" },
    { word: "train", definition: "a vehicle that travels on rails" },
    { word: "ticket", definition: "a small piece of paper that lets you travel" },
    { word: "station", definition: "a place where buses or trains stop" },
    { word: "travel", definition: "to go from one place to another" },
    { word: "city", definition: "a large town where many people live" },
    { word: "late", definition: "not arriving at the right time" },
    { word: "walk", definition: "to move on foot" }
  ], questions: [
    "How do you travel to school or work? Do you take a bus or train?",
    "Is public transport good in your city? Why or why not?"
  ], transcriptSrc: "Transcripts/A1/Public-Transport.txt"},
  // A2
  { title: "Fall of Assad", level: "A2", category: "Current Affairs", src: "Audio/A2/Fall of Assad.mpeg", vocab: [
    { word: "leader", definition: "a person who is in charge of a country or group" },
    { word: "government", definition: "the group of people who control a country" },
    { word: "escape", definition: "to get away from a dangerous place" },
    { word: "army", definition: "a large group of soldiers" },
    { word: "war", definition: "a fight between countries or groups" },
    { word: "power", definition: "control over people or a country" },
    { word: "fall", definition: "to lose control or position" },
    { word: "people", definition: "men, women, and children in a place" }
  ], questions: [
    "What do you think happens to a country when its leader leaves suddenly?",
    "Have you heard about Syria in the news? What do you know about it?"
  ]},
  { title: "Iran Protests: Economic Discontent", level: "A2", category: "Current Affairs", src: "Audio/A2/Iran Protests_ Economic Discontent.mp3", vocab: [
    { word: "protest", definition: "when people gather to show they are unhappy" },
    { word: "angry", definition: "feeling very unhappy about something" },
    { word: "price", definition: "how much something costs" },
    { word: "street", definition: "a road in a town or city" },
    { word: "police", definition: "people whose job is to keep order" },
    { word: "change", definition: "to become different" },
    { word: "work", definition: "a job or activity done to earn money" },
    { word: "difficult", definition: "not easy; needing a lot of effort" }
  ], questions: [
    "Why do you think people go to the streets to protest?",
    "Have you ever seen a protest? What was it about?"
  ], transcriptSrc: "Transcripts/A2/Iran-Protests-Economic-Discontent.txt"},
  { title: "Iron Beam", level: "A2", category: "Science & Technology", src: "Audio/A2/Iron Beam.mp3", vocab: [
    { word: "weapon", definition: "something used to hurt people or destroy things" },
    { word: "protect", definition: "to keep someone or something safe" },
    { word: "attack", definition: "to try to hurt someone or something" },
    { word: "laser", definition: "a very strong and narrow beam of light" },
    { word: "sky", definition: "the space above the earth" },
    { word: "shoot", definition: "to send something through the air at high speed" },
    { word: "new", definition: "made or discovered recently" },
    { word: "fast", definition: "moving or happening quickly" }
  ], questions: [
    "Do you think new weapons make countries safer or more dangerous?",
    "What other technologies do you know that help protect people?"
  ], transcriptSrc: "Transcripts/A2/Iron-Beam.txt"},
  { title: "The Story of a Spy", level: "A2", category: "Real Stories", src: "Audio/A2/Mossad's Secret Agent Yael.mp3", vocab: [
    { word: "spy", definition: "a person who secretly collects information" },
    { word: "secret", definition: "something that only a few people know" },
    { word: "mission", definition: "an important job someone is sent to do" },
    { word: "danger", definition: "a situation where someone might get hurt" },
    { word: "enemy", definition: "a person or country that wants to harm you" },
    { word: "discover", definition: "to find something for the first time" },
    { word: "safe", definition: "not in danger" },
    { word: "country", definition: "an area of land with its own government" }
  ], questions: [
    "Would you like to work as a spy? Why or why not?",
    "Why do you think countries need secret agents?"
  ], transcriptSrc: "Transcripts/A2/Mossads-Secret-Agent-Yael.txt"},
  { title: "Public Transport", level: "A2", category: "Society & Culture", src: "Audio/A2/Public Transport.mpeg", vocab: [
    { word: "transport", definition: "a way of moving people from place to place" },
    { word: "passenger", definition: "a person travelling in a vehicle" },
    { word: "journey", definition: "travel from one place to another" },
    { word: "route", definition: "the path taken to get somewhere" },
    { word: "delay", definition: "when something happens later than expected" },
    { word: "crowded", definition: "full of too many people" },
    { word: "service", definition: "a system that provides something to the public" },
    { word: "platform", definition: "the raised area at a station where you board a train" }
  ], questions: [
    "What is the most common type of transport in your city?",
    "What would you change about public transport where you live?"
  ], transcriptSrc: "Transcripts/A2/Public-Transport.txt"},
  { title: "Pros and Cons of TV", level: "A2", category: "Society & Culture", src: "Audio/A2/Pros and Cons of TV.mp4", vocab: [
    { word: "television", definition: "a device that shows moving pictures and sound" },
    { word: "entertainment", definition: "things that people enjoy watching or doing" },
    { word: "programme", definition: "a show on television or radio" },
    { word: "channel", definition: "a TV station that broadcasts programmes" },
    { word: "advertisement", definition: "a short message that tries to sell something" },
    { word: "influence", definition: "to have an effect on someone's thoughts or behaviour" },
    { word: "screen", definition: "the flat surface on a TV or computer that shows images" },
    { word: "remote control", definition: "a small device used to operate a TV from a distance" }
  ], questions: [
    "How many hours of TV do you watch each day? What do you like to watch?",
    "Do you think watching TV is a good way to learn English? Why?"
  ], transcriptSrc: "Transcripts/A2/Pros-and-Cons-of-TV.txt"},
  { title: "Is Europe Ready for War with Tehran?", level: "A2", category: "Current Affairs", src: "Audio/A2/Is Europe Ready for War with Tehran.mp4", vocab: [
    { word: "war", definition: "a serious fight between countries using armies" },
    { word: "army", definition: "a large group of soldiers who fight for a country" },
    { word: "danger", definition: "a situation where someone might get hurt" },
    { word: "enemy", definition: "a country or person that wants to harm you" },
    { word: "leader", definition: "a person who is in charge of a group or country" },
    { word: "peace", definition: "a time when there is no war or fighting" },
    { word: "country", definition: "an area of land with its own government" },
    { word: "agree", definition: "to have the same opinion as someone else" }
  ], questions: [
    "Do you think war is ever the right answer? Why or why not?",
    "What can ordinary people do to help keep peace in the world?"
  ], transcriptSrc: "Transcripts/A2/Is-Europe-Ready-for-War-with-Tehran.txt"},
  { title: "Peace Talks between Iran and USA", level: "A2", category: "Current Affairs", src: "Audio/A2/Peace Talks between Iran and USA.mp4", vocab: [
    { word: "talk", definition: "a conversation or discussion between people" },
    { word: "peace", definition: "a time when there is no war or fighting" },
    { word: "leader", definition: "a person who is in charge of a group or country" },
    { word: "agree", definition: "to have the same opinion or make a decision together" },
    { word: "problem", definition: "a situation that is difficult to deal with" },
    { word: "war", definition: "a serious fight between countries using armies" },
    { word: "meet", definition: "to come together with someone for a purpose" },
    { word: "hope", definition: "a feeling that something good will happen" }
  ], questions: [
    "Do you think talking is always better than fighting? Why?",
    "What do you hope will happen between Iran and the USA?"
  ], transcriptSrc: "Transcripts/A2/Peace Talks between Iran and USA.txt"},
  { title: "The Happiest Countries 2026", level: "A2", category: "Society & Culture", src: "Audio/A2/The Happiest Countries 2026.mp4", vocab: [
    { word: "happy", definition: "feeling pleasure and contentment" },
    { word: "country", definition: "a nation with its own government and land" },
    { word: "list", definition: "a number of things written one after another" },
    { word: "rank", definition: "a position in a list ordered by quality or importance" },
    { word: "money", definition: "coins and notes used to buy things" },
    { word: "health", definition: "the condition of your body and mind" },
    { word: "family", definition: "a group of people related to each other" },
    { word: "life", definition: "the period of time you are alive" }
  ], questions: [
    "Which country do you think is the happiest? Why?",
    "What makes you happy in your daily life?"
  ], transcriptSrc: "Transcripts/A2/The Happiest Countries 2026.txt"},
  // B1
  { title: "Cluster Missiles", level: "B1", category: "Science & Technology", src: "Audio/B1/Cluster Missiles.mp4", vocab: [
    { word: "missile", definition: "a weapon that flies through the air and explodes" },
    { word: "cluster", definition: "a group of things close together" },
    { word: "civilian", definition: "a person who is not in the military" },
    { word: "conflict", definition: "a serious disagreement or fight between groups" },
    { word: "launch", definition: "to send something into the air with force" },
    { word: "damage", definition: "harm or injury caused to something" },
    { word: "military", definition: "relating to an army or armed forces" },
    { word: "target", definition: "a person or place that is aimed at" }
  ], questions: [
    "Why do you think cluster missiles are considered especially dangerous to civilians?",
    "Should there be international rules about which weapons countries can use? Why?"
  ], transcriptSrc: "Transcripts/B1/Cluster-Missiles.txt"},
  { title: "Cross-Border Mysteries: Ahmad Shukr's Story", level: "B1", category: "History", src: "Audio/B1/Cross-Border Mysteries_ Ahmad Shukrs Story.mp3", vocab: [
    { word: "border", definition: "the line dividing two countries" },
    { word: "mystery", definition: "something that is difficult to explain or understand" },
    { word: "identity", definition: "who a person is" },
    { word: "investigate", definition: "to try to find out the truth about something" },
    { word: "evidence", definition: "information that helps prove something is true" },
    { word: "suspect", definition: "a person thought to have done something wrong" },
    { word: "disappear", definition: "to become impossible to find or see" },
    { word: "escape", definition: "to get away from a dangerous situation" }
  ], questions: [
    "Why do you think crossing borders can be dangerous for some people?",
    "What challenges do you think investigators face when solving cross-border cases?"
  ], transcriptSrc: "Transcripts/B1/Cross-Border-Mysteries.txt"},
  { title: "Fall of Assad", level: "B1", category: "Current Affairs", src: "Audio/B1/Fall of Assad.mpeg", vocab: [
    { word: "regime", definition: "a government that controls a country strictly" },
    { word: "collapse", definition: "to suddenly fall down or fail completely" },
    { word: "rebel", definition: "a person who fights against the government" },
    { word: "opposition", definition: "people or groups who disagree with those in power" },
    { word: "exile", definition: "being forced to live outside your own country" },
    { word: "uprising", definition: "when people rise up against those in power" },
    { word: "authority", definition: "the power to give orders and make decisions" },
    { word: "negotiate", definition: "to try to reach an agreement by discussion" }
  ], questions: [
    "What do you think leads people to rebel against their government?",
    "What challenges does a country face after its leader suddenly loses power?"
  ], transcriptSrc: "Transcripts/B1/Fall-of-Assad.txt"},
  { title: "Hidden Jewish History of Somaliland", level: "B1", category: "History", src: "Audio/B1/Hidden Jewish History of Somaliland.mp3", vocab: [
    { word: "heritage", definition: "traditions and history passed down through generations" },
    { word: "ancient", definition: "belonging to a very long time ago" },
    { word: "community", definition: "a group of people living in the same area" },
    { word: "tradition", definition: "a custom passed down through generations" },
    { word: "identity", definition: "the qualities that make a person or group who they are" },
    { word: "preserve", definition: "to keep something in its original state" },
    { word: "discover", definition: "to find or learn something for the first time" },
    { word: "culture", definition: "the beliefs and customs of a group of people" }
  ], questions: [
    "Why do you think some communities have hidden or forgotten their history?",
    "How important is it to preserve the history of minority communities? Why?"
  ], transcriptSrc: "Transcripts/B1/Hidden-Jewish-History-of-Somaliland.txt"},
  { title: "Iran Protests and Potential Changes", level: "B1", category: "Current Affairs", src: "Audio/B1/Iran Protests and Potential Changes.mp3", vocab: [
    { word: "protest", definition: "a public event where people show disagreement" },
    { word: "reform", definition: "a change made to improve a system" },
    { word: "demand", definition: "a strong request for something" },
    { word: "movement", definition: "a group of people working together for a cause" },
    { word: "crackdown", definition: "strong action taken to stop something" },
    { word: "potential", definition: "having the possibility to develop or happen" },
    { word: "unrest", definition: "a situation of public anger and disorder" },
    { word: "political", definition: "relating to the government and power" }
  ], questions: [
    "What changes do you think the protesters in Iran were hoping for?",
    "Do you think protests can lead to real change in a country? Give an example."
  ], transcriptSrc: "Transcripts/B1/Iran-Protests-and-Potential-Changes.txt"},
  { title: "Iran Protests: Economic Origins and Beyond", level: "B1", category: "Current Affairs", src: "Audio/B1/Iran Protests_ Economic Origins and Beyond.mp3", vocab: [
    { word: "inflation", definition: "a rise in prices over time" },
    { word: "unemployment", definition: "the state of not having a job" },
    { word: "corruption", definition: "dishonest behaviour by people in power" },
    { word: "inequality", definition: "an unfair difference between groups of people" },
    { word: "demonstrate", definition: "to take part in a public protest" },
    { word: "suppress", definition: "to stop something by force" },
    { word: "consequence", definition: "a result of an action" },
    { word: "economic", definition: "relating to money and how a country manages it" }
  ], questions: [
    "How does economic hardship like unemployment affect people's daily lives?",
    "Why do you think corruption makes economic problems worse for ordinary people?"
  ], transcriptSrc: "Transcripts/B1/Iran-Protests-Economic-Origins-and-Beyond.txt"},
  { title: "Oron Shaul", level: "B1", category: "History", src: "Audio/B1/Oron Shaul.mpeg", vocab: [
    { word: "soldier", definition: "a person who serves in an army" },
    { word: "capture", definition: "to take someone as a prisoner" },
    { word: "hostage", definition: "a person held prisoner to force others to act" },
    { word: "mourn", definition: "to feel and show great sadness after a loss" },
    { word: "remains", definition: "the body of a person who has died" },
    { word: "conflict", definition: "a serious fight or war between groups" },
    { word: "honor", definition: "great respect shown to someone" },
    { word: "family", definition: "a group of people related to each other" }
  ], questions: [
    "How do you think a family feels when a loved one is taken as a hostage?",
    "Why is it important for a country to bring home the remains of its fallen soldiers?"
  ], transcriptSrc: "Transcripts/B1/Oron-Shaul.txt"},
  { title: "Public Transport", level: "B1", category: "Society & Culture", src: "Audio/B1/Public Transport.mpeg", vocab: [
    { word: "infrastructure", definition: "basic systems a country needs, like roads and transport" },
    { word: "commute", definition: "to travel regularly to and from work" },
    { word: "sustainable", definition: "able to continue without harming the environment" },
    { word: "efficient", definition: "working well without wasting time or energy" },
    { word: "network", definition: "a system of connected routes or services" },
    { word: "investment", definition: "money spent to get a future benefit" },
    { word: "urban", definition: "relating to a town or city" },
    { word: "congestion", definition: "too much traffic causing slow movement" }
  ], questions: [
    "How could better public transport improve life in a city?",
    "Do you think governments should invest more in public transport or in roads? Why?"
  ], transcriptSrc: "Transcripts/B1/Public-Transport.txt"},
  { title: "Secrets of the Night", level: "B1", category: "Real Stories", src: "Audio/B1/Secrets of the Night.mp3", vocab: [
    { word: "shadow", definition: "a dark shape made when light is blocked" },
    { word: "reveal", definition: "to show or make known something hidden" },
    { word: "mysterious", definition: "difficult to explain or understand" },
    { word: "investigate", definition: "to look carefully into something" },
    { word: "hidden", definition: "kept out of sight; not known" },
    { word: "danger", definition: "a situation where harm is possible" },
    { word: "silence", definition: "a complete lack of sound" },
    { word: "suspicious", definition: "feeling that something is wrong or dishonest" }
  ], questions: [
    "Have you ever been in a situation that felt mysterious or suspicious? What happened?",
    "Why do you think some secrets stay hidden for a long time?"
  ], transcriptSrc: "Transcripts/B1/Secrets-of-the-Night.txt"},
  { title: "Somaliland's Quest for Recognition", level: "B1", category: "Travel & Places", src: "Audio/B1/Somaliland's Quest for Recognition.mp3", vocab: [
    { word: "recognition", definition: "official acceptance that something exists or is true" },
    { word: "independence", definition: "freedom from outside control" },
    { word: "territory", definition: "an area of land belonging to a country" },
    { word: "negotiate", definition: "to discuss something to reach an agreement" },
    { word: "declare", definition: "to officially announce something" },
    { word: "stability", definition: "a situation that is not likely to change suddenly" },
    { word: "govern", definition: "to control and manage a country" },
    { word: "international", definition: "involving more than one country" }
  ], questions: [
    "Why do you think it is important for a country to be recognised by other nations?",
    "What do you think makes a region stable enough to become an independent country?"
  ], transcriptSrc: "Transcripts/B1/Somalilands-Quest-for-Recognition.txt"},
  { title: "Understanding the Iran Protests", level: "B1", category: "Current Affairs", src: "Audio/B1/Understanding the Iran Protests.mp3", vocab: [
    { word: "cause", definition: "the reason why something happens" },
    { word: "freedom", definition: "the right to do or say what you want" },
    { word: "youth", definition: "young people" },
    { word: "movement", definition: "a group of people working together for change" },
    { word: "suppress", definition: "to stop something by using force" },
    { word: "demand", definition: "a strong request that must be answered" },
    { word: "government", definition: "the group of people who run a country" },
    { word: "rights", definition: "things every person is entitled to have" }
  ], questions: [
    "Why do you think young people often lead protest movements?",
    "What rights do you think are most important for people to have? Why?"
  ], transcriptSrc: "Transcripts/B1/Understanding-the-Iran-Protests.txt"},
  { title: "A Moral Dilemma", level: "B1", category: "Society & Culture", src: "Audio/B1/moral.mp3", vocab: [
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
  ], questions: [
    "Do you think a person who confesses their crime deserves more mercy? Why or why not?",
    "Is there a difference between justice and mercy? Can a person deserve both?"
  ], transcriptSrc: "Transcripts/B1/Moral.txt"},
  { title: "US Iran Nuclear Tensions", level: "B1", category: "Current Affairs", src: "Audio/B1/US Iran Nuclear Tensions.mpeg", vocab: [
    { word: "nuclear", definition: "relating to the energy released when atoms are split or joined" },
    { word: "tension", definition: "a state of worry or unfriendliness between groups" },
    { word: "sanctions", definition: "penalties applied to a country to force it to change" },
    { word: "negotiate", definition: "to try to reach an agreement through discussion" },
    { word: "threat", definition: "a warning that you will harm someone if they don't comply" },
    { word: "uranium", definition: "a radioactive metal used to make nuclear energy or weapons" },
    { word: "diplomat", definition: "a person who represents their country in foreign affairs" },
    { word: "conflict", definition: "a serious disagreement or fight between groups" }
  ], questions: [
    "Why do you think some countries want to develop nuclear weapons?",
    "Do you think sanctions are an effective way to change a country's behaviour? Why or why not?"
  ], transcriptSrc: "Transcripts/B1/US-Iran-Nuclear-Tensions.txt"},
  { title: "Black Rain in Tehran", level: "B1", category: "Environment", src: "Audio/B1/Black Rain in Tehran.mpeg", vocab: [
    { word: "pollution", definition: "harmful substances in the air, water, or land" },
    { word: "smog", definition: "a thick mixture of smoke and fog in the air" },
    { word: "toxic", definition: "poisonous and harmful to people or the environment" },
    { word: "industry", definition: "businesses that make products or provide services" },
    { word: "health", definition: "the condition of a person's body or mind" },
    { word: "environment", definition: "the natural world around us" },
    { word: "crisis", definition: "a time of great danger or difficulty" },
    { word: "atmosphere", definition: "the layer of gases surrounding the Earth" }
  ], questions: [
    "What do you think are the main causes of air pollution in big cities?",
    "What can governments and individuals do to improve air quality?"
  ], transcriptSrc: "Transcripts/B1/Black-Rain-in-Tehran.txt"},
  { title: "Pros and Cons of TV", level: "B1", category: "Society & Culture", src: "Audio/B1/Pros and Cons of TV.mp4", vocab: [
    { word: "broadcast", definition: "to send out a programme on TV or radio" },
    { word: "documentary", definition: "a film or programme about real events or people" },
    { word: "influence", definition: "the power to affect someone's thoughts or behaviour" },
    { word: "addiction", definition: "the inability to stop doing something harmful" },
    { word: "passive", definition: "accepting things without taking action" },
    { word: "media", definition: "television, newspapers, and other sources of information" },
    { word: "debate", definition: "a formal discussion about a topic where people disagree" },
    { word: "consumption", definition: "the amount of something that is used or watched" }
  ], questions: [
    "Do you think too much TV is bad for children? Why or why not?",
    "How has streaming changed the way people watch television?"
  ], transcriptSrc: "Transcripts/B1/Pros-and-Cons-of-TV.txt"},
  { title: "Is Europe Ready for War with Tehran?", level: "B1", category: "Current Affairs", src: "Audio/B1/Is Europe Ready for War with Tehran.mp4", vocab: [
    { word: "military", definition: "relating to an army or armed forces" },
    { word: "conflict", definition: "a serious fight or war between groups" },
    { word: "threat", definition: "a warning that harm may come" },
    { word: "alliance", definition: "an agreement between countries to support each other" },
    { word: "weapon", definition: "something used to hurt people or destroy things" },
    { word: "tension", definition: "a feeling of worry between groups or countries" },
    { word: "nuclear", definition: "relating to powerful energy from atoms" },
    { word: "response", definition: "an action taken because of something that happened" }
  ], questions: [
    "Do you think countries should help each other if one is attacked? Why?",
    "What do you think is the best way to avoid war between countries?"
  ], transcriptSrc: "Transcripts/B1/Is-Europe-Ready-for-War-with-Tehran.txt"},
  { title: "The Happiest Countries 2026", level: "B1", category: "Society & Culture", src: "Audio/B1/The Happiest Countries 2026.mp4", vocab: [
    { word: "wellbeing", definition: "the state of being comfortable, healthy, and happy" },
    { word: "satisfaction", definition: "a feeling of pleasure when you get what you wanted" },
    { word: "income", definition: "money received regularly from work or investments" },
    { word: "community", definition: "a group of people living in the same area or sharing interests" },
    { word: "freedom", definition: "the power to act or speak without restriction" },
    { word: "equality", definition: "the state of being equal in rights and opportunities" },
    { word: "quality of life", definition: "the standard of health, comfort, and happiness in a person's life" },
    { word: "survey", definition: "a study that collects information from a group of people" }
  ], questions: [
    "Do you think money is the most important factor for happiness? Why?",
    "Would you move to another country if it meant being happier?"
  ], transcriptSrc: "Transcripts/B1/The Happiest Countries 2026.txt"},
  { title: "Martha's Journey to Mental Wellness", level: "B1", category: "Mental Health", src: "Audio/B1/Martha's Journey to Mental Wellness.mpeg", vocab: [
    { word: "mental health", definition: "the condition of a person's psychological and emotional wellbeing" },
    { word: "wellness", definition: "the state of being in good health, especially as a goal" },
    { word: "therapy", definition: "treatment intended to help someone recover from a problem" },
    { word: "anxiety", definition: "a feeling of worry and nervousness about uncertain events" },
    { word: "recovery", definition: "the process of getting better after an illness or difficulty" },
    { word: "support", definition: "help and encouragement given to someone in need" },
    { word: "struggle", definition: "to have difficulty with something; a hard effort" },
    { word: "mindset", definition: "the way a person thinks about and approaches situations" }
  ], questions: [
    "Why do you think it is sometimes difficult for people to talk about mental health?",
    "What do you think is the most important factor in recovering from a mental health challenge?"
  ], transcriptSrc: "Transcripts/B1/Martha's Journey to Mental Wellness.txt"},
  { title: "Rescuing the American Navigator in Iran", level: "B1", category: "History", src: "Audio/B1/Rescuing the American Navigator in Iran.mpeg", vocab: [
    { word: "navigator", definition: "a person who plans or guides the route of a journey" },
    { word: "rescue", definition: "to save someone from a dangerous situation" },
    { word: "mission", definition: "an important task or assignment" },
    { word: "hostage", definition: "a person held by another as security for demands" },
    { word: "diplomat", definition: "a person who represents their country in foreign affairs" },
    { word: "border", definition: "the line that separates two countries" },
    { word: "secret", definition: "kept hidden from others" },
    { word: "operation", definition: "a planned activity involving many people" }
  ], questions: [
    "Why do you think some countries choose secret operations instead of public diplomacy?",
    "What risks do people face when they try to help someone in a dangerous country?"
  ], transcriptSrc: "Transcripts/B1/Rescuing the American Navigator in Iran.txt"},
  { title: "Peace Talks Between Iran and USA", level: "B1", category: "Current Affairs", src: "Audio/B1/Peace Talks Between Iran and USA.mp4", vocab: [
    { word: "negotiation", definition: "a discussion aimed at reaching an agreement" },
    { word: "ceasefire", definition: "an agreement to stop fighting temporarily" },
    { word: "agreement", definition: "a decision reached by two or more parties" },
    { word: "diplomat", definition: "a person who represents their country in foreign affairs" },
    { word: "tension", definition: "a state of worry or unfriendliness between groups" },
    { word: "sanction", definition: "a penalty imposed on a country to force change" },
    { word: "compromise", definition: "an agreement where both sides give up something" },
    { word: "treaty", definition: "a formal agreement between two or more countries" }
  ], questions: [
    "Do you think it is possible for Iran and the USA to reach a lasting peace agreement? Why or why not?",
    "What do you think are the biggest obstacles to peace between two countries that have been in conflict for a long time?"
  ], transcriptSrc: "Transcripts/B1/Peace Talks between Iran and USA.txt"},
  // B2
  { title: "Cluster Missiles", level: "B2", category: "Science & Technology", src: "Audio/B2/Cluster Missiles.mp4", vocab: [
    { word: "proliferation", definition: "a rapid increase in the number of something" },
    { word: "indiscriminate", definition: "not careful about who or what is harmed" },
    { word: "humanitarian", definition: "concerned with reducing human suffering" },
    { word: "convention", definition: "an international agreement between countries" },
    { word: "deploy", definition: "to move troops or weapons into position for use" },
    { word: "accountability", definition: "being responsible for your actions" },
    { word: "fragmentation", definition: "breaking into small sharp pieces" },
    { word: "violation", definition: "breaking a rule or agreement" }
  ], questions: [
    "Why do you think some countries refuse to sign international weapons conventions?",
    "Who should be held accountable when cluster weapons harm civilians — the soldiers, commanders, or governments?"
  ], transcriptSrc: "Transcripts/B2/Cluster-Missiles.txt"},
  { title: "Pros and Cons of TV", level: "B2", category: "Society & Culture", src: "Audio/B2/Pros and Cons of TV.mp4", vocab: [
    { word: "algorithm", definition: "a set of rules used by a computer to recommend content" },
    { word: "binge-watching", definition: "watching many episodes of a show in one sitting" },
    { word: "censorship", definition: "the suppression of content considered harmful or offensive" },
    { word: "propaganda", definition: "information used to promote a political cause or viewpoint" },
    { word: "sedentary", definition: "spending a lot of time sitting and being physically inactive" },
    { word: "stereotype", definition: "an oversimplified fixed idea about a group of people" },
    { word: "subscription", definition: "a payment made regularly to access a service" },
    { word: "critique", definition: "a detailed analysis and assessment of something" }
  ], questions: [
    "To what extent do you think television shapes public opinion and political views?",
    "Is streaming killing traditional television, or simply evolving it? Give your view."
  ], transcriptSrc: "Transcripts/B2/Pros-and-Cons-of-TV.txt"},
  { title: "Is Europe Ready for War with Tehran?", level: "B2", category: "Current Affairs", src: "Audio/B2/Is Europe Ready for War with Tehran.mp4", vocab: [
    { word: "deterrence", definition: "the use of threat to discourage an enemy from acting" },
    { word: "alliance", definition: "a union between countries for mutual benefit" },
    { word: "escalation", definition: "a rapid increase in the severity of a conflict" },
    { word: "retaliation", definition: "an action taken in response to an attack" },
    { word: "arsenal", definition: "a collection of weapons held by a country" },
    { word: "sovereignty", definition: "the full power of a country to govern itself" },
    { word: "diplomacy", definition: "managing relations between countries through negotiation" },
    { word: "proxy", definition: "a country or group acting on behalf of another in a conflict" }
  ], questions: [
    "Do you think European countries have a responsibility to respond militarily to threats in the Middle East? Why or why not?",
    "What is the difference between deterrence and provocation in international relations?"
  ], transcriptSrc: "Transcripts/B2/Is-Europe-Ready-for-War-with-Tehran.txt"},
  { title: "Peace Talks Between Iran and USA", level: "B2", category: "Current Affairs", src: "Audio/B2/Peace Talks between Iran and USA.mp4", vocab: [
    { word: "diplomacy", definition: "managing relations between countries through negotiation" },
    { word: "nuclear", definition: "relating to the powerful energy released from atoms" },
    { word: "concession", definition: "something given up in order to reach an agreement" },
    { word: "bilateral", definition: "involving two parties or countries" },
    { word: "de-escalation", definition: "the reduction of intensity in a conflict or dispute" },
    { word: "leverage", definition: "power or advantage used to achieve a goal" },
    { word: "mediation", definition: "intervention by a neutral party to help resolve a dispute" },
    { word: "breakthrough", definition: "a sudden important development or achievement" }
  ], questions: [
    "To what extent can economic sanctions be used as a tool to bring countries to the negotiating table?",
    "What role do third-party mediators play in peace negotiations between hostile states?"
  ], transcriptSrc: "Transcripts/B2/Peace Talks Between Iran and USA.txt"},
  { title: "Exploring Somaliland: A Hidden Gem", level: "B2", category: "Travel & Places", src: "Audio/B2/Exploring Somaliland_ A Hidden Gem.mp3", vocab: [
    { word: "autonomous", definition: "having the freedom to govern itself" },
    { word: "nomadic", definition: "moving from place to place without a permanent home" },
    { word: "hospitality", definition: "the friendly and generous treatment of guests" },
    { word: "infrastructure", definition: "the basic systems needed for a place to function" },
    { word: "diplomatic", definition: "relating to official relations between countries" },
    { word: "flourishing", definition: "developing quickly and successfully" },
    { word: "diverse", definition: "showing a great deal of variety" },
    { word: "undiscovered", definition: "not yet found or known about" }
  ], questions: [
    "What do you think are the advantages and disadvantages of visiting an undiscovered travel destination?",
    "How can tourism help or harm a place that is not used to many visitors?"
  ], transcriptSrc: "Transcripts/B2/Exploring-Somaliland.txt"},
  { title: "Fall of Assad", level: "B2", category: "Current Affairs", src: "Audio/B2/Fall of Assad.mpeg", vocab: [
    { word: "authoritarian", definition: "demanding complete obedience to authority" },
    { word: "insurgency", definition: "an armed rebellion against a government" },
    { word: "geopolitical", definition: "relating to politics and geography of countries" },
    { word: "sanctions", definition: "penalties applied to a country to force change" },
    { word: "propaganda", definition: "information used to promote a political cause" },
    { word: "militia", definition: "a military group that is not a regular army" },
    { word: "transitional", definition: "relating to a change from one state to another" },
    { word: "disintegrate", definition: "to break apart into small pieces" }
  ], questions: [
    "How do international sanctions affect ordinary citizens, and is that a fair consequence?",
    "What role do you think neighbouring countries play in the rise or fall of an authoritarian government?"
  ], transcriptSrc: "Transcripts/B2/Fall-of-Assad.txt"},
  { title: "Giving Advice", level: "B1", category: "Society & Culture", src: "Audio/B1/Giving Advice.mpeg", vocab: [
    { word: "perspective", definition: "a particular way of thinking about something" },
    { word: "consequence", definition: "a result or effect of an action" },
    { word: "evaluate", definition: "to carefully consider something before deciding" },
    { word: "alternative", definition: "a different option or choice" },
    { word: "persuade", definition: "to convince someone to do or believe something" },
    { word: "constructive", definition: "helpful and likely to lead to improvement" },
    { word: "reflect", definition: "to think carefully about something" },
    { word: "recommend", definition: "to suggest something as being good or suitable" }
  ], questions: [
    "When someone asks for your advice, how do you decide what to say?",
    "Is there a difference between giving advice to a close friend and to a colleague? How do you adjust your approach?"
  ], transcriptSrc: "Transcripts/B1/Giving-Advice.txt"},
  { title: "Iran Protests and Potential Changes", level: "B2", category: "Current Affairs", src: "Audio/B2/Iran Protests and Potential Changes.mp3", vocab: [
    { word: "disillusionment", definition: "disappointment when something is not as good as expected" },
    { word: "mobilize", definition: "to organize people for a purpose" },
    { word: "repression", definition: "the use of force to control people" },
    { word: "polarize", definition: "to divide into two completely opposite groups" },
    { word: "escalate", definition: "to become more serious or intense" },
    { word: "legitimacy", definition: "the quality of being accepted as right and proper" },
    { word: "demographic", definition: "relating to the population of a place" },
    { word: "transformative", definition: "causing a complete change" }
  ], questions: [
    "At what point does a government lose its legitimacy in the eyes of its people?",
    "How does social media change the way protest movements mobilize and grow?"
  ], transcriptSrc: "Transcripts/B2/Iran-Protests-and-Potential-Changes.txt"},
  { title: "Iron Beam: The Future of Laser Weapons", level: "B2", category: "Science & Technology", src: "Audio/B2/Iron Beam_ The Future of Laser Weapons.mp3", vocab: [
    { word: "electromagnetic", definition: "relating to electric and magnetic forces" },
    { word: "precision", definition: "the quality of being exact and accurate" },
    { word: "intercept", definition: "to stop something before it reaches its target" },
    { word: "trajectory", definition: "the path of a moving object through the air" },
    { word: "sophisticated", definition: "highly developed and complex" },
    { word: "countermeasure", definition: "an action taken to reduce a threat" },
    { word: "strategic", definition: "carefully planned to achieve a goal" },
    { word: "autonomous", definition: "able to operate independently without human control" }
  ], questions: [
    "Should weapons systems be allowed to operate autonomously without human decision-making? Why or why not?",
    "How might laser weapon technology change the balance of power between countries?"
  ], transcriptSrc: "Transcripts/B2/Iron-Beam-The-Future-of-Laser-Weapons.txt"},
  { title: "Lost Jewish Connections of Somaliland", level: "B2", category: "History", src: "Audio/B2/Lost Jewish Connections of Somaliland.mp3", vocab: [
    { word: "diaspora", definition: "people who have spread from their original homeland" },
    { word: "ancestral", definition: "relating to family members from long ago" },
    { word: "assimilation", definition: "the process of becoming part of a different culture" },
    { word: "remnant", definition: "a small remaining part of something larger" },
    { word: "archaeological", definition: "relating to the study of ancient remains" },
    { word: "chronicle", definition: "a detailed record of events in time order" },
    { word: "artifact", definition: "an object made by humans from an earlier time" },
    { word: "indigenous", definition: "originating naturally in a particular place" }
  ], questions: [
    "What does it mean for a community to lose its connection to its ancestral homeland?",
    "How can archaeological evidence change the way we understand history and identity?"
  ], transcriptSrc: "Transcripts/B2/Lost-Jewish-Connections-of-Somaliland.txt"},
  { title: "The Story of a Spy", level: "B2", category: "Real Stories", src: "Audio/B2/Mossad's Secret Agent Yael.mp3", vocab: [
    { word: "infiltrate", definition: "to secretly enter an organization or place" },
    { word: "intelligence", definition: "secret information gathered about an enemy" },
    { word: "covert", definition: "not openly acknowledged; secret" },
    { word: "surveillance", definition: "close observation of a person or group" },
    { word: "operative", definition: "a person who carries out secret work" },
    { word: "clandestine", definition: "kept secret, especially for a harmful purpose" },
    { word: "recruit", definition: "to find and persuade someone to join a group" },
    { word: "compromise", definition: "to expose someone to danger or suspicion" }
  ], questions: [
    "What personal qualities do you think make someone suited to covert intelligence work?",
    "Where do you think the line should be drawn between national security and individual privacy?"
  ], transcriptSrc: "Transcripts/B2/Mossads-Secret-Agent-Yael.txt"},
  { title: "Oron Shaul", level: "B2", category: "History", src: "Audio/B2/Oron Shaul.mpeg", vocab: [
    { word: "commemorate", definition: "to honour the memory of someone or something" },
    { word: "bereaved", definition: "suffering the loss of a loved one" },
    { word: "captivity", definition: "the state of being kept as a prisoner" },
    { word: "repatriate", definition: "to return someone to their home country" },
    { word: "accountability", definition: "the fact of being responsible for your actions" },
    { word: "dignity", definition: "the quality of being worthy of respect" },
    { word: "memorial", definition: "something created to remember a person or event" },
    { word: "negotiate", definition: "to reach an agreement through discussion" }
  ], questions: [
    "Why is the repatriation of soldiers' remains considered so important to their families and country?",
    "What moral obligations do governments have towards soldiers who are captured or killed in conflict?"
  ], transcriptSrc: "Transcripts/B2/Oron-Shaul.txt"},
  { title: "Somaliland's Quest for Recognition", level: "B2", category: "Travel & Places", src: "Audio/B2/Somaliland's Quest for Recognition.mp3", vocab: [
    { word: "sovereignty", definition: "full power and authority over a country" },
    { word: "self-determination", definition: "the right of a people to choose their government" },
    { word: "legitimacy", definition: "the quality of being accepted as lawful or proper" },
    { word: "geopolitical", definition: "relating to politics influenced by geography" },
    { word: "constitutional", definition: "relating to the rules that govern a country" },
    { word: "referendum", definition: "a public vote on a single political question" },
    { word: "territorial", definition: "relating to the land belonging to a country" },
    { word: "stabilize", definition: "to make something less likely to change or fail" }
  ], questions: [
    "What criteria should a region have to meet before being recognised as an independent state?",
    "How do geopolitical interests of powerful nations affect the recognition of smaller states?"
  ], transcriptSrc: "Transcripts/B2/Somalilands-Quest-for-Recognition.txt"},
  { title: "Rachel Goldberg-Polin: A Voice for the Unthinkable", level: "B2", category: "History", src: "Audio/B2/rachel-goldberg-polin.mp3.mp3", vocab: [
    { word: "hostage", definition: "a person held captive to force others to meet demands" },
    { word: "advocate", definition: "to publicly support or recommend a cause or policy" },
    { word: "resilience", definition: "the ability to recover from difficult situations" },
    { word: "negotiation", definition: "formal discussion to reach an agreement" },
    { word: "grief", definition: "deep sadness caused by loss or tragedy" }
  ], questions: [
    "What does it mean to speak out publicly about a personal tragedy?",
    "How can one person's voice influence a political situation?",
    "What emotions did you notice in the speaker's voice or words?"
  ], transcriptSrc: "Transcripts/B2/rachel-goldberg-polin.txt"},
  { title: "Shulamit Cohen", level: "B2", category: "History", src: "Audio/B2/Shulamit Cohen.mp4", vocab: [
    { word: "testimony", definition: "a formal statement about what someone experienced" },
    { word: "survivor", definition: "a person who continues to live after a dangerous event" },
    { word: "trauma", definition: "a deeply distressing experience and its lasting effect" },
    { word: "captivity", definition: "the state of being kept as a prisoner" },
    { word: "resilience", definition: "the ability to recover from difficult situations" },
    { word: "ordeal", definition: "a very difficult or painful experience" },
    { word: "commemorate", definition: "to remember and honour an important event or person" },
    { word: "harrowing", definition: "intensely distressing or disturbing" }
  ], questions: [
    "Why is it important for survivors to share their personal stories publicly?",
    "How can listening to someone's testimony change the way we understand a historical event?",
    "What does it take for a person to speak about a traumatic experience in front of others?"
  ], transcriptSrc: "Transcripts/B2/Shulamit-Cohen.txt"},
  { title: "The Happiest Countries 2026", level: "B2", category: "Society & Culture", src: "Audio/B2/The Happiest Countries 2026.mp4", vocab: [
    { word: "prosperity", definition: "the state of being successful and financially secure" },
    { word: "social support", definition: "the help and comfort provided by friends, family, and community" },
    { word: "corruption", definition: "dishonest behaviour by people in positions of power" },
    { word: "generosity", definition: "the quality of being kind and giving to others" },
    { word: "life expectancy", definition: "the average number of years a person is expected to live" },
    { word: "inequality", definition: "unfair differences in wealth, opportunities, or treatment" },
    { word: "index", definition: "a system used to measure or compare something" },
    { word: "perception", definition: "the way something is understood or interpreted" }
  ], questions: [
    "How reliable do you think happiness surveys are? What are their limitations?",
    "Is it the government's responsibility to make its citizens happy?"
  ], transcriptSrc: "Transcripts/B2/The Happiest Countries 2026.txt"},
  // C1
  { title: "Pros and Cons of TV", level: "C1", category: "Society & Culture", src: "Audio/C1/Pros and Cons of TV.mp4", vocab: [
    { word: "polarisation", definition: "the division of society into opposing groups" },
    { word: "desensitisation", definition: "the process of becoming less affected by something through repeated exposure" },
    { word: "hegemony", definition: "dominance or leadership of one group over others" },
    { word: "subliminal", definition: "affecting the mind without being consciously noticed" },
    { word: "commodification", definition: "the process of treating something as a product to be bought and sold" },
    { word: "discourse", definition: "written or spoken communication and debate on a subject" },
    { word: "proliferation", definition: "a rapid increase in the amount of something" },
    { word: "incumbency", definition: "the holding of an official position or advantage" }
  ], questions: [
    "To what extent does mass media perpetuate social inequality and cultural hegemony?",
    "How has the fragmentation of television audiences through streaming platforms affected public discourse and shared cultural experience?"
  ], transcriptSrc: "Transcripts/C1/Pros-and-Cons-of-TV.txt"},
  { title: "Is Europe Ready for War with Tehran?", level: "C1", category: "Current Affairs", src: "Audio/C1/Is Europe Ready for War with Tehran.mp4", vocab: [
    { word: "geopolitical", definition: "relating to politics as influenced by geography and power" },
    { word: "deterrence", definition: "the prevention of action through the threat of consequences" },
    { word: "non-proliferation", definition: "the prevention of the spread of nuclear weapons" },
    { word: "asymmetric", definition: "involving parties with unequal power or different strategies" },
    { word: "sovereignty", definition: "the full authority of a state to govern itself" },
    { word: "multilateral", definition: "involving three or more countries or parties" },
    { word: "doctrine", definition: "a set of principles that guide military or political action" },
    { word: "belligerent", definition: "hostile and aggressive; engaged in conflict" }
  ], questions: [
    "To what extent has Europe's strategic autonomy been undermined by its dependence on NATO and US foreign policy?",
    "How does the concept of asymmetric warfare complicate traditional European military doctrine in the context of a conflict with Iran?"
  ], transcriptSrc: "Transcripts/C1/Is-Europe-Ready-for-War-with-Tehran.txt"},
  { title: "Assad: Last Days in Power", level: "C1", category: "Current Affairs", src: "Audio/C1/Assad_ Last Days in Power.mpeg", vocab: [
    { word: "authoritarian", definition: "enforcing strict obedience at the expense of freedom" },
    { word: "disintegration", definition: "the process of losing unity and falling apart" },
    { word: "ramifications", definition: "complex and unwanted consequences of an action" },
    { word: "ideological", definition: "relating to a set of political or social beliefs" },
    { word: "perpetuate", definition: "to make something continue indefinitely" },
    { word: "disenfranchise", definition: "to deprive someone of their rights or power" },
    { word: "insurgency", definition: "an organized rebellion against an established authority" },
    { word: "accountability", definition: "the obligation to accept responsibility for one's actions" }
  ], questions: [
    "To what extent should leaders of authoritarian regimes be held personally accountable for the actions of their state?",
    "How does the disintegration of a state affect the civilian population, and what responsibility do neighbouring countries have?"
  ]},
  { title: "Cluster Missiles", level: "C1", category: "Science & Technology", src: "Audio/C1/Cluster Missiles.mp4", vocab: [
    { word: "indiscriminate", definition: "done without careful judgement, harming innocent people" },
    { word: "moratorium", definition: "a temporary ban on an activity" },
    { word: "asymmetric", definition: "involving forces of very different size or strength" },
    { word: "disproportionate", definition: "too large or too small in comparison to something" },
    { word: "deterrence", definition: "the prevention of action through fear of consequences" },
    { word: "jurisdiction", definition: "the authority to make legal decisions in an area" },
    { word: "proliferation", definition: "a rapid spread or increase in number" },
    { word: "humanitarian law", definition: "international rules to limit suffering in war" }
  ], questions: [
    "How effective is international humanitarian law in practice when powerful states refuse to comply?",
    "Can the use of indiscriminate weapons ever be strategically or morally justified? Under what circumstances?"
  ]},
  { title: "Giving Advice", level: "C1", category: "Society & Culture", src: "Audio/C1/Giving Advice.mpeg", vocab: [
    { word: "nuanced", definition: "taking account of subtle differences; not simplistic" },
    { word: "pragmatic", definition: "dealing with things in a practical, realistic way" },
    { word: "judicious", definition: "having or showing good judgement" },
    { word: "circumspect", definition: "careful to consider all circumstances before acting" },
    { word: "impartial", definition: "treating all sides equally; not favouring one side" },
    { word: "discerning", definition: "having or showing good taste and judgement" },
    { word: "articulate", definition: "able to express ideas clearly and effectively" },
    { word: "meticulous", definition: "showing great attention to detail" }
  ], questions: [
    "How do cultural differences affect the way advice is given and received across different societies?",
    "Is it ever more judicious to withhold advice even when you can see someone making a serious mistake?"
  ]},
  { title: "Iran's Turmoil and Economic Strife", level: "C1", category: "Current Affairs", src: "Audio/C1/Iran's Turmoil and Economic Strife.mp3", vocab: [
    { word: "turmoil", definition: "a state of great confusion or disorder" },
    { word: "hyperinflation", definition: "extremely rapid and uncontrolled price increases" },
    { word: "disenfranchisement", definition: "the state of being deprived of rights or power" },
    { word: "systemic", definition: "relating to a whole system rather than individual parts" },
    { word: "socioeconomic", definition: "relating to both social and economic factors" },
    { word: "destabilize", definition: "to make a country or government less secure" },
    { word: "sanctions", definition: "official penalties imposed on a country" },
    { word: "civil unrest", definition: "public disorder caused by political dissatisfaction" }
  ], questions: [
    "To what extent are international sanctions a legitimate tool, given their socioeconomic impact on ordinary citizens?",
    "How do systemic economic failures contribute to the erosion of civil society and political stability?"
  ]},
  { title: "Iron Beam: The Future of Laser Weapons", level: "C1", category: "Science & Technology", src: "Audio/C1/Iron Beam_ The Future of Laser Weapons.mp3", vocab: [
    { word: "preemptive", definition: "done to prevent an anticipated situation from occurring" },
    { word: "proliferation", definition: "rapid spread of something, especially weapons" },
    { word: "deterrence", definition: "discouraging action through the threat of consequences" },
    { word: "asymmetric warfare", definition: "conflict between opponents of very unequal strength" },
    { word: "countermeasure", definition: "an action taken to neutralize a threat" },
    { word: "geopolitical", definition: "relating to politics shaped by geographical factors" },
    { word: "electromagnetic pulse", definition: "a burst of energy that can disable electronics" },
    { word: "autonomous system", definition: "a system that operates independently without human control" }
  ], questions: [
    "How might the development of autonomous weapons systems fundamentally alter the ethics of warfare?",
    "Does superior defensive technology like the Iron Beam reduce conflict or simply shift the nature of the threat?"
  ]},
  { title: "The Happiest Countries 2026", level: "C1", category: "Society & Culture", src: "Audio/C1/The Happiest Countries 2026.mp4", vocab: [
    { word: "subjective wellbeing", definition: "a person's own assessment of their happiness and life satisfaction" },
    { word: "socioeconomic", definition: "relating to both social and economic factors" },
    { word: "autonomy", definition: "the right or condition of self-governance" },
    { word: "civic engagement", definition: "participation in community and political life" },
    { word: "institutional trust", definition: "confidence in public institutions such as government and courts" },
    { word: "disparity", definition: "a great difference or inequality between groups" },
    { word: "benchmark", definition: "a standard or reference point used for comparison" },
    { word: "flourishing", definition: "developing in a healthy, vigorous way; thriving" }
  ], questions: [
    "To what extent do cultural values shape how happiness is defined and measured across different societies?",
    "Critically evaluate whether GDP per capita is a useful predictor of national happiness."
  ], transcriptSrc: "Transcripts/C1/The Happiest Countries 2026.txt"},
  { title: "Somaliland's Quest for Recognition", level: "C1", category: "Travel & Places", src: "Audio/C1/Somaliland's Quest for Recognition.mp3", vocab: [
    { word: "self-determination", definition: "the right of a people to freely choose their governance" },
    { word: "de facto", definition: "existing in reality, though not officially recognised" },
    { word: "territorial integrity", definition: "the principle that a state's borders must be respected" },
    { word: "diplomatic recognition", definition: "official acceptance of a state by other countries" },
    { word: "governance", definition: "the way in which a country or organisation is managed" },
    { word: "legitimacy", definition: "the right to govern, accepted by the people" },
    { word: "geopolitical", definition: "political activity influenced by geography" },
    { word: "constitutional framework", definition: "the set of rules that define how a state is governed" }
  ], questions: [
    "How does the tension between self-determination and territorial integrity play out in cases like Somaliland?",
    "What does Somaliland's de facto independence reveal about the limitations of the current international system of state recognition?"
  ]},
  { title: "Rescuing an American Navigator in Iran", level: "C1", category: "History", src: "Audio/C1/Rescuing an American Navigator in Iran.mpeg", vocab: [
    { word: "clandestine", definition: "kept secret, especially because it is illicit" },
    { word: "extraction", definition: "the action of removing someone from a difficult situation" },
    { word: "jurisdiction", definition: "the authority to make legal decisions in a particular area" },
    { word: "sovereignty", definition: "the full power of a state to govern itself without interference" },
    { word: "espionage", definition: "the practice of spying to obtain secret information" },
    { word: "covert", definition: "not openly acknowledged; secret" },
    { word: "bilateral", definition: "involving two parties, especially two countries" },
    { word: "sanctions", definition: "official penalties imposed on a country to force change" }
  ], questions: [
    "To what extent does a government have a moral obligation to rescue its citizens from foreign detention, regardless of diplomatic consequences?",
    "How does the use of covert operations affect international trust and bilateral relations between states?"
  ], transcriptSrc: "Transcripts/C1/Rescuing an American Navigator in Iran.txt"},
  // ---- NEW MENTAL HEALTH FILES ----
  { title: "8 Tiny Japanese Habits that Make a Difference", level: "A1", category: "Mental Health", src: "Audio/A1/8 Tiny Japanese Habits that Make a Difference.mp4", vocab: [
    { word: "habit", definition: "something you do regularly without thinking" },
    { word: "tiny", definition: "very small" },
    { word: "routine", definition: "a set of things you do every day at the same time" },
    { word: "energy", definition: "the strength and ability to do things" },
    { word: "calm", definition: "quiet and relaxed" }
  ], questions: [
    "Do you have any daily habits that make you feel better?",
    "Which of the Japanese habits would you like to try?"
  ], transcriptSrc: "Transcripts/A1/8 Tiny Japanese Habit that Make a Difference.txt"},
  { title: "8 Tiny Japanese Habits that Make a Difference", level: "A2", category: "Mental Health", src: "Audio/A2/8 Tiny Japanese Habits that Make a Difference.mp4", vocab: [
    { word: "habit", definition: "something you do regularly, often without thinking" },
    { word: "wellbeing", definition: "the state of being comfortable, healthy and happy" },
    { word: "mindful", definition: "being aware and paying attention to the present moment" },
    { word: "improve", definition: "to make something better" },
    { word: "balance", definition: "giving equal attention to different parts of your life" }
  ], questions: [
    "Which of the habits mentioned do you think is most useful for busy people?",
    "How do small habits make a difference to your mental health?"
  ], transcriptSrc: "Transcripts/A2/8 Tiny Japanese Habits that Make a Difference.txt"},
  { title: "8 Tiny Japanese Habits that Make a Difference", level: "B1", category: "Mental Health", src: "Audio/B1/8 Tiny Japanese Habits that Make a Difference.mp4", vocab: [
    { word: "discipline", definition: "the ability to control your behaviour and follow rules" },
    { word: "intentional", definition: "done on purpose, with a clear goal in mind" },
    { word: "consistency", definition: "doing something in the same way over time" },
    { word: "simplicity", definition: "the quality of being easy and uncomplicated" },
    { word: "ritual", definition: "a set of actions done regularly in a particular way" }
  ], questions: [
    "Why do you think small habits can have a big impact on our lives?",
    "How does Japanese culture influence ideas about daily routines and self-improvement?"
  ], transcriptSrc: "Transcripts/B1/8 Tiny Japanese Habits that Make a Difference.txt"},
  { title: "8 Tiny Japanese Habits that Make a Difference", level: "B2", category: "Mental Health", src: "Audio/B2/8 Tiny Japanese Habits that Make a Difference.mp4", vocab: [
    { word: "incremental", definition: "relating to small, gradual changes that add up over time" },
    { word: "philosophy", definition: "a set of beliefs or values that guides how someone lives" },
    { word: "productivity", definition: "the efficiency with which tasks are completed" },
    { word: "sustainable", definition: "able to be maintained over a long period" },
    { word: "kaizen", definition: "a Japanese philosophy of continuous improvement through small changes" }
  ], questions: [
    "To what extent can adopting foreign cultural practices genuinely improve wellbeing?",
    "How do the concepts of kaizen and mindfulness overlap in their approach to self-improvement?"
  ], transcriptSrc: "Transcripts/B2/8 Tiny Japanese Habits that Make a Difference.txt"},
  { title: "Creating a Routine for Mental Well-Being", level: "B1", category: "Mental Health", src: "Audio/B1/Creating a Routine for Mental Well-Being.mpeg", vocab: [
    { word: "routine", definition: "a regular sequence of actions you follow every day" },
    { word: "mental health", definition: "the condition of your mind and how you cope with daily life" },
    { word: "structure", definition: "an organised plan or system that helps you manage your time" },
    { word: "self-care", definition: "the practice of looking after your own health and happiness" },
    { word: "wellbeing", definition: "the state of being comfortable, healthy and happy" }
  ], questions: [
    "Do you have a daily routine that helps your mental health?",
    "Why do you think structure is important for mental wellbeing?"
  ], transcriptSrc: "Transcripts/B1/Creating a Routine for Mental Well-Being.txt"},
  { title: "Daily Habits", level: "B1", category: "Mental Health", src: "Audio/B1/Daily Habits.mpeg", vocab: [
    { word: "habit", definition: "a regular behaviour that becomes automatic over time" },
    { word: "motivation", definition: "the reason or desire that makes you want to do something" },
    { word: "consistency", definition: "doing something regularly in the same way" },
    { word: "progress", definition: "gradual improvement or development" },
    { word: "goal", definition: "something you are trying to achieve" }
  ], questions: [
    "What daily habits do you think are most important for a healthy lifestyle?",
    "How do you stay motivated to keep good habits?"
  ], transcriptSrc: "Transcripts/B1/Power of Habits.txt"},
  { title: "The Power of Mindful Habits", level: "B2", category: "Mental Health", src: "Audio/B2/Power of Mindful Habits.mpeg", vocab: [
    { word: "mindfulness", definition: "the practice of focusing fully on the present moment" },
    { word: "awareness", definition: "knowledge and understanding of a situation or feeling" },
    { word: "intention", definition: "a plan or aim to do something in a particular way" },
    { word: "neuroplasticity", definition: "the brain's ability to change and adapt through experience" },
    { word: "compounding", definition: "a process where small changes build on each other over time" }
  ], questions: [
    "How does mindfulness differ from simply having a daily routine?",
    "To what extent can changing your habits change your mindset?"
  ], transcriptSrc: "Transcripts/B2/Power of Mindful Habits.txt"},
  { title: "Hezbollah's New Drones", level: "A2", category: "Current Affairs", src: "Audio/A2/Hezbollah's New Drones.mp4", vocab: [
    { word: "drone", definition: "an aircraft that flies without a pilot, controlled by remote" },
    { word: "attack", definition: "an act of using force against someone or something" },
    { word: "military", definition: "relating to soldiers and the armed forces" },
    { word: "border", definition: "the line that separates two countries or regions" },
    { word: "threat", definition: "something that could cause harm or danger" }
  ], questions: [
    "Why do you think drones have become important in modern conflicts?",
    "How do you think countries should respond to drone attacks?"
  ], transcriptSrc: "Transcripts/A2/Hezbollah's New Drones.txt"},
  { title: "Hezbollah's New Drones", level: "B2", category: "Current Affairs", src: "Audio/B2/Hezbollah's New Drones.mp4", vocab: [
    { word: "tactical", definition: "relating to carefully planned actions to achieve a specific goal" },
    { word: "surveillance", definition: "careful observation of an area or group, especially by military or security forces" },
    { word: "escalation", definition: "an increase in the intensity or seriousness of a conflict" },
    { word: "deterrence", definition: "the use of threat or capability to prevent an enemy from attacking" },
    { word: "precision-guided", definition: "designed to hit a very specific target accurately" }
  ], questions: [
    "How has drone warfare changed the nature of modern conflict?",
    "To what extent do armed non-state groups change the balance of power in a region?"
  ], transcriptSrc: "Transcripts/B2/Hezbollah's New Drones.txt"},
  { title: "The Super Revolutionaries of Iran", level: "B1", category: "Current Affairs", src: "Audio/B1/The Super Revolutionaries of Iran.mp4", vocab: [
    { word: "revolution", definition: "a complete change in the way a country is governed" },
    { word: "ideology", definition: "a set of beliefs or ideas that guide a political system" },
    { word: "regime", definition: "a government, especially one that uses strict control" },
    { word: "resistance", definition: "the refusal to accept or comply with something" },
    { word: "suppress", definition: "to stop or prevent something by force" }
  ], questions: [
    "What do you think motivates people to fight for political change?",
    "How can ordinary people influence the government of a country?"
  ], transcriptSrc: "Transcripts/B1/The Super Revolutionaries of Iran.txt"},
  { title: "The Super Revolutionaries of Iran", level: "B2", category: "Current Affairs", src: "Audio/B2/The Super Revolutionaries of Iran.mp4", vocab: [
    { word: "theocracy", definition: "a system of government based on religious law and leadership" },
    { word: "dissident", definition: "a person who opposes official government policy" },
    { word: "repression", definition: "the use of force or authority to control people's freedom" },
    { word: "geopolitical", definition: "relating to politics and power as affected by geography" },
    { word: "faction", definition: "a small group within a larger group, with different ideas or goals" }
  ], questions: [
    "How does ideology shape the way a government exercises power?",
    "To what extent do internal divisions within a revolutionary movement affect its long-term success?"
  ], transcriptSrc: "Transcripts/B2/The Super Revolutionaries of Iran.txt"}
];
// -----------------------------------------------------
window._listeningFiles = listeningFiles;

// --- AMERICA'S DEFINING MOMENTS ---
const admEpisodes = {
  B1: [
    { title: "Episode 1 - The American Revolution", src: "Audio/B1/Americas Defining Moments/B1/Episode 1 - The American Revolution.mp4", vocab: [
      { word: "revolution", definition: "a sudden and complete change in government or society" },
      { word: "independence", definition: "freedom from control by another country or person" },
      { word: "colony", definition: "a country or area under the control of another country" },
      { word: "rebellion", definition: "an act of resistance or fighting against authority" },
      { word: "democracy", definition: "a system of government chosen by the people" },
      { word: "freedom", definition: "the right to act, speak, or think without restriction" },
      { word: "declare", definition: "to announce something officially and publicly" },
      { word: "founding", definition: "relating to the establishment of something new" }
    ], questions: [
      "Why do you think the American colonies decided to fight for independence from Britain?",
      "How do you think the American Revolution changed the world beyond the USA?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 1 - The American Revolution.txt"},
    { title: "Episode 2 - American Declaration of Independence", src: "Audio/B1/Americas Defining Moments/B1/Episode 2 - American Declaration of Independence.mp4", vocab: [
      { word: "declare", definition: "to announce something officially and publicly" },
      { word: "independence", definition: "freedom from control by another country or person" },
      { word: "rights", definition: "things you are allowed to do or have by law" },
      { word: "freedom", definition: "the right to act, speak, or think without restriction" },
      { word: "equality", definition: "the state of being equal in rights and opportunities" },
      { word: "government", definition: "the group of people who control a country" },
      { word: "liberty", definition: "the freedom to live as you choose" },
      { word: "document", definition: "an official piece of writing" }
    ], questions: [
      "Why do you think the Declaration of Independence was such an important document?",
      "Do you think the values in the Declaration apply to all people equally today?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 2 - American Declaration of Independence.txt"},
    { title: "Episode 3 - The American Constitution", src: "Audio/B1/Americas Defining Moments/B1/Episode 3 - The American Constitution.mp4", vocab: [
      { word: "constitution", definition: "a set of laws that describe how a country is governed" },
      { word: "law", definition: "a rule made by the government that everyone must follow" },
      { word: "rights", definition: "things you are legally allowed to do or have" },
      { word: "amendment", definition: "a change made to a law or document" },
      { word: "congress", definition: "the group of elected people who make laws in the USA" },
      { word: "power", definition: "the ability to control people or events" },
      { word: "citizen", definition: "a person who legally belongs to a country" },
      { word: "senate", definition: "one of the two parts of the US Congress" }
    ], questions: [
      "Why is it important for a country to have a written constitution?",
      "What do you think is the most important right that a constitution should protect?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 3 - The American Constitution.txt"},
    { title: "Episode 4 - The American Civil War", src: "Audio/B1/Americas Defining Moments/B1/Episode 4 - The American Civil War.mp4", vocab: [
      { word: "slavery", definition: "the system of owning people and forcing them to work" },
      { word: "union", definition: "the northern states that stayed together during the Civil War" },
      { word: "conflict", definition: "a serious fight or war between groups" },
      { word: "soldier", definition: "a person who fights in an army" },
      { word: "abolish", definition: "to officially end a law or practice" },
      { word: "president", definition: "the elected leader of a country like the USA" },
      { word: "battle", definition: "a fight between two armies" },
      { word: "freedom", definition: "the right to live without being controlled by others" }
    ], questions: [
      "Why do you think the issue of slavery led to such a serious conflict?",
      "What do you think were the most important results of the Civil War?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 4 - The American Civil War.txt"},
    { title: "Episode 5 - The Role of the US in WWI", src: "Audio/B1/Americas Defining Moments/B1/Episode 5 - The Role of the US in WWI.mp4", vocab: [
      { word: "war", definition: "a serious fight between countries using armies" },
      { word: "ally", definition: "a country that supports another in a war" },
      { word: "trench", definition: "a long narrow hole dug in the ground for soldiers" },
      { word: "weapon", definition: "something used to hurt people or destroy things" },
      { word: "neutral", definition: "not supporting either side in a conflict" },
      { word: "victory", definition: "winning a war or battle" },
      { word: "soldier", definition: "a person who fights in an army" },
      { word: "president", definition: "the elected leader of a country like the USA" }
    ], questions: [
      "Why do you think the USA waited before joining the First World War?",
      "How do you think American involvement changed the outcome of WWI?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 5 - The Role of US in WWI.txt"},
    { title: "Episode 6 - The Great Depression", src: "Audio/B1/Americas Defining Moments/B1/America's Defining Moments Epi 6 Great Depression.mp4", vocab: [
      { word: "depression", definition: "a period of very low economic activity and high unemployment" },
      { word: "stock market", definition: "a place where shares in companies are bought and sold" },
      { word: "poverty", definition: "the state of being extremely poor" },
      { word: "relief", definition: "help given to people in need" },
      { word: "recovery", definition: "a return to a normal or better condition" }
    ], questions: [
      "What do you think caused the Great Depression?",
      "How do you think the Great Depression changed the way Americans felt about their government?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 6 - The Great Depression.txt"},
    { title: "Episode 7 - US Role in WWII", src: "Audio/B1/Americas Defining Moments/B1/Episode 7 US Role in WWII.mp4", vocab: [
      { word: "attack", definition: "a violent act against a person or place" },
      { word: "alliance", definition: "an agreement between countries to work together" },
      { word: "victory", definition: "success in a battle or war" },
      { word: "surrender", definition: "to stop fighting and admit defeat" },
      { word: "superpower", definition: "a country with great military and economic strength" }
    ], questions: [
      "Why do you think the attack on Pearl Harbor changed American public opinion about the war?",
      "How did World War II change America's role in the world?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 7 - US Role in WWII.txt"},
    { title: "Episode 8 - The American Civil Rights Movement", src: "Audio/B1/Americas Defining Moments/B1/Episode 8 - American Civil Rights Movement.mp4", vocab: [
      { word: "civil rights", definition: "the rights of citizens to have equal treatment under the law" },
      { word: "segregation", definition: "the practice of separating people of different races" },
      { word: "protest", definition: "an action taken to show disagreement with something" },
      { word: "equality", definition: "the state of being treated the same as others" },
      { word: "movement", definition: "a group of people working together to achieve a shared goal" }
    ], questions: [
      "Why do you think the Civil Rights Movement happened in the 1950s and 60s?",
      "Who do you think was the most important figure in the Civil Rights Movement and why?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 8 - American Civil Rights Movement.txt"},
    { title: "Episode 9 - Landing on the Moon", src: "Audio/B1/Americas Defining Moments/B1/Episode 9 Landing on the Moon.mp4", vocab: [
      { word: "astronaut", definition: "a person trained to travel into space" },
      { word: "orbit", definition: "the curved path of an object around a planet or star" },
      { word: "mission", definition: "an important task or journey" },
      { word: "launch", definition: "to send a rocket or spacecraft into the air" },
      { word: "achievement", definition: "something great that has been done successfully" }
    ], questions: [
      "Why do you think landing on the moon was so important to the United States?",
      "Do you think space exploration is still important today? Why or why not?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 9 - Landing on the Moon.txt"},
    { title: "Episode 10 - 9/11", src: "Audio/B1/Americas Defining Moments/B1/Episode 10 - 9_11.mp4", vocab: [
      { word: "terrorist", definition: "a person who uses violence to frighten people for political reasons" },
      { word: "attack", definition: "a violent act against a person or place" },
      { word: "collapse", definition: "to fall down suddenly" },
      { word: "security", definition: "measures taken to keep people safe" },
      { word: "memorial", definition: "something built to remember an important event or person" }
    ], questions: [
      "How do you think 9/11 changed everyday life in the United States?",
      "Why do you think it is important to remember events like 9/11?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B1/Episode 10 - 9_11.txt"}
  ],
  B2: [
    { title: "Episode 1 - The American Revolution", src: "Audio/B1/Americas Defining Moments/B2/Episode 1 - The American Revolution.mpeg", vocab: [
      { word: "sovereignty", definition: "the full power of a state to govern itself" },
      { word: "taxation", definition: "the system of collecting money from citizens for government use" },
      { word: "rebellion", definition: "organised resistance or uprising against authority" },
      { word: "manifesto", definition: "a public declaration of intentions or beliefs" },
      { word: "parliament", definition: "the group of elected representatives that makes laws" },
      { word: "colonial", definition: "relating to a colony or system of colonial rule" },
      { word: "militia", definition: "a group of civilians trained to fight as soldiers" },
      { word: "declaration", definition: "a formal public announcement" }
    ], questions: [
      "To what extent was the American Revolution driven by economic rather than political motivations?",
      "How did Enlightenment ideas influence the founding of the United States?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 1 -The American Revolution.txt"},
    { title: "Episode 2 - Declaration of Independence", src: "Audio/B1/Americas Defining Moments/B2/Episode 2 - Declaration of Independence.mp4", vocab: [
      { word: "self-evident", definition: "obvious and requiring no proof or explanation" },
      { word: "inalienable", definition: "unable to be taken away or given up" },
      { word: "tyranny", definition: "cruel and oppressive government or rule" },
      { word: "consent", definition: "agreement or permission given by those affected" },
      { word: "grievance", definition: "a cause of complaint or resentment" },
      { word: "assertion", definition: "a confident statement of fact or belief" },
      { word: "principles", definition: "fundamental rules or beliefs guiding behaviour" },
      { word: "legitimacy", definition: "the right to govern accepted by the people" }
    ], questions: [
      "How radical were the ideas in the Declaration of Independence for their time?",
      "To what extent does the Declaration of Independence still reflect American values today?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 2 - American Declaration of Independence.txt"},
    { title: "Episode 3 - The American Constitution", src: "Audio/B1/Americas Defining Moments/B2/Episode 3 - The American Constitution.mp4", vocab: [
      { word: "ratification", definition: "the formal approval of an agreement or document" },
      { word: "separation of powers", definition: "the division of government into independent branches" },
      { word: "checks and balances", definition: "a system preventing any one branch of government from gaining too much power" },
      { word: "amendment", definition: "a formal change or addition to a law or document" },
      { word: "federal", definition: "relating to a system where power is shared between central and regional governments" },
      { word: "veto", definition: "the right to reject a decision made by others" },
      { word: "judiciary", definition: "the part of government responsible for the legal system" },
      { word: "sovereignty", definition: "the authority of a state to govern itself" }
    ], questions: [
      "Why did the Founding Fathers build a system of checks and balances into the Constitution?",
      "Is the US Constitution still fit for purpose in the 21st century?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 3 - The American Constitution.txt"},
    { title: "Episode 4 - The American Civil War", src: "Audio/B1/Americas Defining Moments/B2/Episode 4 - The American Civil War.mp4", vocab: [
      { word: "secession", definition: "the act of withdrawing from a union or alliance" },
      { word: "abolitionist", definition: "a person who campaigned to end slavery" },
      { word: "emancipation", definition: "the fact of being freed from legal, social, or political restrictions" },
      { word: "confederacy", definition: "the alliance of southern states that left the Union" },
      { word: "reconstruction", definition: "the period of rebuilding the South after the Civil War" },
      { word: "ideology", definition: "a system of ideas forming the basis of political theory" },
      { word: "casualties", definition: "people killed or injured in a war or accident" },
      { word: "sovereignty", definition: "supreme authority within a territory" }
    ], questions: [
      "Was the American Civil War inevitable, or could it have been avoided through political compromise?",
      "How did the Civil War reshape the political and social identity of the United States?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 4 - The American Civil War.txt"},
    { title: "Episode 5 - The Role of the US in WWI", src: "Audio/B1/Americas Defining Moments/B2/Episode 5 - The Role of the US in WWI.mp4", vocab: [
      { word: "isolationism", definition: "a policy of remaining apart from the affairs of other countries" },
      { word: "propaganda", definition: "information used to promote a political cause" },
      { word: "mobilisation", definition: "the action of organising resources for war" },
      { word: "armistice", definition: "an agreement to stop fighting" },
      { word: "diplomacy", definition: "managing international relations through negotiation" },
      { word: "intervention", definition: "the action of becoming involved in a conflict" },
      { word: "conscription", definition: "compulsory enlistment for military service" },
      { word: "neutrality", definition: "the state of not supporting either side in a conflict" }
    ], questions: [
      "How did the First World War mark a turning point in American foreign policy?",
      "To what extent was Woodrow Wilson's vision for the post-war world achieved?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 5 - The Role of the US in WWI.txt"},
    { title: "Episode 6 - The Great Depression", src: "Audio/B1/Americas Defining Moments/B2/Episode 6 The Great Depression.mp4", vocab: [
      { word: "collapse", definition: "a sudden failure of a system or institution" },
      { word: "unemployment", definition: "the state of not having a job" },
      { word: "speculation", definition: "buying assets hoping to make a profit from future price changes" },
      { word: "intervention", definition: "the act of a government becoming involved to change a situation" },
      { word: "breadline", definition: "a queue of people waiting for free food during hard times" }
    ], questions: [
      "To what extent was the Great Depression caused by failures in the financial system?",
      "How did Roosevelt's New Deal redefine the relationship between the US government and its citizens?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 6 - The Great Depression.txt"},
    { title: "Episode 7 - US Role in WWII", src: "Audio/B1/Americas Defining Moments/B2/Episode 7 - US Role in WWII.mp4", vocab: [
      { word: "isolationism", definition: "a policy of not getting involved in other countries' affairs" },
      { word: "mobilisation", definition: "organising a country's resources for war" },
      { word: "atomic bomb", definition: "a weapon of mass destruction using nuclear energy" },
      { word: "occupation", definition: "taking control of a country with military force" },
      { word: "Cold War", definition: "a state of political tension between the US and USSR after WWII" }
    ], questions: [
      "Was the use of atomic bombs on Japan justified? Consider different perspectives.",
      "How did World War II lay the foundations for the Cold War?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 7 - US Role in WWII.txt"},
    { title: "Episode 8 - The American Civil Rights Movement", src: "Audio/B1/Americas Defining Moments/B2/Episode 8 American Civil Rights Movement.mp4", vocab: [
      { word: "discrimination", definition: "unfair treatment of people based on race, gender or other factors" },
      { word: "nonviolent resistance", definition: "a method of protest that does not use violence" },
      { word: "legislation", definition: "laws made by a government" },
      { word: "activism", definition: "taking action to bring about political or social change" },
      { word: "landmark", definition: "an important event or achievement that marks a turning point" }
    ], questions: [
      "How did nonviolent protest tactics shape the success of the Civil Rights Movement?",
      "To what extent did the Civil Rights Act of 1964 achieve genuine equality for Black Americans?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 8 - American Civil Rights Movement.txt"},
    { title: "Episode 9 - Landing on the Moon", src: "Audio/B1/Americas Defining Moments/B2/Episode 9 Landing on the Moon.mp4", vocab: [
      { word: "geopolitical", definition: "relating to politics as influenced by geography" },
      { word: "Cold War", definition: "the political tension between the US and USSR after WWII" },
      { word: "technological", definition: "relating to the development and use of technology" },
      { word: "rivalry", definition: "competition between two people, groups or countries" },
      { word: "legacy", definition: "something left behind that has a lasting impact" }
    ], questions: [
      "To what extent was the Space Race driven by political rather than scientific motivations?",
      "What has been the long-term legacy of the Apollo programme for science and technology?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 9 - Landing on the Moon.txt"},
    { title: "Episode 10 - 9/11", src: "Audio/B1/Americas Defining Moments/B2/Episode 10 9_11.mp4", vocab: [
      { word: "intelligence", definition: "secret information gathered about an enemy or threat" },
      { word: "retaliation", definition: "action taken in response to an attack" },
      { word: "surveillance", definition: "close monitoring of a person or group" },
      { word: "radicalisation", definition: "the process by which someone adopts extreme views" },
      { word: "consequences", definition: "the results or effects of an action" }
    ], questions: [
      "How did 9/11 reshape US foreign policy and international relations?",
      "To what extent did the War on Terror achieve its aims?"
    ], transcriptSrc: "Transcripts/America's Defining Moments/B2/Episode 10 9_11.txt"}
  ]
};

window.renderADMLevel = function renderADMLevel(level, targetId) {
  var admList = document.getElementById(targetId || "adm-list");
  if (!admList) return;
  admList.innerHTML = "";
  var episodes = admEpisodes[level] || [];
  episodes.forEach(function(ep, idx) {
    var card = document.createElement("div");
    card.className = "card";
    var vocabHTML = ep.vocab.map(function(v) {
      return "<li><strong>" + v.word + "</strong> <button class=\"speaker-btn\" onclick=\"speakWord('" + v.word + "')\">🔊</button> " + v.definition + "</li>";
    }).join("");
    var questionsHTML = "<div style='margin-top:16px'><h4>Discussion Questions</h4><ol>" + ep.questions.map(function(q) { return "<li style='margin-bottom:8px'>" + q + "</li>"; }).join("") + "</ol></div>";
    var tId = "adm-transcript-" + level + "-" + idx;
    var transcriptHTML = ep.transcriptSrc
      ? "<div style='margin-top:12px'><button class='level-tab' id='transcript-toggle-btn-" + tId + "' onclick='toggleADMTranscript(\"" + ep.transcriptSrc + "\",\"" + tId + "\")'>Show Transcript</button><div id='" + tId + "' style='display:none;margin-top:12px;white-space:pre-wrap;line-height:1.7'></div></div>"
      : "";
    var contextKey = "ctx_adm_" + level + "_" + idx;
    window._chatContexts = window._chatContexts || {};
    window._chatContexts[contextKey] = { title: ep.title, level: level, vocab: ep.vocab, questions: ep.questions || [] };
    var chatBtn = "<button onclick='openChatBot(\"" + contextKey + "\")' style='display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6fa8,#4A9EE8);border:none;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(74,158,232,0.4)'>🎙️ Chat with Skipper</button>";
    card.innerHTML = "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px'><h3 style='margin:0'>" + ep.title + "</h3>" + chatBtn + "</div>"
      + "<audio controls style='width:100%;margin:10px 0'><source src='" + ep.src + "'></audio>"
      + "<h4>Vocabulary</h4><ul>" + vocabHTML + "</ul>"
      + questionsHTML + transcriptHTML;
    admList.appendChild(card);
  });
};

window.toggleVocabTranscript = function(src, id) {
  var box = document.getElementById("transcript-box-" + id);
  var btn = document.getElementById("transcript-toggle-btn-" + id);
  if (!box || !btn) return;
  if (box.style.display !== "none") { box.style.display = "none"; btn.textContent = "Show Transcript"; return; }
  if (box.dataset.loaded) { box.style.display = "block"; btn.textContent = "Hide Transcript"; return; }
  btn.textContent = "Loading...";
  fetch(src)
    .then(function(r) { if (!r.ok) throw new Error("Could not load transcript."); return r.text(); })
    .then(function(text) { box.textContent = text; box.dataset.loaded = "true"; box.style.display = "block"; btn.textContent = "Hide Transcript"; })
    .catch(function(err) { box.textContent = err.message; box.style.display = "block"; btn.textContent = "Hide Transcript"; });
};

window.toggleADMTranscript = function(src, tId) {
  var box = document.getElementById(tId);
  var btn = document.getElementById("transcript-toggle-btn-" + tId);
  if (!box || !btn) return;
  if (box.style.display !== "none") {
    box.style.display = "none";
    btn.textContent = "Show Transcript";
    return;
  }
  if (box.dataset.loaded) {
    box.style.display = "block";
    btn.textContent = "Hide Transcript";
    return;
  }
  btn.textContent = "Loading...";
  fetch(src)
    .then(function(r) { if (!r.ok) throw new Error("Could not load transcript."); return r.text(); })
    .then(function(text) { box.textContent = text; box.dataset.loaded = "true"; box.style.display = "block"; btn.textContent = "Hide Transcript"; })
    .catch(function(err) { box.textContent = err.message; box.style.display = "block"; btn.textContent = "Hide Transcript"; });
};

window.selectADMLevel = function(level) {
  document.querySelectorAll("#adm-tabs .level-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.textContent === level);
  });
  renderADMLevel(level);
};

const inventionEpisodes = {
  A1: [
    { title: "Episode 1 - Gutenberg and the Printing Press", src: "Audio/Inventions/A1/Guttenberg and the Printing Press.mp4", vocab: [
      { word: "invention", definition: "something new that someone has made or designed for the first time" },
      { word: "printing press", definition: "a machine used to print text on paper" },
      { word: "knowledge", definition: "information and understanding that you have" },
      { word: "spread", definition: "to move or share something across a wider area" },
      { word: "revolution", definition: "a very important change in the way something works" }
    ], questions: [
      "Why was the printing press such an important invention?",
      "How do you think the world would be different without the printing press?"
    ], transcriptSrc: "Transcripts/Important Inventions and Inventors/A1/Gutenberg and the Printing Press.txt"}
  ],
  A2: [
    { title: "Episode 2 - The Steam Engine", src: "Audio/Inventions/A2/The Steam Engine.mp4", vocab: [
      { word: "steam", definition: "hot water vapour produced when water boils" },
      { word: "engine", definition: "a machine that uses energy to produce movement or power" },
      { word: "power", definition: "the energy or ability to make things work or move" },
      { word: "factory", definition: "a building where goods are made in large quantities" },
      { word: "fuel", definition: "a material like coal or oil that is burned to produce energy" }
    ], questions: [
      "How do you think the steam engine changed everyday life for people?",
      "Can you think of any modern machines that work in a similar way to the steam engine?"
    ], transcriptSrc: "Transcripts/Important Inventions and Inventors/A2/The Steam Engine.txt"}
  ],
  B1: [
    { title: "Episode 2 - The Steam Engine", src: "Audio/Inventions/B1/The Steam Engine.mp4", vocab: [
      { word: "industrial revolution", definition: "the period when production moved from hand tools to machines in factories" },
      { word: "mechanism", definition: "a system of parts that work together to perform a function" },
      { word: "efficiency", definition: "the ability to achieve results without wasting time or resources" },
      { word: "combustion", definition: "the process of burning fuel to produce energy" },
      { word: "innovation", definition: "the introduction of new ideas, methods or inventions" }
    ], questions: [
      "How did the steam engine transform society and the economy in the 19th century?",
      "Do you think the industrial revolution had more positive or negative effects on people's lives?"
    ], transcriptSrc: "Transcripts/Important Inventions and Inventors/B1/The Steam Engine.txt"}
  ]
};

window.renderInventionsLevel = function(level, targetId) {
  var list = document.getElementById(targetId || "inventions-list");
  if (!list) return;
  list.innerHTML = "";
  var episodes = inventionEpisodes[level] || [];
  episodes.forEach(function(ep, idx) {
    var card = document.createElement("div");
    card.className = "card";
    var vocabHTML = ep.vocab.map(function(v) {
      return "<li><strong>" + v.word + "</strong> <button class=\"speaker-btn\" onclick=\"speakWord('" + v.word + "')\">🔊</button> " + v.definition + "</li>";
    }).join("");
    var questionsHTML = "<div style='margin-top:16px'><h4>Discussion Questions</h4><ol>" + ep.questions.map(function(q) { return "<li style='margin-bottom:8px'>" + q + "</li>"; }).join("") + "</ol></div>";
    var tId = "inv-transcript-" + level + "-" + idx;
    var transcriptHTML = ep.transcriptSrc
      ? "<div style='margin-top:12px'><button class='level-tab' id='transcript-toggle-btn-" + tId + "' onclick='toggleADMTranscript(\"" + ep.transcriptSrc + "\",\"" + tId + "\")'>Show Transcript</button><div id='" + tId + "' style='display:none;margin-top:12px;white-space:pre-wrap;line-height:1.7'></div></div>"
      : "";
    var contextKey = "ctx_inv_" + level + "_" + idx;
    window._chatContexts = window._chatContexts || {};
    window._chatContexts[contextKey] = { title: ep.title, level: level, vocab: ep.vocab, questions: ep.questions || [] };
    var chatBtn = "<button onclick='openChatBot(\"" + contextKey + "\")' style='display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6fa8,#4A9EE8);border:none;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(74,158,232,0.4)'>🎙️ Chat with Skipper</button>";
    card.innerHTML = "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px'><h3 style='margin:0'>" + ep.title + "</h3>" + chatBtn + "</div>"
      + "<audio controls style='width:100%;margin:10px 0'><source src='" + ep.src + "'></audio>"
      + "<h4>Vocabulary</h4><ul>" + vocabHTML + "</ul>"
      + questionsHTML + transcriptHTML;
    list.appendChild(card);
  });
};

window.selectInventionsLevel = function(level) {
  document.querySelectorAll("#inventions-tabs .level-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.textContent === level);
  });
  renderInventionsLevel(level);
};

const ukEpisodes = {
  A1: [
    { title: "All About Catholics and Protestants", src: "Audio/All About the UK/A1/All About Catholics and Protestants.mp4", vocab: [
      { word: "Catholic", definition: "a member of the Roman Catholic church" },
      { word: "Protestant", definition: "a member of a Christian church that separated from Rome" },
      { word: "religion", definition: "the belief in and worship of a god or gods" },
      { word: "church", definition: "a building where Christians go to worship" },
      { word: "faith", definition: "strong belief in a religion or set of ideas" }
    ], questions: [
      "What do you know about the difference between Catholics and Protestants?",
      "Why do you think religion has been important in British history?"
    ], transcriptSrc: "Transcripts/All About the UK/A1/All About Catholics and Protestants.txt"},
    { title: "All About Scotland", src: "Audio/All About the UK/A1/All About Scotland.mp4", vocab: [
      { word: "Scotland", definition: "a country that is part of the United Kingdom, in the north of Great Britain" },
      { word: "capital", definition: "the most important city in a country, where the government is" },
      { word: "culture", definition: "the way of life and traditions of a group of people" },
      { word: "highland", definition: "an area of high land with hills or mountains" },
      { word: "independent", definition: "free from the control or rule of another country" }
    ], questions: [
      "What do you already know about Scotland?",
      "Would you like to visit Scotland? Why or why not?"
    ], transcriptSrc: "Transcripts/All About the UK/A1/All About Svotland.txt"},
    { title: "All About Wales", src: "Audio/All About the UK/A1/All About Wales.mp4", vocab: [
      { word: "Wales", definition: "a country that is part of the United Kingdom, in the west of Great Britain" },
      { word: "language", definition: "a system of communication used by people in a country or region" },
      { word: "dragon", definition: "a mythical fire-breathing creature, used as a symbol of Wales" },
      { word: "coast", definition: "the land along the edge of the sea" },
      { word: "tradition", definition: "a custom or activity passed down through generations" }
    ], questions: [
      "What surprised you most about Wales?",
      "Why do you think keeping a regional language alive is important?"
    ], transcriptSrc: "Transcripts/All About the UK/A1/All About Wales.txt"},
    { title: "Five Cities Worth Visiting in England", src: "Audio/All About the UK/A1/Five Cities Worth Visiting in England.mp4", vocab: [
      { word: "city", definition: "a large and important town" },
      { word: "visit", definition: "to go to a place for a period of time" },
      { word: "museum", definition: "a building where objects of historical or artistic interest are kept" },
      { word: "cathedral", definition: "a large and important Christian church" },
      { word: "recommend", definition: "to suggest something as being good or useful" }
    ], questions: [
      "Which of the five cities would you most like to visit?",
      "What do you look for when you visit a new city?"
    ], transcriptSrc: "Transcripts/All About the UK/A1/Five Cities Worth Visiting in England.txt"},
    { title: "The British Royal Family", src: "Audio/All About the UK/A1/The British Royal Family.mp4", vocab: [
      { word: "royal", definition: "relating to a king, queen or their family" },
      { word: "monarch", definition: "a king or queen who rules a country" },
      { word: "palace", definition: "a large and grand house where a king or queen lives" },
      { word: "crown", definition: "a circular object worn on the head of a king or queen" },
      { word: "ceremony", definition: "a formal public event with special activities and traditions" }
    ], questions: [
      "What do you know about the British royal family?",
      "Do you think having a royal family is a good thing for a country?"
    ], transcriptSrc: "Transcripts/All About the UK/A1/The British Royal Family.txt"}
  ],
  A2: [
    { title: "All About Catholics and Protestants", src: "Audio/All About the UK/A2/All About Catrholics and Protestants.mp4", vocab: [
      { word: "reformation", definition: "the 16th century movement that created Protestant churches" },
      { word: "divide", definition: "a difference that separates two groups" },
      { word: "worship", definition: "to show respect and love for a god, often by praying" },
      { word: "conflict", definition: "a serious disagreement or fight between groups" },
      { word: "unity", definition: "the state of being joined together as one" }
    ], questions: [
      "How do you think religious differences affect people's daily lives?",
      "Can you think of any other countries where religious divisions have caused conflict?"
    ], transcriptSrc: "Transcripts/All About the UK/A2/All About Catholics and Protestants.txt"},
    { title: "All About Scotland", src: "Audio/All About the UK/A2/All About Scotland.mp4", vocab: [
      { word: "parliament", definition: "the group of people who make laws for a country" },
      { word: "devolution", definition: "the transfer of power from central government to regional governments" },
      { word: "referendum", definition: "a vote in which all people in a country can decide on one question" },
      { word: "whisky", definition: "a strong alcoholic drink made from grain, strongly associated with Scotland" },
      { word: "landscape", definition: "all the visible features of an area of land" }
    ], questions: [
      "What are the arguments for and against Scottish independence?",
      "How important is national identity to you personally?"
    ], transcriptSrc: "Transcripts/All About the UK/A2/All About Scotland.txt"},
    { title: "All About Wales", src: "Audio/All About the UK/A2/All About Wales.mp4", vocab: [
      { word: "bilingual", definition: "using or speaking two languages" },
      { word: "rugby", definition: "a team sport played with an oval ball, very popular in Wales" },
      { word: "heritage", definition: "the history and traditions that a country or group has" },
      { word: "valley", definition: "a low area of land between hills or mountains" },
      { word: "national identity", definition: "the feeling of belonging to a particular country or nation" }
    ], questions: [
      "Why do you think Wales has kept its own language despite being part of the UK?",
      "What aspects of Welsh culture do you find most interesting?"
    ], transcriptSrc: "Transcripts/All About the UK/A2/All About Wales.txt"},
    { title: "Five Cities Worth Visiting in England", src: "Audio/All About the UK/A2/Five Cities Worth Visiting in England.mp4", vocab: [
      { word: "architecture", definition: "the design and style of buildings" },
      { word: "vibrant", definition: "full of energy and life" },
      { word: "medieval", definition: "relating to the Middle Ages, roughly 500–1500 AD" },
      { word: "cosmopolitan", definition: "including people and ideas from many different countries" },
      { word: "attraction", definition: "a place or event that people visit because it is interesting" }
    ], questions: [
      "What makes a city interesting to tourists?",
      "Have you visited any cities in England? What were they like?"
    ], transcriptSrc: "Transcripts/All About the UK/A2/Five Cities Worth Visiting in England.txt"},
    { title: "The British Royal Family", src: "Audio/All About the UK/A2/The British Royal Family.mp4", vocab: [
      { word: "constitutional monarchy", definition: "a system where a king or queen rules within the limits of a constitution" },
      { word: "succession", definition: "the process by which someone inherits a title or position" },
      { word: "abdication", definition: "when a king or queen gives up their position" },
      { word: "coronation", definition: "the ceremony at which a new king or queen is crowned" },
      { word: "scandal", definition: "an event that causes public shock or outrage" }
    ], questions: [
      "What do you think are the advantages of having a constitutional monarchy?",
      "How has the image of the British royal family changed in recent years?"
    ], transcriptSrc: "Transcripts/All About the UK/A2/The British Royal Family.txt"}
  ],
  B1: [
    { title: "The Differences between Catholics and Protestants", src: "Audio/All About the UK/B1/The Differences between Catholics and Protestants.mp4", vocab: [
      { word: "doctrine", definition: "a set of beliefs or principles held by a religious group" },
      { word: "schism", definition: "a division or split, especially within a religious group" },
      { word: "secular", definition: "not connected to religion or a religious organisation" },
      { word: "reconciliation", definition: "the process of restoring friendly relations between groups" },
      { word: "ecumenism", definition: "the idea of promoting cooperation between different Christian churches" }
    ], questions: [
      "How much do you think religious differences affect politics in modern Britain?",
      "Is it possible for religious groups with very different beliefs to live in harmony?"
    ], transcriptSrc: "Transcripts/All About the UK/B1/The Differences between Catholics and Protestants.txt"},
    { title: "All About Scotland", src: "Audio/All About the UK/B1/All About Scotland.mp4", vocab: [
      { word: "autonomy", definition: "the right to govern yourself or make your own decisions" },
      { word: "nationalism", definition: "a strong belief in the independence and identity of one's country or region" },
      { word: "Gaelic", definition: "the traditional Celtic language spoken in parts of Scotland and Ireland" },
      { word: "sovereignty", definition: "supreme power or authority, especially of a state" },
      { word: "clan", definition: "a group of families sharing a common ancestor, especially in Scotland" }
    ], questions: [
      "What are the key arguments in the debate over Scottish independence?",
      "How does a strong sense of national identity affect relations within a union like the UK?"
    ], transcriptSrc: "Transcripts/All About the UK/B1/All About Scotland.txt"},
    { title: "All About Wales", src: "Audio/All About the UK/B1/All About Wales.mp4", vocab: [
      { word: "linguistic", definition: "relating to language or the study of language" },
      { word: "revival", definition: "bringing something back into use or popularity" },
      { word: "devolved", definition: "describing power transferred from central to regional government" },
      { word: "emigration", definition: "leaving your own country to live in another" },
      { word: "folklore", definition: "traditional stories, customs and beliefs of a community" }
    ], questions: [
      "How successful have efforts to revive the Welsh language been?",
      "What role does folklore and tradition play in national identity?"
    ], transcriptSrc: "Transcripts/All About the UK/B1/All About Wales.txt"},
    { title: "Five Cities Worth Visiting in England", src: "Audio/All About the UK/B1/Five Cities Worth Visiting in England.mp4", vocab: [
      { word: "urban regeneration", definition: "the process of improving run-down city areas" },
      { word: "heritage site", definition: "a place of historical or cultural importance, often protected by law" },
      { word: "multicultural", definition: "including people from many different cultural backgrounds" },
      { word: "commerce", definition: "the activity of buying and selling goods and services" },
      { word: "itinerary", definition: "a planned route or list of places to visit on a journey" }
    ], questions: [
      "What factors make a city an attractive tourist destination?",
      "How does a city's history shape its modern identity?"
    ], transcriptSrc: "Transcripts/All About the UK/B1/Five Cities Worth Visiting in England.txt"},
    { title: "The British Royal Family", src: "Audio/All About the UK/B1/The British Royal Family.mp4", vocab: [
      { word: "institution", definition: "an important established organisation in a society" },
      { word: "controversy", definition: "public disagreement or argument about something" },
      { word: "protocol", definition: "the system of rules about correct behaviour in official situations" },
      { word: "patronage", definition: "support given by a senior or important person to an organisation or cause" },
      { word: "celebrity", definition: "a famous person, especially in entertainment" }
    ], questions: [
      "What role does the monarchy play in modern British society?",
      "Do you think the royal family is good value for money for the British public?"
    ], transcriptSrc: "Transcripts/All About the UK/B1/The British Royal Family.txt"}
  ],
  B2: [
    { title: "All About Catholics and Protestants", src: "Audio/All About the UK/B2/All About Catholics and Protestants.mp4", vocab: [
      { word: "theological", definition: "relating to the study of religion and God" },
      { word: "sectarianism", definition: "prejudice or discrimination based on religious affiliation" },
      { word: "clergy", definition: "the ordained ministers of a religion, such as priests" },
      { word: "reformation", definition: "the 16th century religious movement that led to the creation of Protestantism" },
      { word: "papal authority", definition: "the power and leadership of the Pope over the Catholic Church" }
    ], questions: [
      "To what extent does religion still influence politics and culture in the UK?",
      "How have interfaith relations evolved in Britain over the last century?"
    ], transcriptSrc: "Transcripts/All About the UK/B2/All About Catholics and Protestants.txt"},
    { title: "All About Scotland", src: "Audio/All About the UK/B2/All About Scotland.mp4", vocab: [
      { word: "constitutional", definition: "relating to the rules and principles that govern a country" },
      { word: "subsidy", definition: "money given by a government to help an industry or service" },
      { word: "unionist", definition: "a person who supports the union of Scotland with the rest of the UK" },
      { word: "infrastructure", definition: "the basic systems and structures a country needs, like roads and power" },
      { word: "diaspora", definition: "people who have spread from their original country and live elsewhere" }
    ], questions: [
      "What are the economic implications of Scottish independence?",
      "How does Scotland's relationship with Europe compare to England's?"
    ], transcriptSrc: "Transcripts/All About the UK/B2/All About Scotland.txt"},
    { title: "All About Wales", src: "Audio/All About the UK/B2/All About Wales.mp4", vocab: [
      { word: "marginalisation", definition: "the process of treating a group as less important or powerful" },
      { word: "assimilation", definition: "the process by which a group adopts the culture of a larger group" },
      { word: "indigenous", definition: "originating or occurring naturally in a particular place" },
      { word: "post-industrial", definition: "relating to a society that has moved away from heavy industry" },
      { word: "cultural preservation", definition: "the effort to maintain and protect a culture's traditions and language" }
    ], questions: [
      "How has the decline of coal mining shaped modern Welsh identity?",
      "What are the challenges of preserving a minority language in a globalised world?"
    ], transcriptSrc: "Transcripts/All About the UK/B2/All About Wales.txt"},
    { title: "Five Cities Worth Visiting in England", src: "Audio/All About the UK/B2/Five Cities Worth Visiting in England.mp4", vocab: [
      { word: "gentrification", definition: "the process of renovating an area so that it attracts wealthier residents" },
      { word: "renaissance", definition: "a revival of interest or activity in something" },
      { word: "demographic", definition: "relating to the characteristics of a population" },
      { word: "cultural quarter", definition: "an area of a city known for its arts, music or creative industries" },
      { word: "municipal", definition: "relating to a town or city and its government" }
    ], questions: [
      "How does urban development affect the cultural identity of a city?",
      "What are the social consequences of gentrification in city centres?"
    ], transcriptSrc: "Transcripts/All About the UK/B2/Five Cities Worth Visiting in England.txt"},
    { title: "The British Royal Family", src: "Audio/All About the UK/B2/The British Royal Family.mp4", vocab: [
      { word: "constitutional reform", definition: "changes made to the fundamental rules governing a country" },
      { word: "anachronism", definition: "something that belongs to a different time and seems out of place today" },
      { word: "deference", definition: "respectful submission to the opinion or wishes of someone else" },
      { word: "tabloid", definition: "a type of popular newspaper known for its sensational stories" },
      { word: "allegiance", definition: "loyalty or commitment to a person, group or cause" }
    ], questions: [
      "Is the concept of monarchy compatible with modern democratic values?",
      "How has media coverage of the royal family changed public attitudes towards the monarchy?"
    ], transcriptSrc: "Transcripts/All About the UK/B2/The British Royal Family.txt"}
  ]
};

window.renderUKLevel = function(level, targetId) {
  var list = document.getElementById(targetId || "uk-list");
  if (!list) return;
  list.innerHTML = "";
  var episodes = ukEpisodes[level] || [];
  episodes.forEach(function(ep, idx) {
    var card = document.createElement("div");
    card.className = "card";
    var vocabHTML = ep.vocab.map(function(v) {
      return "<li><strong>" + v.word + "</strong> <button class=\"speaker-btn\" onclick=\"speakWord('" + v.word + "')\">🔊</button> " + v.definition + "</li>";
    }).join("");
    var questionsHTML = "<div style='margin-top:16px'><h4>Discussion Questions</h4><ol>" + ep.questions.map(function(q) { return "<li style='margin-bottom:8px'>" + q + "</li>"; }).join("") + "</ol></div>";
    var tId = "uk-transcript-" + level + "-" + idx;
    var transcriptHTML = ep.transcriptSrc
      ? "<div style='margin-top:12px'><button class='level-tab' id='transcript-toggle-btn-" + tId + "' onclick='toggleADMTranscript(\"" + ep.transcriptSrc + "\",\"" + tId + "\")'>Show Transcript</button><div id='" + tId + "' style='display:none;margin-top:12px;white-space:pre-wrap;line-height:1.7'></div></div>"
      : "";
    var contextKey = "ctx_uk_" + level + "_" + idx;
    window._chatContexts = window._chatContexts || {};
    window._chatContexts[contextKey] = { title: ep.title, level: level, vocab: ep.vocab, questions: ep.questions || [] };
    var chatBtn = "<button onclick='openChatBot(\"" + contextKey + "\")' style='display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6fa8,#4A9EE8);border:none;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(74,158,232,0.4)'>🎙️ Chat with Skipper</button>";
    card.innerHTML = "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px'><h3 style='margin:0'>" + ep.title + "</h3>" + chatBtn + "</div>"
      + "<audio controls style='width:100%;margin:10px 0'><source src='" + ep.src + "'></audio>"
      + "<h4>Vocabulary</h4><ul>" + vocabHTML + "</ul>"
      + questionsHTML + transcriptHTML;
    list.appendChild(card);
  });
};

window.selectUKLevel = function(level) {
  document.querySelectorAll("#uk-tabs .level-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.textContent === level);
  });
  renderUKLevel(level);
};

const africaEpisodes = {
  B1: [
    { title: "Angola", src: "Audio/Africa/B1/Angola.mp4", vocab: [
      { word: "colony", definition: "a country controlled by another, more powerful country" },
      { word: "independence", definition: "freedom from being ruled by another country" },
      { word: "civil war", definition: "a war between groups of people in the same country" },
      { word: "authoritarian", definition: "a government that controls people strictly and limits freedom" },
      { word: "corruption", definition: "dishonest behaviour by people in positions of power" },
      { word: "resilient", definition: "able to recover quickly from difficult situations" }
    ], questions: [
      "Angola is very rich in oil and diamonds, but many people still live in poverty. Why do you think wealth is not always shared equally in a country?",
      "Angola spent 27 years in a civil war before finding peace. How do you think a long war changes a country's development?"
    ], transcriptSrc: "Transcripts/Africa/B1/Angola.txt"},
    { title: "Botswana", src: "Audio/Africa/B1/Botswana.mp4", vocab: [
      { word: "landlocked", definition: "completely surrounded by land, with no coastline" },
      { word: "sparsely populated", definition: "having very few people living in a large area" },
      { word: "democracy", definition: "a system where people vote to choose their government" },
      { word: "currency", definition: "the money used in a particular country" },
      { word: "wetland", definition: "an area of land that is always wet or flooded" },
      { word: "concentration", definition: "a large number of things gathered in one place" }
    ], questions: [
      "Botswana used its diamond wealth to develop the country and fight corruption. What can other resource-rich countries learn from Botswana's example?",
      "The Okavango Delta is a river that flows into a desert instead of the sea. What makes unusual natural places like this important for wildlife and tourism?"
    ], transcriptSrc: "Transcripts/Africa/B1/Botswana.txt"},
    { title: "Democratic Republic of Congo", src: "Audio/Africa/B1/Democratic Republic of Congo.mp4", vocab: [
      { word: "rainforest", definition: "a thick, tropical forest with very heavy rainfall" },
      { word: "dictator", definition: "a leader who has total power and rules unfairly" },
      { word: "minerals", definition: "natural solid substances found in the earth, like gold or cobalt" },
      { word: "infrastructure", definition: "basic systems a country needs, like roads and hospitals" },
      { word: "armed groups", definition: "organised groups of people who carry weapons and fight" },
      { word: "contrast", definition: "a clear difference between two things" }
    ], questions: [
      "The DRC has enormous natural wealth but most of its people are very poor. What do you think stops a country's resources from benefiting its own citizens?",
      "Would you ever travel to a place that your government advises against visiting? What would make you consider going or not going?"
    ], transcriptSrc: "Transcripts/Africa/B1/Democratic Republic of Congo.txt"},
    { title: "Rwanda", src: "Audio/Africa/B1/Rwanda.mp4", vocab: [
      { word: "genocide", definition: "the deliberate killing of a large group of people" },
      { word: "reconciliation", definition: "the process of becoming friendly again after a conflict" },
      { word: "landlocked", definition: "completely surrounded by land, with no coastline" },
      { word: "opposition", definition: "people or groups who disagree with those in power" },
      { word: "developing country", definition: "a country that is still building its economy and services" },
      { word: "stable", definition: "not likely to change or have problems suddenly" }
    ], questions: [
      "Rwanda recovered remarkably after the 1994 genocide by focusing on unity and reconciliation. What do you think helps a society heal after a terrible tragedy?",
      "Some people call Rwanda a managed democracy. Do you think strong leadership is more important than political freedom when rebuilding a broken country?"
    ], transcriptSrc: "Transcripts/Africa/B1/Rwanda.txt"},
    { title: "Somaliland", src: "Audio/Africa/B1/Somaliland.mp4", vocab: [
      { word: "independent state", definition: "a place that governs itself separately from other countries" },
      { word: "protectorate", definition: "a territory controlled and protected by a stronger country" },
      { word: "recognition", definition: "official acceptance by other countries that a state exists" },
      { word: "remittances", definition: "money sent home by people living and working abroad" },
      { word: "livestock", definition: "farm animals such as goats, sheep, and camels" },
      { word: "preserved", definition: "kept in good condition over a long period of time" }
    ], questions: [
      "Somaliland has been acting as an independent country for over 30 years but is not officially recognised by the UN. What problems might this cause for its people?",
      "Somaliland is often called a hidden democracy because the world does not pay much attention to it. Why do you think some countries receive more global attention than others?"
    ], transcriptSrc: "Transcripts/Africa/B1/Somaliland.txt"},
    { title: "South Sudan", src: "Audio/Africa/B1/South Sudan.mp4", vocab: [
      { word: "referendum", definition: "a public vote on one important question or decision" },
      { word: "unanimous", definition: "when everyone agrees on the same thing" },
      { word: "pipeline", definition: "a long pipe used to transport oil or gas over long distances" },
      { word: "humanitarian aid", definition: "food, money, and supplies given to people in need" },
      { word: "sanctions", definition: "punishments placed on a country to pressure it to change" },
      { word: "fertile", definition: "land where crops and plants grow very well" }
    ], questions: [
      "South Sudan is incredibly rich in oil but remains one of the poorest countries in the world. What does this tell us about the relationship between natural resources and quality of life?",
      "South Sudan is the world's youngest country. What challenges do you think a brand new nation faces that older countries do not?"
    ], transcriptSrc: "Transcripts/Africa/B1/South Sudan.txt"},
    { title: "Uganda", src: "Audio/Africa/B1/Uganda.mp4", vocab: [
      { word: "endangered", definition: "at risk of dying out completely" },
      { word: "equator", definition: "an imaginary line around the middle of the Earth" },
      { word: "hospitable", definition: "friendly and welcoming to guests and strangers" },
      { word: "species", definition: "a group of animals or plants of the same type" },
      { word: "trekking", definition: "going on a long, difficult walk through nature" },
      { word: "hemisphere", definition: "one half of the Earth, either north or south of the equator" }
    ], questions: [
      "Uganda is home to more than half of the world's mountain gorillas. Why is it important to protect endangered animals, and what role can tourism play in helping or harming them?",
      "Uganda has over 40 languages and is on the equator with a very young population. How do you think geographical and demographic features shape a country's culture and future?"
    ], transcriptSrc: "Transcripts/Africa/B1/Uganda.txt"}
  ],
  B2: [
    { title: "Angola", src: "Audio/Africa/B2/Angola.mp4", vocab: [
      { word: "hub", definition: "a central place of activity or the most important part of a network" },
      { word: "authoritarian regime", definition: "a government that holds power through strict control, not democracy" },
      { word: "flawed democracy", definition: "a system with elections but significant problems with fairness or freedom" },
      { word: "GDP", definition: "the total value of goods and services a country produces in a year" },
      { word: "expats", definition: "people who live outside their home country, often for work" },
      { word: "landmines", definition: "hidden explosive devices buried in the ground, left over from wars" }
    ], questions: [
      "Angola's government has been criticised for human rights abuses, yet Western nations maintain close ties because of oil. To what extent should economic interests influence a country's foreign policy decisions?",
      "Angola is described as a country of extremes with luxury and deep poverty existing side by side. What structural factors make it so difficult to translate natural resource wealth into widespread prosperity?"
    ], transcriptSrc: "Transcripts/Africa/B2/Angola.txt"},
    { title: "Botswana", src: "Audio/Africa/B2/Botswana.mp4", vocab: [
      { word: "inland delta", definition: "a river system that spreads into a desert or land rather than the sea" },
      { word: "UNESCO World Heritage Site", definition: "a place recognised internationally for outstanding natural or cultural value" },
      { word: "conservation policy", definition: "official rules and plans to protect the natural environment" },
      { word: "transition of power", definition: "the process of one government or leader peacefully replacing another" },
      { word: "sparsely populated", definition: "having very few inhabitants relative to the size of the land area" },
      { word: "savanna", definition: "a large flat area of land with grass and few trees, typical in Africa" }
    ], questions: [
      "Botswana has chosen a high-value, low-volume approach to tourism in order to protect its ecosystems. What are the trade-offs of this policy compared to encouraging mass tourism?",
      "Botswana is often cited as a model of African development, having transformed from one of the world's poorest nations to a middle-income country. What combination of factors do you think made this transformation possible?"
    ], transcriptSrc: "Transcripts/Africa/B2/Botswana.txt"},
    { title: "Democratic Republic of Congo", src: "Audio/Africa/B2/Democratic Republic of Congo.mp4", vocab: [
      { word: "hybrid regime", definition: "a political system that combines both democratic and authoritarian features" },
      { word: "lingua franca", definition: "a language used for communication between people with different native languages" },
      { word: "resource curse", definition: "the paradox where countries rich in natural resources often have worse development outcomes" },
      { word: "geopolitics", definition: "the influence of geography and resources on international politics and power" },
      { word: "cobalt", definition: "a mineral essential for producing batteries used in electric vehicles and electronics" },
      { word: "humanitarian aid", definition: "assistance given to people in crisis, including food, medicine, and shelter" }
    ], questions: [
      "The DRC has been described as being at the centre of global geopolitics because of its mineral reserves. How does the world's demand for green technology create new forms of exploitation in resource-rich nations?",
      "The DRC's situation is often called the resource curse. Do you think a country's natural wealth is more likely to be a blessing or a curse, and what determines which it becomes?"
    ], transcriptSrc: "Transcripts/Africa/B2/Democratic Republic of Congo.txt"},
    { title: "Rwanda", src: "Audio/Africa/B2/Rwanda.mp4", vocab: [
      { word: "reconciliation", definition: "the process of restoring peaceful relations after conflict or division" },
      { word: "authoritarian state", definition: "a government that maintains strict control over society with limited political freedom" },
      { word: "fiber-optic infrastructure", definition: "a high-speed communications network using cables that carry light signals" },
      { word: "peacekeeping missions", definition: "international operations to maintain peace in conflict zones" },
      { word: "political opposition", definition: "parties and individuals who formally challenge the government in power" },
      { word: "resilience", definition: "the capacity to recover quickly from severe difficulties or trauma" }
    ], questions: [
      "Rwanda under Kagame is described as an authoritarian state that delivers high efficiency. Is strong, centralised leadership ever justifiable as a means of rapid national development?",
      "Rwanda has transformed its image from a site of genocide to a modern, ambitious nation in just three decades. What does this transformation reveal about the relationship between political will, national identity, and development?"
    ], transcriptSrc: "Transcripts/Africa/B2/Rwanda.txt"},
    { title: "Somaliland", src: "Audio/Africa/B2/Somaliland.mp4", vocab: [
      { word: "de facto", definition: "existing in practice even if not officially recognised by law" },
      { word: "diaspora", definition: "a group of people who have spread from their original homeland to other countries" },
      { word: "strategic location", definition: "a position that gives important geographical or political advantages" },
      { word: "conservative society", definition: "a community that holds traditional values and is resistant to rapid change" },
      { word: "transfer of power", definition: "the process by which political leadership passes from one person or group to another" },
      { word: "state religion", definition: "a religion that is officially endorsed and supported by the government" }
    ], questions: [
      "Somaliland functions as a stable democracy and has had peaceful transfers of power, yet it remains unrecognised by the international community. What does this suggest about how international recognition is granted and what it is really based on?",
      "Somaliland's economy is heavily dependent on livestock exports and remittances from its diaspora. What are the vulnerabilities of such an economic model, and how might Somaliland diversify its economy despite its lack of formal recognition?"
    ], transcriptSrc: "Transcripts/Africa/B2/Somaliland.txt"},
    { title: "South Sudan", src: "Audio/Africa/B2/South Sudan.mp4", vocab: [
      { word: "fragile state", definition: "a country with weak institutions unable to provide basic security or services" },
      { word: "sub-Saharan Africa", definition: "the part of Africa located south of the Sahara Desert" },
      { word: "unanimously", definition: "with complete agreement from everyone involved" },
      { word: "corruption", definition: "the abuse of power or public trust for private gain" },
      { word: "infrastructure", definition: "the fundamental physical systems of a country, such as roads and energy networks" },
      { word: "humanitarian aid", definition: "emergency assistance provided to populations suffering from crisis or conflict" }
    ], questions: [
      "South Sudan gained independence with nearly unanimous public support but has since struggled with civil war and extreme poverty. What does this suggest about the gap between achieving independence and achieving a functional state?",
      "South Sudan has oil but relies on Sudan's pipelines and ports to sell it. How does economic interdependence between hostile neighbours complicate the path to stability?"
    ], transcriptSrc: "Transcripts/Africa/B2/South Sudan.txt"},
    { title: "Uganda", src: "Audio/Africa/B2/Uganda.mp4", vocab: [
      { word: "authoritarian regime", definition: "a government that exercises power through control and suppression of opposition" },
      { word: "counter-terrorism", definition: "actions and strategies taken to prevent or respond to terrorist activity" },
      { word: "petty crime", definition: "minor criminal offences such as pickpocketing or shoplifting" },
      { word: "demographic", definition: "relating to the characteristics of a population, such as age or size" },
      { word: "middle class", definition: "the social group between the wealthy and the poor, often with stable incomes" },
      { word: "biodiversity", definition: "the variety of plant and animal life in a particular habitat or region" }
    ], questions: [
      "Uganda has been led by the same president since 1986, yet it is formally classified as a republic. At what point does a long-serving leader cross the line from legitimate governance into authoritarianism?",
      "Uganda has more than half of the world's mountain gorillas and over 1,000 bird species, yet it remains a low-income country. How can a nation leverage its natural and ecological wealth to drive sustainable economic development?"
    ], transcriptSrc: "Transcripts/Africa/B2/Uganda.txt"}
  ]
};

window.renderAfricaLevel = function(level, targetId) {
  var list = document.getElementById(targetId || "africa-list");
  if (!list) return;
  list.innerHTML = "";
  var episodes = africaEpisodes[level] || [];
  episodes.forEach(function(ep, idx) {
    var card = document.createElement("div");
    card.className = "card";
    var vocabHTML = ep.vocab.map(function(v) {
      return "<li><strong>" + v.word + "</strong> <button class=\"speaker-btn\" onclick=\"speakWord('" + v.word + "')\">🔊</button> " + v.definition + "</li>";
    }).join("");
    var questionsHTML = "<div style='margin-top:16px'><h4>Discussion Questions</h4><ol>" + ep.questions.map(function(q) { return "<li style='margin-bottom:8px'>" + q + "</li>"; }).join("") + "</ol></div>";
    var tId = "africa-transcript-" + level + "-" + idx;
    var transcriptHTML = ep.transcriptSrc
      ? "<div style='margin-top:12px'><button class='level-tab' id='transcript-toggle-btn-" + tId + "' onclick='toggleADMTranscript(\"" + ep.transcriptSrc + "\",\"" + tId + "\")'>Show Transcript</button><div id='" + tId + "' style='display:none;margin-top:12px;white-space:pre-wrap;line-height:1.7'></div></div>"
      : "";
    var contextKey = "ctx_africa_" + level + "_" + idx;
    window._chatContexts = window._chatContexts || {};
    window._chatContexts[contextKey] = { title: ep.title, level: level, vocab: ep.vocab, questions: ep.questions || [] };
    var chatBtn = "<button onclick='openChatBot(\"" + contextKey + "\")' style='display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6fa8,#4A9EE8);border:none;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(74,158,232,0.4)'>🎙️ Chat with Skipper</button>";
    card.innerHTML = "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px'><h3 style='margin:0'>" + ep.title + "</h3>" + chatBtn + "</div>"
      + "<audio controls style='width:100%;margin:10px 0'><source src='" + ep.src + "'></audio>"
      + "<h4>Vocabulary</h4><ul>" + vocabHTML + "</ul>"
      + questionsHTML + transcriptHTML;
    list.appendChild(card);
  });
};

window.selectAfricaLevel = function(level) {
  document.querySelectorAll("#africa-tabs .level-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.textContent === level);
  });
  renderAfricaLevel(level);
};

const chinaEpisodes = {
  B1: [
    { title: "Beijing and Shanghai", src: "Audio/China/B1/Beijing and Shanghai.mp4", vocab: [
      { word: "imperial", definition: "relating to an emperor or empire" },
      { word: "authentic", definition: "real and traditional, not a copy" },
      { word: "financial center", definition: "a city where banks and big businesses are based" },
      { word: "skyline", definition: "the shape made by buildings against the sky" },
      { word: "high-speed train", definition: "a very fast train that connects cities" },
      { word: "boutique", definition: "a small, fashionable shop" }
    ], questions: [
      "If you could visit either Beijing or Shanghai, which would you choose and why?",
      "What do you think is the best way to experience a city's culture when traveling — visiting historic sites or exploring modern neighbourhoods?"
    ], transcriptSrc: "Transcripts/China/B1/Beijing and Shanghai.txt"},
    { title: "China and Hong Kong", src: "Audio/China/B1/China and Hong Kong.mp4", vocab: [
      { word: "colony", definition: "a place ruled by another, usually distant, country" },
      { word: "handover", definition: "the act of giving control of something to someone else" },
      { word: "currency", definition: "the type of money used in a country" },
      { word: "dialect", definition: "a form of a language spoken in a particular region" },
      { word: "identity", definition: "the qualities that make a person or group unique" },
      { word: "Special Administrative Region", definition: "an area with its own rules within a larger country" }
    ], questions: [
      "Do you think a place can have two systems of government working at the same time? What are the challenges?",
      "How does history shape the identity of a city or country? Can you think of other examples?"
    ], transcriptSrc: "Transcripts/China/B1/China and Hong Kong.txt"},
    { title: "China and Japan", src: "Audio/China/B1/China and Japan.mp4", vocab: [
      { word: "tension", definition: "a feeling of stress or conflict between people or groups" },
      { word: "invasion", definition: "when an army enters another country by force" },
      { word: "massacre", definition: "the killing of a large number of people" },
      { word: "civilians", definition: "ordinary people who are not soldiers" },
      { word: "apology", definition: "a statement saying you are sorry for something wrong" },
      { word: "shrine", definition: "a holy place where people go to honor someone" }
    ], questions: [
      "How important do you think it is for countries to formally apologize for historical crimes?",
      "Why is it sometimes difficult for countries to move on from painful historical events, even many years later?"
    ], transcriptSrc: "Transcripts/China/B1/China and Japan.txt"},
    { title: "China and Taiwan", src: "Audio/China/B1/China and Taiwan.mp4", vocab: [
      { word: "civil war", definition: "a war between groups of people in the same country" },
      { word: "Nationalists", definition: "a political group that fought for national independence or power" },
      { word: "Communists", definition: "a political group that believes the government should control the economy" },
      { word: "province", definition: "a region that is part of a larger country" },
      { word: "democracy", definition: "a system where people vote to choose their leaders" },
      { word: "reunification", definition: "the act of joining two separate parts together again" }
    ], questions: [
      "Why do you think the question of Taiwan's status is so important for global politics today?",
      "How does a shared history affect the relationship between two places that have taken very different paths?"
    ], transcriptSrc: "Transcripts/China/B1/China and Taiwan.txt"},
    { title: "China and Tibet", src: "Audio/China/B1/China and Tibet.mp4", vocab: [
      { word: "buffer zone", definition: "an area that separates two opposing sides" },
      { word: "uprising", definition: "when people rebel against a government or authority" },
      { word: "exile", definition: "when someone is forced to live outside their home country" },
      { word: "surveillance", definition: "close watch kept over a person or place" },
      { word: "prosperous", definition: "successful and wealthy" },
      { word: "preserve", definition: "to keep something safe from damage or change" }
    ], questions: [
      "Do you think economic development is more important than protecting a culture's traditions? Why or why not?",
      "What does it mean to lose your cultural identity, and why might people fight to preserve it?"
    ], transcriptSrc: "Transcripts/China/B1/China and Tibet.txt"},
    { title: "Confucius and His Philosophy", src: "Audio/China/B1/Confucius and His Philosophy.mp4", vocab: [
      { word: "philosophy", definition: "a system of ideas about how to live and think" },
      { word: "ethics", definition: "the study of what is right and wrong behavior" },
      { word: "filial piety", definition: "respect and care shown to parents and elders" },
      { word: "hierarchy", definition: "a system where people are ranked from most to least important" },
      { word: "self-improvement", definition: "the act of making yourself better through effort" },
      { word: "harmony", definition: "a state of peaceful agreement and balance" }
    ], questions: [
      "How much do you think Confucius's ideas about respect for elders still influence modern society today?",
      "Do you agree that respecting your family and respecting your country's leaders are connected? Why or why not?"
    ], transcriptSrc: "Transcripts/China/B1/Confucius and his Philosophy.txt"},
    { title: "Education in China", src: "Audio/China/B1/Education in China.mp4", vocab: [
      { word: "intense", definition: "very serious and requiring a lot of effort" },
      { word: "exam", definition: "a formal test to measure knowledge" },
      { word: "social mobility", definition: "the ability to move to a higher or lower position in society" },
      { word: "curriculum", definition: "the subjects taught in a school or course" },
      { word: "tutoring", definition: "extra private lessons given by a teacher" },
      { word: "pressure", definition: "a feeling of stress caused by high expectations" }
    ], questions: [
      "Do you think a single exam should determine a student's future? What are the advantages and disadvantages?",
      "Is a very competitive education system good for a country? What might be the negative effects on students?"
    ], transcriptSrc: "Transcripts/China/B1/Education in China.txt"},
    { title: "Great Wall of China", src: "Audio/China/B1/Great Wall of China.mp4", vocab: [
      { word: "landmark", definition: "a famous and important place or building" },
      { word: "nomadic", definition: "describing people who move from place to place" },
      { word: "dynasty", definition: "a series of rulers from the same family" },
      { word: "preserved", definition: "kept in good condition over a long time" },
      { word: "watchtower", definition: "a tall structure used to watch for enemies" },
      { word: "myth", definition: "a story or idea that is believed but is not true" }
    ], questions: [
      "Why do you think massive building projects like the Great Wall are so important to a country's national identity?",
      "If you visited the Great Wall, would you prefer a popular, well-restored section or a quieter, less visited part? Why?"
    ], transcriptSrc: "Transcripts/China/B1/Great Wall of China.txt"},
    { title: "Is China a Democracy or a Dictatorship", src: "Audio/China/B1/Is China a Democracy or a Dictatorship.mp4", vocab: [
      { word: "authoritarian", definition: "a system where one leader or group has strict control" },
      { word: "censorship", definition: "the control of what information people can see or share" },
      { word: "opposition", definition: "a group that disagrees with or challenges those in power" },
      { word: "capitalism", definition: "an economic system based on private business and profit" },
      { word: "communism", definition: "a system where the government owns all property and resources" },
      { word: "hybrid", definition: "something that is a mix of two different things" }
    ], questions: [
      "Is it possible for a country to have a successful economy without political freedom? What do you think?",
      "Why might some people in China support their government's system, even without free elections?"
    ], transcriptSrc: "Transcripts/China/B1/Is China a Democracy or a Dictatorship.txt"},
    { title: "Is China Trying to Control the World", src: "Audio/China/B1/Is China Trying to Control the World.mp4", vocab: [
      { word: "superpower", definition: "a very powerful and influential country" },
      { word: "influence", definition: "the power to affect other people's decisions" },
      { word: "infrastructure", definition: "basic systems a country needs, like roads and ports" },
      { word: "soft power", definition: "using culture or economics to influence others, not force" },
      { word: "trade route", definition: "a path used regularly to move goods between places" },
      { word: "multipolar", definition: "a world with several powerful countries, not just one" }
    ], questions: [
      "Do you think it is fair for one country to use loans and investments to gain influence over others?",
      "How does a country's history affect its ambitions and actions in the modern world?"
    ], transcriptSrc: "Transcripts/China/B1/Is China Trying to Control the World.txt"},
    { title: "One Child Policy", src: "Audio/China/B1/One Child Policy.mp4", vocab: [
      { word: "policy", definition: "an official rule or plan made by a government" },
      { word: "fine", definition: "money paid as a punishment for breaking a rule" },
      { word: "aging population", definition: "when a country has many old people and few young ones" },
      { word: "gender gap", definition: "a big difference in the number of males and females" },
      { word: "maternity leave", definition: "time off work given to a mother after having a baby" },
      { word: "spoiled", definition: "when a child is given too much and behaves badly" }
    ], questions: [
      "Do you think a government ever has the right to control how many children people can have? Why or why not?",
      "What are the long-term effects on a society when the population gets older and fewer children are born?"
    ], transcriptSrc: "Transcripts/China/B1/One Child Policy.txt"},
    { title: "Religion in China", src: "Audio/China/B1/Religion in China.mp4", vocab: [
      { word: "philosophy", definition: "a system of ideas about how to live and think" },
      { word: "harmony", definition: "a state of peaceful balance and agreement" },
      { word: "ancestor worship", definition: "the practice of honoring family members who have died" },
      { word: "pluralistic", definition: "accepting and following several different beliefs at once" },
      { word: "folk religion", definition: "traditional local religious practices not part of an official religion" },
      { word: "incense", definition: "a substance that is burned to make a sweet smell, often in temples" }
    ], questions: [
      "Do you think it is possible to follow more than one religion or set of beliefs at the same time? Why or why not?",
      "How important are traditional religious festivals and customs to modern families in your country?"
    ], transcriptSrc: "Transcripts/China/B1/Religion in China.txt"},
    { title: "Ten Facts About China", src: "Audio/China/B1/Ten Facts About China.mp4", vocab: [
      { word: "civilisation", definition: "an advanced human society with culture and organization" },
      { word: "dialect", definition: "a version of a language spoken in a specific region" },
      { word: "invention", definition: "something new that someone has created or discovered" },
      { word: "network", definition: "a connected system of routes or lines" },
      { word: "mobile payment", definition: "paying for something using a smartphone" },
      { word: "Lunar New Year", definition: "the most important Chinese festival, based on the moon calendar" }
    ], questions: [
      "Which of the ten facts about China surprised you the most, and why?",
      "China is described as a mix of ancient history and modern technology — can you think of other countries that are similar?"
    ], transcriptSrc: "Transcripts/China/B1/Ten Facts About China.txt"}
  ],
  B2: [
    { title: "China and Hong Kong", src: "Audio/China/B2/China and Hong Kong.mp4", vocab: [
      { word: "Special Administrative Region", definition: "a territory with a high degree of autonomy within a sovereign state" },
      { word: "handover", definition: "the formal transfer of sovereignty or control to another authority" },
      { word: "financial hub", definition: "a major centre of banking, trade, and investment activity" },
      { word: "integration", definition: "the process of combining parts into a unified whole" },
      { word: "common law", definition: "a legal system based on court decisions and precedent, not just written codes" },
      { word: "leverage", definition: "power or advantage gained through a particular resource or relationship" }
    ], questions: [
      "To what extent do you think the One Country, Two Systems framework can continue to function effectively in Hong Kong?",
      "What does Hong Kong's history as a British colony reveal about the lasting impact of colonialism on a place's identity?"
    ], transcriptSrc: "Transcripts/China/B2/China and Hong Kong.txt"},
    { title: "China and Japan", src: "Audio/China/B2/China and Japan.mp4", vocab: [
      { word: "atrocities", definition: "extremely cruel and shocking acts, especially in war" },
      { word: "deep-seated", definition: "firmly established and difficult to change" },
      { word: "resentment", definition: "a feeling of bitterness caused by unfair treatment" },
      { word: "insincere", definition: "not genuinely meaning what is said or expressed" },
      { word: "nationalism", definition: "strong pride in one's country, sometimes used to unite people politically" },
      { word: "grievance", definition: "a feeling of having been treated unfairly" }
    ], questions: [
      "How can two countries that have a deeply troubled history build a productive modern relationship?",
      "To what extent do governments use historical grievances to serve present-day political purposes?"
    ], transcriptSrc: "Transcripts/China/B2/China and Japan.txt"},
    { title: "China and Taiwan", src: "Audio/China/B2/China and Taiwan.mp4", vocab: [
      { word: "sovereignty", definition: "the full right of a state to govern itself without outside control" },
      { word: "status quo", definition: "the current situation, kept as it is without major change" },
      { word: "civil war", definition: "an armed conflict between groups within the same country" },
      { word: "reunification", definition: "the restoration of a previously divided territory into one political unit" },
      { word: "vibrant democracy", definition: "a lively, well-functioning democratic political system" },
      { word: "unofficial ties", definition: "a relationship that exists without formal diplomatic recognition" }
    ], questions: [
      "Why is Taiwan's semiconductor industry considered so strategically important in global politics today?",
      "Do you think the current status quo between China and Taiwan is sustainable in the long term? Why or why not?"
    ], transcriptSrc: "Transcripts/China/B2/China and Taiwan.txt"},
    { title: "China and Tibet", src: "Audio/China/B2/China and Tibet.mp4", vocab: [
      { word: "autonomous region", definition: "a territory with some self-governing powers within a larger state" },
      { word: "reincarnation", definition: "the belief that after death, a soul is reborn in a new body" },
      { word: "secular", definition: "not connected to religious or spiritual matters" },
      { word: "diluting", definition: "weakening or reducing the strength of something over time" },
      { word: "resilient", definition: "able to recover from difficulties and adapt to change" },
      { word: "infrastructure", definition: "the basic physical systems of a country, such as roads and railways" }
    ], questions: [
      "Can rapid economic modernization and the preservation of a unique cultural identity coexist? What tensions arise?",
      "How should the international community respond when a government's development policies threaten a minority culture?"
    ], transcriptSrc: "Transcripts/China/B2/China and Tibet.txt"},
    { title: "Confucius and His Philosophy", src: "Audio/China/B2/Confucius and his Philosophy.mp4", vocab: [
      { word: "ethical system", definition: "a framework of principles that guides moral behaviour" },
      { word: "filial piety", definition: "the virtue of respect, obedience, and care towards one's parents and elders" },
      { word: "hierarchical", definition: "organized according to rank, with higher and lower levels of authority" },
      { word: "meritocracy", definition: "a system where people advance based on ability and achievement" },
      { word: "superior person", definition: "in Confucian thought, a person of high moral character and virtue" },
      { word: "social harmony", definition: "a state of peaceful, well-ordered relations within a society" }
    ], questions: [
      "To what extent do Confucian values still shape social and political life in East Asian societies today?",
      "Is a strictly hierarchical view of relationships beneficial or limiting for individuals in modern society?"
    ], transcriptSrc: "Transcripts/China/B2/Confucius and his Philosophy.txt"},
    { title: "Dictatorship or Democracy", src: "Audio/China/B2/Dictatorship or Democracy.mp4", vocab: [
      { word: "authoritarian state", definition: "a political system where power is concentrated and individual freedoms are restricted" },
      { word: "self-censorship", definition: "the practice of restraining one's own speech out of fear of consequences" },
      { word: "dissent", definition: "the expression of opposition to official or widely held views" },
      { word: "Socialist Market Economy", definition: "China's economic model combining state control with free-market elements" },
      { word: "surveillance", definition: "the systematic monitoring of people's activities, often by technology" },
      { word: "term limits", definition: "legal restrictions on how long a person can hold a political office" }
    ], questions: [
      "Is it possible for a country to achieve long-term prosperity without political freedom and democratic accountability?",
      "How does widespread self-censorship affect a society's ability to innovate, debate, and solve problems?"
    ], transcriptSrc: "Transcripts/China/B2/Dictatorship or Democracy.txt"},
    { title: "Education in China", src: "Audio/China/B2/Education in China.mp4", vocab: [
      { word: "meritocracy", definition: "a system in which people succeed based on talent and hard work, not background" },
      { word: "rote learning", definition: "learning by repetition and memorization rather than deep understanding" },
      { word: "high-stakes", definition: "involving very serious consequences depending on the outcome" },
      { word: "well-rounded", definition: "developed in a broad and balanced way, not limited to one area" },
      { word: "civil service", definition: "the professional body of government employees selected through examination" },
      { word: "Double Reduction policy", definition: "China's policy to cut homework loads and ban for-profit tutoring companies" }
    ], questions: [
      "Does a highly competitive exam-based education system produce better citizens and workers, or does it create deeper social problems?",
      "How should a government balance the cultural value placed on academic achievement with the mental health of its students?"
    ], transcriptSrc: "Transcripts/China/B2/Education in China.txt"},
    { title: "Great Wall of China", src: "Audio/China/B2/Great Wall of China.mp4", vocab: [
      { word: "fortification", definition: "a wall or structure built for military defence" },
      { word: "nomadic", definition: "relating to groups that move from place to place without a permanent home" },
      { word: "rammed earth", definition: "a building technique using compressed layers of soil and clay" },
      { word: "preserved", definition: "maintained in its original or good condition over time" },
      { word: "architectural masterpiece", definition: "a building or structure of outstanding creative and technical skill" },
      { word: "restoration", definition: "the process of repairing something to its original condition" }
    ], questions: [
      "What does a massive construction project like the Great Wall reveal about the priorities and values of the society that built it?",
      "How should governments balance the need to preserve historical monuments with the cost of maintaining them for future generations?"
    ], transcriptSrc: "Transcripts/China/B2/The Great Wall of China.txt"},
    { title: "Interesting Facts about China", src: "Audio/China/B2/Interesrting Facts about China.mp4", vocab: [
      { word: "continuous civilisation", definition: "a society that has developed without major interruption over thousands of years" },
      { word: "tonal language", definition: "a language where the pitch of a word changes its meaning" },
      { word: "innovation", definition: "the introduction of new ideas, methods, or inventions" },
      { word: "migration", definition: "the movement of large numbers of people from one place to another" },
      { word: "ambassador", definition: "a person or thing that represents and promotes a place or idea" },
      { word: "debunk", definition: "to show that a widely held belief or claim is false" }
    ], questions: [
      "What do China's Four Great Inventions reveal about the relationship between ancient innovation and modern life?",
      "Why do you think the Chinese New Year triggers the largest annual human migration on Earth? What does this reveal about cultural values?"
    ], transcriptSrc: "Transcripts/China/B2/Interesting Facts about China.txt"},
    { title: "Is China Trying to Control the World", src: "Audio/China/B2/Is ChinaTrying to Control the World.mp4", vocab: [
      { word: "Century of Humiliation", definition: "China's term for the period of foreign domination in the 19th and 20th centuries" },
      { word: "economic statecraft", definition: "using economic tools such as trade and investment to achieve political goals" },
      { word: "Belt and Road Initiative", definition: "China's massive global infrastructure investment and development strategy" },
      { word: "leverage", definition: "power gained through a position of advantage, used to influence others" },
      { word: "multipolar world", definition: "an international system with several competing centres of power" },
      { word: "supply chain", definition: "the network of producers and suppliers involved in creating a product" }
    ], questions: [
      "To what extent do you think China's Belt and Road Initiative is a genuine development programme versus a tool for geopolitical influence?",
      "Is the shift towards a multipolar world a positive development for global stability, or does it create new dangers?"
    ], transcriptSrc: "Transcripts/China/B2/Is China Trying to Control the World.txt"},
    { title: "One Child Policy", src: "Audio/China/B2/One Child Policy.mp4", vocab: [
      { word: "population explosion", definition: "a sudden and rapid increase in the number of people in a place" },
      { word: "gender imbalance", definition: "a significant difference in the ratio of males to females in a population" },
      { word: "aging population", definition: "a demographic shift where the proportion of elderly people increases" },
      { word: "4-2-1 problem", definition: "the burden on one child to support two parents and four grandparents" },
      { word: "incentive", definition: "something that encourages or motivates a particular course of action" },
      { word: "social fabric", definition: "the network of relationships and values that holds a community together" }
    ], questions: [
      "To what extent can a government's demographic policies have unintended long-term consequences that are difficult to reverse?",
      "The birth rate in China is still falling even after restrictions were lifted. What does this suggest about the relationship between government policy and individual choice?"
    ], transcriptSrc: "Transcripts/China/B2/One Child Policy.txt"},
    { title: "Religion in China", src: "Audio/China/B2/Religion in China.mp4", vocab: [
      { word: "atheism", definition: "the belief that no god or gods exist" },
      { word: "suppressed", definition: "forcibly prevented from being expressed or practised" },
      { word: "secular", definition: "not religious; concerned with worldly rather than spiritual matters" },
      { word: "resurgence", definition: "a new increase in activity or popularity after a period of decline" },
      { word: "folk religion", definition: "a set of unofficial spiritual beliefs and practices rooted in local tradition" },
      { word: "Cultural Revolution", definition: "a period in China (1966-76) of radical political upheaval that suppressed traditional culture" }
    ], questions: [
      "Why might people in an officially secular or atheist state continue to practise spiritual traditions in their private lives?",
      "How does a government's attempt to control religion reflect its broader relationship with civil society and individual freedoms?"
    ], transcriptSrc: "Transcripts/China/B2/Religion in China.txt"}
  ]
};

window.renderChinaLevel = function(level, targetId) {
  var list = document.getElementById(targetId || "china-list");
  if (!list) return;
  list.innerHTML = "";
  var episodes = chinaEpisodes[level] || [];
  episodes.forEach(function(ep, idx) {
    var card = document.createElement("div");
    card.className = "card";
    var vocabHTML = ep.vocab.map(function(v) {
      return "<li><strong>" + v.word + "</strong> <button class=\"speaker-btn\" onclick=\"speakWord('" + v.word + "')\">🔊</button> " + v.definition + "</li>";
    }).join("");
    var questionsHTML = "<div style='margin-top:16px'><h4>Discussion Questions</h4><ol>" + ep.questions.map(function(q) { return "<li style='margin-bottom:8px'>" + q + "</li>"; }).join("") + "</ol></div>";
    var tId = "china-transcript-" + level + "-" + idx;
    var transcriptHTML = ep.transcriptSrc
      ? "<div style='margin-top:12px'><button class='level-tab' id='transcript-toggle-btn-" + tId + "' onclick='toggleADMTranscript(\"" + ep.transcriptSrc + "\",\"" + tId + "\")'>Show Transcript</button><div id='" + tId + "' style='display:none;margin-top:12px;white-space:pre-wrap;line-height:1.7'></div></div>"
      : "";
    var contextKey = "ctx_china_" + level + "_" + idx;
    window._chatContexts = window._chatContexts || {};
    window._chatContexts[contextKey] = { title: ep.title, level: level, vocab: ep.vocab, questions: ep.questions || [] };
    var chatBtn = "<button onclick='openChatBot(\"" + contextKey + "\")' style='display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6fa8,#4A9EE8);border:none;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(74,158,232,0.4)'>🎙️ Chat with Skipper</button>";
    card.innerHTML = "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px'><h3 style='margin:0'>" + ep.title + "</h3>" + chatBtn + "</div>"
      + "<audio controls style='width:100%;margin:10px 0'><source src='" + ep.src + "'></audio>"
      + "<h4>Vocabulary</h4><ul>" + vocabHTML + "</ul>"
      + questionsHTML + transcriptHTML;
    list.appendChild(card);
  });
};

window.selectChinaLevel = function(level) {
  document.querySelectorAll("#china-tabs .level-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.textContent === level);
  });
  renderChinaLevel(level);
};

const indiaEpisodes = {
  B2: [
    { title: "10 Important Facts About India", src: "Audio/India/B2/10 Important Facts About India.mp4", vocab: [
      { word: "populous", definition: "having a very large number of people living in a place" },
      { word: "democracy", definition: "a system of government in which people choose their leaders by voting" },
      { word: "dialect", definition: "a regional variety of a language with distinct vocabulary or pronunciation" },
      { word: "phenomenon", definition: "a remarkable or significant event, development, or fact" },
      { word: "biodiversity", definition: "the variety of plant and animal life found in a particular environment" },
      { word: "ritual", definition: "a set of actions performed regularly as part of a social or cultural tradition" }
    ], questions: [
      "India is both the world's most populous country and its largest democracy — do you think these two facts make governing India easier or harder, and why?",
      "Several of the facts about India involve things that originated there, such as zero, yoga, and major religions — which of these contributions do you think has had the greatest impact on the modern world?"
    ], transcriptSrc: "Transcripts/India/B2/10 Important Facts About India.txt"},
    { title: "Bollywood", src: "Audio/India/B2/Bollywood.mp4", vocab: [
      { word: "diaspora", definition: "people who have left their home country and now live scattered across the world" },
      { word: "spectacle", definition: "an impressive and visually striking event or display" },
      { word: "intermission", definition: "a short break in the middle of a performance or film" },
      { word: "iconic", definition: "widely recognized and regarded as a symbol of something" },
      { word: "playback singer", definition: "a professional singer who records songs in a studio for actors to lip-sync to on screen" },
      { word: "phenomenon", definition: "something remarkable that has a widespread cultural or social impact" }
    ], questions: [
      "Bollywood films are described as Masala movies that blend action, drama, comedy, and romance into one — do you prefer this style or films that focus on a single genre, and what are the advantages of each?",
      "Bollywood has a major influence on fashion, language, and wedding traditions across India — can you think of a film industry or TV show from any country that has had a similar cultural influence on daily life?"
    ], transcriptSrc: "Transcripts/India/B2/Bollywood.txt"},
    { title: "Comparing Delhi and Mumbai", src: "Audio/India/B2/Comparing Delhi and Mumbai.mp4", vocab: [
      { word: "cosmopolitan", definition: "familiar with and at ease in many different cultures; representing people from many parts of the world" },
      { word: "colonial", definition: "relating to a period when one country ruled and controlled another" },
      { word: "melting pot", definition: "a place where people of many different cultures, backgrounds, and nationalities mix together" },
      { word: "infrastructure", definition: "the basic physical systems of a city or region, such as roads, transport, and buildings" },
      { word: "monsoon", definition: "a seasonal period of very heavy rainfall, common in South and Southeast Asia" },
      { word: "symmetrical", definition: "made up of exactly similar parts facing each other; having balance and proportion" }
    ], questions: [
      "Delhi is praised for its ancient history and street food, while Mumbai is celebrated for its coastal energy and modern vibe — which city sounds more appealing to you as a visitor, and what does that say about your travel preferences?",
      "The hosts describe Mumbai as representing new India and Delhi as representing traditional India — do you think a country's capital city should reflect its history, its modern identity, or both?"
    ], transcriptSrc: "Transcripts/India/B2/Comparing Delhi and Mumbai.txt"},
    { title: "Four Religions in India", src: "Audio/India/B2/Four Religions in India.mp4", vocab: [
      { word: "principle", definition: "a fundamental belief or rule that guides a person's behaviour or a system of thought" },
      { word: "compassion", definition: "a deep feeling of sympathy for others, combined with a desire to help them" },
      { word: "non-violence", definition: "the practice of not using physical force or harm, even when opposing something unjust" },
      { word: "revolutionary", definition: "representing or causing a major and dramatic change, especially in thinking or society" },
      { word: "reincarnation", definition: "the belief that after death, the soul is reborn into a new body" },
      { word: "enlightenment", definition: "a state of deep spiritual understanding and freedom from ignorance or suffering" }
    ], questions: [
      "All four religions — Hinduism, Buddhism, Jainism, and Sikhism — share the idea that our actions have consequences and that we should strive to be better people; do you think this is a universal human value, or is it specific to these traditions?",
      "Sikhism's principle of serving others through community kitchens, and Jainism's commitment to non-violence towards all living things are both very practical expressions of faith — which of these two principles do you find most challenging to apply in modern daily life, and why?"
    ], transcriptSrc: "Transcripts/India/B2/Four Religions in India.txt"},
    { title: "Gandhi and the British Rule in India", src: "Audio/India/B2/Gandhi and the British Rule in India.mp4", vocab: [
      { word: "civil disobedience", definition: "the deliberate and non-violent refusal to obey laws or government demands as a form of protest" },
      { word: "monopoly", definition: "exclusive control over the supply of a product or service, leaving others no choice but to comply" },
      { word: "boycott", definition: "to refuse to buy, use, or participate in something as a form of protest or pressure" },
      { word: "discrimination", definition: "the unjust treatment of different groups of people, especially based on race, gender, or social class" },
      { word: "persistent", definition: "continuing firmly in a course of action despite difficulty or opposition" },
      { word: "legacy", definition: "something handed down by a person from the past that continues to have an influence" }
    ], questions: [
      "Gandhi proved that a large empire could be challenged without the use of weapons, using civil disobedience and boycotts instead — do you think non-violent protest is still an effective strategy for achieving political change in today's world?",
      "The Salt March was a symbolic act that drew global attention to an unjust law — can you think of a modern example where a simple symbolic action succeeded in drawing attention to an important issue?"
    ], transcriptSrc: "Transcripts/India/B2/Gandhi and the British Rule in India.txt"},
    { title: "Hinduism and Buddhism", src: "Audio/India/B2/Hinduism and Buddhism.mp4", vocab: [
      { word: "karma", definition: "the belief that a person's actions in this life directly affect what happens to them in the future or in future lives" },
      { word: "dharma", definition: "in Hinduism, one's duty or moral responsibility to act correctly according to one's role in life" },
      { word: "moksha", definition: "in Hinduism, the ultimate liberation of the soul from the cycle of rebirth" },
      { word: "nirvana", definition: "in Buddhism, a state of perfect peace and freedom, where all suffering and desire have ended" },
      { word: "meditation", definition: "a mental practice of focused attention and stillness, used to calm the mind and develop awareness" },
      { word: "attachment", definition: "a strong emotional connection to people or things that, in Buddhist thought, is seen as a source of suffering" }
    ], questions: [
      "Both Hinduism and Buddhism teach that the physical world is temporary and that inner peace is more important than material success — how does this contrast with the values promoted in modern consumer society?",
      "The Buddha's teaching that suffering is caused by desire and attachment is central to Buddhism — do you agree with this idea, and can you give an example from everyday life where attachment to something led to unhappiness?"
    ], transcriptSrc: "Transcripts/India/B2/Hinduism and Buddhism.txt"},
    { title: "Kashmir", src: "Audio/India/B2/Kashmir.mp4", vocab: [
      { word: "autonomy", definition: "the right or ability of a place or group to govern itself independently" },
      { word: "partition", definition: "the division of a country or territory into separate political units, often causing conflict" },
      { word: "sovereignty", definition: "supreme authority and independence over a territory or nation" },
      { word: "militarized", definition: "having a strong military presence, with soldiers and security forces controlling an area" },
      { word: "diplomacy", definition: "the practice of managing relations between countries through negotiation rather than conflict" },
      { word: "resilience", definition: "the ability to recover from difficult situations and adapt in the face of hardship" }
    ], questions: [
      "Kashmir is described as a place of extreme contrasts — breathtaking natural beauty alongside one of the world's most militarized and contested political situations — how do you think ordinary people living there are affected by this ongoing conflict?",
      "A large number of Kashmiris want neither India nor Pakistan, but full independence — do you think the desire for self-determination should always be respected, or are there situations where the interests of larger nations take priority?"
    ], transcriptSrc: "Transcripts/India/B2/Kashmir.txt"},
    { title: "Ladakh", src: "Audio/India/B2/Ladakh.mp4", vocab: [
      { word: "remote", definition: "situated far from populated areas and difficult to reach" },
      { word: "barren", definition: "an environment with little or no vegetation, often harsh and inhospitable" },
      { word: "heritage", definition: "the traditions, buildings, and values that are passed down through generations from the past" },
      { word: "frugal", definition: "using resources carefully and avoiding waste, especially when resources are limited" },
      { word: "altitude", definition: "the height of a place above sea level, which affects temperature and oxygen levels" },
      { word: "tight-knit", definition: "describing a community with very close, supportive relationships between its members" }
    ], questions: [
      "Ladakh is described as culturally Tibetan despite being politically part of India — do you think a region's cultural identity should influence how it is governed, or should political borders always take precedence?",
      "Ladakh is experiencing growing tourism while its people try to protect their traditional way of life and fragile environment — what do you think are the biggest risks of rapid tourism development for remote communities like this one?"
    ], transcriptSrc: "Transcripts/India/B2/Ladakh.txt"},
    { title: "Main Gods in Hinduism", src: "Audio/India/B2/Main Gods in Hinduism.mp4", vocab: [
      { word: "deity", definition: "a god or goddess worshipped as having divine power and control over aspects of the world" },
      { word: "incarnation", definition: "a living being that embodies a god or spirit in physical form" },
      { word: "sacred", definition: "regarded with great religious respect and devotion" },
      { word: "mythology", definition: "a collection of traditional stories about gods, heroes, and the origins of the world" },
      { word: "ritual", definition: "a ceremonial act or series of actions performed as part of religious practice" },
      { word: "symbolism", definition: "the use of objects, figures, or colours to represent deeper spiritual or abstract ideas" }
    ], questions: [
      "Hinduism has an enormous variety of gods and goddesses, yet many Hindus believe they all represent different aspects of one ultimate reality — do you find this approach to religion more or less appealing than a faith with a single deity, and why?",
      "Many Hindu deities are associated with specific powers or aspects of life, such as wisdom, wealth, or destruction — do you think representing abstract concepts as gods or figures makes them easier for people to understand and connect with?"
    ], transcriptSrc: "Transcripts/India/B2/Main Gods in Hinduism.txt"},
    { title: "Poverty in India", src: "Audio/India/B2/Poverty in India.mp4", vocab: [
      { word: "fatalism", definition: "the belief that events are predetermined and that people cannot change their destiny" },
      { word: "reincarnation", definition: "the belief that after death, the soul is reborn into a new body, linking present circumstances to past actions" },
      { word: "social mobility", definition: "the ability of individuals or families to move up or down in social and economic status" },
      { word: "affirmative action", definition: "policies that give advantages to groups who have historically faced discrimination, to promote equality" },
      { word: "resilience", definition: "the capacity to endure hardship and continue functioning without losing psychological stability" },
      { word: "paradox", definition: "a situation that seems contradictory or impossible, but may nonetheless be true" }
    ], questions: [
      "The episode suggests that beliefs in karma and dharma can provide a kind of spiritual comfort for people living in poverty — do you think religious or philosophical beliefs can be genuinely helpful in difficult circumstances, or can they also discourage people from demanding change?",
      "India is described as having a strong extended family network that acts as a social safety net — do you think this kind of community support is more effective than government welfare programmes, or should it be the other way around?"
    ], transcriptSrc: "Transcripts/India/B2/Poverty in India.txt"},
    { title: "Special Places in India", src: "Audio/India/B2/Special Places in India.mp4", vocab: [
      { word: "sacred", definition: "regarded with great religious reverence; considered holy by a particular faith or culture" },
      { word: "pilgrimage", definition: "a journey made to a place of special religious or spiritual significance" },
      { word: "symmetrical", definition: "having a design where both sides are perfectly balanced and mirror each other" },
      { word: "monument", definition: "a building or structure created to honour a person or event and preserve their memory" },
      { word: "foothills", definition: "the low hills at the base of a larger mountain range" },
      { word: "serene", definition: "calm, peaceful, and untroubled, especially in a way that inspires a sense of quiet beauty" }
    ], questions: [
      "Varanasi is described as a place where death is treated as a public and natural part of life, rather than something hidden — how does this compare to the way death is treated in your own culture, and which approach do you find more meaningful?",
      "The Taj Mahal was built purely as an expression of love and grief — do you think grand architectural monuments are still a meaningful way to honour someone, or have modern forms of remembrance taken their place?"
    ], transcriptSrc: "Transcripts/India/B2/Special Places in India.txt"},
    { title: "Technology and Innovation", src: "Audio/India/B2/Technology and Innovation.mp4", vocab: [
      { word: "innovation", definition: "the introduction of new ideas, methods, or technologies that bring about significant improvement" },
      { word: "frugal innovation", definition: "the process of creating effective, low-cost solutions by working within tight resource constraints" },
      { word: "leapfrog", definition: "to bypass earlier stages of development and move directly to a more advanced technology or system" },
      { word: "per capita", definition: "calculated by dividing a total figure by the number of people in a population" },
      { word: "digital divide", definition: "the gap between those who have access to modern technology and the internet and those who do not" },
      { word: "paradox", definition: "a seemingly contradictory situation that nevertheless contains an element of truth" }
    ], questions: [
      "India's digital payments system (UPI) is described as more advanced and widely used than those in many Western countries — what does this suggest about how developing nations can sometimes overtake wealthier ones in specific areas of technology?",
      "India is simultaneously a space exploration power and a country with hundreds of millions of people in poverty — do you think governments in developing nations should prioritise investment in cutting-edge technology, or focus all resources on basic needs first?"
    ], transcriptSrc: "Transcripts/India/B2/Technology and Innovation.txt"},
    { title: "The Caste System", src: "Audio/India/B2/The Caste System.mp4", vocab: [
      { word: "hierarchy", definition: "a system in which people or groups are ranked one above another according to status or authority" },
      { word: "discrimination", definition: "the unjust or prejudicial treatment of different categories of people, especially on grounds of birth or social group" },
      { word: "affirmative action", definition: "policies that favour members of disadvantaged groups in order to correct historical inequalities" },
      { word: "marginalized", definition: "treated as unimportant or pushed to the edges of society, with little power or voice" },
      { word: "urbanization", definition: "the process by which more people come to live in cities, often leading to social and cultural changes" },
      { word: "stigma", definition: "a mark of disgrace or strong social disapproval associated with a particular identity or circumstance" }
    ], questions: [
      "India's reservation system sets aside university places and government jobs for lower-caste groups — do you think this kind of affirmative action is the most effective way to address centuries of inequality, or could it create new problems?",
      "The episode notes that caste is much less visible in big cities than in rural areas, but still strongly influences who people marry — why do you think social attitudes about marriage are often the last thing to change, even when other forms of discrimination have decreased?"
    ], transcriptSrc: "Transcripts/India/B2/The Caste System.txt"},
    { title: "Weddings in India", src: "Audio/India/B2/Weddings in India.mp4", vocab: [
      { word: "ritual", definition: "a series of ceremonial actions performed according to a set order, often with deep cultural or religious meaning" },
      { word: "intricate", definition: "very detailed and complicated, requiring great skill and care to produce" },
      { word: "choreographed", definition: "carefully planned and rehearsed, especially a sequence of dance or movement" },
      { word: "spectacle", definition: "a visually impressive and elaborate display or event that attracts attention" },
      { word: "prosperity", definition: "the state of being successful and financially comfortable; good fortune" },
      { word: "vow", definition: "a solemn promise, especially one made during a formal ceremony such as a wedding" }
    ], questions: [
      "Indian weddings are described as multi-day events involving hundreds of guests and elaborate rituals — do you think large, traditional weddings strengthen family and community bonds, or do they place too much social and financial pressure on the families involved?",
      "Many of the wedding rituals described — such as the Saptapadi vows and the Haldi ceremony — have been performed for centuries — do you think it is important to preserve these ancient traditions exactly as they are, or is it acceptable for them to evolve over time?"
    ], transcriptSrc: "Transcripts/India/B2/Weddings in India.txt"},
    { title: "Yoga and Meditation", src: "Audio/India/B2/Yoga and Meditation.mp4", vocab: [
      { word: "holistic", definition: "treating or considering something as a whole, including physical, mental, and spiritual aspects together" },
      { word: "consciousness", definition: "the state of being aware of and able to think about one's own existence, thoughts, and feelings" },
      { word: "Sanskrit", definition: "an ancient language of India, considered sacred in Hinduism and used in many religious texts" },
      { word: "philosophy", definition: "the study of fundamental questions about existence, knowledge, ethics, and the nature of reality" },
      { word: "millennia", definition: "thousands of years; plural of millennium, referring to a period of one thousand years" },
      { word: "liberation", definition: "freedom from a state of restriction, suffering, or constraint, especially in a spiritual context" }
    ], questions: [
      "Yoga has spread worldwide as a fitness trend, but its original purpose in India was spiritual and philosophical — do you think something is lost when a deeply cultural practice is adopted globally and stripped of its original meaning?",
      "The episode suggests that ancient Indian thinkers were essentially the world's first psychologists, developing tools to manage the mind long before modern science — do you think traditional practices like meditation deserve the same level of trust as modern medicine for treating conditions like stress and anxiety?"
    ], transcriptSrc: "Transcripts/India/B2/Yoga and Meditation.txt"}
  ]
};

window.renderIndiaLevel = function(level, targetId) {
  var list = document.getElementById(targetId || "india-list");
  if (!list) return;
  list.innerHTML = "";
  var episodes = indiaEpisodes[level] || [];
  episodes.forEach(function(ep, idx) {
    var card = document.createElement("div");
    card.className = "card";
    var vocabHTML = ep.vocab.map(function(v) {
      return "<li><strong>" + v.word + "</strong> <button class=\"speaker-btn\" onclick=\"speakWord('" + v.word + "')\">🔊</button> " + v.definition + "</li>";
    }).join("");
    var questionsHTML = "<div style='margin-top:16px'><h4>Discussion Questions</h4><ol>" + ep.questions.map(function(q) { return "<li style='margin-bottom:8px'>" + q + "</li>"; }).join("") + "</ol></div>";
    var tId = "india-transcript-" + level + "-" + idx;
    var transcriptHTML = ep.transcriptSrc
      ? "<div style='margin-top:12px'><button class='level-tab' id='transcript-toggle-btn-" + tId + "' onclick='toggleADMTranscript(\"" + ep.transcriptSrc + "\",\"" + tId + "\")'>Show Transcript</button><div id='" + tId + "' style='display:none;margin-top:12px;white-space:pre-wrap;line-height:1.7'></div></div>"
      : "";
    var contextKey = "ctx_india_" + level + "_" + idx;
    window._chatContexts = window._chatContexts || {};
    window._chatContexts[contextKey] = { title: ep.title, level: level, vocab: ep.vocab, questions: ep.questions || [] };
    var chatBtn = "<button onclick='openChatBot(\"" + contextKey + "\")' style='display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6fa8,#4A9EE8);border:none;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(74,158,232,0.4)'>🎙️ Chat with Skipper</button>";
    card.innerHTML = "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px'><h3 style='margin:0'>" + ep.title + "</h3>" + chatBtn + "</div>"
      + "<audio controls style='width:100%;margin:10px 0'><source src='" + ep.src + "'></audio>"
      + "<h4>Vocabulary</h4><ul>" + vocabHTML + "</ul>"
      + questionsHTML + transcriptHTML;
    list.appendChild(card);
  });
};

window.selectIndiaLevel = function(level) {
  document.querySelectorAll("#india-tabs .level-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.textContent === level);
  });
  renderIndiaLevel(level);
};

const worldCupEpisodes = {
  A2: [
    { title: "Curacao", src: "Audio/World Cup/A2/Curacao.mp4", vocab: [
      { word: "island", definition: "a piece of land with water all around it" },
      { word: "tropical", definition: "hot and wet, near the equator" },
      { word: "trade", definition: "buying and selling things with other places" },
      { word: "tourism", definition: "when people visit a place for holidays" },
      { word: "roots", definition: "where your family originally comes from" },
      { word: "synagogue", definition: "a building where Jewish people pray" }
    ], questions: [
      "Would you like to visit Curacao? What would you most want to see or do there?",
      "Curacao is a very small place but has a very strong football team. Why do you think small countries can sometimes do well in international sports?"
    ], transcriptSrc: "Transcripts/World Cup/A2/Curacao.txt"},
    { title: "Maradona", src: "Audio/World Cup/A2/Maradona.mp4", vocab: [
      { word: "neighborhood", definition: "an area in a town where people live" },
      { word: "talent", definition: "a natural ability to do something well" },
      { word: "captain", definition: "the leader of a sports team" },
      { word: "retire", definition: "to stop working or playing professionally" },
      { word: "mourning", definition: "feeling very sad because someone has died" },
      { word: "symbol", definition: "something that represents an idea or feeling" }
    ], questions: [
      "Maradona came from a very poor family but became world-famous. What do you think helped him succeed?",
      "The Hand of God goal was scored using Maradona's hand. Do you think this was wrong? Why or why not?"
    ], transcriptSrc: "Transcripts/World Cup/A2/Maradona.txt"},
    { title: "Messi", src: "Audio/World Cup/A2/Messi.mp4", vocab: [
      { word: "legend", definition: "a very famous and respected person" },
      { word: "condition", definition: "a rule that must be agreed to" },
      { word: "contract", definition: "an official written agreement" },
      { word: "napkin", definition: "a small piece of paper or cloth for cleaning your mouth" },
      { word: "humble", definition: "not thinking you are better than other people" },
      { word: "overcome", definition: "to successfully deal with a problem" }
    ], questions: [
      "When Messi was thirteen, he had to leave his family and move to Spain. How do you think he felt? Could you do the same thing?",
      "Messi scores goals and often points to the sky for his grandmother. Why do you think family support is important for success?"
    ], transcriptSrc: "Transcripts/World Cup/A2/Messi.txt"},
    { title: "Pele", src: "Audio/World Cup/A2/Pele.mp4", vocab: [
      { word: "poor", definition: "not having much money" },
      { word: "career", definition: "a person's working life or profession" },
      { word: "tournament", definition: "a competition with many teams or players" },
      { word: "score", definition: "to get a goal or a point in a game" },
      { word: "ambassador", definition: "a person who represents and promotes something" },
      { word: "bicycle kick", definition: "a kick where you jump and kick the ball over your head" }
    ], questions: [
      "Pele practiced football with a sock filled with newspapers because he was poor. Do you think difficult early experiences can make someone stronger?",
      "Pele won the World Cup three times. Do you think he is the greatest football player of all time? Who else might be?"
    ], transcriptSrc: "Transcripts/World Cup/A2/Pele.txt"}
  ],
  B1: [
    { title: "Corruption in the World Cup", src: "Audio/World Cup/B1/Corruption in the World Cup.mp4", vocab: [
      { word: "corruption", definition: "dishonest behavior by people in positions of power" },
      { word: "prestige", definition: "the respect and admiration that comes with success or status" },
      { word: "sportswashing", definition: "using a sporting event to improve a country's image and hide problems" },
      { word: "bribe", definition: "money paid illegally to make someone do something for you" },
      { word: "migrant worker", definition: "a person who moves to another country to find work" },
      { word: "transparency", definition: "being open and honest about how decisions are made" }
    ], questions: [
      "Do you think large sporting events like the World Cup can ever be completely free of corruption? What changes would help?",
      "The podcast mentions sportswashing. Can you think of other examples where sports or events have been used to improve a country's image?"
    ], transcriptSrc: "Transcripts/World Cup/B1/Corruption in the World Cup.txt"},
    { title: "History of the World Cup", src: "Audio/World Cup/B1/History of the World Cup.mp4", vocab: [
      { word: "humble", definition: "small or simple in a way that shows there was little fame or money at the start" },
      { word: "participate", definition: "to take part in an activity or event" },
      { word: "milestone", definition: "an important event or achievement in a process" },
      { word: "broadcast", definition: "to send out a programme on television or radio" },
      { word: "evolve", definition: "to develop and change slowly over time" },
      { word: "VAR", definition: "technology that helps referees check decisions by watching video replays" }
    ], questions: [
      "The World Cup is expanding to 48 teams in 2026. Do you think this is a good idea, or does it make the competition less special?",
      "Technology like VAR has changed how football is played. Do you think technology makes sport better or does it take away some of the excitement?"
    ], transcriptSrc: "Transcripts/World Cup/B1/History of World Cup.txt"},
    { title: "Jamaica", src: "Audio/World Cup/B1/Jamaica.mp4", vocab: [
      { word: "iconic", definition: "very famous and recognized by many people" },
      { word: "creole language", definition: "a language that developed from a mix of two or more languages" },
      { word: "powerhouse", definition: "a person, team, or country that is very strong and successful" },
      { word: "colonized", definition: "when a powerful country takes control of another country" },
      { word: "independence", definition: "the freedom to govern yourself without foreign control" },
      { word: "hospitable", definition: "friendly and welcoming to guests" }
    ], questions: [
      "Jamaica is famous for both reggae music and fast runners. How do you think a country's culture can influence its sports success?",
      "Jamaica's national motto is Out of Many, One People. What do you think this means, and does your country have a similar idea?"
    ], transcriptSrc: "Transcripts/World Cup/B1/Jamaica.txt"},
    { title: "Senegal", src: "Audio/World Cup/B1/Senegal.mp4", vocab: [
      { word: "qualify", definition: "to earn the right to compete in a tournament" },
      { word: "passion", definition: "a very strong feeling of love or enthusiasm for something" },
      { word: "westernmost", definition: "furthest to the west" },
      { word: "stable", definition: "not likely to change suddenly; steady and secure" },
      { word: "hospitality", definition: "being friendly and generous to guests" },
      { word: "algae", definition: "a simple plant-like organism that grows in or near water" }
    ], questions: [
      "Senegal beat France in the 2002 World Cup, which was a huge shock. Can you think of other moments in sport when an underdog beat a much stronger team?",
      "The word Teranga means hospitality in Senegal. What words or ideas best describe the culture of your country?"
    ], transcriptSrc: "Transcripts/World Cup/B1/Senegal.txt"}
  ],
  B2: [
    { title: "Corruption in the World Cup", src: "Audio/World Cup/B2/Corruption in the World Cup.mp4", vocab: [
      { word: "allegations", definition: "claims that someone has done something wrong, not yet proven in court" },
      { word: "infrastructure", definition: "the basic systems a country needs, such as roads, stadiums, and utilities" },
      { word: "modern slavery", definition: "a situation where people are forced to work in terrible conditions with no freedom" },
      { word: "sportswashing", definition: "using high-profile sporting events to distract attention from human rights abuses and boost a government's reputation" },
      { word: "skeptical", definition: "having doubts and not easily convinced that something is true" },
      { word: "accountability", definition: "the obligation to explain and take responsibility for one's actions" }
    ], questions: [
      "The podcast describes the Qatar World Cup as an example of sportswashing. To what extent do you think sports and politics can or should be kept separate?",
      "The migrant workers who built the Qatar stadiums suffered greatly, yet the tournament was widely enjoyed by fans. Does enjoying an event make you responsible for how it was created? Why or why not?"
    ], transcriptSrc: "Transcripts/World Cup/B2/Corruption in the World Cup.txt"},
    { title: "Curacao", src: "Audio/World Cup/B2/Curacao.mp4", vocab: [
      { word: "dual nationality", definition: "the status of being a legal citizen of two different countries at the same time" },
      { word: "tactical", definition: "relating to carefully planned methods used to achieve a goal" },
      { word: "punch above its weight", definition: "to achieve more than would normally be expected given one's size or resources" },
      { word: "linguist", definition: "a person who studies languages or speaks several languages very well" },
      { word: "UNESCO World Heritage site", definition: "a place recognized by the United Nations as having outstanding cultural or natural importance" },
      { word: "persecution", definition: "cruel and unfair treatment of a person or group, often because of their religion or beliefs" }
    ], questions: [
      "Curacao benefits from players with dual nationality choosing to represent the island. Do you think players should be free to choose which country they represent, or should there be stricter rules?",
      "Willemstad is a UNESCO World Heritage site partly because of its unique cultural history. What places in your country do you think deserve this kind of international recognition, and why?"
    ], transcriptSrc: "Transcripts/World Cup/B2/Curacao.txt"},
    { title: "Jamaica", src: "Audio/World Cup/B2/Jamaica.mp4", vocab: [
      { word: "electric", definition: "used to describe an atmosphere that is very exciting and full of energy" },
      { word: "cultural footprint", definition: "the degree to which a place's culture has influenced the rest of the world" },
      { word: "professionalizing", definition: "the process of improving standards to match those of professional organisations" },
      { word: "indigenous", definition: "originating or occurring naturally in a particular place; native" },
      { word: "melting pot", definition: "a place where many different cultures, ideas, and people mix together" },
      { word: "laid-back", definition: "relaxed and not easily worried or stressed" }
    ], questions: [
      "Jamaica has had a huge cultural influence on the world through music, sport, and language, despite being a small island. What factors allow a small nation to have such an outsized global impact?",
      "The podcast says Jamaica is a melting pot with a motto of Out of Many, One People. How does a history of colonialism and migration shape a country's national identity, both positively and negatively?"
    ], transcriptSrc: "Transcripts/World Cup/B2/Jamaica.txt"},
    { title: "Maradona", src: "Audio/World Cup/B2/Maradona.mp4", vocab: [
      { word: "prodigy", definition: "a young person with exceptional talent or ability in a particular field" },
      { word: "shanty town", definition: "a poor, makeshift settlement on the edge of a city, often with no running water or electricity" },
      { word: "center of gravity", definition: "the point in an object around which its weight is balanced, affecting stability and movement" },
      { word: "controversial", definition: "causing strong disagreement or public debate" },
      { word: "drug addiction", definition: "a dependence on a substance that is very difficult to control or stop" },
      { word: "flawed hero", definition: "a person admired for their achievements but who also has significant personal weaknesses or failures" }
    ], questions: [
      "Maradona is described as a flawed hero. Do you think we can separate an athlete's personal failings from their professional achievements? Should we?",
      "Maradona's physical characteristics — his short height and low center of gravity — became advantages on the pitch. Can you think of other examples where an apparent disadvantage became a strength?"
    ], transcriptSrc: "Transcripts/World Cup/B2/Maradona.txt"},
    { title: "Pele", src: "Audio/World Cup/B2/Pele.mp4", vocab: [
      { word: "irregular", definition: "not having a consistent or even shape, size, or pattern" },
      { word: "debut", definition: "a person's first public appearance or performance in a role" },
      { word: "two-footed", definition: "able to use both feet equally well when playing football" },
      { word: "playmaker", definition: "a player who controls the flow of the game and creates goal-scoring opportunities for teammates" },
      { word: "legacy", definition: "the long-lasting impact or achievements left behind by a person after they are gone" },
      { word: "mind-blowing", definition: "so extraordinary or impressive that it is hard to fully comprehend" }
    ], questions: [
      "Pele learned to control a ball using a stuffed sock and a grapefruit. The podcast suggests this actually made him better. Do you think adversity and limited resources can sometimes produce greater skill than having everything available?",
      "Pele is described as transforming football into The Beautiful Game and later became a global ambassador. What responsibilities do you think elite athletes have beyond their sport?"
    ], transcriptSrc: "Transcripts/World Cup/B2/Pele.txt"},
    { title: "World Cup History", src: "Audio/World Cup/B2/World Cup History.mp4", vocab: [
      { word: "spectacle", definition: "an impressive and dramatic public event or display" },
      { word: "centenary", definition: "the one-hundredth anniversary of an important event" },
      { word: "double-edged sword", definition: "something that has both advantages and disadvantages" },
      { word: "underdogs", definition: "competitors who are not expected to win" },
      { word: "national identity", definition: "the shared sense of belonging and cultural characteristics that define a country's people" },
      { word: "carbon-fiber", definition: "a very strong, lightweight material used in high-performance equipment" }
    ], questions: [
      "The podcast describes the World Cup as the one time where the whole world speaks the same language. Do you agree that sport has the power to unite people across cultural and political divides?",
      "VAR technology makes refereeing more accurate but can interrupt the flow and emotion of the game. Where do you think the line should be drawn between using technology and preserving the human element in sport?"
    ], transcriptSrc: "Transcripts/World Cup/B2/World Cup History.txt"}
  ]
};

window.renderWorldCupLevel = function(level, targetId) {
  var list = document.getElementById(targetId || "worldcup-list");
  if (!list) return;
  list.innerHTML = "";
  var episodes = worldCupEpisodes[level] || [];
  episodes.forEach(function(ep, idx) {
    var card = document.createElement("div");
    card.className = "card";
    var vocabHTML = ep.vocab.map(function(v) {
      return "<li><strong>" + v.word + "</strong> <button class=\"speaker-btn\" onclick=\"speakWord('" + v.word + "')\">🔊</button> " + v.definition + "</li>";
    }).join("");
    var questionsHTML = "<div style='margin-top:16px'><h4>Discussion Questions</h4><ol>" + ep.questions.map(function(q) { return "<li style='margin-bottom:8px'>" + q + "</li>"; }).join("") + "</ol></div>";
    var tId = "worldcup-transcript-" + level + "-" + idx;
    var transcriptHTML = ep.transcriptSrc
      ? "<div style='margin-top:12px'><button class='level-tab' id='transcript-toggle-btn-" + tId + "' onclick='toggleADMTranscript(\"" + ep.transcriptSrc + "\",\"" + tId + "\")'>Show Transcript</button><div id='" + tId + "' style='display:none;margin-top:12px;white-space:pre-wrap;line-height:1.7'></div></div>"
      : "";
    var contextKey = "ctx_worldcup_" + level + "_" + idx;
    window._chatContexts = window._chatContexts || {};
    window._chatContexts[contextKey] = { title: ep.title, level: level, vocab: ep.vocab, questions: ep.questions || [] };
    var chatBtn = "<button onclick='openChatBot(\"" + contextKey + "\")' style='display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6fa8,#4A9EE8);border:none;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(74,158,232,0.4)'>🎙️ Chat with Skipper</button>";
    card.innerHTML = "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px'><h3 style='margin:0'>" + ep.title + "</h3>" + chatBtn + "</div>"
      + "<audio controls style='width:100%;margin:10px 0'><source src='" + ep.src + "'></audio>"
      + "<h4>Vocabulary</h4><ul>" + vocabHTML + "</ul>"
      + questionsHTML + transcriptHTML;
    list.appendChild(card);
  });
};

window.selectWorldCupLevel = function(level) {
  document.querySelectorAll("#worldcup-tabs .level-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.textContent === level);
  });
  renderWorldCupLevel(level);
};

// Render default levels when section first loads
function _getListened() {
  try { return JSON.parse(localStorage.getItem("pse_progress") || "[]"); } catch(e) { return []; }
}

function _markListened(src) {
  var listened = _getListened();
  if (listened.indexOf(src) === -1) {
    listened.push(src);
    try { localStorage.setItem("pse_progress", JSON.stringify(listened)); } catch(e) {}
  }
}

function _addListenedBadge(card) {
  if (card.querySelector(".pse-listened")) return;
  var badge = document.createElement("span");
  badge.className = "pse-listened";
  badge.textContent = " ✓";
  badge.title = "You have listened to this episode";
  badge.style.cssText = "color:#22c55e;font-weight:bold;font-size:16px;margin-left:4px";
  var h3 = card.querySelector("h3");
  if (h3) h3.appendChild(badge);
  card.style.borderLeft = "3px solid #22c55e";
}

function _applyProgress(containerId) {
  var listened = _getListened();
  var container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll(".card").forEach(function(card) {
    var srcEl = card.querySelector("audio source");
    if (!srcEl) return;
    var src = srcEl.getAttribute("src");
    if (listened.indexOf(src) !== -1) _addListenedBadge(card);
    var audio = card.querySelector("audio");
    if (audio) {
      audio.addEventListener("timeupdate", function onTime() {
        if (audio.currentTime > 10) {
          _markListened(src);
          _addListenedBadge(card);
          audio.removeEventListener("timeupdate", onTime);
        }
      });
    }
  });
}

var _seriesConfig = [
  { key: "adm",        name: "America's Defining Moments", levels: ["B1","B2"],          episodes: admEpisodes,       render: function(l,t){ renderADMLevel(l,t); } },
  { key: "inventions", name: "Inventions and Inventors",   levels: ["A1","A2","B1"],      episodes: inventionEpisodes, render: function(l,t){ renderInventionsLevel(l,t); } },
  { key: "uk",         name: "All About the UK",           levels: ["A1","A2","B1","B2"], episodes: ukEpisodes,        render: function(l,t){ renderUKLevel(l,t); } },
  { key: "africa",     name: "Africa",                     levels: ["B1","B2"],           episodes: africaEpisodes,    render: function(l,t){ renderAfricaLevel(l,t); } },
  { key: "china",      name: "China",                      levels: ["B1","B2"],           episodes: chinaEpisodes,     render: function(l,t){ renderChinaLevel(l,t); } },
  { key: "india",      name: "India",                      levels: ["B2"],                episodes: indiaEpisodes,     render: function(l,t){ renderIndiaLevel(l,t); } },
  { key: "worldcup",   name: "The World Cup",              levels: ["A2","B1","B2"],      episodes: worldCupEpisodes,  render: function(l,t){ renderWorldCupLevel(l,t); } },
];

window.selectSeriesLevel = function(level) {
  var epList = document.getElementById("series-ep-list");
  var row = document.getElementById("series-btn-row");
  if (!epList || !row) return;
  document.querySelectorAll("#series-level-tabs .level-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.textContent === level);
  });
  epList.innerHTML = "";
  row.innerHTML = "";
  _seriesConfig.forEach(function(s) {
    if (s.levels.indexOf(level) === -1) return;
    var btn = document.createElement("button");
    btn.className = "level-tab";
    btn.type = "button";
    btn.textContent = s.name;
    var count = (s.episodes[level] || []).length;
    btn.textContent = s.name + " (" + count + " episode" + (count !== 1 ? "s" : "") + ")";
    btn.setAttribute("data-series-key", s.key);
    btn.onclick = (function(sc, lv, b) {
      return function() { selectSeriesItem(sc.key, lv, b); };
    }(s, level, btn));
    row.appendChild(btn);
  });
};

window.selectSeriesItem = function(key, level, btn) {
  document.querySelectorAll("#series-btn-row .level-tab").forEach(function(b) {
    b.classList.remove("active");
  });
  if (btn) btn.classList.add("active");
  var series = null;
  _seriesConfig.forEach(function(s) { if (s.key === key) series = s; });
  if (!series) return;
  var epList = document.getElementById("series-ep-list");
  epList.innerHTML = "";
  var backBtn = document.createElement("button");
  backBtn.className = "level-tab";
  backBtn.type = "button";
  backBtn.style.cssText = "margin-bottom:20px;display:block";
  backBtn.textContent = "← Back to series";
  backBtn.onclick = function() {
    epList.innerHTML = "";
    document.querySelectorAll("#series-btn-row .level-tab").forEach(function(b) {
      b.classList.remove("active");
    });
  };
  epList.appendChild(backBtn);
  var inner = document.createElement("div");
  inner.id = "series-ep-inner";
  epList.appendChild(inner);
  series.render(level, "series-ep-inner");
  _applyProgress("series-ep-inner");
};

selectSeriesLevel("A1");

// audio functions defined at page level below DOMContentLoaded

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

// ---- SECTION NAVIGATION ----
window.showSection = function showSection(sectionId, activeBtnId) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(sectionId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const btn = activeBtnId
    ? document.getElementById(activeBtnId)
    : document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
  if (btn) btn.classList.add("active");
};

// ---- AUDIO LEVEL TAB ----
window.activateAudioTab = function activateAudioTab(level) {
  document.querySelectorAll("[data-audio-level]").forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-audio-level") === level);
  });
};

// ---- LISTENING SPOTLIGHT ----
window.openFeaturedListening = function () {
  showSection("listening", "spotlight-btn");

  const spotlightArea = document.getElementById("spotlight-area");
  if (!spotlightArea) return;

  const featured = listeningFiles.find(
    file => file.title === "Peace Talks Between Iran and USA" && file.level === "B1"
  );

  if (!featured) return;

  spotlightArea.innerHTML = "";

  const featuredCard = document.createElement("div");
  featuredCard.className = "card";
  featuredCard.id = "featured-audio-display";

  featuredCard.innerHTML = `
    <h3>Listening Spotlight</h3>
    <p>${featured.title}</p>
    <audio controls style="width:100%;margin:10px 0">
      <source src="${featured.src}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div class="vocab-box">
      <h4>Key Vocabulary</h4>
      <ul>
        ${featured.vocab.map(v => `<li><strong>${v.word}</strong> ${v.definition}</li>`).join("")}
      </ul>
    </div>
    <div class="discussion-box">
      <h4>Discussion Questions</h4>
      <ol>
        ${featured.questions.map(q => `<li>${q}</li>`).join("")}
      </ol>
    </div>
  `;

  spotlightArea.appendChild(featuredCard);
  activateAudioTab("B2");
  renderAudioLevel("B2");
};

// ---- HOME LEVEL QUICK-LINKS ----
document.querySelectorAll("[data-go]").forEach(btn => {
  btn.addEventListener("click", () => {
    const parts = btn.getAttribute("data-go").split("-"); // e.g. "listening-b2"
    const section = parts[0];
    const level = parts[1].toUpperCase();
    showSection(section);
    activateAudioTab(level);
    renderAudioLevel(level);
  });
});

// ---- READ SECTION ----
window.showReadLevel = function (levelId) {
  document.querySelectorAll(".read-level").forEach(el => { el.style.display = "none"; });
  const target = document.getElementById(levelId);
  if (target) target.style.display = "";

  document.querySelectorAll("[data-read-level]").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-read-level") === levelId);
  });
};

const readingArticles = {
  "a2-market": {
    title: "Local Markets Become Popular Again",
    level: "A2",
    text: `<p>Many people are going to local markets again. They like fresh food and friendly people.</p>
           <p>Local markets sell fruit, vegetables, and bread. The prices are often good. You can talk to the person who made the food.</p>
           <p>Some markets are open every weekend. People bring their families and enjoy the day.</p>`,
    vocab: [
      { word: "market", definition: "a place where people buy and sell things" },
      { word: "fresh", definition: "recently made or picked" },
      { word: "community", definition: "a group of people who live or work together" }
    ],
    questions: [
      "Do you like shopping at local markets? Why?",
      "What do people sell at local markets?",
      "Why do people prefer local markets to supermarkets?"
    ]
  },
  "a2-trees": {
    title: "Why Cities Plant More Trees",
    level: "A2",
    text: `<p>Cities around the world are planting more trees. Trees make streets cooler and cleaner.</p>
           <p>Trees give us fresh air. They also make cities look beautiful. Children can play in the shade.</p>
           <p>Some cities have a plan to plant thousands of new trees every year.</p>`,
    vocab: [
      { word: "plant", definition: "to put something in the ground so it grows" },
      { word: "shade", definition: "a cool dark area made by something blocking the sun" },
      { word: "air", definition: "what we breathe" }
    ],
    questions: [
      "Why are trees important in cities?",
      "How do trees help people?",
      "Does your city have many trees?"
    ]
  },
  "b1-robot": {
    title: "Students Build a Small Robot",
    level: "B1",
    text: `<p>A group of students from a secondary school built a small robot for a science project. The robot can move forward, turn, and pick up small objects.</p>
           <p>The students worked together for three months. They learned about engineering, coding, and problem-solving. When things went wrong, they had to find creative solutions.</p>
           <p>Their teacher said the project helped them develop real skills that they can use in the future.</p>`,
    vocab: [
      { word: "engineering", definition: "the work of designing and building machines or structures" },
      { word: "creative", definition: "able to think of new and original ideas" },
      { word: "solution", definition: "an answer to a problem" }
    ],
    questions: [
      "What could the robot do?",
      "What skills did the students develop?",
      "Have you ever worked on a team project? What happened?"
    ]
  },
  "b2-ai": {
    title: "How AI Is Changing Workplace Communication",
    level: "B2",
    text: `<p>Artificial intelligence tools are now being used in offices to help employees write emails, summarise documents, and translate messages. Many workers say these tools save them time and reduce stress.</p>
           <p>However, some communication experts are concerned. They argue that relying too heavily on AI can reduce clarity and personal connection in professional writing. An email written entirely by an AI may be grammatically correct but lack the individual voice that builds trust with colleagues.</p>
           <p>Most companies are encouraging staff to use AI as a tool to support their writing, rather than replace it entirely. The key, experts say, is knowing when a human touch is essential.</p>`,
    vocab: [
      { word: "artificial intelligence", definition: "computer systems that can perform tasks that normally require human intelligence" },
      { word: "clarity", definition: "the quality of being clear and easy to understand" },
      { word: "relying", definition: "depending on someone or something for support" }
    ],
    questions: [
      "How are AI tools being used in workplaces?",
      "What are the concerns about AI in professional writing?",
      "Do you think AI will improve or harm workplace communication?"
    ]
  }
};

window.openArticle = function (articleId) {
  const article = readingArticles[articleId];
  if (!article) return;

  const displayId = article.level.toLowerCase() + "-article-display";
  const display = document.getElementById(displayId);
  if (!display) return;

  display.innerHTML = `
    <h3>${article.title}</h3>
    <span class="article-meta">${article.level}</span>
    ${article.text}
    <div class="vocab-box" style="margin-top:16px">
      <h4>Key Vocabulary</h4>
      <ul>
        ${article.vocab.map(v => `<li><strong>${v.word}</strong> — ${v.definition}</li>`).join("")}
      </ul>
    </div>
    <div class="discussion-box" style="margin-top:16px">
      <h4>Discussion Questions</h4>
      <ol>
        ${article.questions.map(q => `<li>${q}</li>`).join("")}
      </ol>
    </div>
  `;
  display.scrollIntoView({ behavior: "smooth" });
};
});

// ---- IDIOM OF THE DAY ----
// Runs outside DOMContentLoaded — script is at bottom of body so DOM is ready
(function () {
  var idioms = [
    { name: "Break the ice", meaning: "To do something to relieve tension and make people feel comfortable" },
    { name: "Hit the nail on the head", meaning: "To describe something exactly right" },
    { name: "Under the weather", meaning: "Feeling ill or unwell" },
    { name: "Bite the bullet", meaning: "To endure a painful or difficult situation with courage" },
    { name: "Piece of cake", meaning: "Something very easy to do" },
    { name: "Spill the beans", meaning: "To reveal a secret or surprise by accident" },
    { name: "Hit the sack", meaning: "To go to bed" },
    { name: "Once in a blue moon", meaning: "Something that happens very rarely" },
    { name: "Burn the midnight oil", meaning: "To work late into the night" },
    { name: "The ball is in your court", meaning: "It is your decision or responsibility now" },
    { name: "Bite off more than you can chew", meaning: "To take on more than you can handle" },
    { name: "Cost an arm and a leg", meaning: "Very expensive" },
    { name: "Miss the boat", meaning: "To miss an opportunity" },
    { name: "On the fence", meaning: "Undecided or neutral about something" },
    { name: "Pull someone's leg", meaning: "To joke or tease someone" },
    { name: "See eye to eye", meaning: "To agree with someone" },
    { name: "Speak of the devil", meaning: "Said when someone appears just as they are being talked about" },
    { name: "The last straw", meaning: "The final problem that makes a situation unbearable" },
    { name: "Under someone's thumb", meaning: "Completely controlled by someone" },
    { name: "Up in the air", meaning: "Uncertain or undecided" },
    { name: "Actions speak louder than words", meaning: "What you do is more important than what you say" },
    { name: "Add fuel to the fire", meaning: "To make a bad situation worse" },
    { name: "Beat around the bush", meaning: "To avoid talking about the main point" },
    { name: "Every cloud has a silver lining", meaning: "Every negative situation has a positive aspect" },
    { name: "Get out of hand", meaning: "To become out of control" },
    { name: "Hit the ground running", meaning: "To start something with full energy and enthusiasm" },
    { name: "In the heat of the moment", meaning: "Said or done in an emotional state without thinking" }
  ];
  var now = new Date();
  var dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  var today = idioms[(now.getFullYear() * 1000 + dayOfYear) % idioms.length];
  var html = '<span class="idiom-label">Idiom of the Day</span> <span class="idiom-name">' + today.name + '</span> \u2014 ' + today.meaning;
  var el1 = document.getElementById("idiom-of-day-1");
  var el2 = document.getElementById("idiom-of-day-2");
  if (el1) el1.innerHTML = html;
  if (el2) el2.innerHTML = html;
}());

// ---- LEVEL TEST MODAL ----
var levelTestQuestions = [
  { q: "She ___ a teacher.", options: ["are", "is", "be", "am"], answer: 1, level: "A1" },
  { q: "I ___ to the cinema yesterday.", options: ["go", "goes", "going", "went"], answer: 3, level: "A1" },
  { q: "She is taller ___ her brother.", options: ["as", "then", "than", "that"], answer: 2, level: "A2" },
  { q: "We ___ here for two hours.", options: ["are", "were", "have been", "be"], answer: 2, level: "A2" },
  { q: "If I ___ more money, I would travel the world.", options: ["have", "has", "had", "having"], answer: 2, level: "B1" },
  { q: "The report ___ by the manager before the meeting.", options: ["wrote", "was written", "has written", "is writing"], answer: 1, level: "B1" },
  { q: "Despite ___ tired, she continued working.", options: ["be", "been", "being", "to be"], answer: 2, level: "B2" },
  { q: "The politician's speech was full of ___, designed to mislead the public.", options: ["commentary", "propaganda", "narration", "advertisement"], answer: 1, level: "B2" },
  { q: "The new legislation will ___ significant changes to the healthcare system.", options: ["say", "tell", "entail", "speak"], answer: 2, level: "C1" },
  { q: "Her argument was so ___ that even her opponents were convinced.", options: ["persuasive", "persuading", "persuaded", "persuasion"], answer: 0, level: "C1" }
];

window.startLevelTest = function() {
  document.getElementById("modal-intro").style.display = "none";
  var qDiv = document.getElementById("modal-questions");
  qDiv.style.display = "block";
  var html = "<h3 style='color:#4A9EE8;margin-bottom:20px'>Choose the best answer for each question.</h3>";
  levelTestQuestions.forEach(function(q, i) {
    html += "<div style='margin-bottom:20px'><p style='color:#fff;margin-bottom:8px'><strong>" + (i+1) + ".</strong> " + q.q + "</p>";
    q.options.forEach(function(opt, j) {
      html += "<label style='display:block;color:#94A3B8;margin-bottom:6px;cursor:pointer'><input type='radio' name='q" + i + "' value='" + j + "' style='margin-right:8px'>" + opt + "</label>";
    });
    html += "</div>";
  });
  html += "<button class='level-tab' onclick='submitLevelTest()' style='margin-top:8px'>See My Level</button>";
  html += "<button class='level-tab' onclick='closeModal()' style='background:transparent;border-color:#4A5568;color:#94A3B8;margin-left:12px'>Skip</button>";
  qDiv.innerHTML = html;
};

window.submitLevelTest = function() {
  var score = 0;
  levelTestQuestions.forEach(function(q, i) {
    var selected = document.querySelector("input[name='q" + i + "']:checked");
    if (selected && parseInt(selected.value) === q.answer) score++;
  });
  var level, msg;
  if (score <= 2) { level = "A1"; msg = "Beginner — start with our A1 listening files."; }
  else if (score <= 4) { level = "A2"; msg = "Elementary — our A2 files are a great fit for you."; }
  else if (score <= 6) { level = "B1"; msg = "Intermediate — try our B1 listening library."; }
  else if (score <= 8) { level = "B2"; msg = "Upper Intermediate — challenge yourself with B2."; }
  else { level = "C1"; msg = "Advanced — dive into our C1 content!"; }
  document.getElementById("modal-questions").style.display = "none";
  var result = document.getElementById("modal-result");
  result.style.display = "block";
  result.innerHTML = "<h2 style='color:#4A9EE8;margin-bottom:12px'>Your Level: " + level + "</h2><p style='color:#94A3B8;margin-bottom:24px'>" + msg + "</p><button class='level-tab' onclick='goToLevel(\"" + level + "\")'>Go to my content</button>";
};

window.closeModal = function() {
  var modal = document.getElementById("level-test-modal");
  if (modal) modal.style.display = "none";
};

window.goToLevel = function(level) {
  closeModal();
  document.querySelectorAll(".section").forEach(function(s) { s.classList.remove("active"); });
  var listeningSection = document.getElementById("listening");
  if (listeningSection) listeningSection.classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(function(b) { b.classList.remove("active"); });
  document.querySelectorAll(".nav-btn[data-section='listening']").forEach(function(b) { b.classList.add("active"); });
  window.selectAudioLevel(level);
};

// ---- SONG SELECTOR ----
window.selectVideoLevel = function(level) {
  document.querySelectorAll("[id^='video-level-']").forEach(function(el) {
    el.style.display = "none";
  });
  var target = document.getElementById("video-level-" + level);
  if (target) target.style.display = "block";
  document.querySelectorAll("#videos .level-tab").forEach(function(btn) {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick") === "selectVideoLevel('" + level + "')") btn.classList.add("active");
  });
};

window.selectSong = function(id) {
  document.querySelectorAll(".song-card").forEach(function(card) {
    card.style.display = "none";
  });
  if (id) {
    var card = document.getElementById(id);
    if (card) card.style.display = "block";
  }
};

function toggleLyrics(id, btn) {
  var box = document.getElementById(id);
  if (!box) return;
  if (box.style.display === "none") {
    box.style.display = "block";
    btn.textContent = "Hide Lyrics";
  } else {
    box.style.display = "none";
    btn.textContent = "Show Lyrics";
  }
}

function speakWord(word) {
  if (!window.speechSynthesis) return;
  var utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// ---- AUDIO LEVEL FUNCTIONS (global scope — no closure issues) ----
function showAudioFile(file) {
  var audioList = document.getElementById("audio-list");
  var existing = document.getElementById("audio-display");
  if (existing) existing.remove();
  if (!file || !audioList) return;

  var card = document.createElement("div");
  card.className = "card";
  card.id = "audio-display";
  var vocabHTML = file.vocab.map(function(v) {
    return "<li><strong>" + v.word + "</strong> <button class=\"speaker-btn\" onclick=\"speakWord('" + v.word + "')\">🔊</button> " + v.definition + "</li>";
  }).join("");
  var questionsHTML = (file.questions && file.questions.length > 0)
    ? "<div style='margin-top:16px'><h4>Discussion Questions</h4><ol>" + file.questions.map(function(q) { return "<li style='margin-bottom:8px'>" + q + "</li>"; }).join("") + "</ol></div>"
    : "";
  var vocabCol = file.vocab.length > 0
    ? "<div style='flex:1;min-width:200px'><ul style='display:block;padding-left:20px;margin:0'>" + vocabHTML + "</ul></div>"
    : "";
  var transcriptCol = file.transcriptSrc
    ? "<div style='flex:1;min-width:200px;text-align:right'><button class='level-tab' id='transcript-toggle-btn' onclick='toggleTranscript(\"" + file.transcriptSrc + "\")'>Show Transcript</button><div id='transcript-box' style='display:none;margin-top:12px;text-align:left;white-space:pre-wrap;line-height:1.7'></div></div>"
    : "";
  var columnsHTML = (vocabCol || transcriptCol)
    ? "<div style='display:flex;gap:24px;align-items:flex-start;margin-top:12px;flex-wrap:wrap'>" + vocabCol + transcriptCol + "</div>"
    : "";
  var contextKey = "ctx_" + Date.now();
  window._chatContexts = window._chatContexts || {};
  window._chatContexts[contextKey] = { title: file.title, level: file.level, vocab: file.vocab, questions: file.questions || [] };
  var chatBtn = "<button onclick='openChatBot(\"" + contextKey + "\")' style='display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6fa8,#4A9EE8);border:none;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(74,158,232,0.4)'>🎙️ Chat with Skipper</button>";
  card.innerHTML = "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px'><h3 style='margin:0'>" + file.title + "</h3>" + chatBtn + "</div>"
    + "<p>Listen to the audio and click the speaker icon to hear each word pronounced.</p>"
    + "<audio controls style='width:100%;margin:10px 0'><source src='" + file.src + "' type='audio/mpeg'>Your browser does not support the audio element.</audio>"
    + columnsHTML
    + questionsHTML;
  audioList.appendChild(card);
}

window.toggleTranscript = function toggleTranscript(src) {
  var box = document.getElementById("transcript-box");
  var btn = document.getElementById("transcript-toggle-btn");
  if (!box || !btn) return;
  if (box.style.display !== "none") {
    box.style.display = "none";
    btn.textContent = "Show Transcript";
    return;
  }
  if (box.dataset.loaded) {
    box.style.display = "block";
    btn.textContent = "Hide Transcript";
    return;
  }
  btn.textContent = "Loading...";
  fetch(src)
    .then(function(r) {
      if (!r.ok) throw new Error("Could not load transcript.");
      return r.text();
    })
    .then(function(text) {
      box.textContent = text;
      box.dataset.loaded = "true";
      box.style.display = "block";
      btn.textContent = "Hide Transcript";
    })
    .catch(function(err) {
      box.textContent = err.message;
      box.style.display = "block";
      btn.textContent = "Hide Transcript";
    });
};

// ---- AI VOICE CHAT BOT ----

var _chatMessages = [];
var _chatFileContext = null;
var _chatRecognition = null;
var _chatSpeaking = false;

function openChatBot(contextKey) {
  _chatFileContext = (window._chatContexts && window._chatContexts[contextKey]) || {};
  _chatMessages = [];

  // Remove existing chat panel if any
  var existing = document.getElementById("chat-panel");
  if (existing) existing.remove();

  var panel = document.createElement("div");
  panel.id = "chat-panel";
  panel.style.cssText = "position:fixed;bottom:0;right:0;width:380px;max-width:100vw;height:520px;background:#1E2D3D;border:1px solid #4A9EE8;border-radius:12px 12px 0 0;display:flex;flex-direction:column;z-index:9999;box-shadow:0 -4px 24px rgba(0,0,0,0.5)";

  panel.innerHTML = [
    "<div style='display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #2D3F55;background:#162030;border-radius:12px 12px 0 0'>",
      "<div>",
        "<div style='font-weight:bold;font-size:14px;color:#fff'>🎙️ Skipper — AI English Tutor</div>",
        "<div style='font-size:11px;color:#94A3B8;margin-top:2px'>" + (_chatFileContext.title || "Listening file") + "</div>",
      "</div>",
      "<button onclick='closeChatBot()' style='background:none;border:none;color:#94A3B8;font-size:20px;cursor:pointer;padding:4px 8px' title='Close'>✕</button>",
    "</div>",
    "<div id='chat-messages' style='flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px'>",
      "<div class='chat-msg bot' style='background:#162030;border:1px solid #2D3F55;border-radius:10px;padding:10px 14px;font-size:13px;color:#CBD5E1;max-width:90%;align-self:flex-start'>",
        "Hi! I'm Skipper, your English tutor. Ask me anything about what you just listened to, or I can ask you some questions to check your understanding. What would you like to do?",
      "</div>",
    "</div>",
    "<div id='chat-status' style='padding:4px 16px;font-size:11px;color:#94A3B8;min-height:20px'></div>",
    "<div style='padding:12px 16px;border-top:1px solid #2D3F55;display:flex;gap:8px;align-items:flex-end'>",
      "<textarea id='chat-input' placeholder='Type a message...' rows='2' style='flex:1;background:#162030;border:1px solid #4A5568;border-radius:8px;color:#fff;padding:8px 10px;font-size:13px;resize:none;font-family:inherit;outline:none'></textarea>",
      "<div style='display:flex;flex-direction:column;gap:6px'>",
        "<button id='chat-mic-btn' onclick='toggleChatMic()' title='Speak' style='width:40px;height:40px;border-radius:50%;border:none;background:#2D3F55;color:#fff;font-size:18px;cursor:pointer'>🎤</button>",
        "<button onclick='sendChatMessage()' style='width:40px;height:40px;border-radius:50%;border:none;background:#4A9EE8;color:#fff;font-size:16px;cursor:pointer' title='Send'>➤</button>",
      "</div>",
    "</div>"
  ].join("");

  document.body.appendChild(panel);

  // Allow sending with Enter (Shift+Enter for new line)
  document.getElementById("chat-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChatMessage(); }
  });
}

function closeChatBot() {
  stopChatMic();
  window.speechSynthesis && window.speechSynthesis.cancel();
  var panel = document.getElementById("chat-panel");
  if (panel) panel.remove();
  _chatMessages = [];
}

function appendChatMessage(role, text) {
  var container = document.getElementById("chat-messages");
  if (!container) return;
  var div = document.createElement("div");
  var isBot = role === "assistant";
  div.style.cssText = "background:" + (isBot ? "#162030" : "#1a3a5c") + ";border:1px solid " + (isBot ? "#2D3F55" : "#4A9EE8") + ";border-radius:10px;padding:10px 14px;font-size:13px;color:#CBD5E1;max-width:90%;align-self:" + (isBot ? "flex-start" : "flex-end");
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function setChatStatus(text) {
  var el = document.getElementById("chat-status");
  if (el) el.textContent = text;
}

function sendChatMessage() {
  var input = document.getElementById("chat-input");
  if (!input) return;
  var text = input.value.trim();
  if (!text) return;
  input.value = "";
  sendChatText(text);
}

function sendChatText(text) {
  appendChatMessage("user", text);
  _chatMessages.push({ role: "user", content: text });
  setChatStatus("Thinking...");

  var context = _chatFileContext || {};
  fetch("https://plain-sailing-chat.natalie-davis48.workers.dev", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: _chatMessages, fileContext: context })
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    var reply = data.reply || "Sorry, I didn't get a response.";
    _chatMessages.push({ role: "assistant", content: reply });
    appendChatMessage("assistant", reply);
    setChatStatus("");
    speakChatReply(reply);
  })
  .catch(function() {
    appendChatMessage("assistant", "Sorry, there was a connection error. Please try again.");
    setChatStatus("");
  });
}

var _cachedVoice = null;

function pickBestVoice() {
  if (_cachedVoice) return _cachedVoice;
  var voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  var preferred = [
    "Microsoft Aria Online (Natural) - English (United States)",
    "Microsoft Jenny Online (Natural) - English (United States)",
    "Microsoft Sonia Online (Natural) - English (United Kingdom)",
    "Microsoft Libby Online (Natural) - English (United Kingdom)",
    "Google US English",
    "Google UK English Female"
  ];
  for (var i = 0; i < preferred.length; i++) {
    var match = voices.find(function(v) { return v.name === preferred[i]; });
    if (match) { _cachedVoice = match; return match; }
  }
  var online = voices.find(function(v) { return v.lang.startsWith("en") && v.name.toLowerCase().includes("online"); });
  if (online) { _cachedVoice = online; return online; }
  var english = voices.find(function(v) { return v.lang.startsWith("en"); });
  if (english) { _cachedVoice = english; return english; }
  return null;
}

// Pre-load voices as soon as they're available
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = function() { _cachedVoice = null; pickBestVoice(); };
  pickBestVoice();
}

function stripEmoji(text) {
  return text
    .replace(/[\u{1F000}-\u{1FFFF}]|[\u{2600}-\u{27FF}]|[\u{2300}-\u{23FF}]|[\u{FE00}-\u{FE0F}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA9F}]/gu, "")
    .replace(/\*+/g, "")
    .replace(/_+/g, "")
    .replace(/#+/g, "")
    .replace(/`+/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function speakChatReply(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  function doSpeak() {
    var utter = new SpeechSynthesisUtterance(stripEmoji(text));
    var voice = pickBestVoice();
    if (voice) {
      utter.voice = voice;
      utter.lang = voice.lang;
    } else {
      utter.lang = "en-US";
    }
    utter.rate = 0.88;
    utter.pitch = 1.0;
    utter.volume = 1.0;
    utter.onstart = function() { setChatStatus("🔊 Speaking..."); };
    utter.onend = function() { setChatStatus(""); };
    window.speechSynthesis.speak(utter);
  }

  if (!pickBestVoice()) {
    setTimeout(doSpeak, 300);
  } else {
    doSpeak();
  }
}

function toggleChatMic() {
  if (_chatRecognition) { stopChatMic(); return; }
  startChatMic();
}

function startChatMic() {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    setChatStatus("Sorry, your browser doesn't support voice input.");
    return;
  }
  window.speechSynthesis && window.speechSynthesis.cancel();
  _chatRecognition = new SpeechRecognition();
  _chatRecognition.lang = "en-US";
  _chatRecognition.interimResults = false;
  _chatRecognition.continuous = false;

  var micBtn = document.getElementById("chat-mic-btn");
  if (micBtn) { micBtn.textContent = "⏹"; micBtn.style.background = "#e74c3c"; }
  setChatStatus("🎤 Listening...");

  var _gotResult = false;

  _chatRecognition.onresult = function(e) {
    _gotResult = true;
    var transcript = e.results[0][0].transcript;
    stopChatMic();
    var input = document.getElementById("chat-input");
    if (input) input.value = transcript;
    sendChatText(transcript);
  };
  _chatRecognition.onerror = function(e) {
    _gotResult = true;
    stopChatMic();
    if (e.error === "not-allowed") {
      setChatStatus("Microphone access denied. Please allow mic in your browser.");
    } else if (e.error === "network") {
      setChatStatus("Network error — Chrome needs internet for voice recognition.");
    } else {
      setChatStatus("Couldn't hear that (" + e.error + "). Try again.");
    }
  };
  _chatRecognition.onend = function() {
    if (!_gotResult) setChatStatus("Nothing heard. Try speaking more clearly or type instead.");
    stopChatMic();
  };
  _chatRecognition.start();
}

function stopChatMic() {
  if (_chatRecognition) {
    try { _chatRecognition.stop(); } catch(e) {}
    _chatRecognition = null;
  }
  var micBtn = document.getElementById("chat-mic-btn");
  if (micBtn) { micBtn.textContent = "🎤"; micBtn.style.background = "#2D3F55"; }
  var status = document.getElementById("chat-status");
  if (status && status.textContent === "🎤 Listening...") status.textContent = "";
}

window.openChatBot = openChatBot;
window.closeChatBot = closeChatBot;
window.sendChatMessage = sendChatMessage;
window.toggleChatMic = toggleChatMic;

// ---- END AI VOICE CHAT BOT ----

var _currentCategory = "All";

window.selectCategory = function(cat) {
  _currentCategory = cat;
  document.querySelectorAll("[data-category]").forEach(function(btn) {
    btn.classList.toggle("active", btn.getAttribute("data-category") === cat);
  });
  var activeLevel = document.querySelector("[data-audio-level].active");
  if (activeLevel) renderAudioLevel(activeLevel.getAttribute("data-audio-level"));
};

function renderAudioLevel(level) {
  var audioList = document.getElementById("audio-list");
  if (!audioList) return;
  audioList.innerHTML = "";
  var files = window._listeningFiles || [];
  var filtered = files.filter(function(f) {
    if (f.level !== level) return false;
    if (_currentCategory === "All") return true;
    return f.category === _currentCategory;
  });

  var select = document.createElement("select");
  select.style.marginTop = "16px";
  var defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = filtered.length === 0 ? "No files for this level yet" : "Select a listening file...";
  select.appendChild(defaultOption);

  filtered.forEach(function(file, i) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = file.title;
    select.appendChild(option);
  });

  select.addEventListener("change", function() {
    showAudioFile(filtered[parseInt(select.value)] || null);
  });

  audioList.appendChild(select);
}

window.selectAudioLevel = function(level) {
  document.querySelectorAll("[data-audio-level]").forEach(function(t) {
    t.classList.toggle("active", t.getAttribute("data-audio-level") === level);
  });
  var spotlightArea = document.getElementById("spotlight-area");
  if (spotlightArea) spotlightArea.innerHTML = "";
  renderAudioLevel(level);
};

// Initialise audio list on page load
(function() {
  var audioList = document.getElementById("audio-list");
  if (audioList) renderAudioLevel("A1");

  document.querySelectorAll("[data-audio-level]").forEach(function(tab) {
    tab.addEventListener("click", function() {
      window.selectAudioLevel(tab.getAttribute("data-audio-level"));
    });
  });
}());