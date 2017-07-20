// (function() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var submitButton = document.getElementById('submit');

  submitButton.onclick = function() {
    console.log(email.value);
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(error.code +": " + error.message)
  // ...
    }).then(function () {
      console.log("user logged in??");
      var user = firebase.auth().currentUser;

      if (user) {
        window.location.href = "http://localhost:3000/profile.html";
      }
    })
    
  }
// })
