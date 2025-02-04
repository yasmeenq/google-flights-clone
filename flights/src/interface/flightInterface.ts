


interface Carrier {
    name: string;
    logoUrl: string;
}

interface Leg {
    departure: string;
    origin: {
        name: string;
        displayCode: string;
    };
    destination: {
        name: string;
        displayCode: string;
    };
    arrival: string;
    durationInMinutes: number;
    stopCount: number;
    carriers: {
        marketing: Carrier[];
    };
}

interface Price{
    formatted: string;
}

export interface Flight {
    id: string; 
    price: Price;
    legs: Leg[];
}
