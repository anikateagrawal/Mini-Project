import {  getDatabase,  ref, get,  set,  update,  remove,  child,} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
const db = getDatabase();
// var Name=document.getElementById("name");
// var email=document.getElementById("email");
var message = document.getElementById("feedback");

document.getElementById("form").addEventListener("submit", input);
var n, e, m;
function getData() {
  e = user.email;
  m = message.value;
}
var user;
function input(event) {
  event.preventDefault();
  if (sessionStorage.getItem("user") != null) {
    user = JSON.parse(sessionStorage.getItem("user"));
  }
  else{
    this.reset();
    alert("Please Login to continue");
    return;
  }
  getData();
  set(ref(db, "Message/" + e.substring(0, e.indexOf("@"))+"/"+m.substring(0,10)), {
    // Name:n,
    Email: e,
    Message: m,
  })
    .then(() => {
      alert("Message Sent Successfully");
      this.reset();
    })
    .catch((error) => alert("unsuccessful", error));
}
