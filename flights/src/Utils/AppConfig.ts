
class AppConfig {
    public readonly baseUrl = "https://sky-scrapper.p.rapidapi.com/api/v1/flights";

    public get headers() {
        return {
            "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
            "X-RapidAPI-Key": "1659869c39mshd44370f0eaeb7c5p18aa62jsn03583201451d" // Use environment variables
        };
    }

    public endpoints = {
        searchAirport: `${this.baseUrl}/searchAirport?query=new&locale=en-US`,
        searchFlightsComplete: (params: string) => `${this.baseUrl}/searchFlightsComplete?originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542${params}&cabinClass=economy&adults=1&sortBy=best&currency=USD&market=en-US&countryCode=US`
    };
}

export const appConfig = new AppConfig();