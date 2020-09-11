var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
//user sign in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("login_div").style.display = "none";
      
      location.href = "index.html";
      
    var user = firebase.auth().currentUser;
    } else {
      document.getElementById("login_div").style.display = "block";
    }
  });

function login(){

    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    const promise = auth.signInWithEmailAndPassword(userEmail, userPassword);
    promise.catch(e => alert(e.message));


}

function create(){
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    const promise = auth.createUserWithEmailAndPassword(userEmail, userPassword);
    promise.catch(e => alert(e.message));

    alert("Complete..We'll bring you to our Website!")
    setTimeout("index.html",15000);
      
}

function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    //window.alert("Successfully logged out.");
    location.href = "login.html";      
    alert("Bye")
  }).catch(function(error) {
    // An error happened.
  });
}







document.getElementById("password").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
      document.getElementById("myButton").click();
  }
});