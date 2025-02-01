import { apiClient } from "../Utils/AppConfig";
import { Airport } from "../interface/airportInterface";

class SearchAirportsService {
    public async searchAirports(query: string) {
        try {
            const response = await apiClient.get('/searchAirport', {
                params: { query },
            });

            const airportData = response.data.data;
            console.log("Raw API Response:", airportData);

            const formattedData = airportData.map((item: Airport) => ({
                entityId: item.entityId,
                skyId: item.skyId,
                airportName: item.presentation?.suggestionTitle || "Unknown",
                city: item.navigation?.relevantHotelParams?.localizedName || "Unknown City",
                country: item.presentation?.subtitle || "Unknown Country",
            }));

            console.log("Formatted Data:", formattedData);
            return formattedData;
            
        } catch (error) {
            console.error(
                'Error fetching airport data:',
                error instanceof Error ? error.message : 'Unknown error'
            );
            throw new Error('Unable to fetch airport data. Please try again later.');
        }
    }
}

export const airportService = new SearchAirportsService()