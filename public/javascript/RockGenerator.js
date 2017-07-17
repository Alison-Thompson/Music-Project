rock = function (alphabet) {
	var progression = [];
	var possible = [alphabet.musicalAlphabet[alphabet.four],
					alphabet.musicalAlphabet[alphabet.five],
					alphabet.musicalAlphabet[alphabet.six]];

	var current;

	progression.push(alphabet.musicalAlphabet[alphabet.one]);

	current = possible[Math.floor(Math.random()*3)];

	while(true) {
		if (current === alphabet.musicalAlphabet[alphabet.one]) {
			progression.push(current);
			current = possible[Math.floor((Math.random()*3))];
		} else if (current === alphabet.musicalAlphabet[alphabet.two]) {
			progression.push(current);
			current = alphabet.musicalAlphabet[alphabet.one];
		} else if (current === alphabet.musicalAlphabet[alphabet.three]) {
			progression.push(current);
			current = alphabet.musicalAlphabet[alphabet.four];
		} else if (current === alphabet.musicalAlphabet[alphabet.four]) {
			progression.push(current);

			var randomNum = Math.floor(Math.random()*10);

			if (randomNum < 3) {
				current = alphabet.musicalAlphabet[alphabet.one];
			} else {
				current = alphabet.musicalAlphabet[alphabet.five];
			}

		} else if (current === alphabet.musicalAlphabet[alphabet.five]) {
			progression.push(current);

			var randomNum = Math.floor(Math.random()*4);

			if (randomNum === 0) {
				current = alphabet.musicalAlphabet[alphabet.one]
			} else if (randomNum === 1) {
				current = alphabet.musicalAlphabet[alphabet.two]
			} else if (randomNum === 2) {
				current = alphabet.musicalAlphabet[alphabet.four]
			} else {
				current = alphabet.musicalAlphabet[alphabet.six]
			}

			if (progression.length > 12) {
				current = alphabet.musicalAlphabet[alphabet.one]
			}

		} else if (current === alphabet.musicalAlphabet[alphabet.six]) {
			progression.push(current);

			var randomNum = Math.floor(Math.random()*2);

			if (randomNum === 0) {
				current = alphabet.musicalAlphabet[alphabet.four]
			} else if (randomNum === 1) {
				current = alphabet.musicalAlphabet[alphabet.three]
			}
		}

		if ((current === alphabet.musicalAlphabet[alphabet.one]) && (progression.length > 8)) {
			return progression;
		}
	}
}




