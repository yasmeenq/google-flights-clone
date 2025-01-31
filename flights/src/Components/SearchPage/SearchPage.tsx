import { AirportData } from "../AirportData/AirportData";
import css from "./SearchPage.module.css";
import { useEffect, useState } from "react";
import { AirportModel } from "../../Models/AirportModel";
import { airportService } from "../../Services/AirportService";

export function SearchPage(): JSX.Element {
    const [tripType, setTripType] = useState<"round" | "oneWay">("round");
    const [returnDate, setReturnDate] = useState("");


    const [airports, setAirports] = useState<AirportModel[]>([]);
    // Fetch airports on component mount
    useEffect(() => {
      airportService.getAllAirports().then(setAirports);
    }, []);
  

  return (
    <div className={css.SearchPage}>
      <div className={css.searchHeader}>
        <div className={css.headerImageContainer}>
          <img
            src="src/assets/main.png"
            alt="Travel illustration"
            className={css.headerImage}
          />
        </div>
        <h1 className={css.title}>Flights</h1>

        <div className={css.tripTypeSelector}>
          <button
            type="button"
            className={`${tripType === "round" ? css.active : ""}`}
            onClick={() => setTripType("round")}
          >
            Round trip
          </button>
          <button
            type="button"
            className={`${tripType === "oneWay" ? css.active : ""}`}
            onClick={() => setTripType("oneWay")}
          >
            One-way
          </button>
        </div>
      </div>

      <div className={css.searchBox}>
        <form className={css.searchForm}>
            <div className={css.left}>
              <div className={css.inputGroup}>
                <span className="material-icons">flight_takeoff</span>
                <input
                    type="text"
                    list="airports-list"
                    name="origin"
                    placeholder="From where?"
                    className={css.locationInput}
                    autoComplete="off"
                />
                <datalist id="airports-list">
                    {airports.map((airport) => (
                    <option
                        key={airport.entityId}
                        value={`${airport.presentation.suggestionTitle}`}
                    >
                        {airport.presentation.suggestionTitle}
                    </option>
                    ))}
              </datalist>
              </div>

              <div className={css.inputGroup}>
                <span className="material-icons">flight_land</span>
                <input
                  type="text"
                  name="destination"
                  placeholder="Where to?"
                  className={css.locationInput}
                />
              </div>
            </div>
            <div className={css.right}>
              <div className={css.inputGroup}>
                <span className="material-icons">calendar_today</span>
                <input type="date" className={css.dateInput} />
              </div>

              <div className={css.inputGroup}>
                <span className="material-icons">calendar_today</span>
                <input
                  type="date"
                  className={css.dateInput}
                  disabled={tripType === "oneWay"}
                  value={tripType === "oneWay" ? "" : returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
        </form>
        <button className={css.searchButton}>
            <span className="material-icons">search</span>
            Search Flights
        </button>
      </div>
      <AirportData />
    </div>
  );
}
