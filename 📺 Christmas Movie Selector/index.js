const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")

const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

const moviesArr = [
    {
        name: "Die Hard",
        age: "18+",
        genre: "Action",
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action"
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance"
    }
]

// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.
function suitableMovie() {
    for(let i=0; i<moviesArr.length; i++) {
        if(ageSelector.value === moviesArr[i].age && genreSelector.value === moviesArr[i].genre) {
            suggestedMovie.textContent = moviesArr[i].name;
        }
    }
}

btn.addEventListener("click", suitableMovie);
ageSelector.addEventListener("change", suitableMovie);


// Stretch goals: 
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc. 