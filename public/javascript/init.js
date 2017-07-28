initalizeGenerators = function (genre, mode, key) {
	var alphabet = new Alphabet();

	alphabet.changeAlphabetToKey(key);

	if (alphabet.isModeChanged()) {
		if ((alphabet.musicalAlphabet[alphabet.one].length > 1) && !(mode === "minor")) {
			alphabet.removeMode();
			alphabet.changeAlphabetToMode(mode);
		}
	} else {
		alphabet.changeAlphabetToMode(mode);
	}

	if (genre.toLowerCase() === "classical") {
		return classicalV2(mode, alphabet);
	} else if (genre.toLowerCase() === "blues") {
		return blues(alphabet);
	} else if (genre.toLowerCase() === "rock") {
		return rock(alphabet);
	}
};
