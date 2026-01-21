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

let currentIndex = 0;
const banner = document.getElementById("banner");

let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");
let imgs = document.querySelector(".banner-img");
let dots = document.querySelector(".dots");

const slideElement = [];

// fonctions et boucles
slides.forEach((slide) => {
  const image = slide.image;
  const alt = slide.tagLine;

  let slideShowed = document.createElement("img");
  slideShowed.setAttribute("src", `../assets/images/slideshow/${image}`);
  slideShowed.setAttribute("alt", alt);
  slideShowed.className = "banner-img";
  banner.appendChild(slideShowed);
  slideElement.push(slideShowed);
  
  createDots();
  // dots.firstChild = "dot_selected" ;
  // console.log(dots.firstChild);
});

function createDots(){
  let dot = document.createElement("div");
  dot.className = "dot";
  dots.appendChild(dot);
}

if (slideElement[currentIndex]) {
  
}


// event
rightArrow.addEventListener("click", () => {
currentIndex++
  if (currentIndex % 4 === 0){
    currentIndex = 0;
  }
  // currentIndex = (currentIndex + 1) % 4 ;

  console.log(currentIndex);
  console.log(slideElement[currentIndex]);
  slideElement[currentIndex].style.display = 'block';
  console.log("fleche droite");
});


leftArrow.addEventListener("click", () => {
  
  currentIndex--
  if (currentIndex === -1){
    currentIndex = 3;
  }

  slideElement[currentIndex].style.display = 'block';
  console.log("fleche gauche");
  console.log(currentIndex);
});
console.log(slideElement[currentIndex]);
   
