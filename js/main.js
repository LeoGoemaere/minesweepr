window.addEventListener('DOMContentLoaded', () => {

	const boxAnimation = document.querySelectorAll(".box");

	let boxReveal = Math.floor((Math.random() * 3));
	const randomBox = [];

	for (var i = 0; i < 3; i++) {
		randomBox[i] = Math.floor((Math.random() * boxAnimation.length));
	}

	class RandomBox {
		constructor(boxs) {
			this.boxs = boxs;
		}

		play(revealDelay, hideDelay) {

			const randomBox = [];

			for (var i = 0; i < 3; i++) {
				randomBox[i] = Math.floor((Math.random() * boxAnimation.length));
			}

			let random_1 = Math.floor((Math.random() * boxAnimation.length));
			let random_2 = Math.floor((Math.random() * boxAnimation.length));
			let random_3 = Math.floor((Math.random() * boxAnimation.length));

			let boxReveal = Math.floor((Math.random() * 3));

			window.setTimeout(() => {

				if (boxReveal === 0) {

						this.boxs[randomBox[0]].classList.add('active');
						this.boxs[randomBox[0]].classList.remove('inactive');

						window.setTimeout(() => {

							this.boxs[randomBox[0]].classList.add('inactive');
							this.boxs[randomBox[0]].classList.remove('active');

						}, hideDelay);

					} else if (boxReveal === 1) {

						this.boxs[randomBox[0]].classList.add('active');
						this.boxs[randomBox[1]].classList.add('active');
						this.boxs[randomBox[0]].classList.remove('inactive');
						this.boxs[randomBox[1]].classList.remove('inactive');

						window.setTimeout(() => {

							this.boxs[randomBox[0]].classList.add('inactive');
							this.boxs[randomBox[1]].classList.add('inactive');
							this.boxs[randomBox[0]].classList.remove('active');
							this.boxs[randomBox[1]].classList.remove('active');

						}, hideDelay);

					} else {

						this.boxs[randomBox[0]].classList.add('active');
						this.boxs[randomBox[1]].classList.add('active');
						this.boxs[randomBox[2]].classList.add('active');
						this.boxs[randomBox[0]].classList.remove('inactive');
						this.boxs[randomBox[1]].classList.remove('inactive');
						this.boxs[randomBox[2]].classList.remove('inactive');

						window.setTimeout(() => {

							this.boxs[randomBox[0]].classList.add('inactive');
							this.boxs[randomBox[1]].classList.add('inactive');
							this.boxs[randomBox[2]].classList.add('inactive');
							this.boxs[randomBox[0]].classList.remove('active');
							this.boxs[randomBox[1]].classList.remove('active');
							this.boxs[randomBox[2]].classList.remove('active');

						}, hideDelay);

					}

					this.play(revealDelay, hideDelay);

			}, revealDelay)
		}
	}

	const gridRandom = new RandomBox(boxAnimation);

	gridRandom.play(1000, 5000);

}, false);