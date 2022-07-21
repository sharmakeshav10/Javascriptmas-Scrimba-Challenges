const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
const input = document.getElementById("custom-input"); 

btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

function writeGreeting() {
    const randomGreet = Math.floor(Math.random() * greetings.length);
    greetingDisplay.textContent = greetings[randomGreet];
}

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        greetingDisplay.textContent = input.value;
    }
})