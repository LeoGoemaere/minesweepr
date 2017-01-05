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

	const main = document.querySelector('main');
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
		activate() {
			this.container.classList.add('activate');
		}
		desactivate() {
			this.container.classList.remove('activate');
			this.wrapSlide.style.transform = 'none';
		}
		setHeight() {
			let innerHeight = window.innerHeight;
			for (let i = 0; i < this.slides.length; i++) {
				this.slides[i].style.height = `${innerHeight}px`;
			}
		}
	}

	const slideShow = new SlideShow(main, slides, wrapSlide, 0, 0);

	// NEW SLIDE SHOW

	// Check if browser mobile
	function detectmob() { 
	 if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){
	    return true;
	  }
	 else {
	    return false;
	  }
	}

	// Init function : run slideShow script if detectmob is false
	const init = () => {
		if (detectmob()) {
			slideShow.active = false;
			slideShow.desactivate();
		} else {
			slideShow.active = true;
			slideShow.activate();
		}		
	}

	// Initialization slideShow on load
	init();

	// Fallback vh unit :
	// Set slide to 100% viewport height on load
	slideShow.setHeight();

	document.addEventListener('wheel', (e) => {

		// Determinate user scroll direction
		slideShow.scrollDown = e.wheelDelta < 0 ? true : false;

		// Play slideShow on scroll
		if (slideShow.active === true) {
			if (slideShow.scrollDown === true) {
				slideShow.down();
			} else {
				slideShow.up();
			}			
		}

	}, false);

	document.addEventListener('touchstart', (e) => {

		// Check coordinates of touch start
		slideShow.touchStart = e.changedTouches[0].clientY;

	}, false);

	document.addEventListener('touchend', (e) => {

		// Check coordinate of touch end
		slideShow.touchEnd = e.changedTouches[0].clientY;

		// Determinate user touch direction
		slideShow.touchDown = slideShow.touchEnd > slideShow.touchStart ? false : true;
		
		// Play slideShow on touch
		if (slideShow.active === true) {
			if (slideShow.touchDown === true) {
				slideShow.down();
			} else {
				slideShow.up();
			}
		}

	}, false);

	window.addEventListener('resize', () => {

		// Re-initialization slideShow on resize
		init();

		// Re-calculate 100% viewport desktop height on resize
		if (detectmob() === false) {
			slideShow.setHeight();
		}
	}, false);

	// NEW SLIDE SHOW

	const mql = window.matchMedia("(orientation: portrait)");
	
	if (detectmob()) {
		mql.addListener(handleOrientationChange);
		handleOrientationChange(mql);		
	}

	function handleOrientationChange(mql) {
	  if (mql.matches) {
	    slideShow.setHeight();
	  } else {
	    slideShow.setHeight();
	  }
	}
	
}, false);