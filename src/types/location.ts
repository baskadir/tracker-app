export interface ILocation {
    timestamp: number;
    coords: {
        latitude: number;
        longitude: number;
        altitude: number;
        accuracy: number;
        heading: number;
        speed: number;
    }
}