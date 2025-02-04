import { useState } from 'react';
import './App.css';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { Box, CircularProgress } from '@mui/material';
import { Flight } from './interface/flightInterface';
import { flightService } from './Services/FlightService';
import { FlightResults } from './Components/FlightResults/FlightResults';

export default function App() {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searched, setSearched] = useState<boolean>(false);

    const handleSearch = async (origin: any, destination: any, date: string) => {
        setLoading(true);
        setSearched(true); 

        const originSkyId: string = origin.value.skyId;
        const destinationSkyId: string = destination.value.skyId;
        const originEntityId: string = origin.value.entityId;
        const destinationEntityId: string = destination.value.entityId;

        console.log('Passed:', originSkyId, destinationSkyId, originEntityId, destinationEntityId);

        try {
            const flightData: Flight[] = await flightService.searchFlights(
                originSkyId, 
                destinationSkyId,
                originEntityId,
                destinationEntityId,
                date
            );
        
            setFlights(flightData);
            console.log('Fetched flights:', flightData);
    
        } catch (error: any) {
            console.error('Error during flight search:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <SearchPage onSearch={handleSearch} loading={loading} />

            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100px' }}>
                    <CircularProgress />
                </Box>
            ) : (
                searched && flights.length > 0 && <FlightResults flights={flights} />
            )}
        </div>
    );
}
