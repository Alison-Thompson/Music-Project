loadProgression = function (userId) {
	var progressionList = [];

	fetch("http://localhost:3000/groups").then(function (response) {
		console.log("Progressions received. Status", response.status);
		return response.json()
	}).then(function (data) {  	
		data.forEach(function (entry) {
			if (entry.userId === userId) {
				progressionList.push(new Progression(entry.progression, entry.id, entry.name, entry.userId));
			}
		});
	});


	return progressionList;
};

// testing userId 5967d6b8b91cd3039b3c57e3