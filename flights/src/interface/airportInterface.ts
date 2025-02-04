

export interface Airport {
    entityId: string;
    skyId: string;
    presentation: {
        suggestionTitle: string;
        subtitle: string;
    };
    navigation: {
        relevantHotelParams: {
            localizedName: string;  //city/ state name
        };
    };

}

