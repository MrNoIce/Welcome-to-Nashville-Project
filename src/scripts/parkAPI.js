function nameData(name) {
  fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${keys.key}=${keys.token}&${name}`
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
          parkData[i].park_name}</p><p>${parkData[i].mapped_location.human_address}</p>
          <button class="addPark" id="itenBtn--${i}">save</button>`;
        //event listener for the add button on the search results to add park name to itinerary
        addToBtn();
      }
    });
}
// document.querySelector("#parkBtn").addEventListener("change", nameData);

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

function fetchParkData(menu) {
  if (menu.value == '2') {
    nameData("hiking_trails=Yes")
    
}
else if (menu.value == '3') {
  nameData("basketball_courts=Yes")
}
else if(menu.value == '4') {
  nameData("playground=Yes")
}
else if(menu.value == '5') {
  nameData("disc_golf=Yes")
}
else if(menu.value == '6') {
  nameData("nature_center=Yes")
}
else if(menu.value == '7') {
  nameData("dog_park=Yes")
}
else if(menu.value == '8') {
  nameData("lake=Yes")
}
else if(menu.value == '9') {
  nameData("historic_features=Yes")
}
}
