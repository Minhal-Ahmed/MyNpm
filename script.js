const axios = require('axios');

async function getWeatherInfo(apiKey, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}


module.exports = getWeatherInfo;

