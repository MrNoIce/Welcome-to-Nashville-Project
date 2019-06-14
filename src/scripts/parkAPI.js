function nameData(name, feature) {
  fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${keys.key}=${
      keys.token
    }&${name}`
  )
    .then(response => response.json())
    .then(parkData => {
      console.log(parkData);
      //This is where the search results go/are targeted
      let putInSearchResults = document.querySelector("#searchResults");
      document.querySelector("#searchResults").innerHTML = "";
      let putInSearchResults2 = document.querySelector("#searchResults");
      document.querySelector("#searchResults").innerHTML = "";
      putInSearchResults2.innerHTML = `<h3>Parks with ${feature}</h3>`

      //for loop that loops through park data, adds HTML to dom
      for (i = 0; i < 5; i++) {
        putInSearchResults.innerHTML += `<p id="idSearchResult${i}"><b>${
          parkData[i].park_name
        }</b></p><p>${parkData[i].mapped_location.human_address}</p>
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
  if (menu.value == "2") {
    nameData("hiking_trails=Yes", "Running Trails");
  } else if (menu.value == "3") {
    nameData("basketball_courts=Yes", "Basketball Courts");
  } else if (menu.value == "4") {
    nameData("playground=Yes", "Playgrounds");
  } else if (menu.value == "5") {
    nameData("disc_golf=Yes", "Disc Golf Courses");
  } else if (menu.value == "6") {
    nameData("nature_center=Yes", "Nature Centers");
  } else if (menu.value == "7") {
    nameData("dog_park=Yes", "Dog Parks");
  } else if (menu.value == "8") {
    nameData("lake=Yes", "Lake Access");
  } else if (menu.value == "9") {
    nameData("historic_features=Yes", "Historic Landmarks");
  }
}
