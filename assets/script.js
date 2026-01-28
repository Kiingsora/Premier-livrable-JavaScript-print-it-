//----------------------- Variables
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    alt: "background coloré jaune avec plusieurs dessins"
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    alt: "image d'un openspace"
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    alt: "divers palette de couleur"
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    alt: "image représentant une machine imprimant des journaux "
  },
];

let currentIndex = 0;
const banner = document.getElementById("banner");

let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");
let imgs = document.querySelector(".banner-img");
let dots = document.querySelector(".dots");
let arrayDots=[];

const slideElement = [];

//----------------------- Fonctions and Loop

slides.forEach((slide) => {
  const image = slide.image;
  const alt = slide.tagLine;

  let slideShowed = document.createElement("img");
  slideShowed.setAttribute("src", `../assets/images/slideshow/${image}`);
  slideShowed.setAttribute("alt", alt);
  slideShowed.className = "banner-img";
  slideShowed.style.display = "block";
  banner.appendChild(slideShowed);
  slideElement.push(slideShowed);

  createDots();
  arrayDots[0].classList.add ("dot_selected");

});

function createDots() {
  let dot = document.createElement("div");
  dot.className = "dot";
  
  arrayDots.push(dot)
  dots.appendChild(dot);
}

function updateSlideDisplay() {
  slideElement.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = "block";
      arrayDots[index].classList.add ("dot_selected");
    } else {
      slide.style.display = "none"; 
      arrayDots[index].classList.remove ("dot_selected");
    }
  });
}

//----------------------- Event

rightArrow.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex % 4 === 0) {
    currentIndex = 0;
  }
  updateSlideDisplay();
});

leftArrow.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex === -1) {
    currentIndex = 3;
  }
  updateSlideDisplay();
  console.log(slideElement[currentIndex]);
});

