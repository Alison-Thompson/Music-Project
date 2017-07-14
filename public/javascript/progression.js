Progression = function (progression, id, name, userId) {
  this.id          = id;
  this.name        = name;
  this.userId      = userId;
  this.progression = progression;
};

Progression.prototype.deleteProgression = function () {
	console.log("Deleting Progression " + this.name + "...");
	// possible alert to see whether or not they want to cancel

	fetch("http://localhost:3000/groups/" + this.id, {
		method: "DELETE"
	}).then(function (response) {
		console.log("Progression deleted, status " + response.status)
	});
};

Progression.prototype.editProgression = function (index, changeTo) {
	console.log("Editing " + this.progression[index] + " to " + changeTo + "...");

	this.progression[index] = changeTo;

	fetch("http://localhost:3000/groups/" + this.id, {
		method: "PUT",
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		body: JSON.stringify({
			name:        this.name,
			userId:      this.userId,
			progression: this.progression
		})
	}).then(function (response) {
		console.log("Progression edited, status " + response.status);
	});
};

Progression.prototype.deleteIndex = function (index) {
	console.log("Deleting " + this.progression[index] + "...");
	var editedProgression = []

	for (var i = 0; i < this.progression.length; i++) {
		if (!(i === index)) {
			editedProgression.push(this.progression[i]);
		}
	}

	fetch("http://localhost:3000/groups/" + this.id, {
		method: "PUT",
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		body: JSON.stringify({
			name:        this.name,
			userId:      this.userId,
			progression: editedProgression
		})
	}).then(function (response) {
		console.log("Deleted, status " + response.status);
	})
};

Progression.prototype.addChordAfterIndex = function (index, newChord) { // If index = -1 then chord will be added at the start
	
	if (index === -1) {
		console.log("Adding " + newChord + " to the start of the progression...");
	} else {
		console.log("Adding " + newChord + " to the progression after " + this.progression[index] + "...")
	}



	var editedProgression = [];
	if (index === -1) {
		this.progression.unshift(newChord);
		editedProgression = this.progression;
	} else {
		for (var i = 0; i < this.progression.length; i++) {
			if (i === index) {
				editedProgression.push(this.progression[i]);
				editedProgression.push(newChord);
			} else {
				editedProgression.push(this.progression[i]);
			}
		}
	}

	fetch("http://localhost:3000/groups/" + this.id, {
		method: "PUT",
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		body: JSON.stringify({
			name:        this.name,
			userId:      this.userId,
			progression: editedProgression
		})
	}).then(function (response) {
		console.log("Added, status " + response.status);
	});
};

Progression.prototype.changeName = function (name) {
	console.log("Changing name to " + name + " from " + this.name + "...")

	fetch("http://localhost:3000/groups/" + this.id, {
		method: "PUT",
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		body: JSON.stringify({
			name:        name,
			userId:      this.userId,
			progression: this.progression
		})
	}).then(function (response) {
		console.log("Changed, status " + response.status);
	});
};









