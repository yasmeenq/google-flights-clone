import './App.css'
import FlightResults from './Components/FlightResults/FlightResults';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { AirportTest } from './tests/airport_test';
import { FlightTest } from './tests/flights_test';
import { ResultsTest } from './tests/resultsCSS_test';
import { SearchP } from './tests/searchCSS_test';

export default function App() {
    // const [flights, setFlights] = useState({});
    // const [loading, setLoading] = useState(false);

    // const handleSearch = null

    return (
    <div className="App">
        {/* <SearchPage onSearch={handleSearch} loading={loading} /> */}
        <SearchPage />
    </div>
  );
}