// Add event listener 
// Set up API and endpoints

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'USER_API_KEY'; // User need to put their own api here 
    const weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
    const forecastEndpoint = 'https://api.openweathermap.org/data/2.5/forecast';

    // Get user's location with submit button 
    const submitButton = document.getElementById('submitLocation');

    // Add EventListener to the "Enter" button
    submitButton.addEventListener('click', async () => {
        
        // Get value entered from the input box
        const locationInput = document.getElementById('locationInput').value;

        // Check if the there any value entered in the box
        if (locationInput) {
            // fetch current weather data for the input location
            const weatherResponse = await fetch(`${weatherEndpoint}?q=${locationInput}&appid=${apiKey}&units=metric`);
            const weatherData = await weatherResponse.json();

            //fetch forecast data for the input location
            const forecastResponse = await fetch(`${forecastEndpoint}?q=${locationInput}&appid=${apiKey}&units=metric`);
            const weatherData = await forecastResponse.json();

            // Display location name
            document.getElementById('location').textContent = weatherData.name;

            // Display currrent weather of the location
            document.getElementById('current-weather').innerHTML = `${weatherData.main.temp}&deg;C, ${weatherData.weather[0].description}`;

            // Display forecast 
            const forcastContainer = document.getElementById('forecast');
            forcastContainer.innerHTML = '';

            for (let i = 0; i < 5; i++) {
                const forecastItem = forecastData.list[i];
                const date = new Date(forecastItem.dt * 1000);
                const day = date.toLocaleDateString('en-US', { weekday: 'short'});
                const temperature = forecastItem.main.temp;

                forcastContainer.innerHTML += `
                    <div>
                        <div>${day}</div>
                        <div>${temperature}&deg;C</div>
                    </div>
                `;
            } else {
                // alert user if no location enter
                alert('Please enter a location.');
            }
        }
    });
});