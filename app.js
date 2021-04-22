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

let d = new Date();
let month = d.getMonth();
let date = d.getDate()
let year = d.getFullYear()


let countryConfirmed = document.querySelector(".country_confirmed");
let countryDeaths = document.querySelector(".country_deaths");
let countryRecovered = document.querySelector(".country_recovered");
let countryActive = document.querySelector(".country_active");
let resultsHeading = document.querySelector(".country_h2");

document.addEventListener('submit', async function (e) {
    e.preventDefault();
    let country = document.querySelector("#country_name").value;
    
    if (country.length == 0){
        return;
    }
    
    await fetch(`https://api.covid19api.com/live/country/${country}/status/confirmed`)
        .then(result => result.json())
        .then(data => displaySearch(data))
        .catch(error => console.log(`error ${error}`))

})

//check to insure the dates are from past 3 months or 100 days
displaySearch = (data) => {
    console.log(data);
    for (i = 0; i < data.length; i++) {
        if (i === data.length - 1) {
            resultsHeading.innerHTML = data[i].Country;
            countryConfirmed.innerHTML = data[i].Confirmed;
            countryDeaths.innerHTML = data[i].Deaths;
            countryRecovered.innerHTML = data[i].Recovered;
            countryActive.innerHTML = data[i].Active;
        }
    }
}




