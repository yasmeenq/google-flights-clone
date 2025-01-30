import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { Flight } from "../Models/types";

interface SearchParams {
    originSkyId: string;
    destinationSkyId: string;
    date: string;
    adults?: number;
    cabinClass?: string;
}

export const flightService = {
    async searchFlights(params: SearchParams): Promise<Flight[]> {
        try {
            const { data } = await axios.get<{ data: Flight[] }>(
                appConfig.endpoints.searchFlights,
                {
                    params: {
                        ...params,
                        currency: "USD",  // Add default params
                        countryCode: "US" // Add localization params
                    },
                    headers: appConfig.headers
                }
            );
            return data.data;
        } catch (error) {
            console.error("Flight search failed:", error);
            throw error;
        }
    }
};