import { useEffect, useState } from "react";
import css from "./AirportSearch.module.css";
import { AirportModel } from "../../Models/AirportModel";
import toast from "react-hot-toast";
import { airportService } from "../../Services/AirportService";

export function AirportSearch(): JSX.Element {

  const [airportData, setAirportData] = useState<AirportModel | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchNearbyAirports() {
      setLoading(true);
      try {
        const airports = await airportService.getNearByAirports(
          40.7128,
          -74.006
        );
        setAirportData(airports);
      } catch (err: any) {
        toast.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchNearbyAirports();
  }, []);   
  if (loading) return <div>Loading...</div>;

  return (
    <div className={css.AirportSearch}>
      {airportData ? (
        <div>
          <h2>{airportData.data.current.presentation.title} Airports</h2>
          <p>{airportData.data.current.presentation.suggestionTitle}</p>
          {/* Display more information */}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}
