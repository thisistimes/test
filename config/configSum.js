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
const db = firebase.firestore();
const table = document.querySelector('#tbresult');

function find(){
resetTable()
var assessment = document.getElementById("assessment").value;

const assessmentRef = db.collection('Project').doc('assessment');
assessmentRef.collection(assessment).get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        showData(doc);
    });
});
}

//show data in table
function showData(doc){
    var assessment = document.getElementById("assessment").value;
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell2.innerHTML=doc.data().name;
    cell3.innerHTML=doc.data().type;
}

function resetTable(){
    var table = document.getElementById("tbresult");   
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
}

//search
document.getElementById("assessment").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }
});


//คำนวณเปอร์เซ็น
db.collection('answer').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{

    })
})


function Cal(){
    if (description == 'ดีมาก') {
        var data = {
            number: 4
        }
    } else if (description == 'ดี') {
        var data = {
            number: 4
        }
    } else if (description == 'พอใช้') {
        var data = {
            number: 3
        }
    }else if (description == 'ค่อนข้างแย่') {
        var data = {
            number: 2
        }
    } else if(description == 'ปรับปรุง') {
        var data = {
            number: 1
        }
    }
}