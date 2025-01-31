import { useEffect, useState } from "react";
import css from "./AirportData.module.css";
import { AirportModel } from "../../Models/AirportModel";
import toast from "react-hot-toast";
import { airportService } from "../../Services/AirportService";

export function AirportData(): JSX.Element {
    const [airports, setAirports] = useState<AirportModel[]>([]);

    useEffect(() => {
        async function getAllAirports() {
            try {
                const airports = await airportService.getAllAirports();
                console.log("Fetched airports:", airports);
                setAirports(airports);
            } catch (err: any) {
                toast.error(err.message || "Failed to load airports");
                console.error("Error fetching airports:", err);
            }
        }
        getAllAirports();
    }, []);

    return (
        <div className={css.AirportData}>
            {airports.length > 0 ? (
                airports.map((a) => (
                    <p key={a.entityId}>
                        {a.presentation.suggestionTitle || "No subtitle available"}
                        <br />
                        <small>SkyID: {a.skyId}</small>
                    </p>
                ))
            ) : (
                <p>No airports available</p>
            )}
        </div>
    );
}