export class UIHandler {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    renderData(dataArray) {
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

            const title = document.createElement("h2");
            title.textContent = item.name;

            const region = document.createElement("p");
            region.textContent = item.district;

            // establish a parent-child relationship
            content.appendChild(title);
            content.appendChild(region);
            link.appendChild(content);
            this.container.appendChild(link);
        });
    }
}
