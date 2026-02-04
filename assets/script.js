//----------------------- Variables
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    alt: "image représentant une machine imprimant des journaux",
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
    alt: "background coloré jaune avec plusieurs dessins" 
  },
];
let currentIndex = 0;
const banner = document.getElementById("banner");
let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");
let imgs = document.querySelector(".banner-img");
let dots = document.querySelector(".dots");
let centralSentence = document.querySelector("#banner p");  
const arrayDots=[];
const slideElement = [];
const textSlides = [];

//----------------------- Fonctions and Loop

slides.forEach((slide) => {
  const image = slide.image;
  const alt = slide.alt;
  let tagLine = slide.tagLine;
  
  let slideShowed = document.createElement("img");
  slideShowed.setAttribute("src", `../assets/images/slideshow/${image}`);
  slideShowed.setAttribute("alt", alt);
  slideShowed.className = "banner-img";

  banner.appendChild(slideShowed);
  slideElement.push(slideShowed);
  textSlides.push(tagLine);
  createDots();
  arrayDots[0].classList.add ("dot_selected");
  slideElement[0].style.display = "block";
});

function createDots() {
  let dot = document.createElement("div");
  dot.className = "dot";
  arrayDots.push(dot);
  dots.appendChild(dot);
}

function updateSlideDisplay() {
  slideElement.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = "block";
      arrayDots[index].classList.add ("dot_selected");
      textSlides[index].display = 'none';
      centralSentence.innerHTML = textSlides[index];
    } else {
      slide.style.display = "none"; 
      arrayDots[index].classList.remove ("dot_selected");
      textSlides[index].display = 'block';
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
    currentIndex = slides.length -1;
  }
  updateSlideDisplay();
});

