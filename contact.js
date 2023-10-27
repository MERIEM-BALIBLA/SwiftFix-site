var error = document.querySelector("#error")
console.log(valide);
function valide() {
var name = document.querySelector("#name").value;
if(name.length == 0){
   error.innerHTML = "name is incorrect";
   error.style.color = "red";
   return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
   error.innerHTML = "rewrite your name";
   error.style.color = "red";
   return false;
}
   error.innerHTML = "name's valid";
   error.style.color = "green";
   return true;
}
var errorE = document.querySelector("#error-email")
function valideEmail(){
var email = document.querySelector("#email").value;
if(email.length == 0){
   errorE.innerHTML = "email's incorrect";
   errorE.style.color = "red";
   return false;
}
if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
    errorE.innerHTML = "email's incorrect";
    errorE.style.color = "red";
    return false;
}
errorE.innerHTML = "email's corecte";
errorE.style.color = "green";
return true;
}
var errorP = document.querySelector("#error-phone");
function validateNumber() {
var phone = document.querySelector("#phone").value;
if (phone.length == 0) {
    errorP.innerHTML = "Numéro's incorrect";
    errorP.style.color = "red";
    return false;
}  
if (!phone.match(/^\+212-[67]\d{8}$/)) {
    errorP.innerHTML = "Numéro's incorrect";
    errorP.style.color = "red";
    return false;
} 
errorP.innerHTML = "Numéro's correct'";
errorP.style.color = "green";
return true;
}
var errorA = document.querySelector("#error-address");
function validateAdress() {
var address = document.querySelector("#address").value;
if (address.length == 0) {
    errorA.innerHTML = "Address's incorrect";
    errorA.style.color = "red";
    return false;
}  
if (!address.match(/^[\w\s]{10,40}$/)){
    errorA.innerHTML = "Address's incorrect";
    errorA.style.color = "red";
    return false;
} 
errorA.innerHTML = "Address's correct";
errorA.style.color = "green";
return true;
}
var errorM = document.querySelector("#error-message");
function validateMessage() {
var message = document.querySelector("#message").value;
if (message.length == 0) {
    errorM.innerHTML = "add more information";
    errorM.style.color = "red";
    return false;
}  
if (!message.match(/^.{10,40}$/)) {
    errorM.innerHTML = "add more information";
    errorM.style.color = "red";
    return false;
} 
errorM.innerHTML = "message valide";
errorM.style.color = "green";
return true;
}
var submiterror = document.getElementById('error-submit');

function formvalidet(){
if(!valide() || !valideEmail() || !validateNumber() || !validateAdress() || !validateMessage()){
    submiterror.innerHTML = 'Ensure that the information you provide is accurate and valid.';
    submiterror.style.color = "red";
    setTimeout(function(){submiterror.style.display = 'none';},3000);
    return false;
}
alert("Le message a ete bien enregistre !");
}