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
});