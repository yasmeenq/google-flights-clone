

export class AirportModel {
  status: boolean;
  timestamp: number;
  data: {
    current: {
      skyId: string;
      entityId: string;
      presentation: {
        title: string;
        suggestionTitle: string;
        subtitle: string;
      };
      navigation: {
        entityId: string;
        entityType: string;
        localizedName: string;
        relevantFlightParams: {
          skyId: string;
          entityId: string;
          flightPlaceType: string;
          localizedName: string;
        };
        relevantHotelParams: {
          entityId: string;
          entityType: string;
          localizedName: string;
        };
      };
    };
    nearby: any[]; 
    recent: any[];  
  };

  constructor(
    status: boolean,
    timestamp: number,
    data: {
      current: {
        skyId: string;
        entityId: string;
        presentation: {
          title: string;
          suggestionTitle: string;
          subtitle: string;
        };
        navigation: {
          entityId: string;
          entityType: string;
          localizedName: string;
          relevantFlightParams: {
            skyId: string;
            entityId: string;
            flightPlaceType: string;
            localizedName: string;
          };
          relevantHotelParams: {
            entityId: string;
            entityType: string;
            localizedName: string;
          };
        };
      };
      nearby: any[];
      recent: any[];
    }
  ) {
    this.status = status;
    this.timestamp = timestamp;
    this.data = data;
  }
}

