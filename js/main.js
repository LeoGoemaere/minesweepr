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

	// Add styles in JS in case of browser JS is desactivate
	const main = document.querySelector('main');
	main.style.overflow = "hidden";
	main.style.height = "100vh";

	const slides = document.querySelectorAll('.slide');
	const wrapSlide = document.querySelector('.wrapSlide');


	class SlideShow {
		constructor(slides, wrapSlide, transformValue, slidePosition) {
			this.slides = slides;
			this.wrapSlide = wrapSlide;
			this.transformValue = transformValue;
			this.slidePosition = slidePosition;
			this.scrollDown = false;
			this.touchStart = 0;
			this.touchEnd = 0;
			this.touchDown = 0;
		}
		down() {
			if (this.slidePosition < this.slides.length - 1) {
				this.slidePosition += 1;
				this.transformValue = this.slidePosition * (this.wrapSlide.offsetHeight / 3);
				this.wrapSlide.style.transform = `translate3d(0px, -${this.transformValue}px, 0px)`;
			}
		}
		up() {
			if (this.slidePosition > 0) {
				this.slidePosition -= 1;
				this.transformValue = this.transformValue - (this.wrapSlide.offsetHeight / 3);
				this.wrapSlide.style.transform = `translate3d(0px, -${this.transformValue}px, 0px)`;
			}
		}
	}

	const slideShow = new SlideShow(slides, wrapSlide, 0, 0);

	document.addEventListener('wheel', (e) => {

		slideShow.scrollDown = e.wheelDelta < 0 ? true : false;

		if (slideShow.scrollDown === true) {
			slideShow.down();
		} else {
			slideShow.up();
		}

	}, false);

	document.addEventListener('touchstart', (e) => {
		slideShow.touchStart = e.changedTouches[0].clientY;
	}, false);

	document.addEventListener('touchend', (e) => {
		slideShow.touchEnd = e.changedTouches[0].clientY;
		slideShow.touchDown = slideShow.touchEnd > slideShow.touchStart ? false : true;
		
		if (slideShow.touchDown === true) {
			slideShow.down();
		} else {
			slideShow.up();
		}
	}, false);

}, false);