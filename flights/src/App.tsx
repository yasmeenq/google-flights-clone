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

    const handleSearch = async (origin: any, destination: any, date: string) => {
        setLoading(true);
        const originSkyId: string = origin.value.skyId;
        const destinationSkyId: string = destination.value.skyId;
        const originEntityId: string = origin.value.entityId;
        const destinationEntityId: string = destination.value.entityId;

        console.log('passed: ' , originSkyId, destinationSkyId, originEntityId, destinationEntityId)

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
                <FlightResults flights={flights} />
            )}
        </div>
    );
}



// https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlightsComplete?originSkyId=JFK&destinationSkyId=LGW&originEntityId=95565058&destinationEntityId=95565051&date=2025-02-05

// https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsComplete?originSkyId=JFK&destinationSkyId=LGW&originEntityId=95565058&destinationEntityId=95565051&date=2025-02-10

// https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsComplete?originSkyId=JFK&destinationSkyId=LGW&originEntityId=95565058&destinationEntityId=95565051&date=2025-02-10&returnDate=2025-02-20&cabinClass=economy&adults=1&sortBy=best&currency=USD&market=en-US&countryCode=US