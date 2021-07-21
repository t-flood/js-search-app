import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm } from "./dataFunctions.js";
import { buildSearchResults } from "./searchResults"

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();

  // TODO: 3 listeners clear text

  const form = document.getElementById("searBar");
  form.addEventListener("submit", submitTheSearch);
};

const submitTheSearch = (event) => {
  event.preventDefault();
  //TODO: delete search results
  processTheSearch();
  setSearchFocus();
};

const processTheSearch = async () => {
  TODO: //clear the stats line
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length) buildSearchResults(resultArray);
  TODO: //set stats line
};
