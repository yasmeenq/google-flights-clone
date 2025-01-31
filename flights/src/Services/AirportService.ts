import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import toast from "react-hot-toast";
import { Airport } from "../interfaces/FlightData";


class AirportService {

    public async getAllAirports(): Promise<Airport[]> {
        try {
            const response = await axios.get(appConfig.endpoints.searchAirport, { headers: appConfig.headers });
            console.log("API Response:", response.data);

            if (response.data.status === true && Array.isArray(response.data.data)) {
                const airportsData = response.data.data; 
                console.log("Airports Data:", airportsData);

                // Directly return the airports data, assuming it matches the Airport interface
                return airportsData;
            } else {
                toast.error('No airports found or invalid response');
                console.error("Invalid response:", response.data);
                return [];
            }
        } catch (err: any) {
            toast.error(`Error fetching airports: ${err.message || "Unknown error"}`);
            console.error(err);
            return [];
        }
    }
}

export default AirportService;


