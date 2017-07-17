createUser = function (firstName, lastName, username, password) { // progression and userId are
	console.log("Creating user...")

	fetch("http://localhost:3000/users", {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		body: JSON.stringify({
		      firstName: firstName,
		      lastName: lastName,
		      username: username,
		      password: password
		})
	}).then(function (response) {
		console.log("User created, status " + response.status);
	});
};