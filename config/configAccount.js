
// Firebase -> Connection

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

  

 firebase.database().ref('users').on('value',(data) =>{
     let users = data.val();
     document.getElementById('tableUsers').innerHTML ='';
     for( const user in users){
        document.getElementById('tableUsers').innerHTML+=`
        <tr>
            <td>${users[user].userId}</td> 
            <td>${users[user].email}</td> 
        </tr>
        `;
     }

 })



 var user = firebase.auth().currentUser;


 if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
  }


//delete user
 user.delete().then(function() {
   // User deleted.
 }).catch(function(error) {
   // An error happened.
 });


 




