import { getAuth, createUserWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const auth = getAuth();


  var b=document.getElementById("log");
  b.addEventListener("click",signup);
  function signup(){
    var e=document.getElementById("email").value;
    var p=document.getElementById("pass").value;
    createUserWithEmailAndPassword(auth, e, p)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('Sign Up Successful');
    console.log("successful");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
  });
  }