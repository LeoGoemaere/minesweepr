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

	

		const main = document.querySelector('main');
		const slides = document.querySelectorAll('.slide');

		const setHeight = () => {
			let innerHeight = window.innerHeight;
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.height = `${innerHeight}px`;
			}
		}

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

		// Fallback vh unit :
		// Set slide to 100% viewport height on load
		setHeight();

		let portrait = false;

		const handleOrientation = () => {
			if (window.innerWidth < window.innerHeight) {
				portrait = true;
			} else {
				portrait = false;
			}
		};

		// Change value of portrait's let
		handleOrientation();	

		window.addEventListener('resize', () => {

			// Re-calculate 100% viewport desktop height on resize
			if (detectmob() === false) {
				setHeight();
			}

			// fix bug on safari mobile : on scroll the window is resizing herself
			// Re-calculate 100% viewport height on mobiles devices on orientation change
			if (portrait) {
				if (window.innerWidth > window.innerHeight) {
					setHeight();
					portrait = false;
				}
			} else {
				if (window.innerWidth < window.innerHeight) {
					setHeight();
					portrait = true;
				}
			}

		}, false);
	
}, false);