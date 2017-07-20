profilePage = function (userId) {
	loadProgression(userId, function (progressions) {

		var currentName;
		var currentProgression;
		var div = document.querySelector("#progressions")
		
		for (var i = 0; i < progressions.length; i++) {
			var progressionNumber = i + 1;

			currentName        = progressions[i].name;
			currentProgression = "";

			for (var j = 0; j < progressions[i].progression.length; j++) {
				currentProgression += progressions[i].progression[j] + " ";
			}

			console.log(progression)

			var name = document.createElement("H1");
			var nameText = document.createTextNode(currentName);
			name.appendChild(nameText);
			var progression = document.createElement("H3");
			var progressionText = document.createTextNode(currentProgression);
			progression.appendChild(progressionText);

			div.appendChild(name);

			div.appendChild(progression);
		}
	});
};

// for testing 5967d6b8b91cd3039b3c57e3
