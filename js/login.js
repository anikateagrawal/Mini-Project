import { getAuth, signInWithEmailAndPassword , sendEmailVerification,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const auth = getAuth();
var user;
if(sessionStorage.getItem('user')!=null){
  user=JSON.parse(sessionStorage.getItem('user'));
  dp();
}
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
    this.user=user;
    sessionStorage.setItem('user',JSON.stringify(user));
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

//stop user from using website if not logged in
  var a=document.getElementsByTagName("a");
  a=Array.from(a);
  a.forEach(element => {
   element.addEventListener('click',check); 
  });

  function check(e){
    if(sessionStorage.getItem('user')==null){
        alert('Please login to continue');
        e.preventDefault();
    }
}

//signout

document.getElementById('signout').addEventListener('click',signout);
document.getElementById('signout2').addEventListener('click',signout);
function signout(){
  sessionStorage.clear();
  location.reload();
}