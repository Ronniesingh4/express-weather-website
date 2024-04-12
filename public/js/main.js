const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
   
    if (cityVal === "") {
        city_name.innerText = `Please write the city name correctly`;
    } else {
        try {
            const apiKey = 'YOUR_API_KEY'; // API anahtarını buraya yerleştirin
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apiKey}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_status.innerText = `${arrData[0].main.temp} °C, ${arrData[0].weather[0].main}`;
        } catch (error) {
            city_name.innerText = `There was an error fetching the weather data`;
        }
    }
}

submitBtn.addEventListener('click', getInfo);
