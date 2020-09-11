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
const table=document.querySelector('#tbresult');

function find(){
resetTable()
var assessment = document.getElementById("assessment").value;
const sfRef2 = db.collection('Project').doc('assessment');
sfRef2.collection(assessment).get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        showData(doc);
    });

});
}
function showData(doc){
       var assessment = document.getElementById("assessment").value;
       var row=table.insertRow(-1);
       var cell1=row.insertCell(0);
       var cell2=row.insertCell(1);
       var cell3=row.insertCell(2);
       var cell4=row.insertCell(3);
       cell2.innerHTML=doc.data().name;
       cell3.innerHTML=doc.data().type;
       let btn=document.createElement('text');
       btn.textContent="edit";
       btn.setAttribute('class','btn btn-secondary btn-sm');
       btn.setAttribute('data-id',doc.id);
       cell4.appendChild(btn);
       btn.addEventListener('click',(e)=>{
        let id=e.target.getAttribute('data-id');
        const sfRef2 = db.collection('Project').doc('assessment');
        
        var name = prompt("Please enter your question");
        var type = prompt("Please enter your type");
        if (name != null) {
            sfRef2.collection(assessment).doc(id).update({name:name})
            if (type != null){
                sfRef2.collection(assessment).doc(id).update({type:type})
                }
        }
        find();
       });
}

function resetTable(){

    var table = document.getElementById("tbresult");
    
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
    }
