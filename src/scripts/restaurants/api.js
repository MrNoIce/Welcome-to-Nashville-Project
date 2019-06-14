let uniqueRestId = 0
let uniqueButtonId = 0

let zipCodeVariable = document.querySelector("#restaurantSearch")

document.querySelector("#restaurantBtn").addEventListener("click", () => {

    fetch (`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${zipCodeVariable.value}&sort=rating&apikey=${app_keys}`)
    .then(response => response.json())
    .then( searchResult =>  {
    document.querySelector("#searchResults").innerHTML = "";
    for (let i = 0; i < 4; i++) {
        uniqueRestId++
        uniqueButtonId++
    addSearchResultsToDom(nameOfRestaurant(searchResult.restaurants[i]))
    }
})})

let resultField = document.querySelector("#searchResults")

resultField.addEventListener("click", () => {
    if (event.target.id.includes("butt")) {
        console.log("this is the event ID before split", event.target.id)
    let buttonIdArrayRest = event.target.id.split("-")
    console.log("This is the event ID after the split", buttonIdArrayRest)
    let restaurantElement = document.getElementById(`rest-${buttonIdArrayRest[1]}`).textContent
    console.log(restaurantElement)
    saveMyChoice(restaurantElement)
    }
})

function addSearchResultsToDom(nameOfRestaurant) {
    document.querySelector("#searchResults").innerHTML += nameOfRestaurant;
}

function nameOfRestaurant(searchResults) {
    return `
    <h2 id = rest-${uniqueRestId}>${searchResults.restaurant.name}</h2>
    <button id = butt-${uniqueButtonId}>Save</button>
    `
}

function saveMyChoice (restaurantElement) {
    document.querySelector("#restaurant").innerHTML = "Restaurant:" + restaurantElement;
}

