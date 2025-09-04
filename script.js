const langToggle = document.getElementById("lang-toggle");

const texts = {
  bg: {
    title:"Личен блог на Нежи",
    heroTitle:"Добре дошли в моя свят",
    heroSubtitle:"Място за мисли, вдъхновения и истории",
    heroBtn:"Научи повече",
    aboutTitle:"За мен",
    aboutText:"Аз съм Нежи и това е моето онлайн пространство, където споделям лични мисли, книги, които обичам, и идеи, които ме вдъхновяват.",
    articlesTitle:"Статии",
    articles:["Как започнах моя блог","Любими книги и цитати","Моето вдъхновение"],
    footer:"© 2025 Личен блог на Нежи",
    button:"EN"
  },
  en: {
    title:"Neji's Personal Blog",
    heroTitle:"Welcome to My World",
    heroSubtitle:"A place for thoughts, inspiration, and stories",
    heroBtn:"Learn more",
    aboutTitle:"About Me",
    aboutText:"I am Neji and this is my online space where I share personal thoughts, books I love, and ideas that inspire me.",
    articlesTitle:"Articles",
    articles:["How I Started My Blog","Favorite Books and Quotes","My Inspiration"],
    footer:"© 2025 Neji's Personal Blog",
    button:"BG"
  }
};

let currentLang = "bg";

langToggle.addEventListener("click",()=>{
  currentLang = currentLang==="bg"?"en":"bg";
  const lang=texts[currentLang];
  document.getElementById("title").textContent=lang.title;
  document.getElementById("hero-title").textContent=lang.heroTitle;
  document.getElementById("hero-subtitle").textContent=lang.heroSubtitle;
  document.getElementById("hero-btn").textContent=lang.heroBtn;
  document.getElementById("about-title").textContent=lang.aboutTitle;
  document.getElementById("about-text").textContent=lang.aboutText;
  document.getElementById("articles-title").textContent=lang.articlesTitle;
  const links=document.querySelectorAll("#articles .card a h3");
  links.forEach((link,i)=>{link.textContent=lang.articles[i]});
  document.getElementById("footer-text").textContent=lang.footer;
  langToggle.textContent=lang.button;
});
