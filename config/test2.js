
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

//collection
var questionRef = db.collection("Project").doc("assessment")
                    .collection(assessment).doc(question)
                    .collection("answer").add({
                      description : "ดีมาก : 5, ดี : 4, พอใช้ : 3, ค่อนข้างแย่ : 2, ปรับปรุง : 1"
                    });

//document
 var  questionRef2 = db.collection("Project").doc("assessment")
                    .collection(assessment).doc(question)
                    .set({
                      name: document.getElementById("question").value,
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

$(document).ready(function() {
    var max_fields      = 10;
    var wrapper         = $(".container2");
    var add_button      = $(".add_form_field");
    var del_button      = $(".delete");
    
 
    var x = 1;
    $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_fields){
            x++;  
            (wrapper).append('<div><input type="text" name="mytext[]"><br></div>');
            //$(wrapper).append('<div><input type="text" name="mytext[]"/><input class="delete" type="button" value="-"></input></div>'); //add input box
        }
  else
  {
  alert('You Reached the limits')
  }
    });
 

    $(wrapper).on("click",".delete", function(e){
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })

});

