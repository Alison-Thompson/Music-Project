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
		// size right div

		divSizer(progressions);


		// make progression names
		var currentName;
		var currentProgression;
		var div = document.querySelector("#progressions")
		
		for (var i = 0; i < progressions.length; i++) {

			currentName = progressions[i].name;

			var newDiv = document.createElement("BUTTON");
			newDiv.classList.add("mui-btn");
			newDiv.classList.add("mui-btn--raised")
			newDiv.classList.add("progressionBut")
			newDiv.classList.add("progression-"+i)
			var newDivNode = document.createTextNode(currentName);
			newDiv.appendChild(newDivNode)
			div.appendChild(newDiv);

			// event listener
			newDiv.addEventListener("click", function (event) {
				// makes so only one can be selected at a time

				var div = document.querySelector("."+event.target.classList[3]);

				for (var j = 0; j < progressions.length; j++) {
					var testing = document.querySelector(".progression-"+j);
					if ((testing.classList[4]) &&
					(testing.classList[1] != event.target.className)) {
						testing.classList.remove("mui-btn--primary");
						testing.classList.remove("selected");
					}
				}

				// make selection work
				console.log(event.target.classList[4]);
				
			
				if (div.classList[4]) {
					console.log("remove")
					div.classList.remove("mui-btn--primary");
					div.classList.remove("selected");
				} else {
					console.log("add")
					div.classList.add("mui-btn--primary");
					div.classList.add("selected");

					var name = document.querySelector("#name");
					name.innerHTML = event.target.innerHTML.toUpperCase();
				}

			}); // end of event listener
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
				if (testing.classList[5]) {
					progressionClass = testing.classList[3];
				}
			}

			if (!(progressionClass)) {
				alert("Select a progression first.")
			}

			for (var i = 12; i < progressionClass.length; i++) {
				progressionIndex += progressionClass[i];
			}

			console.log(progressions);
			console.log(progressionIndex);
			SoundManager(progressions[progressionIndex].progression);

		});
	});
	// delete button stuff

	var deleteButton = document.querySelector("#delete");
	deleteButton.addEventListener("click", function (event) {
		var user = firebase.auth().currentUser.uid;
		loadProgression(user, function (progressions) {
			var progressionClass;
			var progressionIndex = "";

			for (var j = 0; j < progressions.length; j++) {
				var testing = document.querySelector(".progression-"+j);
				if (testing.classList[5]) {
					progressionClass = testing.classList[3];
				}
			}

			if (!(progressionClass)) {
				alert("Select a progression first.")
			}

			for (var i = 12; i < progressionClass.length; i++) {
				progressionIndex += progressionClass[i];
			}

			progressions[progressionIndex].deleteProgression();
			location.reload();
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
