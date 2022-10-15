import { getAuth, signInWithEmailAndPassword , sendEmailVerification,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const auth = getAuth();


  var b=document.getElementById("log");
  b.addEventListener("submit",login);

  function login(event){
    event.preventDefault();
    var e=document.getElementById("email").value;
    var p=document.getElementById("pass").value;
    signInWithEmailAndPassword(auth, e, p)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user.emailVerified){
    console.log(user);
    alert('Login Successful');
    display1();
    dp();
    console.log("successful");
  }
  else{
    sendEmailVerification(user).then(()=>{
      alert("Email verification sent.Email might be in spam folder.Please verify email to sign in.");
        console.log("Email verification sent");
      });
  }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
  });
  }
  document.getElementById("forgot").addEventListener("click",forgotPassword);
  function forgotPassword(){
    sendPasswordResetEmail(auth,prompt('Enter your email address')).then(()=>{
      alert('password reset mail sent');
      // display1();
    }).catch((error)=>{
      alert(error.message);
    })
   
  }