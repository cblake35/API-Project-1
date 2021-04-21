let baseUrl = "https://api.covid19api.com/"

let newConfirmed = document.querySelector(".new_confirmed");
let totalConfirmed = document.querySelector(".total_confirmed");
let newDeaths = document.querySelector(".new_deaths");
let totalDeaths = document.querySelector(".total_deaths");
let newRecovered = document.querySelector(".new_recovered");
let totalRecovered = document.querySelector(".total_recovered");




async function fetchData() {
    await fetch(`${baseUrl}summary`)
        .then(result => result.json())
        .then(data => displayData(data))
        .catch(error => console.log(`error ${error}`))
}

displayData = (data) => {
    newConfirmed.innerHTML = data.Global.NewConfirmed
    totalConfirmed.innerHTML = data.Global.TotalConfirmed
    newDeaths.innerHTML = data.Global.NewDeaths
    totalDeaths.innerHTML = data.Global.TotalDeaths
    newRecovered.innerHTML = data.Global.NewRecovered
    totalRecovered.innerHTML = data.Global.TotalRecovered;
}


fetchData();

document.addEventListener('submit', async function(e){
    e.preventDefault();
  await  fetch("https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z")
        .then(result => result.json())
        .then(data => displaySearch(data))
        .catch(error => console.log(`error ${error}`))
})

displaySearch = (data) => {
    for ( i = 0; i < data.length; i++) {
        if (i === data.length-1) {
            console.log(data[i].Confirmed)
            console.log(data[i].Deaths)
            console.log(data[i].Recovered)
            console.log(data[i].Active)
        }
    }
    
}




