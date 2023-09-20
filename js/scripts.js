document.addEventListener("DOMContentLoaded", () => {
	const hours = document.querySelector(".jsCountdownHours");
	const minutes = document.querySelector(".jsCountdownMinutes");
	const seconds = document.querySelector(".jsCountdownSeconds");
	if (hours) {
		let timerInterval = setInterval(() => {
			let hoursValue = Number(hours.textContent);
			let minutesValue = Number(minutes.textContent);
			let secondsValue = Number(seconds.textContent);
			if (secondsValue === 0) {
				if (minutesValue === 0) {
					if (hoursValue === 0) {
						hoursValue = 24;
					}
					hoursValue--;
					minutesValue = 60;
				}
				minutesValue--;
				secondsValue = 60;
				hours.textContent = hoursValue;
				minutes.textContent = minutesValue;
				seconds.textContent = secondsValue;
			}
			if (seconds !== 0) {
				secondsValue--;
				seconds.textContent = secondsValue;
			}
			if (!hoursValue && !minutesValue && !secondsValue) {
				clearInterval(timerInterval);
			}
		}, 1000);
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const images = document.querySelectorAll(".preview__img");
	const buttons = document.querySelectorAll(".preview__button");
	if (images.length) {
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", () => {
				for (let j = 0; j < buttons.length; j++) {
					buttons[j].classList.remove("active");
				}
				buttons[i].classList.add("active");
				for (let j = 0; j < images.length; j++) {
					if (
						buttons[i].getAttribute("data-content") ===
						images[j].getAttribute("data-content")
					) {
						images[j].classList.add("active");
					} else {
						images[j].classList.remove("active");
					}
				}
			});
		}
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const select = document.querySelectorAll(".select");

	if (select.length) {
		for (let i = 0; i < select.length; i++) {
			const text = select[i].querySelector(".select__control-text");
			const head = select[i].querySelector(".select__control");
			const arrow = select[i].querySelector(".select__control-arrow");
			const item = select[i].querySelectorAll(".select__dropdown-item");
			const dropdown = select[i].querySelector(".select__dropdown");

			head.addEventListener("click", () => {
				arrow.classList.toggle("active");
				dropdown.classList.toggle("active");
			});

			for (let j = 0; j < item.length; j++) {
				const input = item[j].querySelector(".select__input");
				const itemValue = item[j].querySelector(".select__value");

				if (input.checked) {
					text.textContent = input.value;
				}

				itemValue.textContent = input.value;

				item[j].addEventListener("click", (e) => {
					if (input.checked) {
						e.stopPropagation();
						text.textContent = input.value;
						arrow.classList.remove("active");
						dropdown.classList.remove("active");
					}
				});

				document.addEventListener("click", (e) => {
					if (!select[i].contains(e.target)) {
						arrow.classList.remove("active");
						dropdown.classList.remove("active");
					}
				});
			}
		}
	}
});
