class Weather {
  constructor(city) {
    this.apiKey = 'b7b7105ac26c3bdaff98161d5fe250e0';
    this.city = city;
    // this.state = state;
  }


  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=imperial`);
    const responseData = await response.json();
    
    return responseData;
    
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
    // this.state = state;
  }
}