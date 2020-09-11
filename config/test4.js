
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
 var db = firebase.firestore();

 //Save
 function save(){
  var assessment = document.getElementById("assessment").value;
  var TypeSelect = document.getElementById("TypeSelect").value;


//collection
  var questionRef = db.collection("Project").doc("assessment")
                      .collection(assessment).doc(counter)
                      .collection("answer").add({
                        Ex : "Excellent : 5, Good : 4, Average : 3, Fair : 2, Poor : 1",
                        //description : "ปรับปรุง"
                      });
//document
   var  questionRef2 = db.collection("Project").doc("assessment")
                      .collection(assessment).doc(divName)
                      .set({
                        name: document.getElementById("question").value,
                        type:  document.getElementById("TypeSelect").value,     
                      })
                                
.then(function(){
  alert("Data Saved");
  console.log("Data Saved")
})
  .catch(function(error){
   console.log(error)
  });
}

//dynamicInput
var counter = 1;
var limit = 3;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " questions");
     }
     else {
          let newdiv = document.createElement('div');
          newdiv.innerHTML = "Question " + (counter + 1) + ' <br><input type="text" name="myIngredients[]">';
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}