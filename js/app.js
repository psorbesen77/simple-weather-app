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
            const weatherResponse = await fetch('${weatherEndpoint}?q=${locationInput}&appid=${apiKey}&units=metric');
            const weatherData = await weatherResponse.json();
        }
    })
})