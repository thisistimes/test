
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
 var firestore = firebase.firestore();

 //Start grabbing our DOM Element
 const submitBtn = document.querySelector('#submit');

 let Assessment = document.querySelector('#Assessment_Name');
 let Question = document.querySelector('#Question_Name');

const db = firestore.collection("Project");

submitBtn.addEventListener('click', function(){
  let AssessmentInput = Assessment.value;
  let QuestionInput = Question.value;


//Access the Database Collection

  db.doc().set({
    Assessment : AssessmentInput,
    Question : QuestionInput
  })
  .then(function(){
  console.log("Data Saved")
})
  .catch(function(error){
    console.log(error)
  });

});