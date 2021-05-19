function welcome() {
    console.log("Salud!")
}
welcome();



const sectionForm__hidden = document.querySelector(".sectionForm__hidden");
const sectionForm__dots = document.querySelector(".sectionForm__dots");
const sectionForm__moreButton = document.querySelector(".sectionForm__moreButton");
const sectionForm__readMore = document.querySelector(".sectionForm__readMore");


const sectionIdea__hidden = document.querySelector(".sectionIdea__hidden");
const sectionIdea__dots = document.querySelector(".sectionIdea__dots");
const sectionIdea__moreButton = document.querySelector(".sectionIdea__moreButton");
const sectionIdea__readMore = document.querySelector(".sectionIdea__readMore");



const sectionInspirations__showButton1 = document.querySelector(".sectionInspirations__showButton1");
const sectionInspirations__showButton2 = document.querySelector(".sectionInspirations__showButton2");
const sectionInspirations__showButton3 = document.querySelector(".sectionInspirations__showButton3");
const sectionInspirations__showButton4 = document.querySelector(".sectionInspirations__showButton4");
const sectionAbstract__moreButton = document.querySelector(".sectionAbstract__moreButton");
const sectionProblematics__moreButton = document.querySelector(".sectionProblematics__moreButton");








const footer__showAuthor = document.querySelector(".footer__showAuthor");


const visibilityInspirationOne = () => {
    const sectionInspirations__photo1 = document.querySelector(".sectionInspirations__photo1");
    const sectionInspirations__showButton1 = document.querySelector(".sectionInspirations__showButton1");

    sectionInspirations__photo1.classList.toggle("sectionInspirations__active");
    if (sectionInspirations__showButton1.innerText == "Pokaż") {
        sectionInspirations__showButton1.innerText = "Ukryj";
    } else {
        sectionInspirations__showButton1.innerText = "Pokaż";
    }
};


const visibilityInspirationTwo = () => {
    const sectionInspirations__photo2 = document.querySelector(".sectionInspirations__photo2");
    const sectionInspirations__showButton2 = document.querySelector(".sectionInspirations__showButton2");

    sectionInspirations__photo2.classList.toggle("sectionInspirations__active");
    if (sectionInspirations__showButton2.innerText == "Pokaż") {
        sectionInspirations__showButton2.innerText = "Ukryj";
    } else {
        sectionInspirations__showButton2.innerText = "Pokaż";
    }
};


const visibilityInspirationThree = () => {
    const sectionInspirations__photo3 = document.querySelector(".sectionInspirations__photo3");
    const sectionInspirations__showButton3 = document.querySelector(".sectionInspirations__showButton3");

    sectionInspirations__photo3.classList.toggle("sectionInspirations__active");
    if (sectionInspirations__showButton3.innerText == "Pokaż") {
        sectionInspirations__showButton3.innerText = "Ukryj";
    } else {
        sectionInspirations__showButton3.innerText = "Pokaż";
    }
};


const visibilityInspirationFour = () => {
    const sectionInspirations__photo4 = document.querySelector(".sectionInspirations__photo4");
    const sectionInspirations__showButton4 = document.querySelector(".sectionInspirations__showButton4");

    sectionInspirations__photo4.classList.toggle("sectionInspirations__active");
    if (sectionInspirations__showButton4.innerText == "Pokaż") {
        sectionInspirations__showButton4.innerText = "Ukryj";
    } else {
        sectionInspirations__showButton4.innerText = "Pokaż";
    }
};


const rollAbstract = () => {
    const sectionAbstract__hidden = document.querySelector(".sectionAbstract__hidden");
    const sectionAbstract__dots = document.querySelector(".sectionAbstract__dots");
    const sectionAbstract__moreButton = document.querySelector(".sectionAbstract__moreButton");

    sectionAbstract__dots.classList.toggle("sectionAbstract__hidden") &&
        sectionAbstract__hidden.classList.toggle("sectionAbstract__onText");

    sectionAbstract__moreButton.innerText = sectionAbstract__dots.classList.contains("sectionAbstract__hidden") ? "Zwiń" : "Czytaj wiecej";
};


const rollProblematics = () => {
    const sectionProblematics__hidden = document.querySelector(".sectionProblematics__hidden");
    const sectionProblematics__dots = document.querySelector(".sectionProblematics__dots");
    const sectionProblematics__moreButton = document.querySelector(".sectionProblematics__moreButton");

    sectionProblematics__hidden.classList.toggle("sectionProblematics__onText");
    sectionProblematics__dots.classList.toggle("sectionProblematics__hidden");

    sectionProblematics__moreButton.innerText = sectionProblematics__dots.classList.contains("sectionProblematics__hidden") ? "Zwiń" : "Czytaj wiecej";
};


const init = () => {


    sectionInspirations__showButton1.addEventListener("click", visibilityInspirationOne);
    sectionInspirations__showButton2.addEventListener("click", visibilityInspirationTwo);
    sectionInspirations__showButton3.addEventListener("click", visibilityInspirationThree);
    sectionInspirations__showButton4.addEventListener("click", visibilityInspirationFour);
    sectionAbstract__moreButton.addEventListener("click", rollAbstract);
    sectionProblematics__moreButton.addEventListener("click", rollProblematics);
}
init();










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