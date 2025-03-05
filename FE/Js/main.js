import { ApiService } from "./ApiService.js";
import { UIHandler } from "./UIHandler.js";


const apiService = new ApiService("http://localhost:8080");
const uiHandlerStores = new UIHandler("stores");
const searchQuery = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
// Call getData to get all stores
async function loadData() {
    const dataArray = await apiService.getData("/api/stores");
    uiHandlerStores.renderData(dataArray);
}

// Call searchData to get store
async function  searchByName() {
    const query = searchQuery.value; 
    if (!query) {
        alert("Search content cannot be empty!");
        return;
    }
    const searchResult = await apiService.searchData(query);
    uiHandlerStores.renderData(searchResult);

}



searchButton.addEventListener("click",  (event) => {
    event.preventDefault(); // Prevent form submitting automatically
    searchByName();
});


// Automatically run after page loading is complete
document.addEventListener("DOMContentLoaded", loadData);