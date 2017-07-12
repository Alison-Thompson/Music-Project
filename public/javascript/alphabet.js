Alphabet = function () {
	this.musicalAlphabet = ["A","B","C","D","E","F","G"];

	this.one   = 0;
	this.two   = 1;
	this.three = 2;
	this.four  = 3;
	this.five  = 4;
	this.six   = 5;
	this.seven = 6;
};


Alphabet.prototype.changeAlphabetToKey = function (key) { // Makes the musicalAlphabet match the key
	for (var i = 0; i < this.musicalAlphabet.length; i++) {
		if (this.musicalAlphabet[0] === key.toUpperCase()) {
			break;
		}
		else {
			this.musicalAlphabet.push(this.musicalAlphabet.shift());
		}
	}
};

Alphabet.prototype.changeAlphabetToMode = function (mode) {  // Changes musicalAlphabet to mode. Major, minor, dorian ext.
	switch(mode.toLowerCase()) {          // Must be done after switchAlphabetToKey()
		case "major":
			this.musicalAlphabet[this.two] = this.musicalAlphabet[this.two]+"m";
			this.musicalAlphabet[this.three] = this.musicalAlphabet[this.three]+"m";
			this.musicalAlphabet[this.six] = this.musicalAlphabet[this.six]+"m";
			this.musicalAlphabet[this.seven] = this.musicalAlphabet[this.seven]+"dim";
			break;
		case "minor":
			this.musicalAlphabet[this.one] = this.musicalAlphabet[this.one]+"m";
			this.musicalAlphabet[this.two] = this.musicalAlphabet[this.two]+"dim";
			this.musicalAlphabet[this.four] = this.musicalAlphabet[this.four]+"m";
			this.musicalAlphabet[this.five] = this.musicalAlphabet[this.five]+"m";
			break;
		default:
			console.log("Default hit in switch block!\n" +
						"javascript/generator.js - changeAlphabetToMode function");

	}
};

Alphabet.prototype.isModeChanged = function () { // Returns true if the mode has changed to major or minor, false otherwise.
	if (	(this.musicalAlphabet[this.one].length   > 1) ||
			(this.musicalAlphabet[this.two].length   > 1) ||
			(this.musicalAlphabet[this.three].length > 1) ||
			(this.musicalAlphabet[this.four].length  > 1) ||
			(this.musicalAlphabet[this.five].length  > 1) ||
			(this.musicalAlphabet[this.six].length   > 1) ||
			(this.musicalAlphabet[this.seven].length > 1)) {
		return true;
	} else {
		return false;
	}
};

Alphabet.prototype.removeMode = function () { // Removes the current mode.
	this.musicalAlphabet[this.one]   = this.musicalAlphabet[this.one].charAt(0);
	this.musicalAlphabet[this.two]   = this.musicalAlphabet[this.two].charAt(0);
	this.musicalAlphabet[this.three] = this.musicalAlphabet[this.three].charAt(0);
	this.musicalAlphabet[this.four]  = this.musicalAlphabet[this.four].charAt(0);
	this.musicalAlphabet[this.five]  = this.musicalAlphabet[this.five].charAt(0);
	this.musicalAlphabet[this.six]   = this.musicalAlphabet[this.six].charAt(0);
	this.musicalAlphabet[this.seven] = this.musicalAlphabet[this.seven].charAt(0);
};

alphabet = new Alphabet();
