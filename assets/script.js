const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");

leftArrow.addEventListener("click", ()=> {
	console.log("fleche gauche");
})

rightArrow.addEventListener("click", ()=> {
	console.log("fleche droite");
})

let dots = document.querySelectorAll('.dots');
for (let i = 0; i < dots.length; i++) {
	const dot = dots[i]; 
}
console.log(dots);