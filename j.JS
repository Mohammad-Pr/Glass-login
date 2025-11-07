 var Email ;
 var vorod ;
Email = document.getElementById("inp_email").Value;
/*  */
Email = document.getElementById("inp_email").innerHTML = "";
 function formlogin(){
    if(Email = ""){
    document.getElementById("s_email").innerHTML = "لطفا ایمیل را پر کنید ";
// return false;
    }
 }
 function vorod(){
vorod = document.getElementById("btn_vorod").value;
 alert("ورود  موفق(دمو)");
 }
//  function google(){
// vorod = document.getElementById("btn_google").value;
//  alert("NO BACKEND!");
//  }
//  function git(){
// vorod = document.getElementById("btn_git").value;
//  alert("NO BACKEND!");
//  }