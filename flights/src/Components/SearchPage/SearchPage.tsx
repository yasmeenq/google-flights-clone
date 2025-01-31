import css from "./SearchPage.module.css";
import { useState } from "react";

export function SearchPage(): JSX.Element {
  const [tripType, setTripType] = useState<"round" | "oneWay">("round");
  const [returnDate, setReturnDate] = useState("");

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
                  placeholder="From where?"
                  className={css.locationInput}
                />
              </div>

              <div className={css.inputGroup}>
                <span className="material-icons">flight_land</span>
                <input
                  type="text"
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
    </div>
  );
}
