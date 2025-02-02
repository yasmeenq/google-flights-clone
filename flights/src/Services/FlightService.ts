import { Flight } from "../interface/flightInterface";
import { apiClient } from "../Utils/AppConfig";



class searchFlightService {
    public async searchFlights(
      originSkyId: string,
      destinationSkyId: string,
      originEntityId: string,
      destinationEntityId: string,
      date: string
    ) {
      try {
        const response = await apiClient.get("/searchFlights", {
          params: {
            originSkyId,
            destinationSkyId,
            originEntityId,
            destinationEntityId,
            date,
          },
        });
  
        const flightData = response.data.data.itineraries;
  
        if (!Array.isArray(flightData)) {
          throw new Error("Flight data is not an array");
        }
  
        // Helper function to format duration
        function formatDuration(minutes: number): string {
          const hours = Math.floor(minutes / 60);
          const remainingMinutes = minutes % 60;
          return `${hours.toString().padStart(2, '0')}h:${remainingMinutes.toString().padStart(2, '0')}min`;
        }
  
        const formattedData = flightData.map((item: Flight) => {
          const leg = item.legs[0]; // Access the first leg
          const marketingCarrier = leg?.carriers.marketing[0]; // Access the first marketing carrier
  
          return {
            flightId: item.id || 'No flight Id',
            carrierName: marketingCarrier?.name || 'No carrierName', // Access name from the first marketing carrier
            carrierLogo: marketingCarrier?.logoUrl || 'No carrierLogo', // Access logoUrl from the first marketing carrier
            departureTime: leg?.departure || 'No departureTime',
            originAirportName: leg?.origin.name || 'No originAirportName',
            originAirportCode: leg?.origin.displayCode || 'No originAirportCode',
            arrivalTime: leg?.arrival || 'No arrivalTime',
            arrivalAirportName: leg?.destination.name || 'No arrivalAirportName',
            arrivalAirportCode: leg?.destination.displayCode || 'No arrivalAirportCode',
            duration: formatDuration(leg?.durationInMinutes) || 'No duration',
            stopCount: leg?.stopCount || 'No stops',
          };
        });
  
        return formattedData;
        
      } catch (error) {
        console.error(
          "Error fetching airport data:",
          error instanceof Error ? error.message : "Unknown error"
        );
        throw new Error("Unable to fetch airport data. Please try again later.");
      }
    }
  }
  
  export const flightService = new searchFlightService();