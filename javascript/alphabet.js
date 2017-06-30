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
	switch(mode.toLowerCase()) {          // Must be done after switchAlphabetToKey()
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
};

isModeChanged = function () { // Returns true if the mode has changed to major or minor, false otherwise.
	if (	(musicalAlphabet[one].length   > 1) ||
			(musicalAlphabet[two].length   > 1) ||
			(musicalAlphabet[three].length > 1) ||
			(musicalAlphabet[four].length  > 1) ||
			(musicalAlphabet[five].length  > 1) ||
			(musicalAlphabet[six].length   > 1) ||
			(musicalAlphabet[seven].length > 1)) {
		return true;
	} else {
		return false;
	}
};

removeMode = function () { // Removes the current mode.
	musicalAlphabet[one]   = musicalAlphabet[one].charAt(0);
	musicalAlphabet[two]   = musicalAlphabet[two].charAt(0);
	musicalAlphabet[three] = musicalAlphabet[three].charAt(0);
	musicalAlphabet[four]  = musicalAlphabet[four].charAt(0);
	musicalAlphabet[five]  = musicalAlphabet[five].charAt(0);
	musicalAlphabet[six]   = musicalAlphabet[six].charAt(0);
	musicalAlphabet[seven] = musicalAlphabet[seven].charAt(0);
};



