document.addEventListener('DOMContentLoaded', function() {
    const citiesSection = document.getElementById('featuredCities');
    
    // Get database reference
    const dbRef = firebase.database().ref('cities');
    
    dbRef.once('value').then(function(snapshot) {
        const cities = snapshot.val();
        citiesSection.innerHTML = '';
        
        for (const cityId in cities) {
            const city = cities[cityId];
            citiesSection.innerHTML += `
                <div class="city-card">
                    <h2>${city.name}</h2>
                    <p>${city.description}</p>
                    <img src="images/${city.image}" alt="${city.name}" 
                         onerror="this.src='images/default.jpg'">
                </div>
            `;
        }
    }).catch(error => {
        citiesSection.innerHTML = `<p class="error">Error loading data: ${error.message}</p>`;
    });
});