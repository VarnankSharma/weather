function getData(){
    const city = document.getElementById("search").value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e78a804aedmshb7bc8603b27a775p122f20jsn334d98ca3154',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(resp => {
            console.log(resp);
            document.querySelector('.temp').innerHTML = resp.temp;
            document.querySelector('#ws').innerHTML = resp.wind_speed;
            document.querySelector('#hmdty').innerHTML = resp.humidity;
            document.querySelector('#fl').innerHTML = resp.feels_like;
        })
        .catch(err => console.log(err));
}


