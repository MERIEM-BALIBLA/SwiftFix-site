// Sélectionnez tous les boutons "Read more" dans les services
const buttons = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".popup");
const overlays = document.querySelectorAll(".overaly");
const btnOffs = document.querySelectorAll(".btn-off");
buttons.forEach((button, i) => {
  button.addEventListener("click", function() {
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
      articles[i].style.display = "block";
      overlays[i].style.display = "block";
    } 
  });
  btnOffs[i].addEventListener("click", function() {
    button.classList.remove("active");
    articles[i].style.display = "none";
    overlays[i].style.display = "none";
  });
});

// let slides = document.querySelectorAll(".slide");
// let index = 0;
// function next() {
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
// }
// function preview() {
//     slides[index].classList.remove('active');
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add('active');
// }
var slider = document.querySelector(".slide-container")
var next = document.querySelector("#next")
var preview = document.querySelector("#preview")
var i = 0;
preview.addEventListener("click",()=>{

 if(i > 0){
    i--;
    translation();
  }
})
next.addEventListener("click",()=>{
  if(i < 1){
    i++;
    translation();
  }
})
function translation(){
  var transSlide = -i*100;
  slider.style.transform = `translateX(${transSlide}%)`
}

