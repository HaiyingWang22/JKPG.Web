

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
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    }
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        if (query) {
            window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
        }
    }
});
function handleClick(index) {
    console.log(`Clicked on item ${index}`);
    // Add your click handling logic here
}

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    }
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        if (query) {
            window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
        }
    }
});

//the form
document.getElementById('store-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const storeData = {
        name: document.querySelector('input[name="name"]').value,
        url: document.querySelector('input[name="url"]').value,
        district: document.querySelector('input[name="district"]').value
    }
})    

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