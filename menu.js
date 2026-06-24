const track = document.querySelector(".cards-track");
const cards = document.querySelectorAll(".card");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

function getCardWidth() {

    const cardStyle = window.getComputedStyle(cards[0]);

    const width = cards[0].offsetWidth;

    const gap =
    parseInt(window.getComputedStyle(track).gap);

    return width + gap;
}

function updateSlider() {

    const moveValue = getCardWidth();

    track.style.transform =
    `translateX(-${currentIndex * moveValue}px)`;
}

nextBtn.addEventListener("click", () => {

    if(currentIndex < cards.length - 4){

        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener("click", () => {

    if(currentIndex > 0){

        currentIndex--;
        updateSlider();
    }
});

window.addEventListener("resize", updateSlider);



// cart count code

const buyButtons =
document.querySelectorAll(".buy-btn");

const cartCount =
document.querySelector(".cart-count");

let count = 0;

buyButtons.forEach((button) => {

    button.addEventListener("click", () => {

        count++;

        cartCount.innerText = count;

        cartCount.classList.add("show");

        cartCount.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.4)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 300
        });

    });

});

cartCount.addEventListener("animationend", () => {

    cartCount.classList.remove("show");

});


// scrambling effect for menu heading

const text =
"Explore Our Delicious Taste";

const scrambleText =
document.getElementById("scramble-text");

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let iteration = 0;

function startScramble() {

    clearInterval(scrambleText.interval);

    scrambleText.interval = setInterval(() => {

        scrambleText.innerText =
        text
        .split("")
        .map((letter, index) => {

            if(letter === " "){
                return " ";
            }

            if(index < iteration){
                return text[index];
            }

            return letters[
                Math.floor(Math.random() * 26)
            ];

        })
        .join("");

        if(iteration >= text.length){

            clearInterval(scrambleText.interval);
        }

        iteration += 1 / 2;

    }, 40);
}

startScramble();