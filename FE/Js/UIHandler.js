import { ApiService } from "./ApiService.js";
export class UIHandler {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.apiService = new ApiService("http://localhost:8080");
    }

    async renderData(dataArray,page) {
        try{
            this.container.innerHTML = ""; 

            dataArray.forEach(item => {
                const link = document.createElement("a");
                if (item.url!==null && item.url!==undefined){
                    if (!item.url.startsWith("http://") && !item.url.startsWith("https://")) {
                        link.href = `https://${item.url}`; // autocomplete https://
                    } else {
                        link.href = item.url;
                    }
                }else{
                    link.href = item.url;
                } 
                link.classList.add("grid-item");
    
                const content = document.createElement("div");
                content.classList.add("item-content");
                content.id = `${item._id}`;
                link.dataset.id = item._id;
    
                const title = document.createElement("h2");
                title.textContent = item.name;
    
                const region = document.createElement("p");
                region.textContent = item.district;
    
                // establish a parent-child relationship
                content.appendChild(title);
                content.appendChild(region);
                link.appendChild(content);
                this.container.appendChild(link);

                link.addEventListener("click", (event) => {
                    if (event.target.tagName === "deleteBtn") {
                        event.preventDefault(); 
                    }
                });
    
                if (page === "edit") {
                    const content = document.createElement("div");
                    content.classList.add("Btn-block");
                    const deleteButton = document.createElement("button");
                    deleteButton.textContent = "delete";
                    deleteButton.classList.add("deleteBtn");
                    deleteButton.onclick = (event) => {
                        event.preventDefault();
                        const isDeleted = this.deleteStore(item._id);
                        if (isDeleted) {
                            link.remove(); 
                            alert("Store deleted successfully!");
                        } else {
                            alert("Failed to delete store. Please try again!");
                        }
                    };
    
                    const editButton = document.createElement("button");
                    editButton.textContent = "edit";
                    editButton.classList.add("editBtn");
    
                    content.appendChild(deleteButton);
                    content.appendChild(editButton);
                    link.appendChild(content);
                }
            });
        }catch (error) {
            console.error("❌ Error deleting store:", error);
        }
    }
     // Call deleteData to delete store
    async deleteStore(storeId) {
        try {
            console.log("Clicked delete button for store:", storeId);
            const response = await this.apiService.deleteData("/api/stores",storeId);
        } catch (error) {
            console.error("❌ Error deleting store:", error);
        }

    }

}



    
