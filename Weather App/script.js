async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '9cedb6b6ffc50c713088c6141b95d6a2'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('City not found!');
        }
    } catch (error) {
        alert('Error fetching weather data');
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherResult.innerHTML = weather;
}