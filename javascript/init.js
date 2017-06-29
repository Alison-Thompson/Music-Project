initGenerators = function (genre, mode, key) {
	changeAlphabetToKey(key);
	changeAlphabetToMode(mode);

	if (genre === "classical") {
		console.log(classicalV2(mode));
	} else if (genre === "blues") {
		console.log(blues())
	}
};



