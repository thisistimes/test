// Firebase -> Connection

var config = {
    apiKey: "AIzaSyAQwCrth7uJf1SUrnzpsNUMOLpz8fppte4",
    authDomain: "bott-91c8d.firebaseapp.com",
    databaseURL: "https://bott-91c8d.firebaseio.com",
    projectId: "bott-91c8d",
    storageBucket: "bott-91c8d.appspot.com",
    messagingSenderId: "112827222760",
    appId: "1:112827222760:web:c31be6d897f3d86a18175d",
    measurementId: "G-321V9Z51WR"
  };
  
  //Init Firebase
  firebase.initializeApp(config);

  document.getElementById("sign-in").onclick = function(e) {
    e.preventDefault();
    handleSignUp();    
  }

  function handleSignUp() {
    var errors = document.getElementById('errors');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var warnings = "";

    if (email.length < 4) {
      warnings += 'Your Email is too short <br/>';
    }
    if (password.length < 4) {
      warnings += 'Your Password is too short <br/>';
    }

    if (warnings != "") {
      console.log(warnings);
      errors.style.display = 'block';
      errors.innerHTML = warnings;
    } else {
      errors.style.display = "none";
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        errors.style.display = (errors.style.display === "none" || errors.style.display === "") ? "block" : "none";
        console.log(error);
        errors.innerHTML = error + "<br/>";
      });
    }
  }

  // Once a user is created with the email/login
  // Notify when he/she is logged in
  firebase.auth().onAuthStateChanged(user => {  
    if (user) {

      var fireBase_name = user.displayName;
      var fireBase_email = user.email;

      var fireBase_emailVerified = user.emailVerified;
      var fireBase_uid = user.uid;
      var success = document.getElementById('success');
      success.style.display = (success.style.display === "none" || success.style.display === "") ? "block" : "none";
      
      success.innerHTML = 
        "User Logged in with Credentials: <br />" +
        "<b>Email: </b>" + fireBase_email + "<br />" + 
        "<b>uid: </b>" + fireBase_uid + "<br />";
        alert("Done, We'll bring to index page...");
      
        location.href = "login.html";  
    } 
    
  });



  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });