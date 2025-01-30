


export class FlightModel {  
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

    constructor(
        skyId: string,
        entityId: string,
        title: string,
        suggestionTitle: string,
        subtitle: string,
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
        }
    ) {
        this.skyId = skyId;
        this.entityId = entityId;
        this.presentation = { title, suggestionTitle, subtitle };
        this.navigation = navigation;
    }
}