// var error = document.querySelector("#error")

//  function valide() {
//     var name = document.querySelector("#name").value;
//     if(name.length == 0){
//         error.innerHTML = "name's requiered";
//         return false;
//     }
//     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
//         error.innerHTML = "rewrite your name";
//         return false;
//     }
//         error.innerHTML = "valid";
//         return true;
// }

document.querySelector("#contact-form").addEventListener("submit", function(e){
    var error;
    var input = document.getElementsByTagName('input');
    var select = document.getElementsByTagName('select');
    var textarea = document.getElementsByTagName('textarea');
    for(var i=0;i< input.length;i++){
        if(!input[i].velue)
        error = "veuillez saisir ce champ";
    }
    if(erreur){
        e.preventDefault();
        erreur = document.getElementById("erreur");
    }else{
    alert('Formulaire a été bien enregistrer')
}
});

    // for(var i=0;i< select.length;i++){
    //     if(!select[i].velue)
    //     error = "veuillez saisir ce champ";
    // }

    // for(var i=0;i< textarea.length;i++){
    //     if(!textarea[i].velue)
    //     error = "veuillez saisir ce champ";
    // }
    // // var name = document.querySelector("#name");
    // var email = document.querySelector("#email");
    // var PN = document.querySelector("#phone");
    // var country = document.querySelector("#country");
    // var address = document.querySelector("#address");
    // var issues = document.querySelector("#issues");
    // var message = document.querySelector("#message");

    // if(!name.value){
    //     erreur = "veuillez saisir votre nom";
    // }
    // if(!email.value){
    //     erreur = "veuillez saisir votre email";
    // }
    // if(!PN.value){
    //     erreur = "veuillez saisir votre numéro de téléphone";
    // }
    // if(!country.value){
    //     erreur = "veuillez saisir country";
    // }
    // if(!address.value){
    //     erreur = "veuillez saisir votre adresse";
    // }
    // if(!issues.value){
    //     erreur = "veuillez saisir un probleme";
    // }
    // if(!message.value){
    //     erreur = "veuillez écrire une petite description";
    // }
    // if(erreur){
    //     e.preventDefault();
    //     document.getElementById("erreur").innerHTML = erreur;
    // }else{
    // alert('Formulaire a été bien enregistrer')

    // });
    