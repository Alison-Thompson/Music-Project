firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	  	var parent = document.querySelector(".buttons");
	  	var signUp = document.querySelector(".signup");
	  	var login  = document.querySelector(".login");

	  	parent.removeChild(signUp);
	  	parent.removeChild(login);

	  	var logout     = document.createElement("button");
	  	var logoutNode = document.createTextNode("Logout");

	  	logout.appendChild(logoutNode);

	  	logout.classList.add("mui-btn");
	  	logout.classList.add("logout");

	  	var profile     = document.createElement("button");
	  	var profileNode = document.createTextNode("Profile");

	  	profile.appendChild(profileNode);

	  	profile.classList.add("mui-btn");
	  	profile.classList.add("mui-btn--flat");
	  	profile.classList.add("profile");

	  	parent.appendChild(logout);
	  	parent.appendChild(profile);

	  	logout.onclick = function () {
	  		firebase.auth().signOut()
	  		location.reload();
	  	}

	  	profile.onclick = function () {
	  		window.location.href = "http://localhost:3000/profile.html";
	  	}
	}
});