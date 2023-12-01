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
            const forecastData = await forecastResponse.json();

            // Display location name
            document.getElementById('location').textContent = weatherData.name;

            // Display currrent weather of the location
            document.getElementById('currentWeather').innerHTML = `${weatherData.main.temp}&deg;C, ${weatherData.weather[0].description}`;

            // Display forecast 
            const forecastContainer = document.getElementById('forecast');
            forecastContainer.innerHTML = '';
                // Use loop to  iterate over the 5-day forecast data and displays each day's information in the HTML
            for (let i = 0; i < 5; i++) {
                const forecastItem = forecastData.list[i];

                // Log the forecastItem to inspect its contents
                console.log('Forecast Item:', forecastItem);
                

                const date = new Date(forecastItem.dt * 1000);
                const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
                const temperature = forecastItem.main.temp;

                forecastContainer.innerHTML += `
                    <div>
                        <div>${time}</div>
                        <div>${temperature}&deg;C</div>
                    </div>
                `;
                
            } 
        } else {
                // alert user if no location enter
                alert('Please enter a location.');
            }
        })
    });
;