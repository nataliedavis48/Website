document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".section");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-section");
      if (!target) return;

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
  { title: "Inflation in Iran", level: "A1", src: "Audio/A1/Inflation in Iran.mp3", vocab: [
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
  { title: "Public Transport", level: "A1", src: "Audio/A1/Public Transport.mpeg", vocab: [
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
  { title: "Fall of Assad", level: "A2", src: "Audio/A2/Fall of Assad.mpeg", vocab: [
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
  { title: "Iran Protests: Economic Discontent", level: "A2", src: "Audio/A2/Iran Protests_ Economic Discontent.mp3", vocab: [
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
  { title: "Iron Beam", level: "A2", src: "Audio/A2/Iron Beam.mp3", vocab: [
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
  { title: "Mossad's Secret Agent Yael", level: "A2", src: "Audio/A2/Mossad's Secret Agent Yael.mp3", vocab: [
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
  { title: "Public Transport", level: "A2", src: "Audio/A2/Public Transport.mpeg", vocab: [
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
  { title: "Pros and Cons of TV", level: "A2", src: "Audio/A2/Pros and Cons of TV.mp4", vocab: [
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
  { title: "Is Europe Ready for War with Tehran?", level: "A2", src: "Audio/A2/Is Europe Ready for War with Tehran.mp4", vocab: [
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
  { title: "The Happiest Countries 2026", level: "A2", src: "Audio/A2/The Happiest Countries 2026.mp4", vocab: [
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
  { title: "Cluster Missiles", level: "B1", src: "Audio/B1/Cluster Missiles.mp4", vocab: [
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
  { title: "Cross-Border Mysteries: Ahmad Shukr's Story", level: "B1", src: "Audio/B1/Cross-Border Mysteries_ Ahmad Shukrs Story.mp3", vocab: [
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
  { title: "Fall of Assad", level: "B1", src: "Audio/B1/Fall of Assad.mpeg", vocab: [
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
  { title: "Hidden Jewish History of Somaliland", level: "B1", src: "Audio/B1/Hidden Jewish History of Somaliland.mp3", vocab: [
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
  { title: "Iran Protests and Potential Changes", level: "B1", src: "Audio/B1/Iran Protests and Potential Changes.mp3", vocab: [
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
  { title: "Iran Protests: Economic Origins and Beyond", level: "B1", src: "Audio/B1/Iran Protests_ Economic Origins and Beyond.mp3", vocab: [
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
  { title: "Oron Shaul", level: "B1", src: "Audio/B1/Oron Shaul.mpeg", vocab: [
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
  { title: "Public Transport", level: "B1", src: "Audio/B1/Public Transport.mpeg", vocab: [
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
  { title: "Secrets of the Night", level: "B1", src: "Audio/B1/Secrets of the Night.mp3", vocab: [
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
  { title: "Somaliland's Quest for Recognition", level: "B1", src: "Audio/B1/Somaliland's Quest for Recognition.mp3", vocab: [
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
  { title: "Understanding the Iran Protests", level: "B1", src: "Audio/B1/Understanding the Iran Protests.mp3", vocab: [
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
  { title: "A Moral Dilemma", level: "B1", src: "Audio/B1/moral.mp3", vocab: [
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
  { title: "US Iran Nuclear Tensions", level: "B1", src: "Audio/B1/US Iran Nuclear Tensions.mpeg", vocab: [
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
  { title: "Black Rain in Tehran", level: "B1", src: "Audio/B1/Black Rain in Tehran.mpeg", vocab: [
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
  { title: "Pros and Cons of TV", level: "B1", src: "Audio/B1/Pros and Cons of TV.mp4", vocab: [
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
  { title: "Is Europe Ready for War with Tehran?", level: "B1", src: "Audio/B1/Is Europe Ready for War with Tehran.mp4", vocab: [
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
  { title: "The Happiest Countries 2026", level: "B1", src: "Audio/B1/The Happiest Countries 2026.mp4", vocab: [
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
  { title: "Martha's Journey to Mental Wellness", level: "B1", src: "Audio/B1/Martha's Journey to Mental Wellness.mpeg", vocab: [
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
  { title: "Rescuing the American Navigator in Iran", level: "B1", src: "Audio/B1/Rescuing the American Navigator in Iran.mpeg", vocab: [
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
  { title: "Peace Talks Between Iran and USA", level: "B1", src: "Audio/B1/Peace Talks Between Iran and USA.mp4", vocab: [
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
  { title: "Cluster Missiles", level: "B2", src: "Audio/B2/Cluster Missiles.mp4", vocab: [
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
  { title: "Pros and Cons of TV", level: "B2", src: "Audio/B2/Pros and Cons of TV.mp4", vocab: [
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
  { title: "Is Europe Ready for War with Tehran?", level: "B2", src: "Audio/B2/Is Europe Ready for War with Tehran.mp4", vocab: [
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
  { title: "Exploring Somaliland: A Hidden Gem", level: "B2", src: "Audio/B2/Exploring Somaliland_ A Hidden Gem.mp3", vocab: [
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
  { title: "Fall of Assad", level: "B2", src: "Audio/B2/Fall of Assad.mpeg", vocab: [
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
  { title: "Giving Advice", level: "B1", src: "Audio/B1/Giving Advice.mpeg", vocab: [
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
  { title: "Iran Protests and Potential Changes", level: "B2", src: "Audio/B2/Iran Protests and Potential Changes.mp3", vocab: [
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
  { title: "Iron Beam: The Future of Laser Weapons", level: "B2", src: "Audio/B2/Iron Beam_ The Future of Laser Weapons.mp3", vocab: [
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
  { title: "Lost Jewish Connections of Somaliland", level: "B2", src: "Audio/B2/Lost Jewish Connections of Somaliland.mp3", vocab: [
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
  { title: "Mossad's Secret Agent Yael", level: "B2", src: "Audio/B2/Mossad's Secret Agent Yael.mp3", vocab: [
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
  { title: "Oron Shaul", level: "B2", src: "Audio/B2/Oron Shaul.mpeg", vocab: [
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
  { title: "Somaliland's Quest for Recognition", level: "B2", src: "Audio/B2/Somaliland's Quest for Recognition.mp3", vocab: [
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
  { title: "Rachel Goldberg-Polin: A Voice for the Unthinkable", level: "B2", src: "Audio/B2/rachel-goldberg-polin.mp3.mp3", vocab: [
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
  { title: "Shulamit Cohen", level: "B2", src: "Audio/B2/Shulamit Cohen.mp4", vocab: [
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
  { title: "The Happiest Countries 2026", level: "B2", src: "Audio/B2/The Happiest Countries 2026.mp4", vocab: [
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
  { title: "Pros and Cons of TV", level: "C1", src: "Audio/C1/Pros and Cons of TV.mp4", vocab: [
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
  { title: "Is Europe Ready for War with Tehran?", level: "C1", src: "Audio/C1/Is Europe Ready for War with Tehran.mp4", vocab: [
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
  { title: "Assad: Last Days in Power", level: "C1", src: "Audio/C1/Assad_ Last Days in Power.mpeg", vocab: [
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
  { title: "Cluster Missiles", level: "C1", src: "Audio/C1/Cluster Missiles.mp4", vocab: [
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
  { title: "Giving Advice", level: "C1", src: "Audio/C1/Giving Advice.mpeg", vocab: [
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
  { title: "Iran's Turmoil and Economic Strife", level: "C1", src: "Audio/C1/Iran's Turmoil and Economic Strife.mp3", vocab: [
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
  { title: "Iron Beam: The Future of Laser Weapons", level: "C1", src: "Audio/C1/Iron Beam_ The Future of Laser Weapons.mp3", vocab: [
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
  { title: "The Happiest Countries 2026", level: "C1", src: "Audio/C1/The Happiest Countries 2026.mp4", vocab: [
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
  { title: "Somaliland's Quest for Recognition", level: "C1", src: "Audio/C1/Somaliland's Quest for Recognition.mp3", vocab: [
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
  { title: "Rescuing an American Navigator in Iran", level: "C1", src: "Audio/C1/Rescuing an American Navigator in Iran.mpeg", vocab: [
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
  ], transcriptSrc: "Transcripts/C1/Rescuing an American Navigator in Iran.txt"}
];
// -----------------------------------------------------
window._listeningFiles = listeningFiles;

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
function showSection(sectionId, activeBtnId) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(sectionId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const btn = activeBtnId
    ? document.getElementById(activeBtnId)
    : document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
  if (btn) btn.classList.add("active");
}

// ---- AUDIO LEVEL TAB ----
function activateAudioTab(level) {
  document.querySelectorAll("[data-audio-level]").forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-audio-level") === level);
  });
}

// ---- LISTENING SPOTLIGHT ----
window.openFeaturedListening = function () {
  showSection("listening", "spotlight-btn");

  const spotlightArea = document.getElementById("spotlight-area");
  if (!spotlightArea) return;

  const featured = listeningFiles.find(
    file => file.title === "The Happiest Countries 2026" && file.level === "B1"
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
  card.innerHTML = "<h3>" + file.title + "</h3>"
    + "<p>Listen to the audio and click the speaker icon to hear each word pronounced.</p>"
    + "<audio controls style='width:100%;margin:10px 0'><source src='" + file.src + "' type='audio/mpeg'>Your browser does not support the audio element.</audio>"
    + columnsHTML
    + questionsHTML;
  audioList.appendChild(card);
}

function toggleTranscript(src) {
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
}

function renderAudioLevel(level) {
  var audioList = document.getElementById("audio-list");
  if (!audioList) return;
  audioList.innerHTML = "";
  var files = window._listeningFiles || [];
  var filtered = files.filter(function(f) { return f.level === level; });

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