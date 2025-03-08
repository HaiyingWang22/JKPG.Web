export class ApiService {
    constructor(requestUrl) {
        this.requestUrl = requestUrl;
    }

    // get all stores
    async getData(endpoint) {
        try {
            const response = await fetch(`${this.requestUrl}${endpoint}`, {
                method: "GET"
            });
            if (response.ok) {
                return await response.json();
            }else{
                throw new Error(`Request failed: ${response.status}`);
            }
        } catch (error) {
            console.error("API data retrieval error:", error);
        }
    }

    // get store by name
    async searchData(endpoint,query) {
        try {
            const response = await fetch(`${this.requestUrl}${endpoint}${encodeURIComponent(query)}`, {
                method: "GET"
            });
            if (response.ok) {
                return await response.json();
            }else{
                throw new Error(`Request failed: ${response.status}`);
            }
        } catch (error) {
            console.error("Data retrieval error:", error);
        }
    }

    // post new store
    async postData(endpoint, data) {
        try {
            const response = await fetch(`${this.requestUrl}${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"  
                },
                body: JSON.stringify(data) 
            });
            if (response.ok) {
                return await response.json();
            }else{
                throw new Error(`Request failed: ${response.status}`);
            }
            
        } catch (error) {
            console.error("Post data error:", error);
        }
    }
    

    // delete store
    async deleteData(endpoint, storeId) {

        try {
            const response = await fetch(`${this.requestUrl}${endpoint}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: storeId }) 
            });

            if (response.ok) {
                return await response.json();
            }else{
                throw new Error(`Request failed: ${response.status}`);
            }
            
        } catch (error) {
            console.error("Post data error:", error);
        }
    }

    // update store
    async updateData(endpoint, updatedData) {
       

        try {
            const response = await fetch(`${this.requestUrl}${endpoint}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            });

            if (response.ok) {
                return await response.json();
            }else{
                throw new Error(`Request failed: ${response.status}`);
            }
        } catch (error) {
            console.error("❌ Update data error:", error);
            return null;
        }
    }
}


