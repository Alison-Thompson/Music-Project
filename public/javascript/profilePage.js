$(document).ready(function() {
	firebase.auth().onAuthStateChanged(function(user) {
	  	if (user) {

	   		profilePage(user.uid);

	    	getProfileName(user, function (name) {
	    		var profileName = document.querySelector("#profile-name");
	    		profileName.innerHTML = name;
	    	});

	    	var logo = document.querySelector(".Logo");
	    	logo.onclick = function () {
	    		window.location.href = "http://localhost:3000/"
	    	}

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

				for (var j = 0; j < progressions.length; j++) {
					var testing = document.querySelector(".progression-"+j);
					if ((testing.classList[2]) &&
					(testing.classList[1] != event.target.className)) {
						testing.classList.remove("selected")
					}
				}

				console.log(event.target.className);
				var div = document.querySelector("."+event.target.className);

				if (div.classList[2]) {
					div.classList.remove("selected");
					// var selectedDiv = document.querySelector("#name");
					// selectedDiv.innerHTML = "Selected"
				} else {
					div.classList.add("selected");
					// var selectedDiv = document.querySelector("#name");
					// selectedDiv.innerHTML = div.innerHTML;
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
	// playbutton stuff
	var playButton = document.querySelector("#play");
	playButton.addEventListener("click", function (event) {
		var user = firebase.auth().currentUser.uid;
		loadProgression(user, function (progressions) {
			var progressionClass;
			var progressionIndex = "";

			for (var j = 0; j < progressions.length; j++) {
				var testing = document.querySelector(".progression-"+j);
				if (testing.classList[2]) {
					progressionClass = testing.classList[1];
				}
			}

			for (var i = 12; i < progressionClass.length; i++) {
				progressionIndex += progressionClass[i];
			}

			console.log(progressions[progressionIndex].progression);
			SoundManager(progressions[progressionIndex].progression);

		});
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

divSizer = function(progressionList) {
  var baseHeight = 402;
  var listDiff = progressionList.length - 7;
  var pastDiv = document.querySelector("#past");
  var progressionsDiv = document.querySelector("#progressions-div");


  if (listDiff > 0) {
    pastDiv.style.height += baseHeight+listDiff*52;
    progressionsDiv.style.height += baseHeight + listDiff*52;
  } else {
      pastDiv.style.height = baseHeight;
      progressionsDiv.style.height = baseHeight;
  }
}



// for testing 5967d6b8b91cd3039b3c57e3
