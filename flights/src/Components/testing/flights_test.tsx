import { useEffect, useState } from "react";
import { flightService } from "../../Services/FlightService";
import toast from "react-hot-toast";

export function FlightTest(): JSX.Element {
  const [flights, setFlights] = useState<any[]>([]);

  useEffect(() => {
    async function getFlights() {
      try {
        const params = {
          originSkyId: 'LHR',
          destinationSkyId: 'JFK',
          originEntityId: '95565050',
          destinationEntityId: '95565058',
          date: '2025-02-01',
        };

        const flight = await flightService.searchFlights(
          params.originSkyId,
          params.destinationSkyId,
          params.originEntityId,
          params.destinationEntityId,
          params.date
        );

        setFlights(flight);

      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error('An unexpected error occurred');
        }
      }
    }
    getFlights();
  }, []);

  return (
    <div className="testing">
      {flights.length > 0 ? (
        flights.map((flight, index) => (
          <div key={index}>
            <p>Flight ID: {flight.flightId}</p>
            <p>Carrier Name: {flight.carrierName}</p>
            <p>Departure Time: {flight.departureTime}</p>
            <p>Origin Airport: {flight.originAirportName} ({flight.originAirportCode})</p>
            <p>Arrival Time: {flight.arrivalTime}</p>
            <p>Arrival Airport: {flight.arrivalAirportName} ({flight.arrivalAirportCode})</p>
            <p>Duration: {flight.duration}</p>
            <p>Stop Count: {flight.stopCount}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No flights found</p>
      )}
    </div>
  );
}