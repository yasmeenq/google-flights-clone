import { useState } from 'react';
import './App.css';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { Box, CircularProgress } from '@mui/material';
import FlightResults from './Components/FlightResults/FlightResults';
import { Flight } from './interface/flightInterface';
import { flightService } from './Services/FlightService';
import { Airport } from './interface/airportInterface';

export default function App() {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = async (origin: Airport, destination: Airport, date: string) => {
        setLoading(true);
        try {
            const flightData = await flightService.searchFlights(
                origin.entityId,
                origin.skyId, 
                destination.entityId,
                destination.skyId,
                date
            );
    
            const flights: Flight[] = flightData; 
    
            setFlights(flights);
            console.log('here' + flights);
    
        } catch (error: any) {
            console.error('Error during flight search:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <SearchPage onSearch={handleSearch} loading={loading} />

            {/* {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100px' }}>
                    <CircularProgress />
                </Box>
            ) : (
                // <FlightResults flights={flights} />
            )} */}
        </div>
    );
}
