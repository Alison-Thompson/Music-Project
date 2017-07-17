generatorPage = function () {
	var progression = initalizeGenerators("rock","major","a");
	var progressionString = ""

	for (var i = 0; i < progression.length; i++) {
		progressionString += progression[i] + " ";
	}

	var newDiv = document.createElement("h1");
	var containerDiv = document.querySelector(".container");
	containerDiv.appendChild(newDiv);

	newDiv.classList.add("progression")

	var div = document.querySelector(".progression");
	div.innerHTML = progressionString;

};