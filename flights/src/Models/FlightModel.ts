
export interface FlightData {
    itineraries: Itinerary[];
  }
  
  export interface Itinerary {
    id: string;
    price: Price;
    legs: Leg[];
  }
  
  export interface Price {
    raw: number;
  }
  
  export interface Leg {
    id: string;
    origin: Airport;
    destination: Airport;
    durationInMinutes: number;
    stopCount: number;
    departure: string;
    arrival: string;
  }
  
  export interface Airport {
    name: string;
    city: string;
    country: string;
    id: string;
  }