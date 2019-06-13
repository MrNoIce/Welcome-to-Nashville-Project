function nameData() {
  fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${keys.key}=${keys.token}&walk_jog_paths=Yes`
  )
    .then(response => response.json())
    .then(parkData => {
      console.log(parkData);
      //This is where the search results go/are targeted
      let putInSearchResults = document.querySelector("#searchResults");
      document.querySelector("#searchResults").innerHTML = "";

      //for loop that loops through park data, adds HTML to dom
      for (i = 0; i < 5; i++) {
        putInSearchResults.innerHTML += `<p id="idSearchResult${i}">${
          parkData[i].park_name
        }</p>
          <button class="addPark" id="itenBtn--${i}">Add</button>`;
        //event listener for the add button on the search results to add park name to itinerary
        addToBtn();
      }
    });
}
document.querySelector("#parkBtn").addEventListener("change", nameData);

function addToIten() {
  //here the itinerary is located/targeted
  let putInItinerary = document.querySelector("#park");
  //this displays a park name in able to add name to the itinerary
  let btnId = event.target.id;
  let btnIdArray = btnId.split("--");
  let btnIdNumber = btnIdArray[1];
  let addParkName = document.querySelector("#idSearchResult" + btnIdNumber)
    .textContent;

  //puts park name in the itinerary

  putInItinerary.innerHTML = `<p>Park: ${addParkName}</p>
          `;
}

function addToBtn() {
  let allAddBtns = document.querySelectorAll(".addPark");
  for (let i = 0; i < allAddBtns.length; i++) {
    allAddBtns[i].addEventListener("click", addToIten);
  }
}
