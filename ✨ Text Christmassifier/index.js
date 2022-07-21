const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
  greeting.classList.toggle("christmassified");
  
  if(christmassifierBtn.textContent === "Christmassify") {
    christmassifierBtn.textContent = "De-christmassify";
  } else {
    christmassifierBtn.textContent = "Christmassify";
  }
}

setTimeout( () => {
  greeting.classList.remove("christmassified");
  christmassifierBtn.textContent = "Christmassify";
}, 5000)

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.`

