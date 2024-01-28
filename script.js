function searchWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
  
    // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
    const apiKey = 'WEATHER_API';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch weather data. ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
        const description = data.weather[0].description;
  
        const weatherHTML = `
          <p>City: ${cityName}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Description: ${description}</p>
        `;
  
        weatherInfo.innerHTML = weatherHTML;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
      });
  }
  