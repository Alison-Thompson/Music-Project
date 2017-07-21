$(document).ready(function() {
	firebase.auth().onAuthStateChanged(function(user) {
	  	if (user) {

	   		profilePage(user.uid);

	    	getProfileName(user, function (name) {
	    		var profileName = document.querySelector("#profile-name");
	    		profileName.innerHTML = name;
	    	});
	  	} else {
	    	window.location.href = "http://localhost:3000/login.html";
	  	}
	});


	var buttonDiv = document.querySelector("#logout");
	buttonDiv.onclick = logout;

});

profilePage = function (userId) {
	loadProgression(userId, function (progressions) {

		var currentName;
		var currentProgression;
		var div = document.querySelector("#progressions")
		
		for (var i = 0; i < progressions.length; i++) {

			currentName = progressions[i].name;

			var newDiv = document.createElement("DIV");
			newDiv.classList.add("progression-div")
			newDiv.classList.add("progression-"+i);

			newDiv.addEventListener("click", function (event) {
				console.log(event.target.className);
				var div = document.querySelector("."+event.target.className);

				if (div.classList[2]) {
					div.classList.remove("selected")
				} else {
					div.classList.add("selected");
				}

				for (var j = 0; j < progressions.length; i++) {
					if ("progressions-"+j != "."+event.target.className) {
						var testing = document.querySelector("progression-"+i)
						if (testing.classList[2]) {
							div.classList.remove("selected");
						}
					}
				}
			});


			div.appendChild(newDiv);

			newDiv = document.querySelector(".progression-"+i)


			var name = document.createElement("H2");
			var nameText = document.createTextNode(currentName);
			name.appendChild(nameText);

			name.classList.add("progression-"+i)
			newDiv.appendChild(name);
		}
	});
};


logout = function() {
	firebase.auth().signOut()
}

getProfileName = function (user, callback) {
	fetch("http://localhost:3000/users").then(function (response) {
		return response.json();
	}).then(function (data) {
		data.forEach(function (entry) {
			if (entry.id === user.uid) {
				callback(entry.email);
			}
		});
	});
};



// for testing 5967d6b8b91cd3039b3c57e3
