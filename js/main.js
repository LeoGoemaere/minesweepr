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
	// main.style.overflow = "hidden";
	// main.style.height = "100vh";

	const slides = document.querySelectorAll('.slide');
	const wrapSlide = document.querySelector('.wrapSlide');


	class SlideShow {
		constructor(container, slides, wrapSlide, transformValue, slidePosition) {
			this.container = container;
			this.slides = slides;
			this.wrapSlide = wrapSlide;
			this.transformValue = transformValue;
			this.slidePosition = slidePosition;
			this.scrollDown = false;
			this.touchStart = 0;
			this.touchEnd = 0;
			this.touchDown = 0;
			this.active = false;
		}
		down() {
			if (this.active === true) {
				if (this.slidePosition < this.slides.length - 1) {
					this.slidePosition += 1;
					this.transformValue = this.slidePosition * (this.wrapSlide.offsetHeight / 3);
					this.wrapSlide.style.transform = `translate3d(0px, -${this.transformValue}px, 0px)`;
				}
			}
		}
		up() {
			if (this.active === true) {
				if (this.slidePosition > 0) {
					this.slidePosition -= 1;
					this.transformValue = this.transformValue - (this.wrapSlide.offsetHeight / 3);
					this.wrapSlide.style.transform = `translate3d(0px, -${this.transformValue}px, 0px)`;
				}				
			}
		}
		activate() {
			if (this.active === true) {
				this.container.classList.add('activate');
				console.log('test');
			} else {
				this.container.classList.remove('activate');
				this.wrapSlide.style.transform = 'none';
			}
		}
	}

	const slideShow = new SlideShow(main, slides, wrapSlide, 0, 0);

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

	if (window.innerWidth > 768) {
		slideShow.active = true;
		
		console.log(slideShow.active);

	} else {
		slideShow.active = false;
		console.log(slideShow.active);
	}
	slideShow.activate();

	window.addEventListener('resize', () => {

		if (window.innerWidth > 768) {
			slideShow.active = true;
			setHeight();
		} else {
			slideShow.active = false;
			setHeight();
		}
		slideShow.activate();
	}, false);

	// VH simulate

	let innerHeight = window.innerHeight;

	let setHeight = () => {

		let innerHeight = window.innerHeight;
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.height = `${innerHeight}px`;
		}

	};

		setHeight();
	
}, false);