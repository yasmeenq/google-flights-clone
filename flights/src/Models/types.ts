

export interface Airport {
    skyId: string;
    entityId: string;
    presentation: {
      title: string;
      subtitle: string;
      suggestionTitle: string;
    };
    navigation: {
      entityType: string;
      localizedName: string;
      relevantFlightParams: {
        flightPlaceType: string;
      };
    };
  }
  
  export interface Flight {
    id: string;
    price: {
      amount: number;
      currency: string;
    };
    legs: Array<{
      duration: string;
      departure: string;
      arrival: string;
      segments: Array<{
        airline: {
          name: string;
          logoUrl: string;
        };
      }>;
    }>;
  }
  
  export interface SearchParams {
    origin: Airport | null;
    destination: Airport | null;
    date: Date;
    returnDate?: Date;
    adults: number;
  }