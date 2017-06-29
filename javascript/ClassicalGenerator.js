classicalV2 = function (mode) { // In use. Generates a classical chord progression.
	var progression = [];

	if (mode.toLowerCase() === "major") {

		var options = [musicalAlphabet[three],musicalAlphabet[six],
				   musicalAlphabet[two],  musicalAlphabet[four]];

		var current = musicalAlphabet[one];

		while (true) {
			if (current === musicalAlphabet[one]) {
				progression.push(current);
				current = options[Math.floor(Math.random() * 4)];
			} else if ((current === musicalAlphabet[two]) || 
						current === musicalAlphabet[four]) {
				progression.push(current);

				if (Math.floor(Math.random() * 2) === 0) {
					current = musicalAlphabet[five];	
				} else {
					current = musicalAlphabet[seven];
				}
			} else if (current === musicalAlphabet[six]) {
				progression.push(current);
				if (Math.floor(Math.random() * 2) === 0) {
					current = musicalAlphabet[two];	
				} else {
					current = musicalAlphabet[four];
				}
			} else if (current === musicalAlphabet[three]) {
				progression.push(current);
				current = musicalAlphabet[six];
			} else {
				progression.push(current);
				current = musicalAlphabet[one];
			}
			if ((current === musicalAlphabet[one]) && (progression.length > 8)) {
				return progression;
			}
		}
	} else if (mode.toLowerCase() === "minor") { // needs work.
		var options = [musicalAlphabet[seven], musicalAlphabet[three],
				   musicalAlphabet[six]];

		var current = musicalAlphabet[one];

		while(true) {

			if (current === musicalAlphabet[seven]) {
				progression.push(current);
				current = musicalAlphabet[three];
			} else if (current === musicalAlphabet[three]) {
				progression.push(current);
				current = musicalAlphabet[six];
			} else if (current === musicalAlphabet[six]) {
				progression.push(current);
				var randomNum = Math.floor(Math.random * 2);
				if (randomNum === 0) {
					current = musicalAlphabet[two];
				} else {
					current = musicalAlphabet[four];
				}
			} else if (current === musicalAlphabet[one]) {
				progression.push(current);
				current = options[Math.floor(Math.random() * 3)];
			} else if (current === musicalAlphabet[two] ||
					   current === musicalAlphabet[four]) {
				progression.push(current);
				var randomNum = Math.floor(Math.random * 2);
				current = musicalAlphabet[five];
				
			} else {
				progression.push(current);
				current = musicalAlphabet[one];
			}

			if ((current === musicalAlphabet[one]) && (progression.length > 8)) {
				return progression;
			}
		}
	}
};

classicalV1 = function (mode) { // Not in use.
	var progression = [];

	if (mode === "major") {
		options = [musicalAlphabet[three],musicalAlphabet[six],
				   musicalAlphabet[two],  musicalAlphabet[four]];

		current = musicalAlphabet[one];
		while (true) {
			switch(current) {
				case musicalAlphabet[one]:
					progression.push(current);
					current = options[Math.floor(Math.random() * 4)];
				case current = musicalAlphabet[two]:
				case musicalAlphabet[four]:
					progression.push(current);

					if (Math.floor(Math.random() * 2) === 0) {
						current = musicalAlphabet[five];	
					} else {
						current = musicalAlphabet[seven];
					}				
					break;
				case musicalAlphabet[three]:
					progression.push(current);
					current = musicalAlphabet[six];
					break;
				case musicalAlphabet[six]:
					progression.push(current);
					if (Math.floor(Math.random() * 2) === 0) {
						current = musicalAlphabet[two];	
					} else {
						current = musicalAlphabet[four];
					}
					break;
				case musicalAlphabet[five]:
				case musicalAlphabet[seven]:
					progression.push(current);
					current = musicalAlphabet[one];
					break;
				default:
					console.log("Default hit in switch block!\n" +
						  "javascript/generator.js - classical function Major");
			}
			if ((current === musicalAlphabet[one]) && (progression.length > 8)) {
				progression.unshift(musicalAlphabet[one]);
				progression.shift();
				return progression;
				break;
			}
		}
	} else if (mode === "minor") {
		progression.push(musicalAlphabet(one));

		options = [musicalAlphabet[seven], musicalAlphabet[three],
				   musicalAlphabet[six]];

		current = options[Math.floor(Math.random * 4)];
		while (true) {
			switch(current) {
				case musicalAlphabet[seven]:
					progression.push(current);
					current = musicalAlphabet[three];
					break;
				case musicalAlphabet[three]:
					progression.push(current);
					current = musicalAlphabet[six];
					break;
				case musicalAlphabet[six]:
					progression.push(current);
					var randomNum = Math.floor(Math.random * 2);
					if (randomNum === 0) {
						current = musicalAlphabet[two];
					} else {
						current = musicalAlphabet[four];
					}
					break;
				case musicalAlphabet[two]:
				case musicalAlphabet[four]:
					progression.push(current);
					var randomNum = Math.floor(Math.random * 2);
					if (randomNum === 0) {
						current = musicalAlphabet[five];
					} else {
						current = musicalAlphabet[seven] + " dim"; // dim
					break;
					}
				case musicalAlphabet[five]:
				case musicalAlphabet[seven] + " dim": // dim
					progression.push(current);
					current = musicalAlphabet[one];
					break;
				default:
					alert("Default hit in switch block!\n" +
						  "javascript/generator.js - classical function Minor");
			}
			if ((current === musicalAlphabet[one]) && (progression.length > 8)) {
				shift();
				return progression;
				break;
			}
		}
	}
};