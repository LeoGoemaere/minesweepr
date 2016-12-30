window.addEventListener('DOMContentLoaded', () => {

	const boxAnimation = document.querySelectorAll(".box");

	let randomBox_1 = Math.floor((Math.random() * boxAnimation.length));
	let randomBox_2 = Math.floor((Math.random() * boxAnimation.length));
	let randomBox_3 = Math.floor((Math.random() * boxAnimation.length));

	let boxReveal = Math.floor((Math.random() * 3));

	class RandomBox {
		constructor(boxs) {
			this.boxs = boxs;
		}

		play(revealDelay, hideDelay) {

			let random_1 = Math.floor((Math.random() * boxAnimation.length));
			let random_2 = Math.floor((Math.random() * boxAnimation.length));
			let random_3 = Math.floor((Math.random() * boxAnimation.length));

			let boxReveal = Math.floor((Math.random() * 3));

			window.setTimeout(() => {

				if (boxReveal === 0) {

						this.boxs[random_1].classList.add('active');
						this.boxs[random_1].classList.remove('inactive');

						window.setTimeout(() => {

							this.boxs[random_1].classList.add('inactive');
							this.boxs[random_1].classList.remove('active');

						}, hideDelay);

					} else if (boxReveal === 1) {

						this.boxs[random_1].classList.add('active');
						this.boxs[random_2].classList.add('active');
						this.boxs[random_1].classList.remove('inactive');
						this.boxs[random_2].classList.remove('inactive');

						window.setTimeout(() => {

							this.boxs[random_1].classList.add('inactive');
							this.boxs[random_2].classList.add('inactive');
							this.boxs[random_1].classList.remove('active');
							this.boxs[random_2].classList.remove('active');

						}, hideDelay);

					} else {

						this.boxs[random_1].classList.add('active');
						this.boxs[random_2].classList.add('active');
						this.boxs[random_3].classList.add('active');
						this.boxs[random_1].classList.remove('inactive');
						this.boxs[random_2].classList.remove('inactive');
						this.boxs[random_3].classList.remove('inactive');

						window.setTimeout(() => {

							this.boxs[random_1].classList.add('inactive');
							this.boxs[random_2].classList.add('inactive');
							this.boxs[random_3].classList.add('inactive');
							this.boxs[random_1].classList.remove('active');
							this.boxs[random_2].classList.remove('active');
							this.boxs[random_3].classList.remove('active');

						}, hideDelay);

					}

					this.play(revealDelay, hideDelay);

			}, revealDelay)
		}
	}

	const gridRandom = new RandomBox(boxAnimation);

	gridRandom.play(1000, 5000);

}, false);