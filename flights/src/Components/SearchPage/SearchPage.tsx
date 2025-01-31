import css from "./SearchPage.module.css";
import { useState } from "react";


export function SearchPage(): JSX.Element {

    // const [origin, setOrigin] = useState('');
    // const [destination, setDestination] = useState('');
    // const [date, setDate] = useState('');

    //handle airports

    //handle destination

    //handle submit 

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
            </div>

            <div className={css.searchBox}>
                <form className={css.searchForm}>


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
                            <option>A</option>

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



                    <div className={css.inputGroup}>
                        <span className="material-icons">calendar_today</span>
                        <input type="date" className={css.dateInput} />
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
