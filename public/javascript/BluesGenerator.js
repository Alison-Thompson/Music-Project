blues = function (alphabet) {
	var progression = [];

	var randomNum = Math.floor(Math.random() * 3);

	switch(randomNum) {
		case 0:
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.four]);
			progression.push(alphabet.musicalAlphabet[alphabet.four]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.five]);
			progression.push(alphabet.musicalAlphabet[alphabet.five]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			break;
		case 1:
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.five]);
			progression.push(alphabet.musicalAlphabet[alphabet.four]);
			progression.push(alphabet.musicalAlphabet[alphabet.four]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.five]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.five]);
			break;
		case 2:
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.four]);
			progression.push(alphabet.musicalAlphabet[alphabet.five]);
			progression.push(alphabet.musicalAlphabet[alphabet.one]);
			progression.push(alphabet.musicalAlphabet[alphabet.five]);
			break;
		default:
			console.log("Default hit in switch block!\n" +
						"javascript/generator.js - blues function");
	}
	return progression;
};
