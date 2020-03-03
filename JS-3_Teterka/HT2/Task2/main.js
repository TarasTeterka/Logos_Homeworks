let b1 = 1;

let geomProgression = function(n, q) {
	let sum = 0;
	for (i = 1; i <= n; i++) {
		let b = b1 * q ** (i - 1);
		sum += b;
	}

	return console.log(`suma: ${sum}`);
};
geomProgression(5, 2);

let geomProgressionForm = function(n, q) {
	let sum = b1 * ((1 - q ** n) / (1 - q));
	return console.log(`suma: ${sum}`);
};
geomProgressionForm(4, 3);
