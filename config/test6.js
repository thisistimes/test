
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
  var question = document.getElementById("question").value;
  var question2 = document.getElementById("question2").value;
  var question3 = document.getElementById("question3").value;
  var question4 = document.getElementById("question4").value;
  var question5 = document.getElementById("question5").value;
  var question6 = document.getElementById("question6").value;
  var question7 = document.getElementById("question7").value;
  var question8 = document.getElementById("question8").value;
  var question9 = document.getElementById("question9").value;
  var question10 = document.getElementById("question10").value;

//collection
  var questionRef = db.collection("Project").doc("assessment")
                      .collection(assessment).doc(question)
                      .collection("answer").add({
                        Ex : "ดีมาก : 5, ดี : 4, พอใช้ : 3, ค่อนข้างแย่ : 2, ปรับปรุง : 1",
                        //description : "ปรับปรุง"
                      });
                      
//document
   var  questionRef2 = db.collection("Project").doc("assessment")
                      .collection(assessment).doc(question)
                      .set({
                        name: document.getElementById("question").value,
                        type:  document.getElementById("TypeSelect").value,     
                      
                      
                      })
                                    
    //questionRef.collection(assessment).doc(question).set({  
    //db.collection('Project').doc('assessment').collection(name).doc('question').get().then(doc => {
    //agent.add(doc.data().description);

.then(function(){
  alert("Data Saved");
  console.log("Data Saved")
})
  .catch(function(error){
   console.log(error)
  });
}

//Create
function fncCreateElement(){
  var mySpan = document.getElementById('mySpan');
  var myElement1 = document.createElement('input');
    myElement1.setAttribute('text',"Name of Questionstion");
    mySpan.appendChild(myElement1);
    mySpan.appendChild(document.createElement('br'));
    
}

//Remove
function fncDeleteElement(){
  var mySpan = document.getElementById('mySpan');
  var deleteEle = document.getElementById('Name of Question');
    mySpan.removeChild(deleteEle);
}




