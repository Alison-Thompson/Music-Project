(function() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var confirmPassword = document.querySelector("#confirm-password-textfield");
  var submitButton = document.getElementById('submit');

  submitButton.onclick = function() {
    if (password.value != confirmPassword.value) {
      alert("Passwords don't match!")
      return;
    }

    console.log(email.value);
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(function(response){
        return fetch('/users', {
          method: "POST",
          headers: new Headers({
            'content-type': 'application/json'
          }),
          body: JSON.stringify({
            email: response.email,
            _id: response.uid
        })
      })
    }).then(function(response){
      return response.json();
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  };
}());

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "http://localhost:3000/profile.html";
  }
});
