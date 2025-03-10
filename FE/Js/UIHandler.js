import { ApiService } from "./ApiService.js";
export class UIHandler {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.apiService = new ApiService("http://localhost:8080");
    }

    async renderData(dataArray,page) {
        try{
            this.container.innerHTML = ""; 
            // store card
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
                link.dataset.id = item._id;
    
                const content = document.createElement("div");
                content.classList.add("item-content");
                content.id = `${item._id}`;
    
                const title = document.createElement("h2");
                title.textContent = item.name;
    
                const region = document.createElement("p");
                region.textContent = item.district;
    
                // establish a parent-child relationship
                content.appendChild(title);
                content.appendChild(region);
                link.appendChild(content);
                this.container.appendChild(link);
    
                if (page === "edit") {

                    // edit & delete Btn
                    const content = document.createElement("div");
                    content.classList.add("Button-block");

                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Delete";
                    deleteBtn.classList.add("deleteBtn");
                    deleteBtn.onclick = (event) => {
                        event.preventDefault();
                        const isDeleted = this.deleteStore(item._id);
                        if (isDeleted) {
                            link.remove(); 
                            alert("Store deleted successfully!");
                        } else {
                            alert("Failed to delete store. Please try again!");
                        }
                    };

                    const editBtn = document.createElement("button");
                    editBtn.textContent = "Edit";
                    editBtn.classList.add("editBtn");
                    editBtn.onclick = (event) => {
                        event.preventDefault();
                        editForm.style.display = "block"; 
                        submitBtn.style.display = "block";
                    };

                    // establish a parent-child relationship
                    content.appendChild(deleteBtn);
                    content.appendChild(editBtn);
                    link.appendChild(content);
                    

                    
                    // updating form
                    const content2 = document.createElement("div");
                    content2.classList.add("store-setting");

                    const editForm = document.createElement("form");
                    editForm.classList.add("edit-form");
                    editForm.onclick = (event) => {
                        event.preventDefault(); 
                    };
                    
                    editForm.style.display = "none"; 

                    const nameInput = document.createElement("input");
                    nameInput.type = "text";
                    nameInput.value = item.name;
                    nameInput.placeholder = "Enter new name";

                    const urlInput = document.createElement("input");
                    urlInput.type = "text";
                    urlInput.value = item.url;
                    urlInput.placeholder = "Enter new URL";

                    const districtInput = document.createElement("input");
                    districtInput.type = "text";
                    districtInput.value = item.district;
                    districtInput.placeholder = "Enter new district";

                    const submitBtn = document.createElement("button");
                    submitBtn.textContent = "Save";
                    submitBtn.style.display = "none"; 

                    submitBtn.onclick = async (event) => {
                        event.preventDefault();
                        const updatedData = {
                            id: item._id, 
                            name: nameInput.value,
                            url: urlInput.value,
                            district: districtInput.value
                        };
                    
                        try {
                            const isUpdated = await this.updateStore(updatedData);
                            if (isUpdated) {
                                alert("Store updated successfully!");
                                title.textContent = updatedData.name; 
                                region.textContent = updatedData.district; 
                                editForm.style.display = "none";
                                submitBtn.style.display = "none";
                            } else {
                                alert("Failed to update store!");
                            }
                        } catch (error) {
                            console.error("Error updating store:", error);
                        }
                    };
                    

                    editForm.appendChild(nameInput);
                    editForm.appendChild(urlInput);
                    editForm.appendChild(districtInput);
                    content2.appendChild(editForm);
                    content2.appendChild(submitBtn);
                    link.appendChild(content2);
                }
            });
        }catch (error) {
            console.error("Error deleting store:", error);
        }
    }

    // Call deleteData to delete store
    async deleteStore(storeId) {
        try {
            console.log("Clicked delete button for store:", storeId);
            const response = await this.apiService.deleteData("/api/stores",storeId);
            return true; 
        } catch (error) {
            console.error("Error deleting store:", error);
            return false; 
        }
    }

    // Call updateData to update info
    async updateStore(updatedData) {
        try {
            const response = await this.apiService.updateData("/api/stores", updatedData);
    
            if (response) {
                console.log("Store updated successfully");
                return true; 
            } else {
                console.error("Failed to update store:", response ? response.message : "No response");
                return false; 
            }

        } catch (error) {
            console.error("Error updating store:", error);
            return false;
        }
    }
    
}



    
