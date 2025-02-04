import { Flight } from "../interface/flightInterface";
import { apiFlightClient } from "../Utils/AppConfig";

class searchFlightService {
  public async searchFlights(
    originSkyId: string,
    destinationSkyId: string,
    originEntityId: string,
    destinationEntityId: string,
    date: string
  ): Promise<Flight[]> {
    try {
      const response = await apiFlightClient.get("/searchFlightsComplete", {
        params: {
            originSkyId,
            destinationSkyId,
            originEntityId,
            destinationEntityId,
            date,
        },
      });

      console.log("full flight response", response);

      // Ensure the response has the correct structure
      if (
        !response.data ||
        !response.data.data ||
        !response.data.data.itineraries
      ) {
        throw new Error("Invalid API response: 'itineraries' not found");
      }

      const flightData = response.data.data.itineraries;

      if (!Array.isArray(flightData)) {
        throw new Error("Flight data is not an array");
      }

      const formattedData: Flight[] = flightData.map((item) => ({
        id: item.id || "No flight Id",
        legs: [
          {
            departure: item.legs[0]?.departure || "No departure",
            arrival: item.legs[0]?.arrival || "No arrival",
            origin: {
              name: item.legs[0]?.origin.name || "No origin name",
              displayCode: item.legs[0]?.origin.displayCode || "No origin code",
            },
            destination: {
              name: item.legs[0]?.destination.name || "No destination name",
              displayCode:
                item.legs[0]?.destination.displayCode || "No destination code",
            },
            durationInMinutes: item.legs[0]?.durationInMinutes || 0,
            stopCount: item.legs[0]?.stopCount || 0,
            carriers: {
              marketing: [
                {
                  name:
                    item.legs[0]?.carriers?.marketing?.[0]?.name ||
                    "No carrier name",
                  logoUrl:
                    item.legs[0]?.carriers?.marketing?.[0]?.logoUrl ||
                    "No logo",
                },
              ],
            },
          },
        ],
      }));

      return formattedData;
    } catch (error) {
      console.error(
        "Error fetching flight data:",
        error instanceof Error ? error.message : "Unknown error"
      );
      throw new Error("Unable to fetch flights. Please try again later.");
    }
  }
}

export const flightService = new searchFlightService();
