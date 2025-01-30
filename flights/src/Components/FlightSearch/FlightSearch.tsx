import { useEffect, useState } from "react";
import css from "./FlightSearch.module.css";
import { FlightModel } from "../../Models/FlightModel";
import toast from "react-hot-toast";
import { flightService } from "../../Services/FlightService";

export function FlightSearch(): JSX.Element {
    const [flightsData, setFlightsData] = useState<FlightModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchFlights(
            originSkyId: string,
            destinationSkyId: string,
            date: string
        ) {
            setLoading(true);
            try {
                const flights = await flightService.searchFlights(
                    originSkyId,
                    destinationSkyId,
                    date
                );
                setFlightsData(flights);
            } catch (err: any) {
                toast.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchFlights("NYCA", "BOM", "2025-02-15");
    }, []);

    return (
        <div className={css.FlightSearch}>
            {loading ? (
                <div>Loading...</div> 
            ) : flightsData.length > 0 ? (
                flightsData.map((flight, index) => (
                    <div key={index}>
                        <h2>{flight.presentation.title}</h2>
                        <p>{flight.presentation.suggestionTitle}</p>
                        <p>{flight.presentation.subtitle}</p>
                        {/* Render more flight information */}
                    </div>
                ))
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}
