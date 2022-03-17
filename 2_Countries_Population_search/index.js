const searchInputEl = document.getElementById("searchInput");
const resultCountriesEl = document.getElementById("resultCountries");
const spinnerEl = document.getElementById("spinner");

let searchInputValue = "";
let countryList = [];

function createAndDisplayCountryCard(countyObject) {
  let { name, flag, population } = countyObject;
  let countyContainerEl = document.createElement("div");
  countyContainerEl.classList.add(
    "country-card",
    "col-12",
    "col-md-5",
    "d-flex",
    "flex-row",
    "p-5",
    "ml-auto",
    "mr-auto"
  );
  resultCountriesEl.appendChild(countyContainerEl);

  let imageEl = document.createElement("img");
  imageEl.src = flag;
  imageEl.classList.add("country-flag");
  countyContainerEl.appendChild(imageEl);

  let CountryDetailsEl = document.createElement("div");
  CountryDetailsEl.classList.add("d-flex", "flex-column", "ml-3");
  countyContainerEl.appendChild(CountryDetailsEl);

  let countryTitleEl = document.createElement("h1");
  countryTitleEl.textContent = name;
  countryTitleEl.classList.add("country-name");
  CountryDetailsEl.appendChild(countryTitleEl);

  let countryPopulationEl = document.createElement("p");
  countryPopulationEl.textContent = population;
  countryPopulationEl.classList.add("country-population");
  CountryDetailsEl.appendChild(countryPopulationEl);
}

function coutriesDisplay() {
  resultCountriesEl.textContent = "";
  for (let eachCountry of countryList) {
    if (eachCountry.name.includes(searchInputValue)) {
      createAndDisplayCountryCard(eachCountry);
    }
  }
}

//getting data from API
function fetchData() {
  spinnerEl.classList.remove("d-none");
  const reqConfig = {
    method: "GET"
  };
  const url = "https://apis.ccbp.in/countries-data";
  let totalCountries = fetch(url, reqConfig)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      spinnerEl.classList.add("d-none");
      countryList = jsonData;
      coutriesDisplay();
    });
}
function onChangeInputValue() {
  searchInputValue = searchInputEl.value;
  coutriesDisplay();
}
fetchData();
searchInputEl.addEventListener("keyup", onChangeInputValue);
