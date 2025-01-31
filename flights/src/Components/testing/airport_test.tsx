import { useEffect, useState } from "react";
import "./testing.css";
import toast from "react-hot-toast";
import { airportService } from "../../Services/AirportService";

interface Airport {
    entityId: string;
    skyId: string;
    airportName: string;
    city: string;
    country: string;
}

export function AirportTest(): JSX.Element {
    const [airports, setAirports] = useState<Airport[]>([]);

    useEffect(() => {
        async function getAirports() {
            try {
                const airports = await airportService.searchAirports("EWR"); 
                setAirports(airports);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    toast.error(err.message);
                } else {
                    toast.error('An unexpected error occurred');
                }
            }
        }
        getAirports();
    }, []);

    return (
        <div className="testing">
            <h2>Airport Results</h2>
            {airports.length === 0 ? <p>No airports found.</p> : (
                airports.map((airport) => (
                    <div key={airport.entityId} className="airport-card">
                        <h3>{airport.airportName}</h3>
                        <p>{airport.city}, {airport.country}</p>
                        <p><strong>Sky ID:</strong> {airport.skyId}</p>
                    </div>
                ))
            )}
        </div>
    );
}
