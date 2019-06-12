

function nameData(name) {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&apikey=kBa0lIh8vkJ1QB6WbS90QDIL7juNQ13B")
        .then(response => response.json())
        .then(concertData => {
            let artistArray = concertData._embedded.events
            let venueName = concertData._embedded.events
            // ._embedded._embedded.events.venue  
            for (let i = 0; i < artistArray.length; i++) {
                console.log(artistArray[i].name)
                console.log(venueName[i]._embedded)
            }
        })
}
nameData()



let sports = KZFzniwnSyZfZ7v7nE
let music