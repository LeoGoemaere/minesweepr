window.addEventListener('DOMContentLoaded', () => {
	// Get all boxes
	const boxes = document.querySelectorAll('.box');

	const animationDelay = 3.0; // in seconds
	const animateBox = (box) => {
		box.classList.add('active');
	};
	const animateBoxes = (previousBox) => {
		// Generate random number
		const randomNumber = Math.floor(Math.random() * boxes.length);
		// Get a random box from the random number
		const randomBox = boxes[randomNumber];

		if (typeof previousBox != 'undefined') {
			previousBox.classList.remove('active');
			previousBox.classList.add('inactive');
		}
		// Animate the box
		animateBox(randomBox);
		// Recursivity
		window.setTimeout(() => { animateBoxes(randomBox); }, animationDelay * 1000);
	};

	animateBoxes();

}, false);