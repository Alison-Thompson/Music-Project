$(document).ready(function() {
	firebase.auth().onAuthStateChanged(function(user) {
	  	if (user) {

	   		profilePage(user.uid);

	    	getProfileName(user, function (name) {
	    		var profileName = document.querySelector("#profile-name");
	    		profileName.innerHTML = name;
	    	});

	    	/*$(".progression-div").click(function () {
				console.log("clicked")
				console.log($(".progression-div").css("background-color").toLowerCase())
				if ($(".progression-div").css("background-color").toLowerCase() === "rgb(0, 0, 255)") {
					$(".progression-div").css("background-color", "black");
				} else {
					$(".progression-div").css("background-color", "blue")
				}
			});*/

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


			div.appendChild(newDiv);

			div = document.querySelector(".progression-"+i)


			var name = document.createElement("H2");
			var nameText = document.createTextNode(currentName);
			name.appendChild(nameText);

			name.classList.add("progression-"+i)
			div.appendChild(name);
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
