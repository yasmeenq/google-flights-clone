import axios from "axios";
import { appConfig } from "../Utils/AppConfig"; 
import toast from "react-hot-toast";
import { FlightData } from "../interfaces/FlightData";

class FlightService {

    public async getFlights(): Promise<FlightData> {
        try {
            const response = await axios.get(appConfig.endpoints.searchAirport, { headers: appConfig.headers });
            console.log("API Response:", response.data);

            if (response.data.status === true && Array.isArray(response.data.itineraries)) {
                const flightData = response.data.itineraries; 
                console.log("Flight Data:", flightData);

                // Return the flight data, assuming it matches the FlightData structure
                return {
                    itineraries: flightData.map((itinerary: any) => ({
                        id: itinerary.id,
                        price: {
                            raw: itinerary.price.raw,
                        },
                        legs: itinerary.legs.map((leg: any) => ({
                            id: leg.id,
                            origin: leg.origin,
                            destination: leg.destination,
                            durationInMinutes: leg.durationInMinutes,
                            stopCount: leg.stopCount,
                            departure: leg.departure,
                            arrival: leg.arrival,
                        })),
                    }))
                };
            } 
            else {
                toast.error('No flights found or invalid response');
                console.error("Invalid response:", response.data);
                return { itineraries: [] };
            }
        } 
        catch (err: any) {
            toast.error(`Error fetching flights: ${err.message || "Unknown error"}`);
            console.error(err);
            return { itineraries: [] };
        }
    }
}

export default FlightService;
