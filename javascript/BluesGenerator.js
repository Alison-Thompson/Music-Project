blues = function () {
	var progression = [];

	var randomNum = Math.floor(Math.random() * 3);

	switch(randomNum) {
		case 0:
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[four]);
			progression.push(musicalAlphabet[four]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[five]);
			progression.push(musicalAlphabet[five]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[one]);
			break;
		case 1:
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[five]);
			progression.push(musicalAlphabet[four]);
			progression.push(musicalAlphabet[four]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[five]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[five]);
			break;
		case 2:
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[four]);
			progression.push(musicalAlphabet[five]);
			progression.push(musicalAlphabet[one]);
			progression.push(musicalAlphabet[five]);
			break;
		default:
			console.log("Default hit in switch block!\n" +
						"javascript/generator.js - blues function");
	}
	return progression;
};