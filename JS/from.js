var fullname = document.myForm.fullname;
var errorr = document.getElementById("errorfname");
var submit = document.getElementById('submit1');
var uname =  document.myForm.username;
var erroruname = document.getElementById('erroruname');
var pass = document.myForm.passw;
var errorpass = document.getElementById('errorpass');
var Repass = document.myForm.repass;
var errorRepass = document.getElementById('errorRepass');
var email =  document.myForm.mail;
var Errorremail = document.getElementById('Errorremail');
var adrress =  document.myForm.adrress;
var erorradrress = document.getElementById('erorradrress');

var phone =  document.myForm.phone;
var errorphone = document.getElementById('errorphone');

var date =  document.myForm.birth;
var erorrdate = document.getElementById('erorrdate');

var matchUname= /^[a-z0-9._./S]{1,200}$/ ;
function checkfullname() {
    if (fullname.value == "" || fullname.value == null) {
        fullname.style.borderColor = "red"
        errorr.innerHTML = "Don't leave it blank.";
        document.getElementById('submit1').disabled = true;
     
    }else if(fullname.value.length >200){
        fullname.style.borderColor = "red"
        errorr.innerHTML = "Characters must not exceed 200";
        document.getElementById('submit1').disabled = true;
    }else{
        fullname.style.borderColor = "green"
        errorr.innerHTML = "";
        document.getElementById('submit1').disabled = false;
    }
    
}
function checkUsername() {
    if (uname.value == "" || uname.value == null) {
        uname.style.borderColor = "red"
        erroruname.innerHTML = "Don't leave it blank.";
        document.getElementById('submit1').disabled = true;
     
    }else
     if(uname.value.length >200){
        uname.style.borderColor = "red"
        erroruname.innerHTML = "Characters must not exceed 200";
        document.getElementById('submit1').disabled = true;
    }else if(checkMatchesUsername(document.getElementById("uname").value)==false){
        uname.style.borderColor = "red"
        erroruname.innerHTML = "Khong dung dinh dang";
        document.getElementById('submit1').disabled = true;
    }
    else{
        uname.style.borderColor = "green"
        erroruname.innerHTML = "";
        document.getElementById('submit1').disabled = false;
    }
    
}
function checkMatchesUsername(fullname) {
  if(fullname.match(matchUname)){
      return true;
  }  else{
      return false;
  }
}
function checkPass() {
    if(pass.value == "" || pass.value == null){
        pass.style.borderColor = "red";
        errorpass.innerHTML = "Pass don't not null ";
        document.getElementById('submit1').disabled = false;
    }else if(pass.value.length <5 && pass.value.length>51){
        pass.style.borderColor = "red";
        errorpass.innerHTML = "Pass to 5 and 51  ";
        document.getElementById('submit1').disabled = false;
    }else{
        pass.style.borderColor = "green";
        errorpass.innerHTML = "";
        document.getElementById('submit1').disabled = true;
    }
}
function checkRePass() {
    if( pass.value == Repass.value){
        errorpass.innerHTML = "";
        errorRepass.innerHTML = "Password matching";
        Repass.style.borderColor = "green";
        pass.style.borderColor = "green";
        document.getElementById('submit1').disabled = false;
    } else {
        errorpass.innerHTML = "Password matching";
        errorRepass.innerHTML = "Password matching";
        Repass.style.borderColor = "red";
        pass.style.borderColor = "red";
        document.getElementById('submit1').disabled = true;
    }
}
function checkEmail() {
    if (email.value == "" || email.value == null) {
        email.style.borderColor = "red"
        Errorremail.innerHTML = "Don't leave it blank.";
        document.getElementById('submit1').disabled = true;
     
    }else
     if(email.value.length >100){
        email.style.borderColor = "red"
        Errorremail.innerHTML = "Characters must not exceed 100";
        document.getElementById('submit1').disabled = true;
    }else if(validateEmail(document.getElementById("email").value)==false){
        email.style.borderColor = "red"
        Errorremail.innerHTML = "Khong dung dinh dang";
        document.getElementById('submit1').disabled = true;
    }
    else{
        uname.style.borderColor = "green"
        Errorremail.innerHTML = "";
        document.getElementById('submit1').disabled = false;
    }
    
}
function checkPhone() {
    if (phone.value == "" || phone.value == null) {
        phone.style.borderColor = "red"
        errorphone.innerHTML = "Don't leave it blank.";
        document.getElementById('submit1').disabled = true;
     
    }else if(is_phone(document.getElementById("phone").value)==false){
        phone.style.borderColor = "red"
        errorphone.innerHTML = "Khong dung dinh dang";
        document.getElementById('submit1').disabled = true;
    }
    else{
        phone.style.borderColor = "green"
        errorphone.innerHTML = "";
        document.getElementById('submit1').disabled = false;
    }
    
}
function checkAdress() {
    if (adrress.value == "" || adrress.value == null) {
        adrress.style.borderColor = "red"
        erorradrress.innerHTML = "Don't leave it blank.";
        document.getElementById('submit1').disabled = true;
    }else if(adrress.value.length>500){
        adrress.style.borderColor = "red"
     erorradrress.innerHTML ="Khong duoc vuot qua 500 ki tu"
     document.getElementById('submit1').disabled = true;
    }
    else{
        adrress.style.borderColor = "green"
        erorradrress.innerHTML = "";
        document.getElementById('submit1').disabled = false;
    }
    

}
function checkdate() {
    if (date.value == "" || date.value == null) {
        date.style.borderColor = "red"
        erorrdate.innerHTML = "Not null";
        document.getElementById('submit1').disabled = true;
    }
    else if(is_date(date.value)==false){
        date.style.borderColor = "red"
        erorrdate.innerHTML = "Ngay nhap vao phai lon nho hon hoac bang ngay hien tai";
        document.getElementById('submit1').disabled = true;
    } else if(vali_Date(date.value)==false){
        date.style.borderColor = "red"
        erorrdate.innerHTML = "Khong dung dinh dang";
        document.getElementById('submit1').disabled = true;
    }
    
    else{
        date.style.borderColor = "green"
        erorrdate.innerHTML = "";
        document.getElementById('submit1').disabled = false;
    }
    
}


function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

function is_phone(phonenumber) {
    var phoneregex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    if (phonenumber.match(phoneregex)) {
        return true;
    }
    else {
        return false;
    }
}


function is_date(date) {
    var today = new Date();
    if(date<=today){
        return true
    }else{
        return false;
    }
  
}
function vali_Date(date){
      var dategx =/^\d{2}\/\d{2}\/\d{4}$/;
    if (date.match(dategx)) {
        return true;
    }
    else {
        return false;
    }
}
