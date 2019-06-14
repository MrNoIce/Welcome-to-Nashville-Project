function eventData(name) {
  console.log("name,", name);
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=nashville&search_type=promoted&token=${keyToken}&q=${name}`
  )
    .then(response => response.json())
    .then(eventJson => {
      console.log(eventJson);
      let eventName = eventJson.events;
      document.querySelector("#searchResults").innerHTML = "";
      for (let i = 0; i < 5; i++) {
        let meetupName = eventName[i].name.text;
        let meetUpUrl = eventName[i].url;
        for (let j = 0; j < 5; j++) {
          addToDom = `<p id="searchResults--${i}"> ${meetupName} : <a target="_blank" href=${meetUpUrl}>Event page</a></p>
          <button class="saveMeet" id="saveMeetUp--${i}">save</button>
          `;
        }

        document.querySelector("#searchResults").innerHTML += addToDom;

        addClickEventToMeetup();
        // console.log(eventName[i].name);
        // console.log(eventName[i].is_free);
        // console.log(eventName[i].url);
      }
    });
}

function addToIteniary(event) {
  let addToIteniary = document.querySelector("#meetup");
  let btnID = event.target.id;
  let btnIDArray = btnID.split("--");
  let btnIDNumber = btnIDArray[1];
  let addMeetUpName = document.querySelector("#searchResults--" + btnIDNumber)
    .textContent;
  addToIteniary.innerHTML = `<p>Events: ${addMeetUpName}</p>`;
}
console.log("time");

function addClickEventToMeetup() {
  let allSaveMeet = document.querySelectorAll(".saveMeet");
  for (let i = 0; i < allSaveMeet.length; i++) {
    allSaveMeet[i].addEventListener("click", addToIteniary);
  }
}
console.log("timeses");
//eventData("tech");
