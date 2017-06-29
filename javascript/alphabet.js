musicalAlphabet = ["A","B","C","D","E","F","G"];

one   = 0;
two   = 1;
three = 2;
four  = 3;
five  = 4;
six   = 5;
seven = 6;
 

changeAlphabetToKey = function (key) { // Makes the musicalAlphabet match the key
	for (var i = 0; i < musicalAlphabet.length; i++) {
		if (musicalAlphabet[0] === key.toUpperCase()) {
			break;
		}
		else {
			musicalAlphabet.push(musicalAlphabet.shift());
		}
	}
};

changeAlphabetToMode = function (mode) {  // Changes musicalAlphabet to mode. Major, minor, dorian ext.
	switch(mode.toLowerCase()) {              // Must be done after switchAlphabetToKey()
		case "major":
			musicalAlphabet[two] = musicalAlphabet[two]+"m";
			musicalAlphabet[three] = musicalAlphabet[three]+"m";
			musicalAlphabet[six] = musicalAlphabet[six]+"m";
			musicalAlphabet[seven] = musicalAlphabet[seven]+"dim";
			break;
		case "minor":
			musicalAlphabet[one] = musicalAlphabet[one]+"m";
			musicalAlphabet[two] = musicalAlphabet[two]+"dim";
			musicalAlphabet[four] = musicalAlphabet[four]+"m";
			musicalAlphabet[five] = musicalAlphabet[five]+"m";
			break;
		default:
			console.log("Default hit in switch block!\n" +
						"javascript/generator.js - changeAlphabetToMode function");

	} 
}