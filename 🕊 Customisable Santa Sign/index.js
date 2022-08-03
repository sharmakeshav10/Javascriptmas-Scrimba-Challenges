// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.
const givenSign = document.getElementById("sign");
const input = document.getElementById("text-input");

input.addEventListener("input", updateSign);

function updateSign() {
  givenSign.textContent = input.value;
}

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
