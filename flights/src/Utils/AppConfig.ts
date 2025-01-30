
class AppConfig {
    public readonly baseUrl = "https://sky-scrapper.p.rapidapi.com/api/v1/flights";

    public get headers() {
        return {
            "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
            "X-RapidAPI-Key": "1659869c39mshd44370f0eaeb7c5p18aa62jsn03583201451de" // Use environment variables
        };
    }

    public endpoints = {
        nearbyAirports: `${this.baseUrl}/getNearByAirports`,
        searchAirport: `${this.baseUrl}/searchAirport`,
        searchFlights: `${this.baseUrl}/searchFlights`
    };
}

export const appConfig = new AppConfig();