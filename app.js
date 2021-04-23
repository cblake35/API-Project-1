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

let resultsHeading = document.querySelector(".country_h2");
let countryConfirmed = document.querySelector(".country_confirmed");
let countryNewConfirmed = document.querySelector(".country_newConfirmed");
let countryDeaths = document.querySelector(".country_deaths");
let countryNewDeaths = document.querySelector(".country_newDeaths");
let countryRecovered = document.querySelector(".country_recovered");
let countryNewRecovered = document.querySelector(".country_newRecovered");
let country = document.querySelector("#country_name");

document.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (country.length == 0) {
        return;
    }

    await fetch(`https://api.covid19api.com/summary`)
        .then(result => result.json())
        .then(data => displaySearch(data))
        .catch(error => console.log(`error ${error}`))

})

//check to insure the dates are from past 3 months or 100 days
displaySearch = (data) => {
    console.log(data);
    console.log(data.Countries[5].Country);
    for (i = 0; i < data.Countries.length; i++) {
        // let countryData = data.countries[i].Country;
        // let countryString = countryData.;
        if (data.Countries[i].Country.toLowerCase() == country.value.toLowerCase()) {
            resultsHeading.innerHTML = data.Countries[i].Country;
            countryConfirmed.innerHTML = data.Countries[i].TotalConfirmed;
            countryNewConfirmed.innerHTML = data.Countries[i].NewConfirmed;
            countryDeaths.innerHTML = data.Countries[i].TotalDeaths;
            countryNewDeaths.innerHTML = data.Countries[i].NewDeaths;
            countryRecovered.innerHTML = data.Countries[i].TotalRecovered;
            countryNewRecovered.innerHTML = data.Countries[i].NewRecovered;
        } else {
            console.log("countries does not match");
        }
    }
}
