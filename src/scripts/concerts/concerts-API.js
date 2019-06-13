


let searchInput = document.querySelector("#concertSearch")
document.querySelector("#concertBtn").addEventListener("click", () => {
    nameData(searchInput)
})

function nameData(name) {

    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&classificationId=KZFzniwnSyZfZ7v7nJ&apikey=${concertKey}&keyword=${name.value}`)

        .then(response => response.json())
        .then(concertData => {
            let artistArray = concertData._embedded.events
            document.querySelector("#searchResults").innerHTML = "";

            for (let i = 0; i < 5; i++) {

                let artistName = artistArray[i].name

                let venuesAddress = artistArray[i]._embedded.venues[0].name

                let putInSearch = document.querySelector("#searchResults")

                putInSearch.innerHTML += putInDOM =
                    `<p id="idSearchResults${i}">${artistName} - ${venuesAddress}</p> 
                    <button id="itenBtn--${i}"class="addConcert" type="button">save</button>
                    `;
                    addToBtn()
            }
        })
}
function addToIten() {

    let putInItinerary = document.querySelector("#concert")
    let btnID = event.target.id
    console.log(btnID)
    let btnIdArray = btnID.split("--")
    console.log(btnIdArray);
    let btnIdNumber = btnIdArray[1]
    console.log(btnIdNumber)
    let addConcertInfo = document.querySelector('#idSearchResults' + btnIdNumber).innerHTML
    console.log(addConcertInfo)
    putInItinerary.innerHTML += `<p>${addConcertInfo}</p>`

}


function addToBtn() {
    let allAddBtns = document.querySelectorAll(".addConcert")
    for (let i = 0; i < allAddBtns.length; i++) {
        allAddBtns[i].addEventListener('click', addToIten)
    }
}