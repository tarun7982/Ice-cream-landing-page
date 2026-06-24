const checkbox = document.getElementById("bar");
const navLinks = document.querySelector(".nav-links");
const navIcon = document.querySelector(".nav-icon");

document.addEventListener("click", (e) => {

    if (!navIcon.contains(e.target)) {
        checkbox.checked = false;
    }

});