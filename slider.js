const images = document.querySelectorAll(".ice-cup");
const total = images.length;

let index = 0;

const gradients = [
    "linear-gradient(#9CB44C, #D7E9A2)",
    "linear-gradient(#733C28, #C6774B)",
    "linear-gradient(#DB9803, #F4CD04)",
    "linear-gradient(#B67C4F, #E2AB72)",
    "linear-gradient(#BF1B1B, #EB3337)"
];

function updateSlider() {
    images.forEach((img, i) => {

        img.style.transition = "all 0.7s cubic-bezier(.65,0,.35,1)";
        img.style.opacity = "0";
        img.style.filter = "blur(4px)";
        img.style.transform = "translate(-50%, -50%) scale(0.75)";
        img.style.zIndex = "1";
        img.style.pointerEvents = "none";
        img.style.rotate= "0deg";


        if (i === index) {
            img.style.left =
            window.innerWidth <= 514 ? "50%" : "24%";
            img.style.top = "65%";
            img.style.transform = "translate(-50%, -50%) scale(1)";
            img.style.filter = "blur(0)";
            img.style.opacity = "1";
            img.style.zIndex = "3";
            img.style.rotate= "5deg";
        }

        else if (i === index + 1) {
            img.style.left =
            window.innerWidth <= 514 ? "90%" : "60%";
            img.style.top = "55%";
            img.style.transform = "translate(-50%, -50%) scale(0.9)";
            img.style.opacity = "0.9"; 
            img.style.filter = "blur(4px)";
        }

        else if (i === index - 1) {
            img.style.left =
            window.innerWidth <= 514 ? "25%" : "25%";
            img.style.top = "65%";
            img.style.transform = "translate(-50%, -50%) scale(0.9)";
            img.style.opacity = "0";
            img.style.filter = "blur(4px)";
            img.style.rotate= "0deg";
        }

        else if (i === index + 2) {
            img.style.left =
            window.innerWidth <= 514 ? "120%" : "88%";
            img.style.top = "45%";
            img.style.opacity = "0.5";
            img.style.rotate= "0deg";
        }

        else if (i === index - 2) {
            img.style.left = "10%";
            img.style.top = "50%";
            img.style.opacity = "0";
        }

        else if (i === index + 3) {
            img.style.left = "113%";
            img.style.top = "40%";
            img.style.opacity = "0.5";
            img.style.rotate= "-2deg";
            img.style.scale= "0.9";
        }

        else if (i === index - 3) {
            img.style.left = "10%";
            img.style.top = "50%";
            img.style.opacity = "0";
        }

        else if (i === index + 4) {
            img.style.left = "117%";
            img.style.top = "35%";
            img.style.opacity = "0.5";
            img.style.rotate= "0deg";
            img.style.scale= "0.9";
        }

        else{
            img.style.opacity = "0";
            img.style.pointerEvents = "none";
        }
    });

    document.querySelector(".home").style.background = gradients[index];
}

document.getElementById("next").onclick = () => {
    if (index < total - 1) {
        index++;
        updateSlider();
    }
};


document.getElementById("prev").onclick = () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
};


updateSlider();