const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
const btnGreeting = document.getElementById("greeting-btn")
const moreGreetingsSelector = document.getElementById("more-greetings-selector");

languageSelector.addEventListener("change", translate)
btnGreeting.addEventListener("click", chooseMoreGreetings);

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!",
        newGreeting: "Happy New Year!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!",
        newGreeting: "Feliz Año Nuevo"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!",
        newGreeting: "щасливого Нового року"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!",
        newGreeting: "blwyddyn Newydd Dda"
    }
]

function translate(){
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
    const languageSelected = languageSelector.value;
    for(let i=0; i<greetingsArr.length; i++) {
        if(languageSelected === greetingsArr[i].language) {
            greetingDisplay.textContent = greetingsArr[i].greeting;
        }
    }
}

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
function chooseMoreGreetings() {
    moreGreetingsSelector.style.visibility = "visible";

    moreGreetingsSelector.addEventListener("change", function() {
        const languageSelected = moreGreetingsSelector.value;
        for(let i=0; i<greetingsArr.length; i++) {
            if(languageSelected === greetingsArr[i].language) {
                greetingDisplay.textContent = greetingsArr[i].newGreeting;
            }
        }
    })

}