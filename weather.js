class Weather {
    constructor(city) {
        this.apiKey = 'cf35dbb99e44102e75e2f12bb17940cb';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData
    }

    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}