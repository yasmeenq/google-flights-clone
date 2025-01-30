import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Airport, SearchParams } from '../../Models/types';
import { flightService } from '../../Services/FlightService';

interface SearchFormProps {
  onSubmit: (params: SearchParams) => void;
  loading: boolean;
}

export default function SearchForm({ onSubmit, loading }: SearchFormProps) {
  const [params, setParams] = useState<SearchParams>({
    date: new Date(),
    adults: 1,
  });
  const [airportQuery, setAirportQuery] = useState('');
  const [airports, setAirports] = useState<Airport[]>([]);

  // Simplified without debounce
  useEffect(() => {
    if (airportQuery.length > 2) { // Basic query length check
        flightService.(airportQuery).then(setAirports);
    }
  }, [airportQuery]);

  return (
    <form 
      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(params);
      }}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="From"
          className="w-full p-2 border rounded"
          value={params.origin?.presentation.title || ''}
          onChange={(e) => setAirportQuery(e.target.value)}
        />
        {airports.length > 0 && (
          <div className="absolute z-10 w-full bg-white border rounded mt-1">
            {airports.map((airport) => (
              <div
                key={airport.skyId}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setParams(p => ({ ...p, origin: airport }));
                  setAirports([]);
                }}
              >
                {airport.presentation.suggestionTitle}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Similar structure for destination input */}

      {/* Rest of the form remains the same */}
    </form>
  );
}