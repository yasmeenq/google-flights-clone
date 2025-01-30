import css from "./FlightList.module.css";
import { Flight } from "../../Models/types";

interface FlightListProps {
  flights: Flight[];
  loading: boolean;
}

export default function FlightList({ flights, loading }: FlightListProps) {
  if (loading) return <div className="text-center py-8">Loading flights...</div>;
  if (!flights.length) return <div className="text-center py-8">No flights found</div>;

  return (
    <div className="grid gap-4">
      {flights.map((flight) => (
        <div key={flight.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">
              {flight.price.amount} {flight.price.currency}
            </h3>
            <span className="text-sm text-gray-600">
              {flight.legs[0].segments.length} stops
            </span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <div>
              <p className="font-medium">Departure</p>
              <p>{new Date(flight.legs[0].departure).toLocaleTimeString()}</p>
            </div>
            <div>
              <p className="font-medium">Arrival</p>
              <p>{new Date(flight.legs[0].arrival).toLocaleTimeString()}</p>
            </div>
            <div>
              <p className="font-medium">Duration</p>
              <p>{flight.legs[0].duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}