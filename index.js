async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '66cd7f4b716f4e5ab74125008250708';

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const url = https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city};

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();

    // Update the UI
    document.getElementById('cityName').textContent = data.location.name;
    document.getElementById('temp').textContent = ${data.current.temp_c}°C;
    document.getElementById('desc').textContent = data.current.condition.text;
    document.getElementById('icon').src = https:${data.current.condition.icon};

    // BONUS: Change background based on weather condition
    const condition = data.current.condition.text.toLowerCase();
    let bgUrl = '';

    if (condition.includes('sunny') || condition.includes('clear')) {
      bgUrl = 'sunny.jpg';
    } else if (condition.includes('cloud')) {
      bgUrl = 'cloudy.jpg';
    } else if (condition.includes('rain')) {
      bgUrl = 'rainy.jpg';
    } else if (condition.includes('snow')) {
      bgUrl = 'snow.jpg';
    } else if (condition.includes('thunder')) {
      bgUrl = 'thunder.jpg';
    } else {
      bgUrl = 'clear.jpg';
    }

    // Apply it to body
    document.body.style.backgroundImage = url('${bgUrl}');
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

  } catch (error) {
    alert('Could not fetch weather data. Please try a valid city name.');
    console.error(error);
  }
}