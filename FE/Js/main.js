import { ApiService } from "./ApiService.js";
import { UIHandler } from "./UIHandler.js";


const pageId = document.body.id; 
const apiService = new ApiService("http://localhost:8080");
const uiHandlerStores = new UIHandler("stores");
const uiHandlerStoreSetting = new UIHandler("setting");
const searchQuery = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Call getData to get all stores
async function loadData() {
    const dataArray = await apiService.getData("/api/stores");
    uiHandlerStores.renderData(dataArray,"storesPage");
}
async function loadEdit() {
    const dataArray = await apiService.getData("/api/stores");
    uiHandlerStoreSetting.renderData(dataArray,"edit");
}

// Call searchData to get store
async function  searchByName() {
    const query = searchQuery.value; 
    if (!query) {
        alert("Search content cannot be empty!");
        return;
    }
    const searchResult = await apiService.searchData("/api/store?name=",query);
    if (pageId === "allStores"){
        uiHandlerStores.renderData(searchResult,"storesPage");
    }else if(pageId === "settings"){
        uiHandlerStoreSetting.renderData(searchResult,"edit");
    }

}

searchButton.addEventListener("click",  (event) => {
    event.preventDefault(); // Prevent form submitting automatically
    searchByName();
});


// Call postData to post store
if(pageId === "settings"){
    const storeForm = document.getElementById("store-form");
    storeForm.addEventListener("submit", async function (event) {
        
        // event.preventDefault();

        const formData = new FormData(storeForm);
        const storeData = {
            name: formData.get("name"),         
            url: formData.get("url"),          
            district: formData.get("district") 
        };
        if (!formData.get("name")) {
            alert("Name cannot be empty!");
            return;
        }else{
            
            try {
                const response = await apiService.postData("/api/stores",storeData);
                if (response) {
                    alert("✅ Store added successfully!");
                    storeForm.reset(); // clean form
                } else {
                    alert(" Failed to add store. Please try again.");
                }
            } catch (error) {
                console.error("Error sending data:", error);
            }
        }
    });
}



// Automatically run after page loading is complete
document.addEventListener("DOMContentLoaded", () => {
    if (pageId === "allStores") {
        loadData();
    } else if (pageId === "settings") {
        loadEdit();
    } 
});


