


export interface FlightApiResponse {
    data: Array<{
        originSkyId: string;
        destinationSkyId: string;
        originEntityId: string;
        destinationEntityId: string;
        date: Date;
    }>;
}