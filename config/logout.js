firebase.auth().onAuthStateChanged(function(user) {
    var user = firebase.auth().currentUser;
    if (user!=null) {
      var email = user.email;
      document.getElementById("name").innerHTML = "Welcome "+email;
    } else {
      
    }
  });


  function logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      //window.alert("Successfully logged out.");
      location.href = "login.html";
      
    }).catch(function(error) {
      // An error happened.
    });
  }