createProgression = function (progression, userId, name) { // progression and userId are
	console.log("Creating progression...")     // required, name is optional.

	if (name === undefined) {
		name = "Unnamed"
	}

	fetch("http://localhost:3000/groups", {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		body: JSON.stringify({
			progression: progression,
			userId:      userId,
			name:        name
		})
	}).then(function (response) {
		console.log("Progression created, status " + response.status);
	});
};
