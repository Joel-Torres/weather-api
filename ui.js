class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.pressure = document.getElementById('w-pressure');
    // this.details = document.getElementById('w-details');
    // this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    // this.feelsLike = document.getElementById('w-feels-like');
    // this.dewpoint= document.getElementById('w-dewpoint');
    // this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    // this.icon.setAttribute('src', weather.weather[0].icon);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Relative Pressure: ${weather.main.pressure}`;
    // this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
    // this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
    // this.wind.textContent = `Wind: ${weather.wind_string}`;
  }
}