/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu
   after clicking a navigation link
*/

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "WordPress Developer"
];

let wordIndex = 0;
let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

// const contactForm =
//     document.getElementById("contactForm");

// contactForm.addEventListener(
//     "submit",
//     function (event) {

//         event.preventDefault();

//         const name =
//             document.getElementById("name").value;

//         alert(
//             `Thank you ${name}! Your message has been received.`
//         );

//         contactForm.reset();

//     }
// );


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();

    /* =========================
   CUSTOM CURSOR
========================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorOutline =
    document.querySelector(".cursor-outline");


let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

let isMoving = false;

let stopTimer;


/* Mouse movement */

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;


    /* Small dot follows immediately */

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;


    /* Moving state */

    cursorOutline.classList.add("moving");
    cursorOutline.classList.remove("stopped");


    isMoving = true;


    clearTimeout(stopTimer);


    /* Detect when mouse stops */

    stopTimer = setTimeout(() => {

        isMoving = false;

        cursorOutline.classList.remove("moving");
        cursorOutline.classList.add("stopped");

    }, 150);

});


/* Smooth outer cursor */

function animateCursor() {

    outlineX +=
        (mouseX - outlineX) * 0.12;

    outlineY +=
        (mouseY - outlineY) * 0.12;


    cursorOutline.style.left =
        `${outlineX}px`;

    cursorOutline.style.top =
        `${outlineY}px`;


    requestAnimationFrame(animateCursor);

}

animateCursor();


/* =========================
   CURSOR HOVER EFFECT
========================= */

const clickableElements =
    document.querySelectorAll(
        "a, button, input, textarea"
    );


clickableElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorOutline.classList.add("hover");

    });


    element.addEventListener("mouseleave", () => {

        cursorOutline.classList.remove("hover");

    });

});
/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");


/* Show button after scrolling */

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


/* Scroll to top */

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});