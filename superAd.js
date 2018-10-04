document.getElementById("createBut").onclick = function() {showCreateForm()};

function showCreateForm() {
document.querySelector('.add-money-container').style.display = 'none';
    
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
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';

    },3000);

    document.getElementById('Create-Action-student').reset();

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
        currentBalance: 0
    });
}

 var studentRef = firebase.database().ref('NonStudent');

document.getElementById('vendor-form').addEventListener('submit',submitVendorForm);

function submitVendorForm(e){
    e.preventDefault();
    var name = getInput('name');
    var id = getInput('ID');
    // var rollNo = getInput('rollnum')

    saveVendor(name,id);
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';

    },3000);

    document.getElementByClassName('Create-Action-vendor').reset();

    console.log(name);
}


function saveVendor(name,id) {
    console.log(alert);
}




document.getElementById("updateBut").onclick = function() {showUpdateForm()};

function showUpdateForm() {
document.querySelector('.create-action-contaier').style.display = 'none';

document.querySelector('.add-money-container').style.display = 'block';
};

document.getElementById('add-money-id').addEventListener('submit',submitMoneyForm);


var studentRef = firebase.database().ref('Student');


function submitMoneyForm (e) {
    e.preventDefault();
    var amount = getInput('amount');
    var id = getInput('stID');
    // var rollNo = getInput('rollnum')

    updateMoney(id,amount);
    // document.querySelector('.alert').style.display = 'block';

    // setTimeout(function() {
    // document.querySelector('.alert').style.display = 'none';

    // },3000);

    // document.getElementByClassName('Create-Action-vendor').reset();
}

function updateMoney(id,amount) {
    firebase.database().ref('Student/' + id).update({
        currentBalance: amount ,
        name: "cee",
        rollNo: 12301012016


       });
    // var curBal = studentRef.child("id").child('currentBalance');

    // curBal.transaction(function(currentBalance,amount) {
    // return parseInt(currentBalance)+ amount;})
}

// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }

