import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification}  from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const auth = getAuth();


  var b=document.getElementById("sign");
  b.addEventListener("submit",signup);
  
  function signup(event){
    event.preventDefault();
    var e=document.getElementById("email2").value;
    var p=document.getElementById("pass2").value;
    createUserWithEmailAndPassword(auth, e, p)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    sendEmailVerification(user).then(()=>{
      alert("Email verification sent.Email might be in spam folder.Please verify email to sign in.");
        console.log("Email verification sent");
      });
      login();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
  });
  }

  