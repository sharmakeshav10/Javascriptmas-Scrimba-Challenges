const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
const btn = document.getElementById('btn'); 
const input = document.getElementById("add-items");

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

for(let i=0; i<items.length; i++) {
    checklist.innerHTML += `
        <div class="checklist-item">
            <input type="checkbox" value="${items[i]}" id="${items[i]}" />
            <label for="${items[i]}" class="strikethrough">${items[i]}</label>
        </div>
    `
}


// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

btn.addEventListener("click", function() {
    items.splice(0, items.length);
    checklist.innerHTML = items;      
});

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        //items.push(input.value);
        if(input.value !== "") {
            checklist.innerHTML += `
                <div class="checklist-item">
                    <input type="checkbox" value="${input.value}" id="${input.value}" />
                    <label for="${input.value}" class="strikethrough">${input.value}</label>
                </div>
            `
        }
    }
})







