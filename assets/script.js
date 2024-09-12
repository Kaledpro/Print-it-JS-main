

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


// arrows and addEventListener
const arrow_left = document.querySelector('.arrow_left');

const arrow_right = document.querySelector('.arrow_right');


let dot = document.querySelectorAll(".dot");
let bannerimg = document.querySelector(".banner-img");
let bannertitle = document.querySelector(".banner-title");
let totalslides = slides.length;

let currentIndex = 0;

arrow_left.addEventListener("click", function(){
	if (currentIndex < 0) {
		currentIndex--;
	} 
	slideshow(currentIndex);
	//console.log('Left_Arrow');
});

arrow_right.addEventListener('click', function(){
	if (currentIndex >= slides.length) {
		currentIndex++;
	}
	slideshow(currentIndex);
	//console.log('Right_Arrow');
}); 

function slideshow(index) {
		const currentslide = slides[index];
		const images = "/assets/images/slide[i]";
		bannerimg.src =currentslide.assets
		bannertitle.innerHTML = currentslide.tagLine
		dot.forEach(onedot => onedot.classList.remove('.dot_selected'))
		dot[index].classList.add('dot_selected')
}



/*function slideshow(index) {
	const imgs = bannerimg.querySelectorAll('img');
		imgs.forEach((img, index) => {
		img.classList.toggle('active', index === currentIndex);
});
}*/

/*
function loadimage() {
	slides.forEach(src => { 
	const img = document.createElement('img');
	img.src = src;
	bannerimg.appendChild(img);
});
}


function dotload() {
	dot.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		currentIndex = index;
		slideshow(currentIndex);
});
});
}
*/

//console.log(slides[0]);

function imageshow() {
	imgs.forEach(src => { 
	const imgs = document.createElement('img');
	img.src = src;
	bannerimg.appendChild(img);
	});
	}
	
	/*const dots= document.querySelector('.dots');
	const dot= document.querySelector('.dot');
	const add= dots.push('.dot');
	console.log(add);*/

function setup() {
	imageshow();
	dotload();
	showslide();
}