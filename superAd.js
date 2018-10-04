document.getElementById("createBut").onclick = function() {showCreateForm()};

function showCreateForm() {
document.querySelector('.create-action-contaier').style.display = 'block';
};

// var e = document.getElementById("account-type");
// var value = e.options[0].value;
// var type = e.options[0].text;
// e.onclick = function(){heck()};
// function heck() {
//     console.log('hello')
// }
// console.log(type.text);

 document.getElementById("student").onclick = function() {displayStudentForm()};
 document.getElementById("vendor").onclick = function() {displayVendorForm()};

function displayStudentForm() {
    document.querySelector('.Create-Action-vendor').style.display = 'none';        
    document.querySelector('.Create-Action-student').style.display = 'block';
    
     
};
function displayVendorForm() {
    document.querySelector('.Create-Action-student').style.display = 'none';
document.querySelector('.Create-Action-vendor').style.display = 'block';

};
var config = {
    apiKey: "AIzaSyCWbg7gm39tWGy5spIFkmZuhMNobLHhPtY",
    authDomain: "stupay-44266.firebaseapp.com",
    databaseURL: "https://stupay-44266.firebaseio.com",
    projectId: "stupay-44266",
    storageBucket: "stupay-44266.appspot.com",
    messagingSenderId: "707878873067"
  };
  firebase.initializeApp(config);
 

var studentRef = firebase.database().ref('Student');

document.getElementById('student-form').addEventListener('submit',submitStudentForm);
function submitStudentForm(e){
    e.preventDefault();
    var name = getInput('name');
    var id = getInput('ID');
    var rollNo = getInput('rollnum')

    saveStudent(name,id,rollNo);
    // document.querySelector('.alert').style.display = 'block';

    // setTimeout(function() {
    // document.querySelector('.alert').style.display = 'none';

    // },3000);

    //document.getElementById('Create-Action-student').reset();

    console.log(name);
}


function getInput(id){
    return   document.getElementById(id).value;
}

function saveStudent(name,id,rollNo) {
    var newStudentRef = studentRef.push({
        name:name,
        id:id,
        rollNo:rollNo,
        currentBalance:0
    });
}

// var studentRef = firebase.database().ref('NonStudent');

// document.getElementById('vendor-form').addEventListener('submit',submitVendorForm);

// function submitVendorForm(e){
//     e.preventDefault();
//     var name = getInput('name');
//     var id = getInput('ID');
//     var rollNo = getInput('rollnum')

//     saveStudent(name,id,rollNo);
//     // document.querySelector('.alert').style.display = 'block';

//     // setTimeout(function() {
//     // document.querySelector('.alert').style.display = 'none';

//     // },3000);

//     //document.getElementById('Create-Action-student').reset();

//     console.log(name);
// }


// function getInput(id){
//     return   document.getElementById(id).value;
// }

// function saveStudent(name,id,rollNo) {
//     var newStudentRef = studentRef.push({
//         name:name,
//         id:id,
//         rollNo:rollNo,
//         currentBalance:0
//     });
// }