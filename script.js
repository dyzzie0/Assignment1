function chgImagg(){  
    imageRotator.setAttribute("src", imageAr[imageCounter]);
    imageCounter++;

    if(imageCounter == imageAr.length){
        imageCounter = 0;
    }
}

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

let imageAr = [
    'Images/banner-image-1.jpg',
    'Images/banner-image-2.jpg',
    'Images/banner-image-3.jpg',
    'Images/banner-image-4.jpg',
    'Images/banner-image-5.jpg',
    'Images/banner-image-6.jpg',
]


let imageCounter = 0;
let imageRotator = document.getElementById('myImages');
setInterval(chgImagg, 4000);
imageRotator.src = imageAr[imageCounter];
function chgImagg(){  
    imageRotator.setAttribute("src", imageAr[imageCounter]);
    imageCounter++;
    if(imageCounter == imageAr.length){
        imageCounter = 0;
    }
}


 