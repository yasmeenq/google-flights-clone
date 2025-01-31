import { apiClient } from "../Utils/AppConfig";
import { FlightApiResponse } from "../interfaces/flight_interface";

export class searchFlightService {
  public async searchFlights(
    originSkyId: string,
    destinationSkyId: string,
    originEntityId: string,
    destinationEntityId: string,
    date: string
  ): Promise<FlightApiResponse["data"]> {
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
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching airport data:",
        error instanceof Error ? error.message : "Unknown error"
      );
      throw new Error("Unable to fetch airport data. Please try again later.");
    }
  }
}
