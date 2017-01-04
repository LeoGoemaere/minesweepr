window.addEventListener('DOMContentLoaded', () => {
	// Get all boxes
	// const boxes = document.querySelectorAll('.box');

	// const animationDelay = 3.0; // in seconds
	// const animateBox = (box) => {
	// 	box.classList.add('active');
	// };
	// const animateBoxes = (previousBox) => {
	// 	// Generate random number
	// 	const randomNumber = Math.floor(Math.random() * boxes.length);
	// 	// Get a random box from the random number
	// 	const randomBox = boxes[randomNumber];

	// 	if (typeof previousBox != 'undefined') {
	// 		previousBox.classList.remove('active');
	// 		previousBox.classList.add('inactive');
	// 	}
	// 	// Animate the box
	// 	animateBox(randomBox);
	// 	// Recursivity
	// 	window.setTimeout(() => { animateBoxes(randomBox); }, animationDelay * 1000);
	// };

	// animateBoxes();

	// Animate slide

	let slidePosition = 0;
	let valueTransform = 0;
	let scrollDown = false;

	// Add styles in JS in case of browser JS is desactivate
	const main = document.querySelector('main');
	main.style.overflow = "hidden";
	main.style.height = "100vh";

	const slides = document.querySelectorAll('.slide');
	const wrapSlide = document.querySelector('.wrapSlide');

	const slide = () => {

		if (scrollDown === true) {
			if (slidePosition < slides.length - 1) {

				slidePosition += 1;
				valueTransform = slidePosition * (wrapSlide.offsetHeight / 3);
				wrapSlide.style.transform = `translate3d(0px, -${valueTransform}px, 0px)`;
				console.log(slidePosition);

			}
		} else {
			if (slidePosition > 0) {

				slidePosition -= 1;
				valueTransform = valueTransform - (wrapSlide.offsetHeight / 3);
				wrapSlide.style.transform = `translate3d(0px, -${valueTransform}px, 0px)`;
				console.log(slidePosition);

			}
		}

	};

	document.addEventListener('wheel', (e) => {

		scrollDown = e.wheelDelta < 0 ? true : false;
		slide();

	}, false);


}, false);