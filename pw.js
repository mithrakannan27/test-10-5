var pass=document.getElementById("pass");
var o=document.getElementById("o");
var oo=document.getElementById("oo");
var ooo=document.getElementById("ooo");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");

one.style.display="none";
two.style.display="none";
three.style.display="none";
pass.onfocus=function(){
    one.style.display="block";
    two.style.display="block";
    three.style.display="block"; 
}


o.style.display="none";
oo.style.display="none";
ooo.style.display="none";

pass.onkeyup=function(){
    if(pass.value.length <= 6){
        o.style.display="block";
        one.style.backgroundColor="red";
    }
    else if(pass.value.length >=7 || pass.value.length<=14){
        o.style.display="none";
        oo.style.display="block";
        two.style.backgroundColor="rgb(255, 221, 0)";
    }
    else if(pass.value.length >= 15){
        o.style.display="none";
        oo.style.display="none";
        ooo.style.display="block";
        three.style.backgroundColor="green"; 
    }
}

