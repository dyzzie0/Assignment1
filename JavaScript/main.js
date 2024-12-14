const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
    })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

function displayText() {
  var text = document.getElementById("textField");
  text.style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  slides[slideIndex-1].style.display = "block";
  }
} 

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contactForm');
  
form.addEventListener('submit', function(event) {
event.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const message = document.getElementById('message').value.trim();

let isValid = true;
if (name == "") 
  {isValid = false;}   
else{
document.getElementById('nameError').textContent = ""; }
if (email == ""){ 
isValid = false;
} 
else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
isValid = false;
} 
else {
document.getElementById('emailError').textContent = "";}
if (phone == "") {
isValid = false;
} 
else {
document.getElementById('phoneError').textContent = "";}
if (message == "")
   { isValid = false;
} 
else {
document.getElementById('messageError').textContent = "";  } if (isValid) {
window.location.href = "ThankYou.html"; 
    }
  });
});


 





