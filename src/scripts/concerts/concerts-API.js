

let searchConcertInput = document.querySelector('#concertSearch')
function nameData(name) {

    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&classificationId=KZFzniwnSyZfZ7v7nJ&apikey=kBa0lIh8vkJ1QB6WbS90QDIL7juNQ13B&keyword=${name}`)

        .then(response => response.json())
        .then(concertData => {
            let artistArray = concertData._embedded.events
            // console.log(artistArray)

            for (let i = 0; i < artistArray.length; i++) {

               var artistName = artistArray[i].name

                // console.log(artistArray[i]._embedded.venues[0].name)
                // console.log(artistArray[i]._embedded.venues[0].address.line1)
                // console.log(artistArray[i].dates.start.localDate)
            }

        })
}

nameData("john")

console.log(artistName)