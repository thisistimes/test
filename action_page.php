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