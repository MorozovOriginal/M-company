// HTML СТРАНИЦА ЛИЧНАЯ (Портфолио)
const facts = [
    "Я обожаю программировать!",
    "Мой любимый язык — JavaScript.",
    "Я мечтаю стать профессиональным разработчиком.",
    "Люблю пиццу и кофе.",
    "Мой первый сайт был про мою собаку."
  ];
  
  const factButton = document.createElement("button");
  factButton.textContent = "Узнать факт обо мне";
  factButton.style.margin = "10px";
  factButton.style.padding = "10px 20px";
  factButton.style.backgroundColor = "#007BFF";
  factButton.style.color = "#fff";
  factButton.style.border = "none";
  factButton.style.borderRadius = "5px";
  factButton.style.cursor = "pointer";
  
  factButton.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
  });
  
  document.body.appendChild(factButton);