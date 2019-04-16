let yearContainer = document.getElementById('years');

let remaining = prompt("What is your age?");

for (var i = 0; i < 100; i++) {
	let year = document.createElement('div');
	year.classList.add('year');
	if (i < remaining) {
		year.classList.add('lived');
	}
	yearContainer.appendChild(year);
}
