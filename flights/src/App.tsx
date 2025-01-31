import './App.css'
import FlightResults from './Components/FlightResults/FlightResults';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { AirportTest } from './Components/testing/airport_test';
import { FlightTest } from './Components/testing/flights_test';

export default function App() {
    // const [flights, setFlights] = useState({});
    // const [loading, setLoading] = useState(false);

    // const handleSearch = null

    return (
    <div className="App">
        {/* <SearchPage onSearch={handleSearch} loading={loading} /> */}
        <FlightTest />
    </div>
  );
}