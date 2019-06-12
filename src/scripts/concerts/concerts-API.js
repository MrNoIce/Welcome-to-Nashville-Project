


let searchInput = document.querySelector("#concertSearch")
document.querySelector("#concertBtn").addEventListener("click", () => {
    nameData(searchInput)
})


function nameData(name) {

    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&classificationId=KZFzniwnSyZfZ7v7nJ&apikey=kBa0lIh8vkJ1QB6WbS90QDIL7juNQ13B&keyword=${name.value}`)

        .then(response => response.json())
        .then(concertData => {
            let artistArray = concertData._embedded.events
            // console.log(artistArray)


            for (let i = 0; i < 5; i++) {

                let artistName = artistArray[i].name

                let venuesAddress = artistArray[i]._embedded.venues[0].name


                for (let j = 0; j < 6; j++) {
                    putInDOM = `<p${i}-content> ${artistName} : ${venuesAddress}</p> <button id= ${i}-btn type="button">I'm button${i}</button>
            `
         
                }
                document.querySelector("#searchResults").innerHTML += putInDOM
               

        }
        
}
        )}
        
// document.querySelector("#${i}-btn").addEventListener("click", ()=>{
//     document.querySelector("#itenirary").innerHTML += putInDOM

