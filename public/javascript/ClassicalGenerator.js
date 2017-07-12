classicalV2 = function (mode) { // In use. Generates a classical chord progression.
	var progression = [];

	if (mode.toLowerCase() === "major") {

		var options = [alphabet.musicalAlphabet[alphabet.three],alphabet.musicalAlphabet[alphabet.six],
				   alphabet.musicalAlphabet[alphabet.two],  alphabet.musicalAlphabet[alphabet.four]];

		var current = alphabet.musicalAlphabet[alphabet.one];

		while (true) {
			if (current === alphabet.musicalAlphabet[alphabet.one]) {
				progression.push(current);
				current = options[Math.floor(Math.random() * 4)];
			} else if ((current === alphabet.musicalAlphabet[alphabet.two]) || 
						current === alphabet.musicalAlphabet[alphabet.four]) {
				progression.push(current);

				if (Math.floor(Math.random() * 2) === 0) {
					current = alphabet.musicalAlphabet[alphabet.five];
				} else {
					current = alphabet.musicalAlphabet[alphabet.seven];
				}
			} else if (current === alphabet.musicalAlphabet[alphabet.six]) {
				progression.push(current);
				if (Math.floor(Math.random() * 2) === 0) {
					current = alphabet.musicalAlphabet[alphabet.two];
				} else {
					current = alphabet.musicalAlphabet[alphabet.four];
				}
			} else if (current === alphabet.musicalAlphabet[alphabet.three]) {
				progression.push(current);
				current = alphabet.musicalAlphabet[alphabet.six];
			} else {
				progression.push(current);
				current = alphabet.musicalAlphabet[alphabet.one];
			}
			if ((current === alphabet.musicalAlphabet[alphabet.one]) && (progression.length > 8)) {
				return progression;
			}
		}
	} else if (mode.toLowerCase() === "minor") { // needs work.
		var options = [alphabet.musicalAlphabet[alphabet.seven], alphabet.musicalAlphabet[alphabet.three],
				   alphabet.musicalAlphabet[alphabet.six]];

		var current = alphabet.musicalAlphabet[alphabet.one];

		while(true) {

			if (current === alphabet.musicalAlphabet[alphabet.seven]) {
				progression.push(current);
				current = alphabet.musicalAlphabet[alphabet.three];
			} else if (current === alphabet.musicalAlphabet[alphabet.three]) {
				progression.push(current);
				current = alphabet.musicalAlphabet[alphabet.six];
			} else if (current === alphabet.musicalAlphabet[alphabet.six]) {
				progression.push(current);
				var randomNum = Math.floor(Math.random * 2);
				if (randomNum === 0) {
					current = alphabet.musicalAlphabet[alphabet.two];
				} else {
					current = alphabet.musicalAlphabet[alphabet.four];
				}
			} else if (current === alphabet.musicalAlphabet[alphabet.one]) {
				progression.push(current);
				current = options[Math.floor(Math.random() * 3)];
			} else if (current === alphabet.musicalAlphabet[alphabet.two] ||
					   current === alphabet.musicalAlphabet[alphabet.four]) {
				progression.push(current);
				var randomNum = Math.floor(Math.random * 2);
				current = alphabet.musicalAlphabet[alphabet.five];

			} else {
				progression.push(current);
				current = alphabet.musicalAlphabet[alphabet.one];
			}

			if ((current === alphabet.musicalAlphabet[alphabet.one]) && (progression.length > 8)) {
				return progression;
			}
		}
	}
};

classicalV1 = function (mode) { // Not in use.
	var progression = [];

	if (mode === "major") {
		options = [alphabet.musicalAlphabet[alphabet.three],alphabet.musicalAlphabet[alphabet.six],
				   alphabet.musicalAlphabet[alphabet.two],  alphabet.musicalAlphabet[alphabet.four]];

		current = alphabet.musicalAlphabet[alphabet.one];
		while (true) {
			switch(current) {
				case alphabet.musicalAlphabet[alphabet.one]:
					progression.push(current);
					current = options[Math.floor(Math.random() * 4)];
				case current = alphabet.musicalAlphabet[alphabet.two]:
				case alphabet.musicalAlphabet[alphabet.four]:
					progression.push(current);

					if (Math.floor(Math.random() * 2) === 0) {
						current = alphabet.musicalAlphabet[alphabet.five];
					} else {
						current = alphabet.musicalAlphabet[alphabet.seven];
					}
					break;
				case alphabet.musicalAlphabet[alphabet.three]:
					progression.push(current);
					current = alphabet.musicalAlphabet[alphabet.six];
					break;
				case alphabet.musicalAlphabet[alphabet.six]:
					progression.push(current);
					if (Math.floor(Math.random() * 2) === 0) {
						current = alphabet.musicalAlphabet[alphabet.two];
					} else {
						current = alphabet.musicalAlphabet[alphabet.four];
					}
					break;
				case alphabet.musicalAlphabet[alphabet.five]:
				case alphabet.musicalAlphabet[alphabet.seven]:
					progression.push(current);
					current = alphabet.musicalAlphabet[alphabet.one];
					break;
				default:
					console.log("Default hit in switch block!\n" +
						  "javascript/generator.js - classical function Major");
			}
			if ((current === alphabet.musicalAlphabet[alphabet.one]) && (progression.length > 8)) {
				progression.unshift(alphabet.musicalAlphabet[alphabet.one]);
				progression.shift();
				return progression;
				break;
			}
		}
	} else if (mode === "minor") {
		progression.push(alphabet.musicalAlphabet(alphabet.one));

		options = [alphabet.musicalAlphabet[alphabet.seven], alphabet.musicalAlphabet[alphabet.three],
				   alphabet.musicalAlphabet[alphabet.six]];

		current = options[Math.floor(Math.random * 4)];
		while (true) {
			switch(current) {
				case alphabet.musicalAlphabet[alphabet.seven]:
					progression.push(current);
					current = alphabet.musicalAlphabet[alphabet.three];
					break;
				case alphabet.musicalAlphabet[alphabet.three]:
					progression.push(current);
					current = alphabet.musicalAlphabet[alphabet.six];
					break;
				case alphabet.musicalAlphabet[alphabet.six]:
					progression.push(current);
					var randomNum = Math.floor(Math.random * 2);
					if (randomNum === 0) {
						current = alphabet.musicalAlphabet[alphabet.two];
					} else {
						current = alphabet.musicalAlphabet[alphabet.four];
					}
					break;
				case alphabet.musicalAlphabet[alphabet.two]:
				case alphabet.musicalAlphabet[alphabet.four]:
					progression.push(current);
					var randomNum = Math.floor(Math.random * 2);
					if (randomNum === 0) {
						current = alphabet.musicalAlphabet[alphabet.five];
					} else {
						current = alphabet.musicalAlphabet[alphabet.seven] + " dim"; // dim
					break;
					}
				case alphabet.musicalAlphabet[alphabet.five]:
				case alphabet.musicalAlphabet[alphabet.seven] + " dim": // dim
					progression.push(current);
					current = alphabet.musicalAlphabet[alphabet.one];
					break;
				default:
					alert("Default hit in switch block!\n" +
						  "javascript/generator.js - classical function Minor");
			}
			if ((current === alphabet.musicalAlphabet[alphabet.one]) && (progression.length > 8)) {
				shift();
				return progression;
				break;
			}
		}
	}
};
