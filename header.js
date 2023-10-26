const btn = document.querySelector(".toggle");
const icon = btn.querySelector(".fa-bars");
const listMenu = document.querySelector(".list-menu");
        btn.onclick = function (){
            if(icon.classList.contains("fa-bars")){
                icon.classList.replace("fa-bars", "fa-times");
                listMenu.style.display = "block";
            }
            else{
                icon.classList.replace("fa-times", "fa-bars");
                listMenu.style.display = "none";
            }
        }
// recherche
const Icon = document.querySelector(".recherche-icon");
const barreRecherche = document.querySelector(".recherche");
const text = document.querySelector(".input");

Icon.onclick = function () {

    if(barreRecherche.classList.toggle("active")){
        text.style.display = "block"; 
    }
    
    else{
        text.style.display = "none";
    }
}
        