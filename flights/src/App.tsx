import { useState } from 'react';
import { flightService } from '../src/Services/FlightService';
import { Flight, Airport, SearchParams } from './Models/types';
import SearchForm from './Components/SearchForm/SearchForm';
import FlightList from './Components/FlightList/FlightList';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (params: SearchParams) => {
    try {
      setLoading(true);
      const results = await flightService.searchFlights({
        originSkyId: params.origin!.skyId,
        destinationSkyId: params.destination!.skyId,
        date: params.date.toISOString().split('T')[0],
        adults: params.adults,
      });
      setFlights(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Flight Search</h1>
      {/* <SearchForm onSubmit={handleSearch} loading={loading} /> */}
      <FlightList flights={flights} loading={loading} />
      <Toaster position="bottom-right" />
    </div>
  );
}