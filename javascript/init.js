initalizeGenerators = function (genre, mode, key) {

	changeAlphabetToKey(key);

	if (isModeChanged()) {
		if ((musicalAlphabet[one].length > 1) && !(mode === minor)) {
			removeMode();
			changeAlphabetToMode(mode);
		}
	} else {
		changeAlphabetToMode(mode);
	}

	if (genre === "classical") {
		return classicalV2(mode);
	} else if (genre === "blues") {
		return blues()
	}
};



