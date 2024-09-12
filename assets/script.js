// variables

const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

let dot = document.querySelectorAll(".dot");
let dots = document.querySelectorAll(".dots");
let bannerimg = document.querySelector(".banner-img");
let bannertitle = document.querySelector(".banner-title");
let totalslides = slides.length;

let currentIndex = 0;


// arrows events

arrow_left.addEventListener("click", function(){
		currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length -1;
	} 
	slideshow(currentIndex);
	activedot();
	//console.log('Left_Arrow');
});

arrow_right.addEventListener('click', function(){
		currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0;
	}
	slideshow(currentIndex);
	activedot();
	//console.log('Right_Arrow');
}); 

function slideshow(index) {
		const currentslide = slides[index];
		bannerimg.src = currentslide.image
		bannertitle.innerHTML = currentslide.tagLine
}

function activedot() {
	dot.forEach((dot, index) => {
	dot.classList.remove('dot_selected');
	if (index === currentIndex) {
			dot.classList.add('dot_selected');
	}
});
}