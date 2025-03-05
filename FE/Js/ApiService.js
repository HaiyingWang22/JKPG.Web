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
            return [];
        }
    }

    // get store by name
    async searchData(query) {
        try {
            const response = await fetch(`${this.requestUrl}/api/store?name=${encodeURIComponent(query)}`, {
                method: "GET"
            });
            if (response.ok) {
                return await response.json();
            }else{
                throw new Error(`Request failed: ${response.status}`);
            }
        } catch (error) {
            console.error("Data retrieval error:", error);
            return [];
        }
    }
}