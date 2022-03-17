const searchInputEl = document.getElementById("searchInput");
const searchResultsEl = document.getElementById("searchResults");
const spinnereEl = document.getElementById("spinner");

function sendResultToDOM(result) {
  let { link, title, description } = result;
  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");
  searchResultsEl.appendChild(resultItemEl);

  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.textContent = title;
  titleEl.target = "_blank";
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  let brakeEl = document.createElement("br");
  resultItemEl.appendChild(brakeEl);

  let linkEl = document.createElement("a");
  linkEl.href = link;
  linkEl.textContent = link;
  linkEl.target = "_blank";
  linkEl.classList.add("result-url");
  resultItemEl.appendChild(linkEl);

  let brakeEl2 = document.createElement("br");
  resultItemEl.appendChild(brakeEl2);

  let descEl = document.createElement("p");
  descEl.textContent = description;
  descEl.target = "_blank";
  descEl.classList.add("link-description");
  resultItemEl.appendChild(descEl);
}

function renderApiData(resultList) {
  spinnereEl.classList.toggle("d-none");
  for (let eachResult of resultList) {
    console.log(eachResult);
    sendResultToDOM(eachResult);
  }
}

function searchForEnter(event) {
  if (event.key === "Enter") {
    spinnereEl.classList.toggle("d-none");
    searchResultsEl.textContent = ""; //important to clear it
    let searchText = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchText;
    let reqConfig = {
      method: "GET"
    };
    fetch(url, reqConfig)
      .then(function (res) {
        return res.json();
      })
      .then(function (jsonData) {
        console.log(jsonData.search_results);
        renderApiData(jsonData.search_results);
      });
  }
}

searchInputEl.addEventListener("keydown", searchForEnter);
