let weather = {
    "apikey": "7117fe70962c49854e09fad0a90faf06",
    fetchWeather: function (weatherZipcode) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + weatherZipcode + "&units=imperial&appid=" + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp} = data.main;
        document.querySelector("#weatherLocation").innerText = name;
        document.querySelector("#weatherIcon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector("#weatherDescription").innerText = description;
        document.querySelector("#weatherTemperature").innerText = temp + "°F";
    },
    search: function () {
        this.fetchWeather(document.querySelector("#weatherZipcodeSearch").value);
    }
}

document.querySelector("#weatherZipcodeSearch").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        weather.search();
    }
});

function deleteText() {
    document.getElementById("weatherZipcodeBox").value = "";
}