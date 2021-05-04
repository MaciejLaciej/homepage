console.log("Salud!")


let sectionAbstract__hidden = document.querySelector(".sectionAbstract__hidden");
let sectionAbstract__dots = document.querySelector(".sectionAbstract__dots");
let sectionAbstract__moreButton = document.querySelector(".sectionAbstract__moreButton");
let sectionAbstract__readMore = document.querySelector(".sectionAbstract__readMore");


let sectionProblematics__hidden = document.querySelector(".sectionProblematics__hidden");
let sectionProblematics__dots = document.querySelector(".sectionProblematics__dots");
let sectionProblematics__moreButton = document.querySelector(".sectionProblematics__moreButton");
let sectionProblematics__readMore = document.querySelector(".sectionProblematics__readMore");


let sectionForm__hidden = document.querySelector(".sectionForm__hidden");
let sectionForm__dots = document.querySelector(".sectionForm__dots");
let sectionForm__moreButton = document.querySelector(".sectionForm__moreButton");
let sectionForm__readMore = document.querySelector(".sectionForm__readMore");


let sectionIdea__hidden = document.querySelector(".sectionIdea__hidden");
let sectionIdea__dots = document.querySelector(".sectionIdea__dots");
let sectionIdea__moreButton = document.querySelector(".sectionIdea__moreButton");
let sectionIdea__readMore = document.querySelector(".sectionIdea__readMore");


let sectionInspirations__photo1 = document.querySelector(".sectionInspirations__photo1");
let sectionInspirations__photo2 = document.querySelector(".sectionInspirations__photo2");
let sectionInspirations__photo3 = document.querySelector(".sectionInspirations__photo3");
let sectionInspirations__photo4 = document.querySelector(".sectionInspirations__photo4");
let sectionInspiration__hidden = document.querySelector(".sectionInspiration__hidden");
let sectionInspirations__showButton1 = document.querySelector(".sectionInspirations__showButton1");
let sectionInspirations__showButton2 = document.querySelector(".sectionInspirations__showButton2");
let sectionInspirations__showButton3 = document.querySelector(".sectionInspirations__showButton3");
let sectionInspirations__showButton4 = document.querySelector(".sectionInspirations__showButton4");


let footer__showAuthor = document.querySelector(".footer__showAuthor");




sectionInspirations__showButton1.addEventListener("click", () => {
    sectionInspirations__photo1.classList.toggle("sectionInspirations__active");
    if (sectionInspirations__showButton1.innerText == "Pokaż") {
        sectionInspirations__showButton1.innerText = "Ukryj";
    } else {
        sectionInspirations__showButton1.innerText = "Pokaż";
    }
});

sectionInspirations__showButton2.addEventListener("click", () => {
    sectionInspirations__photo2.classList.toggle("sectionInspirations__active");
    if (sectionInspirations__showButton2.innerText == "Pokaż") {
        sectionInspirations__showButton2.innerText = "Ukryj";
    } else {
        sectionInspirations__showButton2.innerText = "Pokaż";
    }
});

sectionInspirations__showButton3.addEventListener("click", () => {
    sectionInspirations__photo3.classList.toggle("sectionInspirations__active");
    if (sectionInspirations__showButton3.innerText == "Pokaż") {
        sectionInspirations__showButton3.innerText = "Ukryj";
    } else {
        sectionInspirations__showButton3.innerText = "Pokaż";
    }
});

sectionInspirations__showButton4.addEventListener("click", () => {
    sectionInspirations__photo4.classList.toggle("sectionInspirations__active");
    if (sectionInspirations__showButton4.innerText == "Pokaż") {
        sectionInspirations__showButton4.innerText = "Ukryj";
    } else {
        sectionInspirations__showButton4.innerText = "Pokaż";
    }
});






sectionAbstract__moreButton.addEventListener("click", () => {
    sectionAbstract__hidden.classList.toggle("sectionAbstract__onText");
    sectionAbstract__dots.classList.toggle("sectionAbstract__hidden");

    sectionAbstract__moreButton.innerText = sectionAbstract__dots.classList.contains("sectionAbstract__hidden") ? "Zwiń" : "Czytaj wiecej";
});


sectionProblematics__moreButton.addEventListener("click", () => {
    sectionProblematics__hidden.classList.toggle("sectionProblematics__onText");
    sectionProblematics__dots.classList.toggle("sectionProblematics__hidden");

    sectionProblematics__moreButton.innerText = sectionProblematics__dots.classList.contains("sectionProblematics__hidden") ? "Zwiń" : "Czytaj wiecej";
});


sectionForm__moreButton.addEventListener("click", () => {
    sectionForm__hidden.classList.toggle("sectionForm__onText");
    sectionForm__dots.classList.toggle("sectionForm__hidden");

    sectionForm__readMore.innerText = sectionForm__dots.classList.contains("sectionForm__hidden") ? "Zwiń" : "Czytaj więcej";
});


sectionIdea__moreButton.addEventListener("click", () => {
    sectionIdea__hidden.classList.toggle("sectionIdea__onText");
    sectionIdea__dots.classList.toggle("sectionIdea__hidden");

    sectionIdea__readMore.innerText = sectionIdea__dots.classList.contains("sectionIdea__hidden") ? "Zwiń" : "Czytaj więcej";

});





footer__showAuthor.addEventListener("click", () => {
    if (footer__showAuthor.innerText == "Opracował") {
        footer__showAuthor.innerText = "Maciej Cezary Łata";
    } else {
        footer__showAuthor.innerText = "Opracował";
    }

});