document.addEventListener("DOMContentLoaded", function () {
   
    const languageToggle = document.getElementById("language-toggle");
    let currentLanguage = "EN";

    languageToggle.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentLanguage === "EN") {
            languageToggle.textContent = "SV";
            currentLanguage = "SV";
            switchToSwedish();
        } else {
            languageToggle.textContent = "EN";
            currentLanguage = "EN";
            switchToEnglish();
        }
    });

    function switchToSwedish() {
        document.querySelector(".hero h1").innerHTML = "VÄLKOMMEN TILL<br>JÖNKÖPING CITY";
        document.querySelector(".hero p").textContent = "Jkpg City är en stor stad med en småstadskänsla. Shopping, matställen och hotell samsas med museer, teatrar och konststudior.";
        document.querySelector("#discover h2").textContent = "Upptäck Jönköping";
        document.querySelector("#info h2").textContent = "Stadsinformation";
        document.querySelector("#contact h2").textContent = "Kontakta oss";
    }

    function switchToEnglish() {
        document.querySelector(".hero h1").innerHTML = "WELCOME TO<br>JÖNKÖPING CITY";
        document.querySelector(".hero p").textContent = "Jkpg City is a big town with a small town atmosphere. Shopping, dining and hotels share space with museums, theaters and art studios.";
        document.querySelector("#discover h2").textContent = "Discover Jönköping";
        document.querySelector("#info h2").textContent = "City Information";
        document.querySelector("#contact h2").textContent = "Contact Us";
    }
});

function handleClick(index) {
    console.log(`Clicked on item ${index}`);
  
}

 

function switchToSwedish() {
    document.querySelector('h2').textContent = 'LÄGG TILL BUTIK';
    document.querySelector('button[type="submit"]').textContent = 'SPARA BUTIK';
    document.querySelector('label:nth-of-type(1)').textContent = 'NAMN';
    document.querySelector('label:nth-of-type(2)').textContent = 'WEBBADRESS';
    document.querySelector('label:nth-of-type(3)').textContent = 'OMRÅDE';
    document.querySelectorAll('input')[0].placeholder = 'Butiksnamn';
    document.querySelectorAll('input')[1].placeholder = 'https://exempel.se';
    document.querySelectorAll('input')[2].placeholder = 'Ange område';
}

function switchToEnglish() {
    document.querySelector('h2').textContent = 'ADD NEW STORE';
    document.querySelector('button[type="submit"]').textContent = 'SAVE STORE';
    document.querySelector('label:nth-of-type(1)').textContent = 'NAME';
    document.querySelector('label:nth-of-type(2)').textContent = 'URL';
    document.querySelector('label:nth-of-type(3)').textContent = 'DISTRICT';
    document.querySelectorAll('input')[0].placeholder = 'Store name';
    document.querySelectorAll('input')[1].placeholder = 'https://example.com';
    document.querySelectorAll('input')[2].placeholder = 'Enter district';
}

//store list
// let stores = [];
//form submission
// document.getElementById('store-form').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const storeData = {
//         id: Date.now(), //ID for each store based on the time
//         name: document.querySelector('input[name="name"]').value,
//         url: document.querySelector('input[name="url"]').value,
//         district: document.querySelector('input[name="district"]').value
//     };

//     stores.push(storeData);
//     renderStores();
//     this.reset();
// });

//render store cards
// function renderStores() {
//     const storeList = document.querySelector('.store-list');
//     storeList.innerHTML = '';
    
//     stores.forEach(store => {
//         const storeCard = document.createElement('div');
//         storeCard.className = 'store-card';
//         storeCard.innerHTML = `
//             <div class="store-info">
//                 <h3>${store.name}</h3>
//                 <p>URL: <a href="${store.url}" target="_blank">${store.url}</a></p>
//                 <p>District: ${store.district}</p>
//             </div>
//             <div class="store-actions">
//                 <button class="action-btn edit-btn" data-id="${store.id}">Edit</button>
//                 <button class="action-btn delete-btn" data-id="${store.id}">Delete</button>
//             </div>
//         `;
        
//         storeList.appendChild(storeCard);
//     });

//     addButtonListeners();
// }



// renderStores();