var user;
document.getElementsByClassName("log")[0].addEventListener("click",login);
document.getElementsByClassName("log")[1].addEventListener("click",login);
document.getElementsByClassName("signin")[0].addEventListener("click",signin);
document.getElementsByClassName("signin")[1].addEventListener("click",signin);
// document.getElementById("si").addEventListener("click",signin);
function login(){
    document.getElementsByClassName("display1")[0].style="display:none";
    document.getElementsByClassName("display3")[0].style="display:none";
    document.getElementsByClassName("display2")[0].style="display:flex";
}
function signin(){
    document.getElementsByClassName("display1")[0].style="display:none";
    document.getElementsByClassName("display2")[0].style="display:none";
    document.getElementsByClassName("display3")[0].style="display:flex";
}
function display1(){
    document.getElementsByClassName("display2")[0].style="display:none";
    document.getElementsByClassName("display3")[0].style="display:none";
    document.getElementsByClassName("display1")[0].style="display:block";
}
function dp(){
    document.getElementsByClassName("log")[0].style="display:none";
    document.getElementsByClassName("log")[1].style="display:none";
    document.getElementsByClassName("signin")[0].style="display:none";
    document.getElementsByClassName("signin")[1].style="display:none";
    document.getElementsByClassName("dp")[0].style="display:flex";
    document.getElementsByClassName("dp")[1].style="display:flex";
    
    document.getElementsByClassName('user')[0].style.width="50px";
    document.getElementsByClassName('user')[1].style.width="100px";
}

function checkbox(){
    let ch=document.getElementById("c");
    ch.checked=false;
}
