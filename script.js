
document.getElementById('getWeather').addEventListener('click', function(){
    const city = document.getElementById('city-input').value;
    const apiKey = 'e49bdbe90d50fd3765cb012d56da1ccf';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(Response => Response.json())
    .then(data => {

        const result = `
        <h2 style="margin-bottom: 10px;">${data.name},${data.sys.country}</h2>
        <p style="margin-bottom: 10px;">${data.weather[0].description}</p>
        <p style="margin-bottom: 10px; color: red">Temperature: ${data.main.temp}°C</p>
        <p style="margin-bottom: 10px;">Humidity: ${data.main.humidity}%</p>
        <p style="margin-bottom: 10px;">Wind speed: ${data.wind.speed}m/s</p>`;


        document.getElementById('weatherResult').innerHTML= result;


    })

   
.catch(()=>{
    document.getElementById('weatherResult').innerHTML = 'city not found';
});
});




















