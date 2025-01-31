

export class AirportModel {
    status: boolean = false;
    timestamp: number = 0;
    skyId: string = '';
    entityId: string = '';
    presentation: {
        title: string;
        suggestionTitle: string;
        subtitle: string;
    } = {
        title: '',
        suggestionTitle: '',
        subtitle: '',
    };
    navigation?: {
        entityId: string;
        entityType: string;
        localizedName: string;
        relevantFlightParams?: {
            skyId: string;
            entityId: string;
            flightPlaceType: string;
            localizedName: string;
        };
        relevantHotelParams?: {
            entityId: string;
            entityType: string;
            localizedName: string;
        };
    };

    constructor(data?: Partial<AirportModel>) {
        if (data) {
            Object.assign(this, data);
            // Handle nested objects properly
            this.presentation = data.presentation ? { 
                ...this.presentation, 
                ...data.presentation 
            } : this.presentation;
            
            if (data.navigation) {
                this.navigation = { 
                    ...(this.navigation || {}), 
                    ...data.navigation 
                };
            }
        }
    }
}