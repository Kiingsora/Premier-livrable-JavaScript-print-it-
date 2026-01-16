// Variables 
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const banner = document.getElementById("banner");

let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let imgs = document.querySelectorAll(".banner-img");
let dots = document.querySelector(".dots");

// fonctions et boucles

slides.forEach(slide => {
  const image = slide.image;
  const alt = slide.tagLine;
  
  let slideShowed = document.createElement("img");
  slideShowed.setAttribute("src", `../assets/images/slideshow/${image}`)
  slideShowed.setAttribute("alt", alt);
  slideShowed.className = "banner-img";
  // dots.firstChild = "dot_selected" ;
  // console.log(dots.firstChild);
  banner.appendChild(slideShowed);
  
  let dot = document.createElement("div");
  dot.className = "dot";
  dots.appendChild(dot);
  
})

// event

leftArrow.addEventListener("click", () => {
  // animation: 0.5s linear 1s infinite alternate slide-in;
  
});

rightArrow.addEventListener("click", () => {
  console.log("fleche droite");
});
