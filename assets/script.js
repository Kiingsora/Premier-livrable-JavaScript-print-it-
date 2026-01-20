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
let imgs = document.querySelector(".banner-img");
let dots = document.querySelector(".dots");
const slideElement = [];
// fonctions et boucles

slides.forEach((slide, index) => {
  const image = slide.image;
  const alt = slide.tagLine;

  let slideShowed = document.createElement("img");
  slideShowed.setAttribute("src", `../assets/images/slideshow/${image}`);
  slideShowed.setAttribute("alt", alt);
  slideShowed.className = "banner-img";
  banner.appendChild(slideShowed);
  slideElement.push(slideShowed);
  
  // dots.firstChild = "dot_selected" ;
  // console.log(dots.firstChild);
  let dot = document.createElement("div");
  dot.className = "dot";
  dots.appendChild(dot);
  
});

console.log(slideElement);

// event

leftArrow.addEventListener("click", () => {
  slideElement[0].style.transform = "translateX(-1000px)";
  console.log("fleche gauche");
});

rightArrow.addEventListener("click", () => {
  slideElement[0].style.transform = "translateX(1000px)";
  console.log("fleche droite");
});


