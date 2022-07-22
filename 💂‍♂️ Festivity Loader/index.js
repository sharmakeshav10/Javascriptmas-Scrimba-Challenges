const meter = document.getElementById("meter")
const date = new Date().getDate(); 
// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
const festivityLoader = () => {
    meter.setAttribute('value', date);
}

festivityLoader();

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
