import css from "./FlightResults.module.css";
import { FlightData } from "../../Models/FlightModel";

interface Props {
    flights: FlightData;
}

export function FlightResults({ flights }: Props) {
    return (
        <div className={css.flightResults}>
            <h2>Found {flights.data.context.totalResults} Results</h2>
            
            {flights.data.itineraries.map((itinerary) => (
                <div key={itinerary.id} className={css.flightCard}>
                    <div className={css.price}>
                        ${itinerary.price.raw.toFixed(2)}
                    </div>
                    
                    {itinerary.legs.map((leg, index) => (
                        <div key={leg.id} className={css.leg}>
                            <h3>Leg {index + 1}</h3>
                            <div className={css.route}>
                                <div className={css.airport}>
                                    <span>{leg.origin.city}</span>
                                    <small>({leg.origin.id})</small>
                                    <time>{new Date(leg.departure).toLocaleTimeString()}</time>
                                </div>
                                
                                <div className={css.duration}>
                                    ⌛ {Math.floor(leg.durationInMinutes / 60)}h {leg.durationInMinutes % 60}m
                                    {leg.stopCount > 0 && ` • ${leg.stopCount} stops`}
                                </div>

                                <div className={css.airport}>
                                    <span>{leg.destination.city}</span>
                                    <small>({leg.destination.id})</small>
                                    <time>{new Date(leg.arrival).toLocaleTimeString()}</time>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}