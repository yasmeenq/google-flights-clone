

export interface FlightData {
  itineraries: Itinerary[];
}

export interface Itinerary {
  id: string;  //"13554-2502101535--32480-0-12712-2502101900|12712-2502201900--32480-0-13554-2502210650
  price: Price;
  legs: Legs[];
}

export interface Price {
  raw: number;
}

export interface Legs {
    entityId: string;

    origin: Airport;
    destination: Airport;

    durationInMinutes: number;
    stopCount: number;
    
    departure: string;
    arrival: string;
}

export interface Airport{
    entityId: string;  //"95565058"
    id: string;  //"JFK"
    name: string;  //"New York John F. Kennedy"
    city: string;  //"New York"
    country: string;  //"United States"
}


