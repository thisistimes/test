
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
                    .collection(assessment).doc(i)
                    .collection("answer").add({
                      Ex : "ดีมาก : 5, ดี : 4, พอใช้ : 3, ค่อนข้างแย่ : 2, ปรับปรุง : 1" ,
                     
                    });
//document
 var  questionRef2 = db.collection("Project").doc("assessment")
                    .collection(assessment).doc(i)
                    .set({
                      name: document.getElementById("container").value,
                      type:  document.getElementById("TypeSelect").value,     
                    })                  
.then(function(){
console.log("Data Saved")
})
.catch(function(error){
 console.log(error)
});
};

//Create Dynamic Question
function addFields(){
  var number = document.getElementById("number").value;
  var container = document.getElementById("container1");


  while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
  }
  for (i=0;i<number;i++){
      container.appendChild(document.createTextNode("Question " + (i+1)));
      var input = document.createElement("input",id="question");
      input.type = "text";
      container.appendChild(input);
    
  }
}

/*
for (i=0;i<number;i++){
  container.appendChild(document.createTextNode("Question " + (i+1)));
  var input = document.createElement("input");
  input.type = "text";
  container.appendChild(input); */
