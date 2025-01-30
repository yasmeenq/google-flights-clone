import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import toast from "react-hot-toast";
import { Airport } from "../Models/types";

const handleError = (error: unknown) => {
    const message = error instanceof Error ? error.message : "API request failed";
    toast.error(message);
    throw new Error(message);
};

export const airportService = {
    async searchAirports(query: string): Promise<Airport[]> {
        try {
            const { data } = await axios.get<{ data: Airport[] }>(
                appConfig.endpoints.searchAirport,
                {
                    params: { query },
                    headers: appConfig.headers
                }
            );
            return data.data;
        } catch (error) {
            return handleError(error);
        }
    }
};